// 数学ⅡBC 第6問相当「ベクトル」 オリジナル類題 5題（各16点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-vector-01',
  field: '2BC-vector',
  points: 16,
  title: '線分の交点の位置ベクトル',
  body: String.raw`
<p>$\triangle\mathrm{OAB}$ において，$\vec a=\overrightarrow{\mathrm{OA}}$，$\vec b=\overrightarrow{\mathrm{OB}}$ とする。辺 OA を $2:1$ に内分する点を P，辺 OB を $1:2$ に内分する点を Q とし，線分 AQ と線分 BP の交点を R とする。</p>
<p><span class="q">(1)</span>　$\overrightarrow{\mathrm{OR}}=\dfrac{\bx{ア}}{\bx{イ}}\vec a+\dfrac{\bx{ウ}}{\bx{エ}}\vec b$ である。</p>
<p><span class="q">(2)</span>　直線 OR と辺 AB の交点を S とすると，$\mathrm{AS}:\mathrm{SB}=\bx{オ}:\bx{カ}$，$\mathrm{OR}:\mathrm{RS}=\bx{キ}:\bx{ク}$ である。</p>
<p><span class="q">(3)</span>　$|\vec a|=3$，$|\vec b|=2$，$\vec a\cdot\vec b=2$ のとき，$|\overrightarrow{\mathrm{OR}}|=\dfrac{\bx{ケ}\sqrt{\bx{コサ}}}{\bx{シ}}$ であり，$\triangle\mathrm{OAB}$ の面積は $\bx{ス}\sqrt{\bx{セ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア/イ,ウ/エ', v: '4/7,1/7', tex: String.raw`\dfrac47\vec a+\dfrac17\vec b`, pts: 4 },
    { q: '(2)', k: 'オ,カ', v: '1,4', tex: '1:4', pts: 3 },
    { q: '(2)', k: 'キ,ク', v: '5,2', tex: '5:2', pts: 3 },
    { q: '(3)', k: 'ケ,コサ,シ', v: '2,41,7', tex: String.raw`\dfrac{2\sqrt{41}}{7}`, pts: 3 },
    { q: '(3)', k: 'ス,セ', v: '2,2', tex: String.raw`2\sqrt{2}`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\overrightarrow{\mathrm{OP}}=\frac23\vec a$，$\overrightarrow{\mathrm{OQ}}=\frac13\vec b$。</p>
<p>R は AQ 上：$\overrightarrow{\mathrm{OR}}=(1-s)\vec a+\frac s3\vec b$。R は BP 上：$\overrightarrow{\mathrm{OR}}=\frac{2t}{3}\vec a+(1-t)\vec b$。</p>
<p>$\vec a,\vec b$ は1次独立なので係数を比べて $1-s=\frac{2t}{3}$，$\frac s3=1-t$。解くと $t=\frac67$，$s=\frac37$。</p>
<p>$\overrightarrow{\mathrm{OR}}=\frac47\vec a+\frac17\vec b$。</p>
<h3>(2)</h3>
<p>$\overrightarrow{\mathrm{OS}}=k\overrightarrow{\mathrm{OR}}$ とおくと，S が AB 上にあるので係数の和が 1：$k\left(\frac47+\frac17\right)=1$，$k=\frac75$。</p>
<p>$\overrightarrow{\mathrm{OS}}=\frac45\vec a+\frac15\vec b=\frac{4\vec a+1\vec b}{1+4}$ なので $\mathrm{AS}:\mathrm{SB}=1:4$。</p>
<p>$\mathrm{OR}:\mathrm{OS}=1:\frac75=5:7$ より $\mathrm{OR}:\mathrm{RS}=5:2$。</p>
<h3>(3)</h3>
<p>$|\overrightarrow{\mathrm{OR}}|^2=\frac{1}{49}|4\vec a+\vec b|^2=\frac{1}{49}(16\cdot9+8\cdot2+4)=\frac{164}{49}$，$|\overrightarrow{\mathrm{OR}}|=\frac{2\sqrt{41}}{7}$。</p>
<p>面積 $=\frac12\sqrt{|\vec a|^2|\vec b|^2-(\vec a\cdot\vec b)^2}=\frac12\sqrt{36-4}=\frac12\cdot4\sqrt2=2\sqrt2$。</p>
<div class="point">交点は「2通りに表して係数比較」。直線 AB 上の点 ⇔ $\vec a,\vec b$ の係数の和が1。</div>
`,
},

