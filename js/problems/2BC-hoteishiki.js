// 数学ⅡBC 第1・2問相当「図形と方程式」 オリジナル類題 5題（各15点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-hoteishiki-01',
  field: '2BC-hoteishiki',
  points: 15,
  title: '点と直線の距離・対称点',
  body: String.raw`
<p>座標平面上に 3 点 $\mathrm{A}(1,\ 2)$，$\mathrm{B}(5,\ 4)$，$\mathrm{C}(6,\ -1)$ がある。</p>
<p><span class="q">(1)</span>　線分 AB の中点の座標は $(\bx{ア},\ \bx{イ})$ であり，線分 AB の垂直二等分線の方程式は $y=\bx{ウエ}x+\bx{オ}$ である。</p>
<p><span class="q">(2)</span>　点 C と直線 AB の距離は $\dfrac{\bx{カキ}\sqrt{\bx{ク}}}{\bx{ケ}}$ であり，$\triangle\mathrm{ABC}$ の面積は $\bx{コサ}$ である。</p>
<p><span class="q">(3)</span>　直線 $y=2x-3$ に関して点 A と対称な点の座標は $\left(\dfrac{\bx{シス}}{\bx{セ}},\ \dfrac{\bx{ソ}}{\bx{タ}}\right)$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '3,3', tex: '(3,\\ 3)', pts: 2 },
    { q: '(1)', k: 'ウエ,オ', v: '-2,9', tex: 'y=-2x+9', pts: 3 },
    { q: '(2)', k: 'カキ,ク,ケ', v: '11,5,5', tex: String.raw`\dfrac{11\sqrt{5}}{5}`, pts: 3 },
    { q: '(2)', k: 'コサ', v: '11', pts: 3 },
    { q: '(3)', k: 'シス/セ,ソ/タ', v: '17/5,4/5', tex: String.raw`\left(\dfrac{17}{5},\ \dfrac{4}{5}\right)`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>中点は $\left(\frac{1+5}{2},\ \frac{2+4}{2}\right)=(3,3)$。AB の傾きは $\frac{4-2}{5-1}=\frac12$ なので，垂直な直線の傾きは $-2$。</p>
<p>$y-3=-2(x-3)$ より $y=-2x+9$。</p>
<h3>(2)</h3>
<p>直線 AB：$y-2=\frac12(x-1)$，すなわち $x-2y+3=0$。</p>
<p>点と直線の距離の公式より $\dfrac{|6-2\cdot(-1)+3|}{\sqrt{1+4}}=\dfrac{11}{\sqrt5}=\dfrac{11\sqrt5}{5}$。</p>
<p>$\mathrm{AB}=\sqrt{16+4}=2\sqrt5$ なので面積は $\frac12\cdot2\sqrt5\cdot\frac{11}{\sqrt5}=11$。</p>
<h3>(3)</h3>
<p>対称な点を $(p,q)$ とする。</p>
<ul>
<li>AP は直線に垂直：$\dfrac{q-2}{p-1}\cdot2=-1$ より $p+2q=5$</li>
<li>AP の中点が直線上：$\dfrac{q+2}{2}=2\cdot\dfrac{p+1}{2}-3$ より $2p-q=6$</li>
</ul>
<p>連立して $p=\frac{17}{5}$，$q=\frac45$。</p>
<div class="point">対称点は「垂直」と「中点が直線上」の2条件で求める。</div>
`,
},

