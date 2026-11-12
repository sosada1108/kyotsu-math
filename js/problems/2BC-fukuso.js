// 数学ⅡBC 第7問相当「平面上の曲線・複素数平面」 オリジナル類題 5題（各16点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-fukuso-01',
  field: '2BC-fukuso',
  points: 16,
  title: '極形式とド・モアブルの定理',
  body: String.raw`
<p>$i$ を虚数単位とし，$z=1+\sqrt3\,i$ とする。</p>
<p><span class="q">(1)</span>　$|z|=\bx{ア}$ であり，$z$ の偏角 $\theta$（$0\leqq\theta<2\pi$）は $\theta=\dfrac{\pi}{\bx{イ}}$ である。</p>
<p><span class="q">(2)</span>　$z^6=\bx{ウエ}$ であり，$z^4=\bx{オカ}+\bx{キク}\sqrt{\bx{ケ}}\,i$ である。</p>
<p><span class="q">(3)</span>　方程式 $w^3=8i$ の解のうち，実部が正であるものは $w=\sqrt{\bx{コ}}+i$ である。また，3つの解を表す複素数平面上の点を頂点とする三角形の面積は $\bx{サ}\sqrt{\bx{シ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '2', pts: 2 },
    { q: '(1)', k: 'イ', v: '3', pts: 2 },
    { q: '(2)', k: 'ウエ', v: '64', pts: 3 },
    { q: '(2)', k: 'オカ,キク,ケ', v: '-8,-8,3', tex: String.raw`-8-8\sqrt3\,i`, pts: 3 },
    { q: '(3)', k: 'コ', v: '3', tex: String.raw`\sqrt3+i`, pts: 3 },
    { q: '(3)', k: 'サ,シ', v: '3,3', tex: String.raw`3\sqrt3`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$|z|=\sqrt{1+3}=2$。$z=2\left(\frac12+\frac{\sqrt3}{2}i\right)=2\left(\cos\frac\pi3+i\sin\frac\pi3\right)$ なので $\theta=\frac\pi3$。</p>
<h3>(2)</h3>
<p>ド・モアブルの定理より $z^6=2^6(\cos2\pi+i\sin2\pi)=64$。</p>
<p>$z^4=16\left(\cos\frac{4\pi}{3}+i\sin\frac{4\pi}{3}\right)=16\left(-\frac12-\frac{\sqrt3}{2}i\right)=-8-8\sqrt3\,i$。</p>
<h3>(3)</h3>
<p>$w=r(\cos\varphi+i\sin\varphi)$ とおくと $r^3(\cos3\varphi+i\sin3\varphi)=8\left(\cos\frac\pi2+i\sin\frac\pi2\right)$。</p>
<p>$r=2$，$3\varphi=\frac\pi2+2k\pi$ より $\varphi=\frac\pi6,\ \frac56\pi,\ \frac32\pi$。解は $\sqrt3+i$，$-\sqrt3+i$，$-2i$。</p>
<p>3点は半径2の円に内接する正三角形の頂点。1辺は $2\sqrt3$ で，面積は $\frac{\sqrt3}{4}(2\sqrt3)^2=3\sqrt3$。</p>
<div class="point">$z^n$ は極形式にして「絶対値は $n$ 乗，偏角は $n$ 倍」。</div>
`,
},