{
  id: '2BC-vector-02',
  field: '2BC-vector',
  points: 16,
  title: '空間の三角形と平面への垂線',
  body: String.raw`
<p>座標空間に 4 点 $\mathrm{O}(0,0,0)$，$\mathrm{A}(2,0,0)$，$\mathrm{B}(0,4,0)$，$\mathrm{C}(0,0,4)$ がある。</p>
<p><span class="q">(1)</span>　$\overrightarrow{\mathrm{AB}}\cdot\overrightarrow{\mathrm{AC}}=\bx{ア}$ であり，$\cos\angle\mathrm{BAC}=\dfrac{\bx{イ}}{\bx{ウ}}$ である。</p>
<p><span class="q">(2)</span>　$\triangle\mathrm{ABC}$ の面積は $\bx{エ}\sqrt{\bx{オ}}$ である。</p>
<p><span class="q">(3)</span>　O から平面 ABC に下ろした垂線を OH とすると，$\mathrm{OH}=\dfrac{\bx{カ}\sqrt{\bx{キ}}}{\bx{ク}}$ である。</p>
<p><span class="q">(4)</span>　四面体 OABC の体積は $\dfrac{\bx{ケコ}}{\bx{サ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '4', pts: 2 },
    { q: '(1)', k: 'イ/ウ', v: '1/5', pts: 3 },
    { q: '(2)', k: 'エ,オ', v: '4,6', tex: String.raw`4\sqrt{6}`, pts: 3 },
    { q: '(3)', k: 'カ,キ,ク', v: '2,6,3', tex: String.raw`\dfrac{2\sqrt{6}}{3}`, pts: 4 },
    { q: '(4)', k: 'ケコ/サ', v: '16/3', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\overrightarrow{\mathrm{AB}}=(-2,4,0)$，$\overrightarrow{\mathrm{AC}}=(-2,0,4)$。内積 $=4+0+0=4$。</p>
<p>$|\overrightarrow{\mathrm{AB}}|=|\overrightarrow{\mathrm{AC}}|=\sqrt{20}$ なので $\cos\angle\mathrm{BAC}=\frac{4}{20}=\frac15$。</p>
<h3>(2)</h3>
<p>$\frac12\sqrt{|\overrightarrow{\mathrm{AB}}|^2|\overrightarrow{\mathrm{AC}}|^2-(\overrightarrow{\mathrm{AB}}\cdot\overrightarrow{\mathrm{AC}})^2}=\frac12\sqrt{400-16}=\frac12\sqrt{384}=\frac12\cdot8\sqrt6=4\sqrt6$。</p>
<h3>(3)</h3>
<p>平面 ABC の方程式は $\frac x2+\frac y4+\frac z4=1$，すなわち $2x+y+z=4$。法線ベクトルは $(2,1,1)$。</p>
<p>H $=t(2,1,1)$ とおくと平面上にあるので $4t+t+t=4$，$t=\frac23$。$\mathrm{OH}=\frac23\sqrt{4+1+1}=\frac{2\sqrt6}{3}$。</p>
<h3>(4)</h3>
<p>底面 OAB（直角三角形，面積 $\frac12\cdot2\cdot4=4$），高さ OC $=4$ として $\frac13\cdot4\cdot4=\frac{16}{3}$。</p>
<p>（確認：$\frac13\cdot4\sqrt6\cdot\frac{2\sqrt6}{3}=\frac{16}{3}$ で一致。）</p>
<div class="point">三角形の面積は $\frac12\sqrt{|\vec u|^2|\vec v|^2-(\vec u\cdot\vec v)^2}$。平面への距離は体積を2通りに表しても求められる。</div>
`,
},

