// 数学ⅡBC 第1・2問相当「三角関数」 オリジナル類題 5題（各15点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-sankaku-01',
  field: '2BC-sankaku',
  points: 15,
  title: '三角関数の合成と方程式・不等式',
  body: String.raw`
<p>$0\leqq\theta<2\pi$ とし，$f(\theta)=\sin\theta+\sqrt3\cos\theta$ とする。</p>
<p><span class="q">(1)</span>　$f(\theta)=\bx{ア}\sin\left(\theta+\dfrac{\pi}{\bx{イ}}\right)$ である。</p>
<p><span class="q">(2)</span>　$f(\theta)$ は $\theta=\dfrac{\pi}{\bx{ウ}}$ のとき最大値 $\bx{エ}$ をとり，$\theta=\dfrac{\bx{オ}}{\bx{カ}}\pi$ のとき最小値をとる。</p>
<p><span class="q">(3)</span>　$f(\theta)=1$ を満たす $\theta$ は $\theta=\dfrac{\pi}{\bx{キ}},\ \dfrac{\bx{クケ}}{\bx{コ}}\pi$ である。</p>
<p><span class="q">(4)</span>　$f(\theta)\geqq1$ を満たす $\theta$ の値の範囲は $0\leqq\theta\leqq\dfrac{\pi}{\bx{サ}}$，$\dfrac{\bx{シス}}{\bx{セ}}\pi\leqq\theta<2\pi$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '2,3', tex: String.raw`2\sin\left(\theta+\dfrac{\pi}{3}\right)`, pts: 3 },
    { q: '(2)', k: 'ウ,エ', v: '6,2', tex: String.raw`\theta=\dfrac{\pi}{6}\ \text{で最大値}\ 2`, pts: 3 },
    { q: '(2)', k: 'オ/カ', v: '7/6', tex: String.raw`\theta=\dfrac{7}{6}\pi`, pts: 3 },
    { q: '(3)', k: 'キ,クケ/コ', v: '2,11/6', tex: String.raw`\theta=\dfrac{\pi}{2},\ \dfrac{11}{6}\pi`, pts: 3 },
    { q: '(4)', k: 'サ,シス/セ', v: '2,11/6', tex: String.raw`0\leqq\theta\leqq\dfrac{\pi}{2},\ \dfrac{11}{6}\pi\leqq\theta<2\pi`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\sqrt{1^2+(\sqrt3)^2}=2$ なので $f(\theta)=2\left(\frac12\sin\theta+\frac{\sqrt3}{2}\cos\theta\right)=2\left(\sin\theta\cos\frac\pi3+\cos\theta\sin\frac\pi3\right)=2\sin\left(\theta+\frac\pi3\right)$。</p>
<h3>(2)</h3>
<p>$\varphi=\theta+\frac\pi3$ とおくと $\frac\pi3\leqq\varphi<\frac73\pi$。$\sin\varphi=1$ となる $\varphi=\frac\pi2$ のとき $\theta=\frac\pi6$ で最大値 2。$\sin\varphi=-1$ となる $\varphi=\frac32\pi$ のとき $\theta=\frac76\pi$ で最小値 $-2$。</p>
<h3>(3)</h3>
<p>$\sin\varphi=\frac12$，$\frac\pi3\leqq\varphi<\frac73\pi$ より $\varphi=\frac56\pi,\ \frac{13}{6}\pi$。よって $\theta=\frac\pi2,\ \frac{11}{6}\pi$。</p>
<h3>(4)</h3>
<p>$\sin\varphi\geqq\frac12$ となるのは $\frac\pi3\leqq\varphi\leqq\frac56\pi$ または $\frac{13}{6}\pi\leqq\varphi<\frac73\pi$。$\theta$ に直すと $0\leqq\theta\leqq\frac\pi2$，$\frac{11}{6}\pi\leqq\theta<2\pi$。</p>
<div class="point">合成した後は，$\theta+\alpha$ の範囲を必ず書き直してから単位円で考える。</div>
`,
},

