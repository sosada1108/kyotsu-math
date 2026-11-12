// 数学ⅡBC 第5問相当「統計的な推測」 オリジナル類題 5題（各16点）
// 正規分布表は問題文中に必要な値だけを示す。
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-tokei-01',
  field: '2BC-tokei',
  points: 16,
  title: '確率変数の期待値・分散と変換',
  body: String.raw`
<p>赤球 3 個と白球 2 個が入った袋から，同時に 2 個の球を取り出す。取り出した赤球の個数を $X$ とする。</p>
<p><span class="q">(1)</span>　$X$ の期待値は $E(X)=\dfrac{\bx{ア}}{\bx{イ}}$，分散は $V(X)=\dfrac{\bx{ウ}}{\bx{エオ}}$ である。</p>
<p><span class="q">(2)</span>　$Y=5X+2$ とする。$E(Y)=\bx{カ}$，$V(Y)=\bx{キ}$ であり，$Y$ の標準偏差は $\bx{ク}$ である。</p>
<p><span class="q">(3)</span>　球を取り出してはもとに戻す試行を独立に 100 回繰り返し，各回に取り出した赤球の個数の合計を $W$ とする。$E(W)=\bx{ケコサ}$ であり，$W$ の標準偏差は $\bx{シ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア/イ', v: '6/5', pts: 3 },
    { q: '(1)', k: 'ウ/エオ', v: '9/25', pts: 3 },
    { q: '(2)', k: 'カ', v: '8', pts: 2 },
    { q: '(2)', k: 'キ', v: '9', pts: 2 },
    { q: '(2)', k: 'ク', v: '3', pts: 2 },
    { q: '(3)', k: 'ケコサ', v: '120', pts: 2 },
    { q: '(3)', k: 'シ', v: '6', pts: 2 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>取り出し方は $ {}_5\mathrm{C}_2=10$ 通り。$P(X=0)=\frac{1}{10}$，$P(X=1)=\frac{3\cdot2}{10}=\frac{6}{10}$，$P(X=2)=\frac{3}{10}$。</p>
<p>$E(X)=0\cdot\frac1{10}+1\cdot\frac6{10}+2\cdot\frac3{10}=\frac{12}{10}=\frac65$。</p>
<p>$E(X^2)=\frac6{10}+4\cdot\frac3{10}=\frac{18}{10}=\frac95$，$V(X)=\frac95-\left(\frac65\right)^2=\frac{45-36}{25}=\frac{9}{25}$。</p>
<h3>(2)</h3>
<p>$E(aX+b)=aE(X)+b$，$V(aX+b)=a^2V(X)$。$E(Y)=5\cdot\frac65+2=8$，$V(Y)=25\cdot\frac9{25}=9$，標準偏差 $\sqrt9=3$。</p>
<h3>(3)</h3>
<p>各回の赤球の個数 $X_1,\ldots,X_{100}$ は独立で $X$ と同じ分布。$E(W)=100\cdot\frac65=120$。独立なので分散も足せて $V(W)=100\cdot\frac{9}{25}=36$，標準偏差 6。</p>
<div class="point">期待値はいつでも足せる。分散が足せるのは独立なときだけ。</div>
`,
},

