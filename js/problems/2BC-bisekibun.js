// 数学ⅡBC 第3問相当「微分・積分」 オリジナル類題 5題（各22点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-bisekibun-01',
  field: '2BC-bisekibun',
  points: 22,
  title: '3次関数の極値・接線と面積',
  body: String.raw`
<p>$f(x)=x^3-3x^2-9x+5$ とする。</p>
<p><span class="q">(1)</span>　$f'(x)=3x^2-\bx{ア}x-\bx{イ}$ である。$f(x)$ は $x=\bx{ウエ}$ で極大値 $\bx{オカ}$ をとり，$x=\bx{キ}$ で極小値 $\bx{クケコ}$ をとる。</p>
<p><span class="q">(2)</span>　曲線 $y=f(x)$ 上の点 $(0,\ 5)$ における接線 $\ell$ の方程式は $y=\bx{サシ}x+\bx{ス}$ である。</p>
<p><span class="q">(3)</span>　$k$ を定数とする。方程式 $f(x)=k$ が異なる3つの実数解をもつような $k$ の値の範囲は $\bx{セソタ}< k<\bx{チツ}$ である。</p>
<p><span class="q">(4)</span>　$\displaystyle\int_0^2f(x)\,dx=\bx{テトナ}$ である。</p>
<p><span class="q">(5)</span>　曲線 $y=f(x)$ と接線 $\ell$ で囲まれた部分の面積は $\dfrac{\bx{ニヌ}}{\bx{ネ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '6,9', tex: "3x^2-6x-9", pts: 2 },
    { q: '(1)', k: 'ウエ,オカ', v: '-1,10', tex: String.raw`x=-1\ \text{で極大値}\ 10`, pts: 3 },
    { q: '(1)', k: 'キ,クケコ', v: '3,-22', tex: String.raw`x=3\ \text{で極小値}\ -22`, pts: 3 },
    { q: '(2)', k: 'サシ,ス', v: '-9,5', tex: 'y=-9x+5', pts: 3 },
    { q: '(3)', k: 'セソタ,チツ', v: '-22,10', tex: '-22< k<10', pts: 3 },
    { q: '(4)', k: 'テトナ', v: '-12', pts: 4 },
    { q: '(5)', k: 'ニヌ/ネ', v: '27/4', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$f'(x)=3x^2-6x-9=3(x+1)(x-3)$。増減表より $x=-1$ で極大，$x=3$ で極小。</p>
<p>$f(-1)=-1-3+9+5=10$，$f(3)=27-27-27+5=-22$。</p>
<h3>(2)</h3>
<p>$f'(0)=-9$ なので $y=-9x+5$。</p>
<h3>(3)</h3>
<p>$y=f(x)$ と $y=k$ が3点で交わる条件なので，極小値 $< k<$ 極大値，すなわち $-22< k<10$。</p>
<h3>(4)</h3>
<p>$$\int_0^2(x^3-3x^2-9x+5)\,dx=\left[\frac{x^4}{4}-x^3-\frac92x^2+5x\right]_0^2=4-8-18+10=-12$$</p>
<h3>(5)</h3>
<p>$f(x)-(-9x+5)=x^3-3x^2=x^2(x-3)$。共有点は $x=0$（接点）と $x=3$。$0< x<3$ では $x^2(x-3)<0$ なので接線が上。</p>
<p>$$\int_0^3(3x^2-x^3)\,dx=\left[x^3-\frac{x^4}{4}\right]_0^3=27-\frac{81}{4}=\frac{27}{4}$$</p>
<div class="point">曲線と接線の差は，接点で重解をもつので $(x-a)^2(x-b)$ の形に因数分解できる。</div>
`,
},