{
  id: '2BC-sankaku-02',
  field: '2BC-sankaku',
  points: 15,
  title: '2倍角の公式と2次関数の最大・最小',
  body: String.raw`
<p>$0\leqq\theta<2\pi$ とし，$y=\cos2\theta+2\sin\theta$ とする。$s=\sin\theta$ とおく。</p>
<p><span class="q">(1)</span>　$y$ を $s$ で表すと $y=\bx{アイ}s^2+\bx{ウ}s+\bx{エ}$ である。</p>
<p><span class="q">(2)</span>　$y$ の最大値は $\dfrac{\bx{オ}}{\bx{カ}}$ であり，そのときの $\theta$ は $\theta=\dfrac{\pi}{\bx{キ}},\ \dfrac{\bx{ク}}{\bx{ケ}}\pi$ である。また，$y$ の最小値は $\bx{コサ}$ である。</p>
<p><span class="q">(3)</span>　$k$ を定数とする。$\theta$ の方程式 $y=k$ が $0\leqq\theta<2\pi$ の範囲に異なる4つの解をもつような $k$ の値の範囲は $\bx{シ}< k<\dfrac{\bx{ス}}{\bx{セ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ,ウ,エ', v: '-2,2,1', tex: String.raw`y=-2s^2+2s+1`, pts: 3 },
    { q: '(2)', k: 'オ/カ', v: '3/2', pts: 3 },
    { q: '(2)', k: 'キ,ク/ケ', v: '6,5/6', tex: String.raw`\theta=\dfrac{\pi}{6},\ \dfrac{5}{6}\pi`, pts: 3 },
    { q: '(2)', k: 'コサ', v: '-3', pts: 3 },
    { q: '(3)', k: 'シ,ス/セ', v: '1,3/2', tex: String.raw`1< k<\dfrac{3}{2}`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\cos2\theta=1-2\sin^2\theta$ なので $y=1-2s^2+2s=-2s^2+2s+1$。</p>
<h3>(2)</h3>
<p>$y=-2\left(s-\frac12\right)^2+\frac32$，$-1\leqq s\leqq1$。</p>
<p>$s=\frac12$ のとき最大値 $\frac32$。$\sin\theta=\frac12$ より $\theta=\frac\pi6,\ \frac56\pi$。</p>
<p>$s=-1$ のとき最小値 $-2-2+1=-3$（$\theta=\frac32\pi$）。</p>
<h3>(3)</h3>
<p>$-1< s<1$ を満たす $s$ 1つに対して $\theta$ は2つ，$s=\pm1$ に対しては1つ。よって $\theta$ が4つ ⇔ $s$ の2次方程式 $-2s^2+2s+1=k$ が $-1< s<1$ に異なる2解をもつ。</p>
<p>放物線 $y=-2s^2+2s+1$（$-1\leqq s\leqq1$）と直線 $y=k$ の交点を考える。$s=1$ で $y=1$，$s=-1$ で $y=-3$，頂点の $y$ 座標は $\frac32$。2交点が $-1< s<1$ にあるのは $1< k<\frac32$。</p>
<div class="point">$\sin\theta=s$ の解の個数は，$|s|<1$ なら2個，$s=\pm1$ なら1個（$0\leqq\theta<2\pi$）。</div>
`,
},