{
  id: '2BC-vector-03',
  field: '2BC-vector',
  points: 16,
  title: '内積と大きさの最小値',
  body: String.raw`
<p>$\vec a=(1,\ 2)$，$\vec b=(3,\ -1)$ とする。</p>
<p><span class="q">(1)</span>　$\vec a\cdot\vec b=\bx{ア}$ であり，$\vec a$ と $\vec b$ のなす角を $\theta$ とすると $\cos\theta=\dfrac{\sqrt{\bx{イ}}}{\bx{ウエ}}$ である。</p>
<p><span class="q">(2)</span>　$t$ を実数とする。$|\vec a+t\vec b|$ は $t=\dfrac{\bx{オカ}}{\bx{キク}}$ のとき最小値 $\dfrac{\bx{ケ}\sqrt{\bx{コサ}}}{\bx{シス}}$ をとる。</p>
<p><span class="q">(3)</span>　$\vec a$，$\vec b$ を2辺とする平行四辺形の面積は $\bx{セ}$ である。</p>
<p><span class="q">(4)</span>　$\vec b$ の $\vec a$ への正射影ベクトル（$\vec b$ の終点から $\vec a$ を含む直線に下ろした垂線の足を終点とするベクトル）は $\dfrac{\bx{ソ}}{\bx{タ}}\vec a$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '1', pts: 2 },
    { q: '(1)', k: 'イ,ウエ', v: '2,10', tex: String.raw`\dfrac{\sqrt2}{10}`, pts: 3 },
    { q: '(2)', k: 'オカ/キク', v: '-1/10', pts: 3 },
    { q: '(2)', k: 'ケ,コサ,シス', v: '7,10,10', tex: String.raw`\dfrac{7\sqrt{10}}{10}`, pts: 3 },
    { q: '(3)', k: 'セ', v: '7', pts: 2 },
    { q: '(4)', k: 'ソ/タ', v: '1/5', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\vec a\cdot\vec b=3-2=1$。$|\vec a|=\sqrt5$，$|\vec b|=\sqrt{10}$ なので $\cos\theta=\frac{1}{\sqrt{50}}=\frac{1}{5\sqrt2}=\frac{\sqrt2}{10}$。</p>
<h3>(2)</h3>
<p>$|\vec a+t\vec b|^2=|\vec a|^2+2t\,\vec a\cdot\vec b+t^2|\vec b|^2=10t^2+2t+5=10\left(t+\frac1{10}\right)^2+\frac{49}{10}$。</p>
<p>$t=-\frac1{10}$ のとき最小値 $\sqrt{\frac{49}{10}}=\frac{7}{\sqrt{10}}=\frac{7\sqrt{10}}{10}$。</p>
<p>（このとき $(\vec a+t\vec b)\perp\vec b$ になっている。）</p>
<h3>(3)</h3>
<p>$\vec a=(a_1,a_2)$，$\vec b=(b_1,b_2)$ のとき平行四辺形の面積は $|a_1b_2-a_2b_1|=|1\cdot(-1)-2\cdot3|=7$。</p>
<h3>(4)</h3>
<p>正射影ベクトルは $\dfrac{\vec a\cdot\vec b}{|\vec a|^2}\vec a=\dfrac15\vec a$。</p>
<div class="point">$|\vec a+t\vec b|$ の最小は「2乗して $t$ の2次関数」として平方完成する。</div>
`,
},