{
  id: '2BC-bisekibun-02',
  field: '2BC-bisekibun',
  points: 22,
  title: '放物線と接線の面積・定積分で表された関数',
  body: String.raw`
<p><span class="q">(1)</span>　放物線 $y=x^2-2x$ と直線 $y=x$ で囲まれた部分の面積は $\dfrac{\bx{ア}}{\bx{イ}}$ である。</p>
<p><span class="q">(2)</span>　点 $(1,\ -3)$ から放物線 $y=x^2$ に引いた2本の接線の接点の $x$ 座標は $\bx{ウエ}$ と $\bx{オ}$ である。また，この2本の接線と放物線 $y=x^2$ で囲まれた部分の面積は $\dfrac{\bx{カキ}}{\bx{ク}}$ である。</p>
<p><span class="q">(3)</span>　$F(x)=\displaystyle\int_0^x(t^2-2t)\,dt$ とする。$x>0$ における $F(x)$ の最小値は $\dfrac{\bx{ケコ}}{\bx{サ}}$ である。</p>
<p><span class="q">(4)</span>　関数 $f(x)$ が $f(x)=x^2+x\displaystyle\int_0^1f(t)\,dt$ を満たすとき，$\displaystyle\int_0^1f(t)\,dt=\dfrac{\bx{シ}}{\bx{ス}}$ である。</p>
<p><span class="q">(5)</span>　関数 $g(x)$ と定数 $a$ が $\displaystyle\int_a^xg(t)\,dt=x^2-3x+2$ を満たすとき，$g(x)=\bx{セ}x-\bx{ソ}$ であり，$a=\bx{タ},\ \bx{チ}$ である。（$\bx{タ}<\bx{チ}$）</p>
`,
  answers: [
    { q: '(1)', k: 'ア/イ', v: '9/2', pts: 3 },
    { q: '(2)', k: 'ウエ,オ', v: '-1,3', tex: String.raw`x=-1,\ 3`, pts: 3 },
    { q: '(2)', k: 'カキ/ク', v: '16/3', pts: 4 },
    { q: '(3)', k: 'ケコ/サ', v: '-4/3', pts: 3 },
    { q: '(4)', k: 'シ/ス', v: '2/3', pts: 4 },
    { q: '(5)', k: 'セ,ソ', v: '2,3', tex: 'g(x)=2x-3', pts: 2 },
    { q: '(5)', k: 'タ,チ', v: '1,2', tex: 'a=1,\\ 2', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$x^2-2x=x$ より $x=0,3$。$0< x<3$ で直線が上なので</p>
<p>$$\int_0^3\{x-(x^2-2x)\}dx=-\int_0^3x(x-3)\,dx=\frac{(3-0)^3}{6}=\frac92$$</p>
<div class="point">$\displaystyle\int_\alpha^\beta(x-\alpha)(x-\beta)\,dx=-\frac{(\beta-\alpha)^3}{6}$（「6分の1公式」）。</div>
<h3>(2)</h3>
<p>$x=a$ における接線は $y=2ax-a^2$。点 $(1,-3)$ を通るので $-3=2a-a^2$，$a^2-2a-3=0$，$a=-1,\ 3$。</p>
<p>接線は $y=-2x-1$ と $y=6x-9$ で，交点の $x$ 座標は $1$（接点の中点）。面積は</p>
<p>$$\int_{-1}^{1}(x+1)^2dx+\int_1^3(x-3)^2dx=\frac83+\frac83=\frac{16}{3}$$</p>
<h3>(3)</h3>
<p>$F'(x)=x^2-2x=x(x-2)$。$x>0$ では $x=2$ で極小かつ最小。$F(2)=\frac83-4=-\frac43$。</p>
<h3>(4)</h3>
<p>$c=\int_0^1f(t)\,dt$（定数）とおくと $f(x)=x^2+cx$。$c=\int_0^1(t^2+ct)\,dt=\frac13+\frac c2$ より $c=\frac23$。</p>
<h3>(5)</h3>
<p>両辺を $x$ で微分して $g(x)=2x-3$。$x=a$ を代入すると左辺は 0 なので $a^2-3a+2=0$，$a=1,2$。</p>
<div class="point">$\dfrac{d}{dx}\displaystyle\int_a^xg(t)\,dt=g(x)$，$\displaystyle\int_a^ag(t)\,dt=0$ の2つを使う。</div>
`,
},

{
  id: '2BC-bisekibun-03',
  field: '2BC-bisekibun',
  points: 22,
  title: '容積の最大化と3次関数の決定',
  body: String.raw`
<p><span class="q">(1)</span>　1辺の長さが 12 cm の正方形の厚紙の四隅から，1辺 $x$ cm の正方形を切り取り，残りを折り曲げてふたのない箱を作る（$0< x<6$）。箱の容積を $V$ cm$^3$ とすると</p>
<p>$$V=4x^3-\bx{アイ}x^2+\bx{ウエオ}x$$</p>
<p>である。$V$ は $x=\bx{カ}$ のとき最大値 $\bx{キクケ}$ をとる。</p>
<p><span class="q">(2)</span>　3次関数 $f(x)=x^3+ax^2+bx$ が $x=1$ で極値 $-2$ をとるとき，$a=\bx{コ}$，$b=\bx{サシ}$ であり，$f(x)$ の極大値は $\bx{ス}$ である。</p>
<p><span class="q">(3)</span>　(2) の $f(x)$ について，方程式 $f(x)=k$ の異なる実数解がちょうど2個となるような $k$ の値は $k=\bx{セソ},\ \bx{タ}$ である。</p>
<p><span class="q">(4)</span>　(2) の曲線 $y=f(x)$ と $x$ 軸で囲まれた部分のうち，$x\geqq0$ の部分の面積は $\dfrac{\bx{チ}}{\bx{ツ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ,ウエオ', v: '48,144', tex: 'V=4x^3-48x^2+144x', pts: 3 },
    { q: '(1)', k: 'カ', v: '2', pts: 3 },
    { q: '(1)', k: 'キクケ', v: '128', pts: 3 },
    { q: '(2)', k: 'コ,サシ', v: '0,-3', tex: 'a=0,\\ b=-3', pts: 4 },
    { q: '(2)', k: 'ス', v: '2', pts: 3 },
    { q: '(3)', k: 'セソ,タ', v: '-2,2', tex: 'k=-2,\\ 2', pts: 3 },
    { q: '(4)', k: 'チ/ツ', v: '9/4', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>箱の底面は1辺 $12-2x$ の正方形，高さ $x$ なので $V=x(12-2x)^2=4x^3-48x^2+144x$。</p>
<p>$V'=12x^2-96x+144=12(x-2)(x-6)$。$0< x<6$ では $x=2$ で極大かつ最大。$V=2\cdot8^2=128$。</p>
<h3>(2)</h3>
<p>$f'(x)=3x^2+2ax+b$。条件 $f'(1)=0$，$f(1)=-2$ より</p>
<p>$3+2a+b=0$，$1+a+b=-2$。引くと $2+a=2$，$a=0$，$b=-3$。</p>
<p>$f(x)=x^3-3x$，$f'(x)=3(x+1)(x-1)$。$x=1$ で極小値 $-2$（条件どおり），$x=-1$ で極大値 2。</p>
<div class="point">$f'(1)=0$ は極値をとるための必要条件。求めた後に増減表で本当に極値になるか確認する。</div>
<h3>(3)</h3>
<p>$y=x^3-3x$ と $y=k$ の共有点がちょうど2個になるのは，直線が極大点または極小点を通るとき。$k=2,\ -2$。</p>
<h3>(4)</h3>
<p>$x^3-3x=x(x^2-3)=0$ より $x=0,\pm\sqrt3$。$0< x<\sqrt3$ では $f(x)<0$ なので</p>
<p>$$\int_0^{\sqrt3}(3x-x^3)\,dx=\left[\frac32x^2-\frac{x^4}{4}\right]_0^{\sqrt3}=\frac92-\frac94=\frac94$$</p>
`,
},

{
  id: '2BC-bisekibun-04',
  field: '2BC-bisekibun',
  points: 22,
  title: '3次関数の接線の本数と平均値の定理',
  body: String.raw`
<p>$f(x)=x^3-x$ とし，曲線 $y=f(x)$ を $C$ とする。</p>
<p><span class="q">(1)</span>　$C$ 上の点 $(1,\ 0)$ における接線の方程式は $y=\bx{ア}x-\bx{イ}$ である。この接線と $C$ の共有点のうち，接点以外の点の $x$ 座標は $\bx{ウエ}$ である。</p>
<p>この接線と $C$ で囲まれた部分の面積は $\dfrac{\bx{オカ}}{\bx{キ}}$ である。</p>
<p><span class="q">(2)</span>　点 $(1,\ k)$ から $C$ に異なる3本の接線が引けるような $k$ の値の範囲は $\bx{クケ}< k<\bx{コ}$ である。</p>
<p><span class="q">(3)</span>　区間 $0\leqq x\leqq2$ における $f(x)$ の平均変化率と等しい微分係数 $f'(c)$ をもつ $c$（$0< c<2$）は $c=\dfrac{\bx{サ}\sqrt{\bx{シ}}}{\bx{ス}}$ である。</p>
<p><span class="q">(4)</span>　$\displaystyle\int_0^1|f(x)|\,dx=\dfrac{\bx{セ}}{\bx{ソ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '2,2', tex: 'y=2x-2', pts: 3 },
    { q: '(1)', k: 'ウエ', v: '-2', pts: 3 },
    { q: '(1)', k: 'オカ/キ', v: '27/4', pts: 4 },
    { q: '(2)', k: 'クケ,コ', v: '-1,0', tex: '-1< k<0', pts: 4 },
    { q: '(3)', k: 'サ,シ,ス', v: '2,3,3', tex: String.raw`c=\dfrac{2\sqrt3}{3}`, pts: 4 },
    { q: '(4)', k: 'セ/ソ', v: '1/4', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$f'(x)=3x^2-1$，$f'(1)=2$ なので $y=2(x-1)=2x-2$。</p>
<p>$x^3-x-(2x-2)=x^3-3x+2=(x-1)^2(x+2)$ なので，もう1つの共有点は $x=-2$。</p>
<p>$-2< x<1$ で $(x-1)^2(x+2)>0$（曲線が上）なので</p>
<p>$$\int_{-2}^1(x^3-3x+2)\,dx=\left[\frac{x^4}{4}-\frac32x^2+2x\right]_{-2}^1=\frac34-(-6)=\frac{27}{4}$$</p>
<h3>(2)</h3>
<p>$x=t$ における接線は $y=(3t^2-1)(x-t)+t^3-t=(3t^2-1)x-2t^3$。点 $(1,k)$ を通る条件は</p>
<p>$$k=-2t^3+3t^2-1$$</p>
<p>3次関数では接点が異なれば接線も異なるので，この $t$ の方程式が異なる3つの実数解をもてばよい。$g(t)=-2t^3+3t^2-1$ とすると $g'(t)=-6t(t-1)$，極小値 $g(0)=-1$，極大値 $g(1)=0$。よって $-1< k<0$。</p>
<h3>(3)</h3>
<p>平均変化率は $\frac{f(2)-f(0)}{2-0}=\frac{6}{2}=3$。$3c^2-1=3$ より $c^2=\frac43$，$c=\frac{2}{\sqrt3}=\frac{2\sqrt3}{3}$（$0< c<2$ を満たす）。</p>
<h3>(4)</h3>
<p>$0\leqq x\leqq1$ では $f(x)=x(x-1)(x+1)\leqq0$ なので</p>
<p>$$\int_0^1(x-x^3)\,dx=\frac12-\frac14=\frac14$$</p>
<div class="point">接線の本数は「接点の個数」として，接点の $x$ 座標 $t$ の方程式の実数解の個数を数える。</div>
`,
},

{
  id: '2BC-bisekibun-05',
  field: '2BC-bisekibun',
  points: 22,
  title: '面積の最小値',
  body: String.raw`
<p><span class="q">(1)</span>　点 $(1,\ 2)$ を通り傾き $m$ の直線を $\ell$ とする。$\ell$ と放物線 $y=x^2$ の2つの交点の $x$ 座標を $\alpha,\ \beta$（$\alpha<\beta$）とすると</p>
<p>$$\beta-\alpha=\sqrt{m^2-\bx{ア}m+\bx{イ}}$$</p>
<p>である。$\ell$ と放物線で囲まれた部分の面積は $m=\bx{ウ}$ のとき最小となり，最小値は $\dfrac{\bx{エ}}{\bx{オ}}$ である。</p>
<p><span class="q">(2)</span>　$0< a<1$ とし，$S(a)=\displaystyle\int_0^1|x^2-a^2|\,dx$ とする。</p>
<p>$$S(a)=\frac{\bx{カ}}{\bx{キ}}a^3-a^2+\frac{\bx{ク}}{\bx{ケ}}$$</p>
<p>であり，$S(a)$ は $a=\dfrac{\bx{コ}}{\bx{サ}}$ のとき最小値 $\dfrac{\bx{シ}}{\bx{ス}}$ をとる。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '4,8', tex: String.raw`\sqrt{m^2-4m+8}`, pts: 4 },
    { q: '(1)', k: 'ウ', v: '2', pts: 3 },
    { q: '(1)', k: 'エ/オ', v: '4/3', pts: 4 },
    { q: '(2)', k: 'カ/キ,ク/ケ', v: '4/3,1/3', tex: String.raw`S(a)=\dfrac43a^3-a^2+\dfrac13`, pts: 4 },
    { q: '(2)', k: 'コ/サ', v: '1/2', pts: 3 },
    { q: '(2)', k: 'シ/ス', v: '1/4', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\ell:\ y=m(x-1)+2$。$x^2=mx-m+2$ より $x^2-mx+m-2=0$。解と係数の関係から $\alpha+\beta=m$，$\alpha\beta=m-2$。</p>
<p>$(\beta-\alpha)^2=(\alpha+\beta)^2-4\alpha\beta=m^2-4m+8=(m-2)^2+4$。</p>
<p>面積は $\dfrac{(\beta-\alpha)^3}{6}$ で，$\beta-\alpha$ が最小のとき最小。$m=2$ で $\beta-\alpha=2$，面積 $\dfrac{8}{6}=\dfrac43$。</p>
<h3>(2)</h3>
<p>$0\leqq x\leqq a$ では $a^2-x^2\geqq0$，$a\leqq x\leqq1$ では $x^2-a^2\geqq0$。</p>
<p>$$S(a)=\int_0^a(a^2-x^2)\,dx+\int_a^1(x^2-a^2)\,dx=\frac23a^3+\left(\frac13-a^2+\frac23a^3\right)=\frac43a^3-a^2+\frac13$$</p>
<p>$S'(a)=4a^2-2a=2a(2a-1)$。$0< a<1$ では $a=\frac12$ で極小かつ最小。</p>
<p>$S\left(\frac12\right)=\frac16-\frac14+\frac13=\frac14$。</p>
<div class="point">絶対値を含む定積分は，中身の符号が変わる点で積分区間を分ける。</div>
`,
}

);