{
  id: '2BC-sankaku-03',
  field: '2BC-sankaku',
  points: 15,
  title: '正接の加法定理と2直線のなす角',
  body: String.raw`
<p>$\alpha,\ \beta$ は $0<\alpha<\dfrac\pi2$，$0<\beta<\dfrac\pi2$ を満たし，$\tan\alpha=\dfrac12$，$\tan\beta=\dfrac13$ である。</p>
<p><span class="q">(1)</span>　$\tan(\alpha+\beta)=\bx{ア}$ であり，$\alpha+\beta=\dfrac{\pi}{\bx{イ}}$ である。</p>
<p><span class="q">(2)</span>　$\sin2\alpha=\dfrac{\bx{ウ}}{\bx{エ}}$，$\cos2\alpha=\dfrac{\bx{オ}}{\bx{カ}}$ である。</p>
<p><span class="q">(3)</span>　$\tan(\alpha-\beta)=\dfrac{\bx{キ}}{\bx{ク}}$ である。</p>
<p><span class="q">(4)</span>　2直線 $y=3x$ と $y=\dfrac12x$ のなす鋭角は $\dfrac{\pi}{\bx{ケ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '1', pts: 2 },
    { q: '(1)', k: 'イ', v: '4', pts: 2 },
    { q: '(2)', k: 'ウ/エ', v: '4/5', pts: 3 },
    { q: '(2)', k: 'オ/カ', v: '3/5', pts: 2 },
    { q: '(3)', k: 'キ/ク', v: '1/7', pts: 3 },
    { q: '(4)', k: 'ケ', v: '4', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$$\tan(\alpha+\beta)=\frac{\frac12+\frac13}{1-\frac12\cdot\frac13}=\frac{5/6}{5/6}=1$$</p>
<p>$0<\alpha+\beta<\pi$ なので $\alpha+\beta=\frac\pi4$。</p>
<h3>(2)</h3>
<p>$\tan\alpha=\frac12$ より，直角をはさむ辺が 2，1 の直角三角形を考えて $\cos\alpha=\frac{2}{\sqrt5}$，$\sin\alpha=\frac{1}{\sqrt5}$。</p>
<p>$\sin2\alpha=2\sin\alpha\cos\alpha=\frac45$，$\cos2\alpha=\cos^2\alpha-\sin^2\alpha=\frac45-\frac15=\frac35$。</p>
<h3>(3)</h3>
<p>$$\tan(\alpha-\beta)=\frac{\frac12-\frac13}{1+\frac12\cdot\frac13}=\frac{1/6}{7/6}=\frac17$$</p>
<h3>(4)</h3>
<p>2直線と $x$ 軸の正の向きとのなす角を $\gamma_1,\gamma_2$ とすると $\tan\gamma_1=3$，$\tan\gamma_2=\frac12$。</p>
<p>$$\tan(\gamma_1-\gamma_2)=\frac{3-\frac12}{1+\frac32}=1$$ より，なす鋭角は $\frac\pi4$。</p>
<div class="point">2直線のなす角は「傾き ＝ $\tan$（$x$ 軸とのなす角）」と加法定理で求める。</div>
`,
},

{
  id: '2BC-sankaku-04',
  field: '2BC-sankaku',
  points: 15,
  title: '三角方程式・不等式と半角の公式',
  body: String.raw`
<p><span class="q">(1)</span>　$0\leqq\theta<2\pi$ のとき，方程式 $2\sin^2\theta+3\cos\theta-3=0$ を考える。$\sin^2\theta=1-\cos^2\theta$ を用いると</p>
<p>$$2\cos^2\theta-\bx{ア}\cos\theta+\bx{イ}=0$$</p>
<p>となる。よって，方程式の解は $\theta=\bx{ウ},\ \dfrac{\pi}{\bx{エ}},\ \dfrac{\bx{オ}}{\bx{カ}}\pi$ である。</p>
<p><span class="q">(2)</span>　$0\leqq\theta<2\pi$ のとき，不等式 $2\sin^2\theta+3\cos\theta-3>0$ の解は $0<\theta<\dfrac{\pi}{\bx{キ}}$，$\dfrac{\bx{ク}}{\bx{ケ}}\pi<\theta<2\pi$ である。</p>
<p><span class="q">(3)</span>　半角の公式を用いると，$\cos\dfrac{\pi}{8}=\dfrac{\sqrt{\bx{コ}+\sqrt{\bx{サ}}}}{\bx{シ}}$ であり，$\cos^2\dfrac{\pi}{12}=\dfrac{\bx{ス}+\sqrt{\bx{セ}}}{\bx{ソ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '3,1', tex: String.raw`2\cos^2\theta-3\cos\theta+1=0`, pts: 2 },
    { q: '(1)', k: 'ウ,エ,オ/カ', v: '0,3,5/3', tex: String.raw`\theta=0,\ \dfrac{\pi}{3},\ \dfrac{5}{3}\pi`, pts: 4 },
    { q: '(2)', k: 'キ,ク/ケ', v: '3,5/3', tex: String.raw`0<\theta<\dfrac{\pi}{3},\ \dfrac{5}{3}\pi<\theta<2\pi`, pts: 3 },
    { q: '(3)', k: 'コ,サ,シ', v: '2,2,2', tex: String.raw`\dfrac{\sqrt{2+\sqrt{2}}}{2}`, pts: 3 },
    { q: '(3)', k: 'ス,セ,ソ', v: '2,3,4', tex: String.raw`\dfrac{2+\sqrt{3}}{4}`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$2(1-\cos^2\theta)+3\cos\theta-3=0 \iff 2\cos^2\theta-3\cos\theta+1=0 \iff (2\cos\theta-1)(\cos\theta-1)=0$。</p>
<p>$\cos\theta=1$ より $\theta=0$，$\cos\theta=\frac12$ より $\theta=\frac\pi3,\ \frac53\pi$。</p>
<h3>(2)</h3>
<p>不等式は $(2\cos\theta-1)(\cos\theta-1)<0 \iff \frac12<\cos\theta<1$。単位円で $x$ 座標が $\frac12$ より大きく 1 より小さい部分なので $0<\theta<\frac\pi3$，$\frac53\pi<\theta<2\pi$。</p>
<h3>(3)</h3>
<p>$\cos^2\frac\alpha2=\frac{1+\cos\alpha}{2}$ を使う。</p>
<p>$\cos^2\frac\pi8=\frac{1+\frac{\sqrt2}{2}}{2}=\frac{2+\sqrt2}{4}$。$\cos\frac\pi8>0$ より $\cos\frac\pi8=\frac{\sqrt{2+\sqrt2}}{2}$。</p>
<p>$\cos^2\frac{\pi}{12}=\frac{1+\frac{\sqrt3}{2}}{2}=\frac{2+\sqrt3}{4}$。</p>
<div class="point">$\sin$ と $\cos$ が混ざった式は，$\sin^2\theta+\cos^2\theta=1$ で一方にそろえる。</div>
`,
},