{
  id: '2BC-tokei-02',
  field: '2BC-tokei',
  points: 16,
  title: '二項分布の正規分布による近似',
  body: String.raw`
<p>1 個のさいころを 720 回投げ，1 の目が出る回数を $X$ とする。</p>
<p>必要ならば，標準正規分布に従う確率変数 $Z$ について次の値を用いてよい。</p>
<p>$$P(0\leqq Z\leqq1.00)=0.3413,\quad P(0\leqq Z\leqq1.50)=0.4332,\quad P(0\leqq Z\leqq2.00)=0.4772$$</p>
<p><span class="q">(1)</span>　$X$ の平均は $\bx{アイウ}$，分散は $\bx{エオカ}$，標準偏差は $\bx{キク}$ である。</p>
<p><span class="q">(2)</span>　720 は十分大きいので，$X$ は近似的に正規分布に従うとみなす。このとき</p>
<p>$P(X\geqq140)$ の近似値は $\bx{ケ}.\bx{コサシス}$，$P(110\leqq X\leqq130)$ の近似値は $\bx{セ}.\bx{ソタチツ}$ である。</p>
<p><span class="q">(3)</span>　$P(X\geqq k)$ の近似値が $0.0668$ となるような $k$ の値は $\bx{テトナ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイウ', v: '120', pts: 2 },
    { q: '(1)', k: 'エオカ', v: '100', pts: 2 },
    { q: '(1)', k: 'キク', v: '10', pts: 2 },
    { q: '(2)', k: 'ケ.コサシス', v: '0.0228', pts: 4 },
    { q: '(2)', k: 'セ.ソタチツ', v: '0.6826', pts: 3 },
    { q: '(3)', k: 'テトナ', v: '135', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$X$ は二項分布 $B\left(720,\ \frac16\right)$ に従う。平均 $np=120$，分散 $np(1-p)=720\cdot\frac16\cdot\frac56=100$，標準偏差 10。</p>
<h3>(2)</h3>
<p>$Z=\dfrac{X-120}{10}$ は近似的に標準正規分布に従う。</p>
<p>$P(X\geqq140)=P(Z\geqq2)=0.5-0.4772=0.0228$。</p>
<p>$P(110\leqq X\leqq130)=P(-1\leqq Z\leqq1)=2\times0.3413=0.6826$。</p>
<h3>(3)</h3>
<p>$0.0668=0.5-0.4332$ なので $P(Z\geqq1.5)=0.0668$。$\frac{k-120}{10}=1.5$ より $k=135$。</p>
<div class="point">二項分布 $B(n,p)$ は $n$ が大きいとき正規分布 $N(np,\ np(1-p))$ で近似できる。標準化 $Z=\frac{X-m}{\sigma}$ が基本。</div>
`,
},

{
  id: '2BC-tokei-03',
  field: '2BC-tokei',
  points: 16,
  title: '母平均の区間推定',
  body: String.raw`
<p>ある工場で作られる製品の重さ（g）の母標準偏差は 20 であることが分かっている。製品を無作為に 400 個抽出して重さを測ったところ，標本平均は 60.0 であった。</p>
<p>必要ならば，標準正規分布に従う確率変数 $Z$ について $P(|Z|\leqq1.96)=0.95$，$P(|Z|\leqq2.58)=0.99$ を用いてよい。</p>
<p><span class="q">(1)</span>　標本平均の標準偏差は $\bx{ア}$ である。</p>
<p><span class="q">(2)</span>　母平均 $m$ に対する信頼度 95％ の信頼区間は $\bx{イウ}.\bx{エオ}\leqq m\leqq\bx{カキ}.\bx{クケ}$ である。</p>
<p><span class="q">(3)</span>　信頼度 95％ の信頼区間の幅を (2) の半分にするには，標本の大きさを $\bx{コサシス}$ にすればよい。</p>
<p><span class="q">(4)</span>　標本の大きさが 400 のとき，信頼度 99％ の信頼区間の幅は $\bx{セ}.\bx{ソタ}$ である。</p>
<p><span class="q">(5)</span>　信頼度 95％ の信頼区間の意味として正しいものは $\bx{チ}$ である。</p>
<p>$\bx{チ}$ の解答群</p>
<div class="choices" style="display:block">
⓪ 母平均 $m$ が，(2) で求めた区間に含まれる確率は 95％ である。<br>
① 同じ方法で標本をとって信頼区間を何度も作ると，そのうち約 95％ の区間が母平均 $m$ を含む。<br>
② 抽出した 400 個の製品のうち，約 95％ の重さが (2) の区間に含まれる。<br>
③ 工場で作られる製品全体のうち，約 95％ の重さが (2) の区間に含まれる。
</div>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '1', pts: 2 },
    { q: '(2)', k: 'イウ.エオ,カキ.クケ', v: '58.04,61.96', tex: String.raw`58.04\leqq m\leqq61.96`, pts: 4 },
    { q: '(3)', k: 'コサシス', v: '1600', pts: 3 },
    { q: '(4)', k: 'セ.ソタ', v: '5.16', pts: 3 },
    { q: '(5)', k: 'チ', v: '①', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>標本平均の標準偏差は $\dfrac{\sigma}{\sqrt n}=\dfrac{20}{\sqrt{400}}=1$。</p>
<h3>(2)</h3>
<p>$60.0\pm1.96\times1$ より $58.04\leqq m\leqq61.96$。</p>
<h3>(3)</h3>
<p>区間の幅は $2\times1.96\times\dfrac{\sigma}{\sqrt n}$ で，$\sqrt n$ に反比例する。幅を半分にするには $\sqrt n$ を2倍，つまり $n$ を4倍の 1600 にする。</p>
<h3>(4)</h3>
<p>$2\times2.58\times1=5.16$。</p>
<h3>(5)</h3>
<p>母平均 $m$ は定数で，区間の方が標本によって変わる。「この方法で作った区間の約95％が $m$ を含む」が正しい（①）。⓪ は「1つの決まった区間に定数 $m$ が入る確率」となり不適切。②③ は個々の製品の重さのばらつきの話で，信頼区間とは別のもの。</p>
<div class="point">信頼度95％の信頼区間：$\bar X-1.96\dfrac{\sigma}{\sqrt n}\leqq m\leqq\bar X+1.96\dfrac{\sigma}{\sqrt n}$。</div>
`,
},