{
  id: '2BC-fukuso-02',
  field: '2BC-fukuso',
  points: 16,
  title: '複素数平面上の回転と図形',
  body: String.raw`
<p>$i$ を虚数単位とする。複素数平面上に点 $\mathrm{A}(\alpha)$，$\mathrm{B}(\beta)$ があり，$\alpha=1+2i$，$\beta=4+3i$ である。</p>
<p><span class="q">(1)</span>　$|\beta-\alpha|=\sqrt{\bx{アイ}}$ である。$\triangle\mathrm{ABC}$ が正三角形で，A，B，C がこの順に反時計回りに並ぶとき，点 C を表す複素数は</p>
<p>$$\frac{\bx{ウ}-\sqrt{\bx{エ}}}{\bx{オ}}+\frac{\bx{カ}+\bx{キ}\sqrt{\bx{ク}}}{\bx{ケ}}\,i$$</p>
<p>である。</p>
<p><span class="q">(2)</span>　$|z-1|=2|z-4|$ を満たす点 $z$ 全体は，中心 $\bx{コ}$，半径 $\bx{サ}$ の円である。</p>
<p><span class="q">(3)</span>　3点 $\mathrm{P}(1)$，$\mathrm{Q}(i)$，$\mathrm{R}(x+2i)$（$x$ は実数）について，$\mathrm{PQ}\perp\mathrm{PR}$ となるのは $x=\bx{シ}$ のときである。</p>
<p><span class="q">(4)</span>　$|z|=1$ のとき，$|z-3-4i|$ の最大値は $\bx{ス}$，最小値は $\bx{セ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ', v: '10', pts: 2 },
    { q: '(1)', k: 'ウ,エ,オ,カ,キ,ク,ケ', v: '5,3,2,5,3,3,2', tex: String.raw`\dfrac{5-\sqrt3}{2}+\dfrac{5+3\sqrt3}{2}i`, pts: 4 },
    { q: '(2)', k: 'コ,サ', v: '5,2', tex: String.raw`\text{中心}\ 5,\ \text{半径}\ 2`, pts: 3 },
    { q: '(3)', k: 'シ', v: '3', pts: 3 },
    { q: '(4)', k: 'ス,セ', v: '6,4', tex: String.raw`\text{最大値}\ 6,\ \text{最小値}\ 4`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\beta-\alpha=3+i$，$|\beta-\alpha|=\sqrt{10}$。</p>
<p>C は A を中心に B を $\frac\pi3$ 回転した点：$\gamma=\alpha+(\beta-\alpha)\left(\cos\frac\pi3+i\sin\frac\pi3\right)$。</p>
<p>$(3+i)\left(\frac12+\frac{\sqrt3}{2}i\right)=\frac{3-\sqrt3}{2}+\frac{3\sqrt3+1}{2}i$ なので</p>
<p>$\gamma=\frac{5-\sqrt3}{2}+\frac{5+3\sqrt3}{2}i$。</p>
<h3>(2)</h3>
<p>$z=x+yi$ とすると $(x-1)^2+y^2=4\{(x-4)^2+y^2\}$。整理して $x^2-10x+y^2+21=0$，$(x-5)^2+y^2=4$。中心 5，半径 2。</p>
<h3>(3)</h3>
<p>$\dfrac{(x+2i)-1}{i-1}$ が純虚数（実部0，0でない）になればよい。</p>
<p>$\dfrac{(x-1)+2i}{-1+i}=\dfrac{\{(x-1)+2i\}(-1-i)}{2}=\dfrac{(3-x)+(-x-1)i}{2}$。実部 $=0$ より $x=3$（このとき虚部 $-2\neq0$）。</p>
<h3>(4)</h3>
<p>$|z-(3+4i)|$ は単位円上の点と点 $3+4i$ の距離。$|3+4i|=5$ なので最大 $5+1=6$，最小 $5-1=4$。</p>
<div class="point">点 $\beta$ を点 $\alpha$ のまわりに $\theta$ 回転：$\alpha+(\beta-\alpha)(\cos\theta+i\sin\theta)$。垂直 ⇔ 比が純虚数。</div>
`,
},