{
  id: '2BC-sankaku-05',
  field: '2BC-sankaku',
  points: 15,
  title: '三角関数のグラフと周期',
  body: String.raw`
<p>関数 $y=3\sin\left(\dfrac{x}{2}+\dfrac{\pi}{6}\right)$ を考える。</p>
<p><span class="q">(1)</span>　この関数の正の周期のうち最小のものは $\bx{ア}\pi$ であり，最大値は $\bx{イ}$ である。</p>
<p><span class="q">(2)</span>　この関数のグラフは，$y=3\sin\dfrac{x}{2}$ のグラフを $x$ 軸方向に $-\dfrac{\pi}{\bx{ウ}}$ だけ平行移動したものである。</p>
<p><span class="q">(3)</span>　$0\leqq x\leqq2\pi$ において，$y$ は $x=\dfrac{\bx{エ}}{\bx{オ}}\pi$ のとき最大となり，最小値は $\dfrac{\bx{カキ}}{\bx{ク}}$ である。</p>
<p>また，$0\leqq x\leqq2\pi$ において $y=0$ となる $x$ は $x=\dfrac{\bx{ケ}}{\bx{コ}}\pi$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '4', pts: 2 },
    { q: '(1)', k: 'イ', v: '3', pts: 2 },
    { q: '(2)', k: 'ウ', v: '3', pts: 3 },
    { q: '(3)', k: 'エ/オ', v: '2/3', tex: String.raw`x=\dfrac{2}{3}\pi`, pts: 3 },
    { q: '(3)', k: 'カキ/ク', v: '-3/2', pts: 3 },
    { q: '(3)', k: 'ケ/コ', v: '5/3', tex: String.raw`x=\dfrac{5}{3}\pi`, pts: 2 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\sin(ax+b)$ の周期は $\frac{2\pi}{a}$ なので $\frac{2\pi}{1/2}=4\pi$。最大値は振幅の 3。</p>
<h3>(2)</h3>
<p>$\frac x2+\frac\pi6=\frac12\left(x+\frac\pi3\right)$ なので，$y=3\sin\frac12\left(x+\frac\pi3\right)$。これは $y=3\sin\frac x2$ を $x$ 軸方向に $-\frac\pi3$ 平行移動したもの。</p>
<div class="point">$\sin(ax+b)$ の平行移動量は $-b$ ではなく $-\frac{b}{a}$。必ず $a$ でくくる。</div>
<h3>(3)</h3>
<p>$u=\frac x2+\frac\pi6$ とおくと，$0\leqq x\leqq2\pi$ で $\frac\pi6\leqq u\leqq\frac76\pi$。</p>
<p>最大は $u=\frac\pi2$，すなわち $x=\frac23\pi$。最小は $u=\frac76\pi$（$x=2\pi$）で $3\sin\frac76\pi=-\frac32$。</p>
<p>$y=0$ は $u=\pi$ のときで $x=\frac53\pi$。</p>
`,
}

);