{
  id: '2BC-hoteishiki-02',
  field: '2BC-hoteishiki',
  points: 15,
  title: '円と直線の位置関係',
  body: String.raw`
<p>円 $C:\ x^2+y^2-4x+2y-4=0$ を考える。</p>
<p><span class="q">(1)</span>　$C$ の中心の座標は $(\bx{ア},\ \bx{イウ})$，半径は $\bx{エ}$ である。</p>
<p><span class="q">(2)</span>　直線 $y=x+k$ が $C$ と異なる 2 点で交わるような $k$ の値の範囲は</p>
<p>$$\bx{オカ}-\bx{キ}\sqrt{\bx{ク}}< k<\bx{ケコ}+\bx{サ}\sqrt{\bx{シ}}$$</p>
<p>である。また，$k=0$ のとき，直線が $C$ から切り取る線分の長さは $\bx{ス}\sqrt{\bx{セ}}$ である。</p>
<p><span class="q">(3)</span>　点 P が $C$ 上を動くとき，点 $\mathrm{A}(6,\ 2)$ と P の距離の最大値は $\bx{ソ}$，最小値は $\bx{タ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イウ,エ', v: '2,-1,3', tex: String.raw`\text{中心}\ (2,-1),\ \text{半径}\ 3`, pts: 3 },
    { q: '(2)', k: 'オカ,キ,ク,ケコ,サ,シ', v: '-3,3,2,-3,3,2', tex: String.raw`-3-3\sqrt2< k<-3+3\sqrt2`, pts: 4 },
    { q: '(2)', k: 'ス,セ', v: '3,2', tex: String.raw`3\sqrt{2}`, pts: 4 },
    { q: '(3)', k: 'ソ,タ', v: '8,2', tex: String.raw`\text{最大値}\ 8,\ \text{最小値}\ 2`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$(x-2)^2+(y+1)^2=4+1+4=9$。中心 $(2,-1)$，半径 3。</p>
<h3>(2)</h3>
<p>直線 $x-y+k=0$ と中心の距離 $d=\dfrac{|2+1+k|}{\sqrt2}=\dfrac{|k+3|}{\sqrt2}$。</p>
<p>2点で交わる $\iff d<3 \iff |k+3|<3\sqrt2 \iff -3-3\sqrt2< k<-3+3\sqrt2$。</p>
<p>$k=0$ のとき $d=\frac{3}{\sqrt2}$。弦の長さの半分は $\sqrt{9-\frac92}=\frac{3}{\sqrt2}$ なので，弦の長さは $\frac{6}{\sqrt2}=3\sqrt2$。</p>
<h3>(3)</h3>
<p>中心 $(2,-1)$ と A の距離は $\sqrt{16+9}=5$（$>3$ なので A は円の外部）。</p>
<p>直線 A–中心 と円の交点で最大・最小となり，最大値 $5+3=8$，最小値 $5-3=2$。</p>
<div class="point">円と直線の問題は「中心と直線の距離」と半径を比べる。</div>
`,
},

{
  id: '2BC-hoteishiki-03',
  field: '2BC-hoteishiki',
  points: 15,
  title: 'いろいろな軌跡と領域の面積',
  body: String.raw`
<p><span class="q">(1)</span>　2 点 $\mathrm{A}(-2,\ 0)$，$\mathrm{B}(4,\ 0)$ からの距離の比が $\mathrm{AP}:\mathrm{BP}=2:1$ である点 P の軌跡は，中心 $(\bx{ア},\ \bx{イ})$，半径 $\bx{ウ}$ の円である。</p>
<p><span class="q">(2)</span>　点 Q が円 $x^2+y^2=4$ 上を動くとき，点 $(6,\ 0)$ と Q を結ぶ線分の中点 M の軌跡は，中心 $(\bx{エ},\ \bx{オ})$，半径 $\bx{カ}$ の円である。</p>
<p><span class="q">(3)</span>　$t$ が実数全体を動くとき，放物線 $y=x^2-2tx+2t$ の頂点の軌跡は，放物線 $y=\bx{キク}x^2+\bx{ケ}x$ である。</p>
<p><span class="q">(4)</span>　(1) の円の周および内部のうち $y\geqq0$ の部分の面積は $\bx{コ}\pi$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ,ウ', v: '6,0,4', tex: String.raw`\text{中心}\ (6,0),\ \text{半径}\ 4`, pts: 4 },
    { q: '(2)', k: 'エ,オ,カ', v: '3,0,1', tex: String.raw`\text{中心}\ (3,0),\ \text{半径}\ 1`, pts: 4 },
    { q: '(3)', k: 'キク,ケ', v: '-1,2', tex: 'y=-x^2+2x', pts: 4 },
    { q: '(4)', k: 'コ', v: '8', tex: '8\\pi', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\mathrm{P}(x,y)$ とする。$\mathrm{AP}=2\mathrm{BP}$ の両辺を2乗して</p>
<p>$(x+2)^2+y^2=4\{(x-4)^2+y^2\}$</p>
<p>$x^2+4x+4+y^2=4x^2-32x+64+4y^2$，$3x^2-36x+3y^2+60=0$，$x^2-12x+y^2+20=0$。</p>
<p>$(x-6)^2+y^2=16$。中心 $(6,0)$，半径 4（アポロニウスの円）。</p>
<h3>(2)</h3>
<p>$\mathrm{Q}(s,u)$，$\mathrm{M}(x,y)$ とすると $x=\frac{s+6}{2}$，$y=\frac u2$。$s=2x-6$，$u=2y$ を $s^2+u^2=4$ に代入して</p>
<p>$(2x-6)^2+(2y)^2=4$，$(x-3)^2+y^2=1$。中心 $(3,0)$，半径 1。</p>
<h3>(3)</h3>
<p>$y=(x-t)^2-t^2+2t$ より頂点は $(t,\ -t^2+2t)$。$x=t$ を代入して $t$ を消去すると $y=-x^2+2x$。</p>
<h3>(4)</h3>
<p>中心が $x$ 軸上にあるので，$y\geqq0$ の部分はちょうど半円。面積は $\frac12\pi\cdot4^2=8\pi$。</p>
<div class="point">軌跡は「動く点を $(x,y)$ とおき，条件を式にして，媒介変数を消去する」。</div>
`,
},

