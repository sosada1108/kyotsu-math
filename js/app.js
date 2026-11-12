(function () {
  'use strict';

  var STORAGE_KEY = 'kyotsuMath.history.v1';
  var app = document.getElementById('app');

  // 時間評価の基準（分）。bonus の分野は各基準に +3 分。
  var TIME_RULES = [
    { under: 5,  grade: 'SS' },
    { under: 10, grade: 'S' },
    { under: 12, grade: 'A' },
    { under: 15, grade: 'B' },
  ];
  var TIME_OVER = 'C';
  // 点数評価の基準（得点率 %）。満点は SS。
  var SCORE_RULES = [
    { atLeast: 90, grade: 'S' },
    { atLeast: 80, grade: 'A' },
    { atLeast: 65, grade: 'B' },
    { atLeast: 40, grade: 'C' },
  ];
  var SCORE_UNDER = 'D';
  // 総合評価の段階（下から）
  var LADDER = ['D', 'C', 'B', 'A', 'S', 'SS', 'SSS'];

  var KATEX_MACROS = { '\\bx': '\\boxed{\\text{#1}}' };

  var state = {
    mode: 'random',       // 'random'（ランダム出題） | 'pick'（問題を指定）
    subjectId: null,
    pickFieldId: null,
    rangeLabel: '',
    problem: null,
    field: null,
    startedAt: 0,
    elapsedSec: 0,
    timerId: null,
    solving: false,       // 解答入力中か
    inputs: {},           // 欄（カナ1文字）→ 入力した1文字
    order: [],            // 欄の順番（五十音順）
    cur: null,            // 選択中の欄
    blankEls: {},         // 欄 → 画面上の要素（同じ欄が複数回出ることがある）
  };

  // ---------- 解答入力・自動採点 ----------
  var CIRCLED = '⓪①②③④⑤⑥⑦⑧⑨';
  var KEYS = ['-', '+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // 'アイ/ウ' → ['ア','イ','ウ']
  function blankChars(k) { return k.replace(/[,\/.]/g, '').split(''); }

  // 正解を欄ごとの1文字に分ける。'アイ/ウ' と '-3/4' → {ア:'-', イ:'3', ウ:'4'}、解答群 '②' → '2'
  function expectedChars(a) {
    var ks = a.k.split(',');
    var vs = String(a.v).split(',');
    var out = {};
    ks.forEach(function (k, i) {
      var v = vs[i];
      var ci = CIRCLED.indexOf(v);
      var chars = ci >= 0 ? [String(ci)] : v.replace(/[\/.]/g, '').split('');
      var kk = blankChars(k);
      if (chars.length !== kk.length) throw new Error('欄の数と正解の文字数が合わない: ' + a.k + ' / ' + a.v);
      kk.forEach(function (c, j) { out[c] = chars[j]; });
    });
    return out;
  }

  // 1つの配点単位が正解か。note が「順不同」なら「,」区切りのグループの並びを問わない。
  function isCorrect(a, inputs) {
    var exp = expectedChars(a);
    var ks = a.k.split(',');
    function group(k, src) { return blankChars(k).map(function (c) { return src[c] || ''; }).join(''); }
    if (a.note === '順不同') {
      var got = ks.map(function (k) { return group(k, inputs); }).sort().join('|');
      var want = ks.map(function (k) { return group(k, exp); }).sort().join('|');
      return got === want;
    }
    return blankChars(a.k).every(function (c) { return inputs[c] === exp[c]; });
  }

  function dispChar(ch) { return ch === '-' ? '−' : ch === '+' ? '＋' : ch; }

  // 入力した答えの表示。解答群の欄は ② のように丸数字で。
  function inputValueHtml(a, inputs) {
    var vs = String(a.v).split(',');
    var any = blankChars(a.k).some(function (c) { return inputs[c]; });
    if (!any) return '<span class="muted">未入力</span>';
    return a.k.split(',').map(function (k, i) {
      if (CIRCLED.indexOf(vs[i]) >= 0 && /^\d$/.test(inputs[k] || '')) return CIRCLED.charAt(Number(inputs[k]));
      return escapeHtml(k.split('').map(function (c) {
        if (c === '/') return '／';
        if (c === '.') return '.';
        return inputs[c] ? dispChar(inputs[c]) : '□';
      }).join(''));
    }).join('，');
  }

  // 本文の解答欄 \bx{アイ} を、カナ1文字ずつクリックできる形に置き換える
  function interactiveBody(body) {
    return body.replace(/\\bx\{([^}]+)\}/g, function (_, ks) {
      return '\\boxed{' + ks.split('').map(function (c) {
        return '\\htmlData{blank=' + c + '}{\\text{' + c + '}}';
      }).join('') + '}';
    });
  }

  // ---------- データ取得 ----------
  function getSubject(id) {
    return window.SUBJECTS.filter(function (s) { return s.id === id; })[0];
  }
  function findField(fieldId) {
    for (var i = 0; i < window.SUBJECTS.length; i++) {
      var s = window.SUBJECTS[i];
      for (var j = 0; j < s.fields.length; j++) {
        if (s.fields[j].id === fieldId) return { subject: s, field: s.fields[j] };
      }
    }
    return null;
  }
  function problemsOf(fieldId) {
    return window.PROBLEMS.filter(function (p) { return p.field === fieldId; });
  }
  function problemsOfSubject(subjectId) {
    var ids = getSubject(subjectId).fields.map(function (f) { return f.id; });
    return window.PROBLEMS.filter(function (p) { return ids.indexOf(p.field) >= 0; });
  }

  // ---------- 記録（localStorage） ----------
  function loadHistory() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }
  function saveHistory(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  }

  // ---------- 共通処理 ----------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + '分' + (s < 10 ? '0' : '') + s + '秒';
  }
  function fmtClock(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function fmtDate(iso) {
    var d = new Date(iso);
    function p(n) { return (n < 10 ? '0' : '') + n; }
    return d.getFullYear() + '/' + p(d.getMonth() + 1) + '/' + p(d.getDate()) +
      ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }
  // 時間評価：SS / S / A / B / C
  function timeGrade(sec, bonus) {
    var add = bonus ? 3 : 0;
    var min = sec / 60;
    for (var i = 0; i < TIME_RULES.length; i++) {
      if (min < TIME_RULES[i].under + add) return TIME_RULES[i].grade;
    }
    return TIME_OVER;
  }
  // 点数評価：SS / S / A / B / C / D（小数の誤差を避けるため整数で比べる）
  function scoreGrade(score, max) {
    if (max > 0 && score >= max) return 'SS';
    for (var i = 0; i < SCORE_RULES.length; i++) {
      if (score * 100 >= max * SCORE_RULES[i].atLeast) return SCORE_RULES[i].grade;
    }
    return SCORE_UNDER;
  }
  // 総合評価：点数の評価を基本にし、時間がかかりすぎたら下げる。
  //   点数SS かつ 時間SS → SSS
  //   時間 SS・S・A → 点数の評価のまま
  //   時間 B → 1段階下げる ／ 時間 C → 2段階下げる（最低 D）
  function overallGrade(tg, sg) {
    if (tg === 'SS' && sg === 'SS') return 'SSS';
    var down = tg === 'B' ? 1 : tg === 'C' ? 2 : 0;
    return LADDER[Math.max(0, LADDER.indexOf(sg) - down)];
  }
  function gradeBadge(g, extra) {
    return '<span class="badge grade g-' + g + (extra ? ' ' + extra : '') + '">' + g + '</span>';
  }
  function criteriaText(bonus) {
    var a = bonus ? 3 : 0;
    return '時間の評価　SS：' + (5 + a) + '分未満 ／ S：' + (10 + a) + '分未満 ／ A：' + (12 + a) +
      '分未満 ／ B：' + (15 + a) + '分未満 ／ C：それ以上' + (bonus ? '（この分野は配点が大きいので +3分）' : '');
  }
  var SCORE_CRITERIA = '点数の評価　SS：満点 ／ S：90%以上 ／ A：80%以上 ／ B：65%以上 ／ C：40%以上 ／ D：40%未満';
  var OVERALL_CRITERIA = '総合評価　点数と時間がともにSSならSSS。それ以外は点数の評価が基本で、時間がA以内ならそのまま、Bなら1段階下げ、Cなら2段階下げ（最低D）。';
  function renderMath(el) {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      macros: Object.assign({}, KATEX_MACROS),
      strict: 'ignore',
      throwOnError: false,
      // 解答欄の目印（\htmlData）だけ許可する
      trust: function (ctx) { return ctx.command === '\\htmlData'; },
    });
  }
  // 解答の表示。a.tex があれば数式として表示。なければ v を「,」区切りで表示（分数は分数の形に）。
  function answerValueHtml(a) {
    if (a.tex) return '$' + a.tex + '$';
    return a.v.split(',').map(function (v) {
      var m = /^(-?)(\d+)\/(\d+)$/.exec(v);
      if (m) return '$' + (m[1] ? '-' : '') + '\\dfrac{' + m[2] + '}{' + m[3] + '}$';
      if (/^-?\d+(\.\d+)?$/.test(v)) return '$' + v + '$';
      return escapeHtml(v);
    }).join('，');
  }
  function blankKeyHtml(k) {
    return escapeHtml(k.replace(/\//g, '／').replace(/,/g, '，'));
  }
  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }
  function show(html, keepScroll) {
    state.solving = false;
    state.cur = null;
    document.body.classList.remove('has-keypad');
    app.innerHTML = html;
    if (!keepScroll) window.scrollTo(0, 0);
  }

  // ---------- 画面：ホーム ----------
  function segButtons(items, attr, activeId, label) {
    return '<div class="seg-group" role="group" aria-label="' + label + '">' + items.map(function (it) {
      var active = it.id === activeId;
      return '<button type="button" class="seg' + (active ? ' is-active' : '') + '" ' + attr + '="' + it.id +
        '" aria-pressed="' + active + '">' + escapeHtml(it.name) + '</button>';
    }).join('') + '</div>';
  }

  function fieldGrid(subject, attr, activeId) {
    return '<div class="field-grid">' + subject.fields.map(function (f) {
      var n = problemsOf(f.id).length;
      var disabled = n === 0;
      var active = f.id === activeId;
      return '<button type="button" class="field-card' + (active ? ' is-active' : '') + '" ' + attr + '="' + f.id + '"' +
        (disabled ? ' disabled' : '') + '>' +
        '<span class="field-part">' + escapeHtml(f.part) + '</span>' +
        '<span class="field-name">' + escapeHtml(f.name) + '</span>' +
        '<span class="field-count">' + (disabled ? '準備中' : n + '題') + '</span>' +
        '</button>';
    }).join('') + '</div>';
  }

  function problemListHtml(fieldId) {
    var history = loadHistory();
    var found = findField(fieldId);
    var items = problemsOf(fieldId).map(function (p, i) {
      var tries = history.filter(function (r) { return r.problemId === p.id; });
      var status = '未挑戦';
      if (tries.length) {
        var best = Math.max.apply(null, tries.map(function (r) { return r.score; }));
        status = tries.length + '回 ／ 最高 ' + best + '/' + p.points + '点';
      }
      return '<li><button type="button" class="problem-item" data-problem="' + p.id + '">' +
        '<span class="problem-no">' + (i + 1) + '</span>' +
        '<span class="problem-title">' + escapeHtml(p.title) + '</span>' +
        '<span class="problem-status">' + escapeHtml(status) + '</span>' +
        '</button></li>';
    }).join('');
    return '<div class="problem-list-wrap" id="problem-list">' +
      '<h3 class="h3">' + escapeHtml(found.field.name) + ' の問題</h3>' +
      '<ul class="problem-list">' + items + '</ul></div>';
  }

  function renderHome(keepScroll) {
    stopTimer();
    var modes = [{ id: 'random', name: 'ランダム出題' }, { id: 'pick', name: '問題を指定' }];
    var subjectSeg = segButtons(window.SUBJECTS, 'data-subject', state.subjectId, '科目');
    var subject = state.subjectId ? getSubject(state.subjectId) : null;
    var body = '';

    if (state.mode === 'random') {
      var total = window.PROBLEMS.length;
      body =
        '<div class="range-block">' +
          '<p class="range-label">① 全範囲から</p>' +
          '<button type="button" class="range-btn" data-random="all"' + (total ? '' : ' disabled') + '>' +
            '完全にランダム<span class="range-sub">全科目・全分野（' + total + '題）</span></button>' +
        '</div>' +
        '<div class="range-block">' +
          '<p class="range-label">② 科目・分野をしぼる</p>' +
          subjectSeg +
          (subject
            ? (function () {
                var n = problemsOfSubject(subject.id).length;
                return '<button type="button" class="range-btn" data-random="subject"' + (n ? '' : ' disabled') + '>' +
                  escapeHtml(subject.name) + ' の中からランダム<span class="range-sub">' +
                  (n ? '全分野（' + n + '題）' : '準備中') + '</span></button>' +
                  '<p class="hint">分野を選ぶと、その分野の中からランダムに出題します。</p>' +
                  fieldGrid(subject, 'data-field', null);
              })()
            : '<p class="hint">科目を選んでください。</p>') +
        '</div>';
    } else {
      body =
        subjectSeg +
        (subject
          ? '<p class="hint">分野を選ぶと、その分野の問題一覧が表示されます。</p>' +
            fieldGrid(subject, 'data-pick-field', state.pickFieldId) +
            (state.pickFieldId && findField(state.pickFieldId).subject.id === subject.id
              ? problemListHtml(state.pickFieldId) : '')
          : '<p class="hint">科目を選んでください。</p>');
    }

    show(
      '<section class="card">' +
        '<h1 class="h1">問題を選ぶ</h1>' +
        segButtons(modes, 'data-mode', state.mode, '出題方法') +
        body +
      '</section>' +
      '<section class="card" id="history">' +
        '<div class="row-between"><h2 class="h2">これまでの記録</h2>' +
        '<button type="button" class="btn-text" id="clear-history">記録を全部消す</button></div>' +
        historyHtml() +
      '</section>',
      keepScroll
    );

    app.querySelectorAll('[data-mode]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.mode = b.getAttribute('data-mode');
        state.pickFieldId = null;
        renderHome(true);
      });
    });
    app.querySelectorAll('[data-subject]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.subjectId = b.getAttribute('data-subject');
        state.pickFieldId = null;
        renderHome(true);
      });
    });
    app.querySelectorAll('[data-random]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('data-random') === 'all') {
          startRandom(window.PROBLEMS, '完全にランダム');
        } else {
          startRandom(problemsOfSubject(state.subjectId), getSubject(state.subjectId).name + ' の中からランダム');
        }
      });
    });
    app.querySelectorAll('[data-field]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-field');
        startRandom(problemsOf(id), findField(id).field.name + ' の中からランダム');
      });
    });
    app.querySelectorAll('[data-pick-field]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.pickFieldId = b.getAttribute('data-pick-field');
        renderHome(true);
        var list = document.getElementById('problem-list');
        if (list && list.scrollIntoView) list.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
    app.querySelectorAll('[data-problem]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-problem');
        var p = window.PROBLEMS.filter(function (x) { return x.id === id; })[0];
        if (p) startProblem(p, '問題を指定');
      });
    });
    app.querySelectorAll('[data-review]').forEach(function (b) {
      b.addEventListener('click', function () {
        var r = loadHistory()[Number(b.getAttribute('data-review'))];
        if (r) renderReview(r);
      });
    });
    document.getElementById('clear-history').addEventListener('click', function () {
      if (loadHistory().length === 0) return;
      if (window.confirm('この端末に保存された記録をすべて消します。元に戻せません。よろしいですか？')) {
        saveHistory([]);
        renderHome();
      }
    });
  }

  function findProblem(id) {
    return window.PROBLEMS.filter(function (x) { return x.id === id; })[0];
  }

  function historyHtml() {
    var all = loadHistory();
    if (all.length === 0) return '<p class="hint">まだ記録がありません。</p>';
    var rows = all.slice().reverse().map(function (r, i) {
      var idx = all.length - 1 - i;
      // 評価は保存済みの得点・時間から毎回計算する（基準を変えても過去の記録に反映される）
      var found = findField(r.fieldId);
      var tg = timeGrade(r.timeSec, found ? found.field.bonus : false);
      var sg = scoreGrade(r.score, r.maxScore);
      // 問題名を押すと問題と解説を見られる（問題が見つからない古い記録は文字だけ）
      var title = findProblem(r.problemId)
        ? '<button type="button" class="link-btn" data-review="' + idx + '">' + escapeHtml(r.title) + '</button>'
        : escapeHtml(r.title);
      return '<tr>' +
        '<td data-label="日時">' + escapeHtml(fmtDate(r.date)) + '</td>' +
        '<td data-label="分野">' + escapeHtml(r.subjectName + '・' + r.fieldName) + '</td>' +
        '<td data-label="問題">' + title + '</td>' +
        '<td data-label="得点" class="num">' + r.score + ' / ' + r.maxScore + ' ' + gradeBadge(sg, 'sm') + '</td>' +
        '<td data-label="時間" class="num">' + escapeHtml(fmtTime(r.timeSec)) + ' ' + gradeBadge(tg, 'sm') + '</td>' +
        '<td data-label="総合評価">' + gradeBadge(overallGrade(tg, sg)) + '</td>' +
        '</tr>';
    }).join('');
    return '<p class="hint">問題名を押すと、その問題と正解・解説を見られます。</p>' +
      '<div class="table-wrap"><table class="history">' +
      '<thead><tr><th>日時</th><th>分野</th><th>問題</th><th>得点（評価）</th><th>時間（評価）</th><th>総合評価</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>';
  }

  // ---------- 画面：記録から問題を見直す ----------
  function renderReview(r) {
    var p = findProblem(r.problemId);
    if (!p) return;
    var found = findField(p.field);
    var tg = timeGrade(r.timeSec, found.field.bonus);
    var sg = scoreGrade(r.score, r.maxScore);
    var rows = p.answers.map(function (a) {
      return '<tr>' +
        '<td>' + escapeHtml(a.q) + '</td>' +
        '<td class="blank-key" data-label="解答欄">' + blankKeyHtml(a.k) + '</td>' +
        '<td class="ans" data-label="正解">' + answerValueHtml(a) + (a.note ? '<span class="ans-note">' + escapeHtml(a.note) + '</span>' : '') + '</td>' +
        '<td class="num" data-label="配点">' + a.pts + '点</td>' +
        '</tr>';
    }).join('');
    show(
      '<section class="card">' +
        '<p class="eyebrow">' + escapeHtml(found.subject.name + '　' + found.field.part + '　' + found.field.name) + '（配点 ' + p.points + '）</p>' +
        '<h1 class="h1">' + escapeHtml(p.title) + '</h1>' +
        '<p class="review-record">' + escapeHtml(fmtDate(r.date)) + ' の記録：' +
          '得点 ' + r.score + ' / ' + r.maxScore + ' ' + gradeBadge(sg, 'sm') + '　' +
          '時間 ' + escapeHtml(fmtTime(r.timeSec)) + ' ' + gradeBadge(tg, 'sm') + '　' +
          '総合 ' + gradeBadge(overallGrade(tg, sg), 'sm') + '</p>' +
        '<div class="actions">' +
          '<button type="button" class="btn-primary" id="retry">この問題をもう一度解く</button>' +
          '<button type="button" class="btn-ghost" id="back-history">記録に戻る</button>' +
        '</div>' +
      '</section>' +
      '<section class="card problem">' +
        '<h2 class="h2">問題</h2>' +
        '<div class="problem-body">' + p.body + '</div>' +
      '</section>' +
      '<section class="card">' +
        '<h2 class="h2">正解</h2>' +
        '<div class="table-wrap"><table class="answers"><thead><tr><th>設問</th><th>解答欄</th><th>正解</th><th>配点</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>' +
      '</section>' +
      '<section class="card">' +
        '<h2 class="h2">解説</h2>' +
        '<div class="explanation">' + p.explanation + '</div>' +
      '</section>' +
      '<div class="actions">' +
        '<button type="button" class="btn-primary" id="retry2">この問題をもう一度解く</button>' +
        '<button type="button" class="btn-ghost" id="back-history2">記録に戻る</button>' +
      '</div>'
    );
    renderMath(app);
    function retry() { state.mode = 'pick'; startProblem(p, '記録から'); }
    function back() {
      renderHome();
      var h = document.getElementById('history');
      if (h && h.scrollIntoView) h.scrollIntoView({ block: 'start' });
    }
    document.getElementById('retry').addEventListener('click', retry);
    document.getElementById('retry2').addEventListener('click', retry);
    document.getElementById('back-history').addEventListener('click', back);
    document.getElementById('back-history2').addEventListener('click', back);
  }

  // ---------- 画面：出題（スタート前） ----------
  function startRandom(list, rangeLabel) {
    if (!list || list.length === 0) return;
    startProblem(list[Math.floor(Math.random() * list.length)], rangeLabel);
  }

  function startProblem(problem, rangeLabel) {
    var found = findField(problem.field);
    state.field = found.field;
    state.subjectId = found.subject.id;
    state.problem = problem;
    state.rangeLabel = rangeLabel;
    renderReady();
  }

  function renderReady() {
    var p = state.problem;
    var f = state.field;
    var picked = state.mode === 'pick';
    show(
      '<section class="card center">' +
        '<p class="eyebrow">出題方法：' + escapeHtml(state.rangeLabel) + '</p>' +
        '<h1 class="h1">' + escapeHtml(getSubject(state.subjectId).name + '　' + f.part + '　' + f.name) + '</h1>' +
        (picked ? '<p class="ready-title">' + escapeHtml(p.title) + '</p>' : '<p>問題が選ばれました。</p>') +
        '<p>配点 ' + p.points + '点。スタートを押すと問題が表示され、時間の計測が始まります。</p>' +
        '<p class="criteria">' + escapeHtml(criteriaText(f.bonus)) + '</p>' +
        '<div class="actions">' +
          '<button type="button" class="btn-primary" id="start">スタート</button>' +
          '<button type="button" class="btn-ghost" id="back">選び直す</button>' +
        '</div>' +
      '</section>'
    );
    document.getElementById('start').addEventListener('click', renderSolve);
    document.getElementById('back').addEventListener('click', function () { renderHome(); });
  }

  // ---------- 画面：解答中 ----------
  function renderSolve() {
    var p = state.problem;
    var f = state.field;
    state.startedAt = Date.now();
    var keyBtns = KEYS.map(function (k) {
      return '<button type="button" class="kp-key" data-key="' + k + '" aria-label="' + (k === '-' ? 'マイナス' : k === '+' ? 'プラス' : k) + '">' +
        dispChar(k) + '</button>';
    }).join('') + '<button type="button" class="kp-key kp-del" data-key="del">消す</button>';
    show(
      '<div class="timer-bar" role="timer" id="timer-bar"><span class="timer-label">経過時間</span>' +
        '<span class="timer" id="timer">00:00</span>' +
        '<span class="filled-count" id="filled-count"></span>' +
        '<button type="button" class="btn-primary" id="finish">解答を提出</button></div>' +
      '<section class="card problem">' +
        '<p class="eyebrow">' + escapeHtml(getSubject(state.subjectId).name + '　' + f.part + '　' + f.name) +
          '（配点 ' + p.points + '）</p>' +
        '<h1 class="h1">' + escapeHtml(p.title) + '</h1>' +
        '<p class="hint">解答欄（ア・イ…の四角）をクリックすると、画面下に入力用のボタンが出ます。</p>' +
        '<div class="problem-body">' + interactiveBody(p.body) + '</div>' +
      '</section>' +
      '<div class="actions">' +
        '<button type="button" class="btn-primary" id="finish2">解答を提出して採点する</button>' +
        '<button type="button" class="btn-ghost" id="quit">中断してホームへ</button>' +
      '</div>' +
      '<div class="keypad" id="keypad" hidden>' +
        '<div class="keypad-inner">' +
          '<div class="keypad-head">' +
            '<span>解答欄 <b class="kp-cur" id="kp-cur"></b></span>' +
            '<button type="button" class="kp-nav" data-nav="prev" aria-label="前の欄">◀ 前</button>' +
            '<button type="button" class="kp-nav" data-nav="next" aria-label="次の欄">次 ▶</button>' +
            '<button type="button" class="kp-nav kp-close" data-nav="close">閉じる</button>' +
          '</div>' +
          '<div class="keypad-keys">' + keyBtns + '</div>' +
        '</div>' +
      '</div>'
    );
    renderMath(app);
    setupBlanks(p);
    var timerEl = document.getElementById('timer');
    state.timerId = setInterval(function () {
      timerEl.textContent = fmtClock((Date.now() - state.startedAt) / 1000);
    }, 250);
    document.getElementById('finish').addEventListener('click', finish);
    document.getElementById('finish2').addEventListener('click', finish);
    document.getElementById('quit').addEventListener('click', function () {
      if (window.confirm('中断すると、この問題は記録されません。ホームに戻りますか？')) renderHome();
    });
  }

  // 解答欄のクリック・入力の準備
  function setupBlanks(p) {
    state.solving = true;
    state.inputs = {};
    state.cur = null;
    state.blankEls = {};
    state.order = [];
    p.answers.forEach(function (a) {
      blankChars(a.k).forEach(function (c) { if (state.order.indexOf(c) < 0) state.order.push(c); });
    });
    app.querySelectorAll('[data-blank]').forEach(function (el) {
      var c = el.getAttribute('data-blank');
      (state.blankEls[c] = state.blankEls[c] || []).push(el);
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', '解答欄 ' + c);
    });
    app.querySelectorAll('[data-key]').forEach(function (b) {
      b.addEventListener('click', function () { pressKey(b.getAttribute('data-key')); });
    });
    app.querySelectorAll('[data-nav]').forEach(function (b) {
      b.addEventListener('click', function () {
        var nav = b.getAttribute('data-nav');
        if (nav === 'close') closeKeypad();
        else moveBlank(nav === 'next' ? 1 : -1);
      });
    });
    updateFilledCount();
  }

  function setBlankText(el, text) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var n = w.nextNode();
    if (n) n.nodeValue = text;
  }

  function refreshBlank(c) {
    var v = state.inputs[c];
    (state.blankEls[c] || []).forEach(function (el) {
      setBlankText(el, v ? dispChar(v) : c);
      el.classList.toggle('is-filled', !!v);
      el.setAttribute('aria-label', '解答欄 ' + c + (v ? '（入力：' + dispChar(v) + '）' : '（未入力）'));
    });
  }

  function updateFilledCount() {
    var el = document.getElementById('filled-count');
    if (!el) return;
    var n = state.order.filter(function (c) { return state.inputs[c]; }).length;
    el.textContent = '入力 ' + n + ' / ' + state.order.length;
  }

  function selectBlank(c, el) {
    if (!state.solving) return;
    if (state.cur) (state.blankEls[state.cur] || []).forEach(function (e) { e.classList.remove('is-selected'); });
    state.cur = c;
    var els = state.blankEls[c] || [];
    els.forEach(function (e) { e.classList.add('is-selected'); });
    var kp = document.getElementById('keypad');
    kp.hidden = false;
    document.body.classList.add('has-keypad');
    document.getElementById('kp-cur').textContent = c;
    scrollIntoClearView(el || els[0], kp);
  }

  // 選んだ欄が入力ボタンやタイマーに隠れないようにスクロール
  function scrollIntoClearView(el, kp) {
    if (!el) return;
    var r = el.getBoundingClientRect();
    var bar = document.getElementById('timer-bar');
    var top = (bar ? bar.getBoundingClientRect().bottom : 0) + 8;
    var bottom = window.innerHeight - kp.offsetHeight - 8;
    if (r.bottom > bottom) window.scrollBy(0, r.bottom - bottom);
    else if (r.top < top) window.scrollBy(0, r.top - top);
  }

  function moveBlank(step) {
    if (!state.cur) return;
    var i = state.order.indexOf(state.cur) + step;
    if (i >= 0 && i < state.order.length) selectBlank(state.order[i]);
  }

  function pressKey(k) {
    if (!state.solving || !state.cur) return;
    var c = state.cur;
    if (k === 'del') {
      if (state.inputs[c]) {
        delete state.inputs[c];
        refreshBlank(c);
      } else {
        moveBlank(-1);
        if (state.cur !== c) { delete state.inputs[state.cur]; refreshBlank(state.cur); }
      }
    } else {
      state.inputs[c] = k;
      refreshBlank(c);
      moveBlank(1);
    }
    updateFilledCount();
  }

  function closeKeypad() {
    if (state.cur) (state.blankEls[state.cur] || []).forEach(function (e) { e.classList.remove('is-selected'); });
    state.cur = null;
    var kp = document.getElementById('keypad');
    if (kp) kp.hidden = true;
    document.body.classList.remove('has-keypad');
  }

  // クリック位置にある解答欄を探す。KaTeX の四角の枠（.fbox）や分数の重なり（.vlist）が
  // 欄の上にかぶさっていてクリックが欄に届かないことがあるため、座標で判定する。
  function blankAtPoint(x, y) {
    var best = null;
    var bestD = Infinity;
    var pad = 6; // 枠線や余白の分だけ判定を広げる
    Object.keys(state.blankEls).forEach(function (c) {
      state.blankEls[c].forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (x < r.left - pad || x > r.right + pad || y < r.top - pad || y > r.bottom + pad) return;
        var d = Math.abs(x - (r.left + r.right) / 2) + Math.abs(y - (r.top + r.bottom) / 2);
        if (d < bestD) { bestD = d; best = { c: c, el: el }; }
      });
    });
    return best;
  }

  app.addEventListener('click', function (e) {
    if (!state.solving || !e.target.closest) return;
    if (!e.target.closest('.problem-body')) return; // 入力ボタンやタイマーのクリックは対象外
    var el = e.target.closest('[data-blank]');
    var hit = el ? { c: el.getAttribute('data-blank'), el: el } : blankAtPoint(e.clientX, e.clientY);
    if (hit) selectBlank(hit.c, hit.el);
  });

  // パソコンのキーボードでも入力できるようにする
  document.addEventListener('keydown', function (e) {
    if (!state.solving || e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target;
    if (t && t.getAttribute && t.getAttribute('data-blank') && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      selectBlank(t.getAttribute('data-blank'), t);
      return;
    }
    if (!state.cur) return;
    if (KEYS.indexOf(e.key) >= 0) pressKey(e.key);
    else if (e.key === 'Backspace' || e.key === 'Delete') pressKey('del');
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') moveBlank(1);
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') moveBlank(-1);
    else if (e.key === 'Escape') closeKeypad();
    else return;
    e.preventDefault();
  });

  function finish() {
    state.elapsedSec = Math.floor((Date.now() - state.startedAt) / 1000);
    stopTimer();
    renderResult();
  }

  // ---------- 画面：解答・解説・点数入力 ----------
  function renderResult() {
    var p = state.problem;
    var f = state.field;
    var tg = timeGrade(state.elapsedSec, f.bonus);

    var inputs = state.inputs || {};
    var autoTotal = 0;
    var answerRows = p.answers.map(function (a, i) {
      var ok = isCorrect(a, inputs);
      if (ok) autoTotal += a.pts;
      return '<tr class="' + (ok ? 'is-correct' : 'is-wrong') + '">' +
        '<td><label class="check"><input type="checkbox" data-pts="' + a.pts + '" data-idx="' + i + '"' + (ok ? ' checked' : '') + '>' +
          '<span>' + escapeHtml(a.q) + '</span></label></td>' +
        '<td class="blank-key" data-label="解答欄">' + blankKeyHtml(a.k) + '</td>' +
        '<td class="mine" data-label="あなたの答え"><span class="mark ' + (ok ? 'ok' : 'ng') + '" aria-label="' + (ok ? '正解' : '不正解') + '">' +
          (ok ? '○' : '×') + '</span>' + inputValueHtml(a, inputs) + '</td>' +
        '<td class="ans" data-label="正解">' + answerValueHtml(a) + (a.note ? '<span class="ans-note">' + escapeHtml(a.note) + '</span>' : '') + '</td>' +
        '<td class="num" data-label="配点">' + a.pts + '点</td>' +
        '</tr>';
    }).join('');

    show(
      '<section class="card grade-card">' +
        '<div class="grade-grid">' +
          '<div class="grade-item"><p class="eyebrow">時間</p>' +
            '<p class="grade-value">' + escapeHtml(fmtTime(state.elapsedSec)) + '</p>' + gradeBadge(tg) + '</div>' +
          '<div class="grade-item"><p class="eyebrow">点数</p>' +
            '<p class="grade-value"><span id="g-score"></span> / ' + p.points + '点</p><span id="g-score-badge"></span></div>' +
          '<div class="grade-item overall"><p class="eyebrow">総合評価</p><span id="g-overall"></span></div>' +
        '</div>' +
        '<p class="hint">点数は自動採点の結果です。下でチェックや得点を直すと、評価も変わります。</p>' +
        '<details class="criteria-box"><summary>評価の決め方</summary>' +
          '<p class="criteria">' + escapeHtml(criteriaText(f.bonus)) + '</p>' +
          '<p class="criteria">' + escapeHtml(SCORE_CRITERIA) + '</p>' +
          '<p class="criteria">' + escapeHtml(OVERALL_CRITERIA) + '</p>' +
        '</details>' +
      '</section>' +
      '<section class="card">' +
        '<h2 class="h2">解答と採点</h2>' +
        '<p class="auto-score">自動採点：<b>' + autoTotal + '</b> / ' + p.points + '点</p>' +
        '<p class="hint">入力した答えを自動で採点し、正解の欄にチェックを入れました。入力ミスなどで直したいときは、チェックを付け外ししてください（下の得点欄の合計が変わります）。</p>' +
        '<div class="table-wrap"><table class="answers"><thead><tr><th>設問</th><th>解答欄</th><th>あなたの答え</th><th>正解</th><th>配点</th></tr></thead>' +
        '<tbody>' + answerRows + '</tbody></table></div>' +
      '</section>' +
      '<section class="card">' +
        '<h2 class="h2">解説</h2>' +
        '<div class="explanation">' + p.explanation + '</div>' +
      '</section>' +
      '<details class="card problem-again"><summary>問題文をもう一度見る</summary>' +
        '<div class="problem-body">' + p.body + '</div></details>' +
      '<section class="card score-card">' +
        '<h2 class="h2">点数を記録する</h2>' +
        '<form id="score-form" class="score-form">' +
          '<label for="score">得点</label>' +
          '<input id="score" name="score" type="number" inputmode="numeric" min="0" max="' + p.points + '" step="1" value="' + autoTotal + '" required>' +
          '<span>/ ' + p.points + '点</span>' +
          '<button type="submit" class="btn-primary">記録してホームへ</button>' +
        '</form>' +
        '<p class="error" id="score-error" hidden></p>' +
      '</section>'
    );
    renderMath(app);

    var scoreInput = document.getElementById('score');
    // 得点が変わったら点数評価・総合評価を更新
    function updateGrades() {
      var n = Number(scoreInput.value);
      var valid = scoreInput.value.trim() !== '' && Number.isInteger(n) && n >= 0 && n <= p.points;
      document.getElementById('g-score').textContent = valid ? n : '−';
      var sg = valid ? scoreGrade(n, p.points) : null;
      document.getElementById('g-score-badge').innerHTML = sg ? gradeBadge(sg) : '';
      document.getElementById('g-overall').innerHTML = sg ? gradeBadge(overallGrade(tg, sg), 'big') : '';
    }
    app.querySelectorAll('input[data-pts]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var total = 0;
        app.querySelectorAll('input[data-pts]:checked').forEach(function (c) {
          total += Number(c.getAttribute('data-pts'));
        });
        scoreInput.value = total;
        updateGrades();
      });
    });
    scoreInput.addEventListener('input', updateGrades);
    updateGrades();

    document.getElementById('score-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('score-error');
      var v = scoreInput.value.trim();
      var n = Number(v);
      if (v === '' || !Number.isInteger(n) || n < 0 || n > p.points) {
        err.textContent = '0〜' + p.points + ' の整数を入力してください。';
        err.hidden = false;
        return;
      }
      var subject = getSubject(state.subjectId);
      var list = loadHistory();
      list.push({
        date: new Date().toISOString(),
        subjectId: subject.id,
        subjectName: subject.name,
        fieldId: f.id,
        fieldName: f.name,
        problemId: p.id,
        title: p.title,
        score: n,
        maxScore: p.points,
        timeSec: state.elapsedSec,
        // 参考として記録時の評価も残す（表示は得点・時間から毎回計算）
        timeGrade: tg,
        scoreGrade: scoreGrade(n, p.points),
        overallGrade: overallGrade(tg, scoreGrade(n, p.points)),
      });
      if (!saveHistory(list)) {
        err.textContent = 'このブラウザでは記録を保存できませんでした（プライベートモードなどでは保存できないことがあります）。';
        err.hidden = false;
        return;
      }
      renderHome();
    });
  }

  // ---------- 起動 ----------
  document.getElementById('brand').addEventListener('click', function () {
    if (state.timerId && !window.confirm('解答中です。中断してホームに戻りますか？')) return;
    renderHome();
  });
  window.addEventListener('beforeunload', function (e) {
    if (state.timerId) { e.preventDefault(); e.returnValue = ''; }
  });

  // テスト用に純粋関数を公開
  window.__kyotsuMath = { timeGrade: timeGrade, scoreGrade: scoreGrade, overallGrade: overallGrade, expectedChars: expectedChars, isCorrect: isCorrect, blankChars: blankChars };

  renderHome();
})();