{
  id: '2BC-fukuso-03',
  field: '2BC-fukuso',
  points: 16,
  title: '2次曲線の焦点・漸近線・接線',
  body: String.raw`
<p><span class="q">(1)</span>　楕円 $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ の焦点の座標は $(\pm\bx{ア},\ 0)$ であり，長軸の長さは $\bx{イウ}$ である。</p>
<p><span class="q">(2)</span>　双曲線 $\dfrac{x^2}{4}-\dfrac{y^2}{5}=1$ の焦点の座標は $(\pm\bx{エ},\ 0)$ であり，漸近線の方程式は $y=\pm\dfrac{\sqrt{\bx{オ}}}{\bx{カ}}x$ である。</p>
<p><span class="q">(3)</span>　放物線 $y^2=8x$ の焦点の座標は $(\bx{キ},\ 0)$，準線の方程式は $x=\bx{クケ}$ である。</p>
<p><span class="q">(4)</span>　楕円 $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ 上の点 $\left(4,\ \dfrac95\right)$ における接線の方程式は $4x+\bx{コ}y=\bx{サシ}$ である。</p>
<p><span class="q">(5)</span>　楕円 $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ に内接し，各辺が座標軸に平行な長方形の面積の最大値は $\bx{スセ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '4', pts: 2 },
    { q: '(1)', k: 'イウ', v: '10', pts: 2 },
    { q: '(2)', k: 'エ', v: '3', pts: 2 },
    { q: '(2)', k: 'オ,カ', v: '5,2', tex: String.raw`y=\pm\dfrac{\sqrt5}{2}x`, pts: 2 },
    { q: '(3)', k: 'キ,クケ', v: '2,-2', tex: String.raw`\text{焦点}\ (2,0),\ \text{準線}\ x=-2`, pts: 2 },
    { q: '(4)', k: 'コ,サシ', v: '5,25', tex: '4x+5y=25', pts: 3 },
    { q: '(5)', k: 'スセ', v: '30', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$a=5,\ b=3$，焦点は $(\pm\sqrt{a^2-b^2},0)=(\pm4,0)$。長軸の長さは $2a=10$。</p>
<h3>(2)</h3>
<p>$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ の焦点は $(\pm\sqrt{a^2+b^2},0)=(\pm3,0)$。漸近線は $y=\pm\frac bax=\pm\frac{\sqrt5}{2}x$。</p>
<h3>(3)</h3>
<p>$y^2=4px$ で $p=2$。焦点 $(2,0)$，準線 $x=-2$。</p>
<h3>(4)</h3>
<p>楕円 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ 上の点 $(x_1,y_1)$ における接線は $\frac{x_1x}{a^2}+\frac{y_1y}{b^2}=1$。</p>
<p>$\frac{4x}{25}+\frac{(9/5)y}{9}=1 \iff \frac{4x}{25}+\frac y5=1 \iff 4x+5y=25$。</p>
<h3>(5)</h3>
<p>第1象限の頂点を $(5\cos\theta,\ 3\sin\theta)$（$0<\theta<\frac\pi2$）とおくと，面積は $4\cdot5\cos\theta\cdot3\sin\theta=30\sin2\theta$。$\theta=\frac\pi4$ で最大値 30。</p>
<div class="point">楕円は $a^2-b^2$，双曲線は $a^2+b^2$ で焦点が決まる。楕円上の点は $(a\cos\theta,\ b\sin\theta)$ とおける。</div>
`,
},

{
  id: '2BC-fukuso-04',
  field: '2BC-fukuso',
  points: 16,
  title: '媒介変数表示と極座標',
  body: String.raw`
<p><span class="q">(1)</span>　媒介変数表示 $x=2\cos\theta$，$y=3\sin\theta$ で表される曲線は，楕円 $\dfrac{x^2}{\bx{ア}}+\dfrac{y^2}{\bx{イ}}=1$ である。</p>
<p><span class="q">(2)</span>　媒介変数表示 $x=t+1$，$y=t^2-2t$ で表される曲線は，放物線 $y=x^2-\bx{ウ}x+\bx{エ}$ である。</p>
<p><span class="q">(3)</span>　極座標が $\left(2,\ \dfrac{\pi}{3}\right)$ である点の直交座標は $\left(\bx{オ},\ \sqrt{\bx{カ}}\right)$ である。</p>
<p><span class="q">(4)</span>　極方程式 $r=4\cos\theta$ で表される曲線は，中心 $(\bx{キ},\ 0)$，半径 $\bx{ク}$ の円である。</p>
<p><span class="q">(5)</span>　直交座標が $(-1,\ 1)$ である点の極座標 $(r,\ \theta)$（$r>0$，$0\leqq\theta<2\pi$）は $\left(\sqrt{\bx{ケ}},\ \dfrac{\bx{コ}}{\bx{サ}}\pi\right)$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '4,9', tex: String.raw`\dfrac{x^2}{4}+\dfrac{y^2}{9}=1`, pts: 3 },
    { q: '(2)', k: 'ウ,エ', v: '4,3', tex: 'y=x^2-4x+3', pts: 3 },
    { q: '(3)', k: 'オ,カ', v: '1,3', tex: String.raw`(1,\ \sqrt3)`, pts: 3 },
    { q: '(4)', k: 'キ,ク', v: '2,2', tex: String.raw`\text{中心}\ (2,0),\ \text{半径}\ 2`, pts: 3 },
    { q: '(5)', k: 'ケ,コ/サ', v: '2,3/4', tex: String.raw`\left(\sqrt2,\ \dfrac34\pi\right)`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\cos\theta=\frac x2$，$\sin\theta=\frac y3$ を $\cos^2\theta+\sin^2\theta=1$ に代入して $\frac{x^2}{4}+\frac{y^2}{9}=1$。</p>
<h3>(2)</h3>
<p>$t=x-1$ を代入して $y=(x-1)^2-2(x-1)=x^2-4x+3$。</p>
<h3>(3)</h3>
<p>$x=r\cos\theta=2\cdot\frac12=1$，$y=r\sin\theta=2\cdot\frac{\sqrt3}{2}=\sqrt3$。</p>
<h3>(4)</h3>
<p>両辺に $r$ をかけて $r^2=4r\cos\theta$，すなわち $x^2+y^2=4x$。$(x-2)^2+y^2=4$ なので中心 $(2,0)$，半径 2。</p>
<h3>(5)</h3>
<p>$r=\sqrt{1+1}=\sqrt2$。$\cos\theta=-\frac{1}{\sqrt2}$，$\sin\theta=\frac{1}{\sqrt2}$ より $\theta=\frac34\pi$。</p>
<div class="point">$x=r\cos\theta$，$y=r\sin\theta$，$r^2=x^2+y^2$ の3つで極座標と直交座標を行き来する。</div>
`,
},