{
  id: '2BC-vector-04',
  field: '2BC-vector',
  points: 16,
  title: '三角形の外心・垂心の位置ベクトル',
  body: String.raw`
<p>$\triangle\mathrm{OAB}$ において $\vec a=\overrightarrow{\mathrm{OA}}$，$\vec b=\overrightarrow{\mathrm{OB}}$ とし，$|\vec a|=4$，$|\vec b|=6$，$\vec a\cdot\vec b=8$ とする。</p>
<p><span class="q">(1)</span>　$\cos\angle\mathrm{AOB}=\dfrac{\bx{ア}}{\bx{イ}}$ であり，$\triangle\mathrm{OAB}$ の面積は $\bx{ウ}\sqrt{\bx{エ}}$ である。</p>
<p><span class="q">(2)</span>　$\triangle\mathrm{OAB}$ の外心を P とすると</p>
<p>$$\overrightarrow{\mathrm{OP}}=\frac{\bx{オ}}{\bx{カキ}}\vec a+\frac{\bx{ク}}{\bx{ケコ}}\vec b$$</p>
<p>である。</p>
<p><span class="q">(3)</span>　$\triangle\mathrm{OAB}$ の垂心を H とすると</p>
<p>$$\overrightarrow{\mathrm{OH}}=\frac{\bx{サ}}{\bx{シス}}\vec a+\frac{\bx{セ}}{\bx{ソ}}\vec b$$</p>
<p>である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア/イ', v: '1/3', pts: 3 },
    { q: '(1)', k: 'ウ,エ', v: '8,2', tex: String.raw`8\sqrt{2}`, pts: 3 },
    { q: '(2)', k: 'オ/カキ,ク/ケコ', v: '9/32,7/16', tex: String.raw`\dfrac{9}{32}\vec a+\dfrac{7}{16}\vec b`, pts: 5 },
    { q: '(3)', k: 'サ/シス,セ/ソ', v: '7/16,1/8', tex: String.raw`\dfrac{7}{16}\vec a+\dfrac{1}{8}\vec b`, pts: 5 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\cos\angle\mathrm{AOB}=\frac{8}{4\cdot6}=\frac13$。面積 $=\frac12\sqrt{16\cdot36-64}=\frac12\sqrt{512}=\frac12\cdot16\sqrt2=8\sqrt2$。</p>
<h3>(2)</h3>
<p>外心 P から辺 OA，OB に下ろした垂線の足はそれぞれの中点なので，$\overrightarrow{\mathrm{OP}}\cdot\vec a=\frac12|\vec a|^2=8$，$\overrightarrow{\mathrm{OP}}\cdot\vec b=\frac12|\vec b|^2=18$。</p>
<p>$\overrightarrow{\mathrm{OP}}=s\vec a+t\vec b$ とおくと $16s+8t=8$，$8s+36t=18$。解くと $s=\frac{9}{32}$，$t=\frac{7}{16}$。</p>
<h3>(3)</h3>
<p>$\overrightarrow{\mathrm{OH}}=x\vec a+y\vec b$ とする。</p>
<ul>
<li>$\mathrm{OH}\perp\mathrm{AB}$：$\overrightarrow{\mathrm{OH}}\cdot(\vec b-\vec a)=0$ より $\overrightarrow{\mathrm{OH}}\cdot\vec a=\overrightarrow{\mathrm{OH}}\cdot\vec b$，$16x+8y=8x+36y$ … ①</li>
<li>$\mathrm{AH}\perp\mathrm{OB}$：$(\overrightarrow{\mathrm{OH}}-\vec a)\cdot\vec b=0$ より $8x+36y=8$ … ②</li>
</ul>
<p>① より $8x=28y$，$x=\frac72y$。② に代入して $28y+36y=8$，$y=\frac18$，$x=\frac{7}{16}$。</p>
<p>（参考：$\overrightarrow{\mathrm{OH}}=\vec a+\vec b-2\overrightarrow{\mathrm{OP}}$ が成り立ち，(2) の結果と一致する。）</p>
<div class="point">外心は「各辺の垂直二等分線」→ $\overrightarrow{\mathrm{OP}}\cdot\vec a=\frac12|\vec a|^2$。垂心は「頂点から対辺への垂線」→ 内積 0。</div>
`,
},

