// 科目と分野の定義
// bonus: true の分野は、時間評価の基準に 3 分を加える（配点の多い大問）。
window.SUBJECTS = [
  {
    id: '1A',
    name: '数学ⅠA',
    fields: [
      { id: '1A-sushiki',    name: '数と式',         part: '第1問〔1〕', bonus: true },
      { id: '1A-keiryo',     name: '図形と計量',     part: '第1問〔2〕', bonus: true },
      { id: '1A-nijikansu',  name: '2次関数',        part: '第2問〔1〕', bonus: true },
      { id: '1A-data',       name: 'データの分析',   part: '第2問〔2〕', bonus: true },
      { id: '1A-zukei',      name: '図形の性質',     part: '第3問',      bonus: false },
      { id: '1A-kakuritsu',  name: '場合の数と確率', part: '第4問',      bonus: false },
    ],
  },
  {
    id: '2BC',
    name: '数学ⅡBC',
    fields: [
      { id: '2BC-sankaku',   name: '三角関数',                   part: '第1・2問', bonus: false },
      { id: '2BC-shisu',     name: '指数・対数',                 part: '第1・2問', bonus: false },
      { id: '2BC-hoteishiki',name: '図形と方程式',               part: '第1・2問', bonus: false },
      { id: '2BC-bisekibun', name: '微分・積分',                 part: '第3問',    bonus: true },
      { id: '2BC-suretsu',   name: '数列',                       part: '第4問',    bonus: false },
      { id: '2BC-tokei',     name: '統計的な推測',               part: '第5問',    bonus: false },
      { id: '2BC-vector',    name: 'ベクトル',                   part: '第6問',    bonus: false },
      { id: '2BC-fukuso',    name: '平面上の曲線・複素数平面',   part: '第7問',    bonus: false },
    ],
  },
];

// 問題は js/problems/*.js から window.PROBLEMS に追加される。
window.PROBLEMS = window.PROBLEMS || [];