{
  id: '2BC-fukuso-05',
  field: '2BC-fukuso',
  points: 16,
  title: '1の3乗根と点の回転',
  body: String.raw`
<p>$i$ を虚数単位とし，$\omega=\dfrac{-1+\sqrt3\,i}{2}$ とする。</p>
<p><span class="q">(1)</span>　$\omega^3=1$ であり，$\omega^2+\omega=\bx{アイ}$ である。</p>
<p><span class="q">(2)</span>　$\omega^{100}+\omega^{50}=\bx{ウエ}$ である。</p>
<p><span class="q">(3)</span>　$(1-\omega)(1-\omega^2)=\bx{オ}$ である。</p>
<p><span class="q">(4)</span>　$z=2+i$ とする。点 $z$ を原点のまわりに $\dfrac\pi2$ だけ回転した点を表す複素数は $\bx{カキ}+\bx{ク}i$ である。</p>
<p><span class="q">(5)</span>　点 $z=2+i$ を点 $1$ のまわりに $\dfrac\pi2$ だけ回転した点を表す複素数は $\bx{ケ}+\bx{コ}i$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ', v: '-1', pts: 3 },
    { q: '(2)', k: 'ウエ', v: '-1', pts: 3 },
    { q: '(3)', k: 'オ', v: '3', pts: 3 },
    { q: '(4)', k: 'カキ,ク', v: '-1,2', tex: '-1+2i', pts: 3 },
    { q: '(5)', k: 'ケ,コ', v: '0,1', tex: 'i', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\omega$ は $x^2+x+1=0$ の解（$x^3-1=(x-1)(x^2+x+1)$）なので，$\omega^3=1$，$\omega^2+\omega=-1$。</p>
<h3>(2)</h3>
<p>$100=3\cdot33+1$，$50=3\cdot16+2$ なので $\omega^{100}=\omega$，$\omega^{50}=\omega^2$。和は $\omega+\omega^2=-1$。</p>
<h3>(3)</h3>
<p>$(1-\omega)(1-\omega^2)=1-\omega-\omega^2+\omega^3=1-(\omega+\omega^2)+1=1+1+1=3$。</p>
<h3>(4)</h3>
<p>原点のまわりの $\frac\pi2$ 回転は $i$ をかけること。$i(2+i)=2i-1=-1+2i$。</p>
<h3>(5)</h3>
<p>$1+i\{(2+i)-1\}=1+i(1+i)=1+i-1=i$。よって $0+1i$。</p>
<div class="point">$\omega^3=1$ を使って指数を 3 で割った余りに落とす。点 $\alpha$ のまわりの回転は「$\alpha$ を原点に移して回転し，戻す」。</div>
`,
}

);