{
  id: '2BC-tokei-04',
  field: '2BC-tokei',
  points: 16,
  title: '母比率の推定と仮説検定',
  body: String.raw`
<p>必要ならば，標準正規分布に従う確率変数 $Z$ について $P(|Z|\leqq1.96)=0.95$ を用いてよい。</p>
<p><span class="q">(1)</span>　ある市で無作為に選んだ 600 人に，ある政策への賛否をたずねたところ，360 人が賛成であった。標本比率は $\bx{ア}.\bx{イ}$ であり，母比率 $p$ に対する信頼度 95％ の信頼区間は</p>
<p>$$\bx{ウ}.\bx{エオカキ}\leqq p\leqq\bx{ク}.\bx{ケコサシ}$$</p>
<p>である。ただし，$\sqrt{\dfrac{0.6\times0.4}{600}}=0.02$ である。</p>
<p><span class="q">(2)</span>　別の市で無作為に選んだ 400 人のうち 220 人が賛成であった。「賛成の母比率は 0.5 である」という仮説を，有意水準 5％ で両側検定する。</p>
<p>仮説が正しいとき，400 人中の賛成者数 $X$ は近似的に平均 200，標準偏差 10 の正規分布に従う。$X=220$ を標準化した値は $\bx{ス}.\bx{セ}$ であり，仮説は $\bx{ソ}$。</p>
<p>$\bx{ソ}$ の解答群</p>
<div class="choices" style="display:block">⓪ 棄却され，賛成の母比率は 0.5 ではないと判断できる<br>① 棄却されず，賛成の母比率は 0.5 ではないとは判断できない</div>
<p><span class="q">(3)</span>　(2) と同じ 400 人の調査で，賛成者数が $\bx{タチツ}$ 人以上であれば，仮説は棄却される（賛成が多い側で考える）。$\bx{タチツ}$ に当てはまる最小の整数を答えよ。</p>
`,
  answers: [
    { q: '(1)', k: 'ア.イ', v: '0.6', pts: 2 },
    { q: '(1)', k: 'ウ.エオカキ,ク.ケコサシ', v: '0.5608,0.6392', tex: String.raw`0.5608\leqq p\leqq0.6392`, pts: 4 },
    { q: '(2)', k: 'ス.セ', v: '2.0', pts: 3 },
    { q: '(2)', k: 'ソ', v: '⓪', pts: 3 },
    { q: '(3)', k: 'タチツ', v: '220', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>標本比率 $R=\frac{360}{600}=0.6$。信頼区間は $R\pm1.96\sqrt{\dfrac{R(1-R)}{n}}=0.6\pm1.96\times0.02=0.6\pm0.0392$。</p>
<p>よって $0.5608\leqq p\leqq0.6392$。</p>
<h3>(2)</h3>
<p>仮説のもとで $X\sim B(400,\ 0.5)$，平均 $200$，標準偏差 $\sqrt{400\cdot0.5\cdot0.5}=10$。</p>
<p>$Z=\dfrac{220-200}{10}=2.0$。$|Z|>1.96$ なので棄却域に入り，仮説は棄却される（⓪）。</p>
<h3>(3)</h3>
<p>$\dfrac{X-200}{10}>1.96$，すなわち $X>219.6$ なら棄却。最小の整数は 220。</p>
<div class="point">検定の手順：仮説を立てる → 仮説のもとでの分布を求める → 観測値を標準化 → 棄却域（$|Z|>1.96$）に入るか判定。</div>
`,
},

{
  id: '2BC-tokei-05',
  field: '2BC-tokei',
  points: 16,
  title: '確率密度関数と連続型確率変数',
  body: String.raw`
<p>確率変数 $X$ のとる値の範囲は $0\leqq X\leqq2$ で，その確率密度関数は $f(x)=ax$（$a$ は正の定数）である。</p>
<p><span class="q">(1)</span>　$a=\dfrac{\bx{ア}}{\bx{イ}}$ である。</p>
<p><span class="q">(2)</span>　$P(0\leqq X\leqq1)=\dfrac{\bx{ウ}}{\bx{エ}}$ である。</p>
<p><span class="q">(3)</span>　$X$ の期待値は $E(X)=\dfrac{\bx{オ}}{\bx{カ}}$，分散は $V(X)=\dfrac{\bx{キ}}{\bx{ク}}$ である。</p>
<p><span class="q">(4)</span>　$P(0\leqq X\leqq t)=\dfrac12$ となる $t$ の値は $t=\sqrt{\bx{ケ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア/イ', v: '1/2', pts: 3 },
    { q: '(2)', k: 'ウ/エ', v: '1/4', pts: 3 },
    { q: '(3)', k: 'オ/カ', v: '4/3', pts: 3 },
    { q: '(3)', k: 'キ/ク', v: '2/9', pts: 3 },
    { q: '(4)', k: 'ケ', v: '2', tex: String.raw`\sqrt{2}`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>全確率は1なので $\displaystyle\int_0^2ax\,dx=2a=1$，$a=\frac12$。</p>
<h3>(2)</h3>
<p>$\displaystyle\int_0^1\frac x2\,dx=\frac14$。</p>
<h3>(3)</h3>
<p>$E(X)=\displaystyle\int_0^2x\cdot\frac x2\,dx=\left[\frac{x^3}{6}\right]_0^2=\frac43$。</p>
<p>$E(X^2)=\displaystyle\int_0^2x^2\cdot\frac x2\,dx=\left[\frac{x^4}{8}\right]_0^2=2$，$V(X)=2-\frac{16}{9}=\frac29$。</p>
<h3>(4)</h3>
<p>$\displaystyle\int_0^t\frac x2\,dx=\frac{t^2}{4}=\frac12$ より $t^2=2$，$t=\sqrt2$。</p>
<div class="point">連続型確率変数：確率 ＝ 確率密度関数のグラフの下の面積。$E(X)=\int xf(x)\,dx$，$V(X)=E(X^2)-\{E(X)\}^2$。</div>
`,
}

);