{
  id: '2BC-vector-05',
  field: '2BC-vector',
  points: 16,
  title: '四面体と平面の交点',
  body: String.raw`
<p>四面体 OABC において $\vec a=\overrightarrow{\mathrm{OA}}$，$\vec b=\overrightarrow{\mathrm{OB}}$，$\vec c=\overrightarrow{\mathrm{OC}}$ とする。点 D を $\overrightarrow{\mathrm{OD}}=\dfrac12\vec a+\dfrac13\vec b+\dfrac14\vec c$ で定める。</p>
<p><span class="q">(1)</span>　直線 OD と平面 ABC の交点を E とすると，$\overrightarrow{\mathrm{OE}}=\dfrac{\bx{アイ}}{\bx{ウエ}}\overrightarrow{\mathrm{OD}}$ であり</p>
<p>$$\overrightarrow{\mathrm{OE}}=\frac{\bx{オ}}{\bx{カキ}}\vec a+\frac{\bx{ク}}{\bx{ケコ}}\vec b+\frac{\bx{サ}}{\bx{シス}}\vec c$$</p>
<p>である。</p>
<p><span class="q">(2)</span>　以下，四面体 OABC は1辺の長さが 1 の正四面体とする。$|\overrightarrow{\mathrm{OD}}|=\dfrac{\sqrt{\bx{セソタ}}}{\bx{チツ}}$ である。</p>
<p><span class="q">(3)</span>　$\triangle\mathrm{ABC}$ の重心を G とすると，$|\overrightarrow{\mathrm{OG}}|=\dfrac{\sqrt{\bx{テ}}}{\bx{ト}}$ であり，$\overrightarrow{\mathrm{OG}}\cdot\overrightarrow{\mathrm{AB}}=\bx{ナ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ/ウエ', v: '12/13', pts: 3 },
    { q: '(1)', k: 'オ/カキ,ク/ケコ,サ/シス', v: '6/13,4/13,3/13', tex: String.raw`\dfrac{6}{13}\vec a+\dfrac{4}{13}\vec b+\dfrac{3}{13}\vec c`, pts: 4 },
    { q: '(2)', k: 'セソタ,チツ', v: '115,12', tex: String.raw`\dfrac{\sqrt{115}}{12}`, pts: 3 },
    { q: '(3)', k: 'テ,ト', v: '6,3', tex: String.raw`\dfrac{\sqrt6}{3}`, pts: 3 },
    { q: '(3)', k: 'ナ', v: '0', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\overrightarrow{\mathrm{OE}}=k\overrightarrow{\mathrm{OD}}$ とおく。E が平面 ABC 上にある ⇔ $\vec a,\vec b,\vec c$ の係数の和が 1。</p>
<p>$k\left(\frac12+\frac13+\frac14\right)=\frac{13}{12}k=1$ より $k=\frac{12}{13}$。</p>
<p>$\overrightarrow{\mathrm{OE}}=\frac{6}{13}\vec a+\frac{4}{13}\vec b+\frac{3}{13}\vec c$。</p>
<h3>(2)</h3>
<p>正四面体なので $|\vec a|=|\vec b|=|\vec c|=1$，$\vec a\cdot\vec b=\vec b\cdot\vec c=\vec c\cdot\vec a=\cos60^\circ=\frac12$。</p>
<p>$$|\overrightarrow{\mathrm{OD}}|^2=\frac14+\frac19+\frac1{16}+2\cdot\frac12\left(\frac16+\frac1{12}+\frac18\right)=\frac{36+16+9}{144}+\frac{24+12+18}{144}=\frac{115}{144}$$</p>
<p>$|\overrightarrow{\mathrm{OD}}|=\frac{\sqrt{115}}{12}$。</p>
<h3>(3)</h3>
<p>$\overrightarrow{\mathrm{OG}}=\frac13(\vec a+\vec b+\vec c)$。$|\vec a+\vec b+\vec c|^2=3+2\cdot3\cdot\frac12=6$ なので $|\overrightarrow{\mathrm{OG}}|=\frac{\sqrt6}{3}$。</p>
<p>$\overrightarrow{\mathrm{OG}}\cdot\overrightarrow{\mathrm{AB}}=\frac13(\vec a+\vec b+\vec c)\cdot(\vec b-\vec a)=\frac13(|\vec b|^2-|\vec a|^2+\vec c\cdot\vec b-\vec c\cdot\vec a)=0$。</p>
<p>（同様に $\overrightarrow{\mathrm{OG}}\perp\overrightarrow{\mathrm{AC}}$ なので，OG は平面 ABC に垂直。）</p>
<div class="point">点が平面 ABC 上 ⇔ $\overrightarrow{\mathrm{OP}}=s\vec a+t\vec b+u\vec c$ で $s+t+u=1$。</div>
`,
}

);