{
  id: '2BC-hoteishiki-04',
  field: '2BC-hoteishiki',
  points: 15,
  title: '領域における最大・最小',
  body: String.raw`
<p>連立不等式</p>
<p>$$x\geqq0,\quad y\geqq0,\quad x+2y\leqq8,\quad 3x+y\leqq9$$</p>
<p>の表す領域を $D$ とする。</p>
<p><span class="q">(1)</span>　点 $(x,\ y)$ が $D$ 内を動くとき，$x+y$ の最大値は $\bx{ア}$ であり，そのときの点は $(\bx{イ},\ \bx{ウ})$ である。</p>
<p><span class="q">(2)</span>　$2x+y$ の最大値は $\bx{エ}$ である。</p>
<p><span class="q">(3)</span>　$x^2+y^2$ の最大値は $\bx{オカ}$ である。</p>
<p><span class="q">(4)</span>　$(x-4)^2+(y-4)^2$ の最小値は $\bx{キ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ,ウ', v: '5,2,3', tex: String.raw`\text{最大値}\ 5\ \text{（点}\ (2,3)\text{）}`, pts: 4 },
    { q: '(2)', k: 'エ', v: '7', pts: 3 },
    { q: '(3)', k: 'オカ', v: '16', pts: 3 },
    { q: '(4)', k: 'キ', v: '5', pts: 5 },
  ],
  explanation: String.raw`
<p>$D$ は4点 $(0,0)$，$(3,0)$，$(2,3)$，$(0,4)$ を頂点とする四角形（周を含む）。$(2,3)$ は $x+2y=8$ と $3x+y=9$ の交点。</p>
<h3>(1)</h3>
<p>$x+y=k$ とおくと，傾き $-1$ の直線が $D$ と共有点をもつ範囲で $k$ を最大にする。傾き $-1$ は2辺の傾き $-\frac12$ と $-3$ の間なので，頂点 $(2,3)$ を通るとき最大で $k=5$。</p>
<h3>(2)</h3>
<p>$2x+y=k$（傾き $-2$）も $-\frac12$ と $-3$ の間なので $(2,3)$ で最大，$k=7$。（頂点の値 $(3,0)\to6$，$(0,4)\to4$ と比べても最大。）</p>
<h3>(3)</h3>
<p>$x^2+y^2$ は原点からの距離の2乗。最も遠い頂点を調べると $(0,4)\to16$，$(2,3)\to13$，$(3,0)\to9$。最大値 16。</p>
<h3>(4)</h3>
<p>点 $(4,4)$ からの距離の2乗。$(4,4)$ は $D$ の外部にある。</p>
<ul>
<li>辺 $x+2y=8$ に下ろした垂線の足は $\left(\frac{16}{5},\frac{12}{5}\right)$ で，辺（$0\leqq x\leqq2$）の外。</li>
<li>辺 $3x+y=9$ に下ろした垂線の足は $\left(\frac{19}{10},\frac{33}{10}\right)$ で，辺（$2\leqq x\leqq3$）の外。</li>
</ul>
<p>よって最も近いのは頂点 $(2,3)$ で，最小値は $(4-2)^2+(4-3)^2=5$。</p>
<div class="point">1次式の最大・最小は「直線を平行移動」，$x^2+y^2$ 型は「点からの距離」と見る。垂線の足が辺上にあるかを必ず確認。</div>
`,
},

{
  id: '2BC-hoteishiki-05',
  field: '2BC-hoteishiki',
  points: 15,
  title: '2つの円の共通弦と接線',
  body: String.raw`
<p>2 つの円 $C_1:\ x^2+y^2=5$，$C_2:\ (x-3)^2+(y-1)^2=5$ を考える。</p>
<p><span class="q">(1)</span>　$C_1$ と $C_2$ の2つの交点を通る直線の方程式は $y=\bx{アイ}x+\bx{ウ}$ であり，2つの交点を結ぶ線分の長さは $\sqrt{\bx{エオ}}$ である。</p>
<p><span class="q">(2)</span>　$C_1$ 上の点 $(1,\ 2)$ における $C_1$ の接線の方程式は $x+\bx{カ}y=\bx{キ}$ である。</p>
<p><span class="q">(3)</span>　$C_1$ と $C_2$ の2つの交点と原点を通る円の方程式は $x^2+y^2-\bx{ク}x-\bx{ケ}y=0$ である。</p>
<p><span class="q">(4)</span>　点 $(5,\ 0)$ から $C_1$ に引いた2本の接線の傾きは $\pm\dfrac{\bx{コ}}{\bx{サ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ,ウ', v: '-3,5', tex: 'y=-3x+5', pts: 3 },
    { q: '(1)', k: 'エオ', v: '10', pts: 3 },
    { q: '(2)', k: 'カ,キ', v: '2,5', tex: 'x+2y=5', pts: 3 },
    { q: '(3)', k: 'ク,ケ', v: '3,1', tex: 'x^2+y^2-3x-y=0', pts: 3 },
    { q: '(4)', k: 'コ/サ', v: '1/2', tex: String.raw`\pm\dfrac12`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$C_2$ を展開すると $x^2+y^2-6x-2y+5=0$。$C_1$ の式 $x^2+y^2-5=0$ から引くと $6x+2y-10=0$，すなわち $y=-3x+5$。これが2交点を通る直線。</p>
<p>$C_1$ に代入：$x^2+(5-3x)^2=5$，$10x^2-30x+20=0$，$x=1,2$。交点は $(1,2)$，$(2,-1)$ で，距離は $\sqrt{1+9}=\sqrt{10}$。</p>
<h3>(2)</h3>
<p>円 $x^2+y^2=r^2$ 上の点 $(x_1,y_1)$ における接線は $x_1x+y_1y=r^2$。よって $x+2y=5$。</p>
<h3>(3)</h3>
<p>2交点を通る円は $(x^2+y^2-5)+k(x^2+y^2-6x-2y+5)=0$ と表せる。原点を通るので $-5+5k=0$，$k=1$。</p>
<p>$2x^2+2y^2-6x-2y=0$，すなわち $x^2+y^2-3x-y=0$。</p>
<h3>(4)</h3>
<p>接線を $y=m(x-5)$，すなわち $mx-y-5m=0$ とおく。中心（原点）との距離が半径 $\sqrt5$ に等しいので</p>
<p>$\dfrac{|-5m|}{\sqrt{m^2+1}}=\sqrt5$，$25m^2=5(m^2+1)$，$m^2=\frac14$，$m=\pm\frac12$。</p>
<div class="point">2円の式を引くと共通弦の直線，$f+kg=0$ の形で「2交点を通る図形」を表せる。</div>
`,
}

);
