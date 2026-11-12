// 数学ⅡBC 第1・2問相当「指数・対数」 オリジナル類題 5題（各15点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-shisu-01',
  field: '2BC-shisu',
  points: 15,
  title: '置き換えによる指数方程式と最小値',
  body: String.raw`
<p>関数 $f(x)=4^x-3\cdot2^{x+1}+8$ を考える。$t=2^x$ とおく。</p>
<p><span class="q">(1)</span>　$f(x)=t^2-\bx{ア}t+\bx{イ}$ である。方程式 $f(x)=0$ の解は $x=\bx{ウ},\ \bx{エ}$ である。（$\bx{ウ}<\bx{エ}$）</p>
<p><span class="q">(2)</span>　$f(x)$ の最小値は $\bx{オカ}$ であり，そのときの $x$ の値は $x=\log_{\bx{キ}}\bx{ク}$ である。</p>
<p><span class="q">(3)</span>　$k$ を定数とする。方程式 $f(x)=k$ が異なる2つの実数解をもつような $k$ の値の範囲は $\bx{ケコ}< k<\bx{サ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '6,8', tex: String.raw`t^2-6t+8`, pts: 2 },
    { q: '(1)', k: 'ウ,エ', v: '1,2', tex: String.raw`x=1,\ 2`, pts: 3 },
    { q: '(2)', k: 'オカ', v: '-1', pts: 3 },
    { q: '(2)', k: 'キ,ク', v: '2,3', tex: String.raw`x=\log_2 3`, pts: 3 },
    { q: '(3)', k: 'ケコ,サ', v: '-1,8', tex: String.raw`-1< k<8`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$4^x=(2^x)^2=t^2$，$2^{x+1}=2t$ なので $f(x)=t^2-6t+8=(t-2)(t-4)$。</p>
<p>$t=2,4$ より $2^x=2,\ 4$，$x=1,\ 2$。</p>
<h3>(2)</h3>
<p>$t>0$ で $f=(t-3)^2-1$。$t=3$ のとき最小値 $-1$。$2^x=3$ より $x=\log_23$。</p>
<h3>(3)</h3>
<p>$t=2^x$ は $x$ と $t\ (>0)$ が1対1に対応するので，$t$ の方程式 $(t-3)^2-1=k$ が異なる2つの正の解をもてばよい。</p>
<p>$g(t)=(t-3)^2-1$ のグラフ（$t>0$）と直線 $y=k$ が2点で交わる条件は，頂点の値 $-1$ より大きく，$g(0)=8$ より小さいこと。よって $-1< k<8$。</p>
<div class="point">置き換えたら新しい文字の範囲（ここでは $t>0$）を必ず確認する。</div>
`,
},

{
  id: '2BC-shisu-02',
  field: '2BC-shisu',
  points: 15,
  title: '常用対数と桁数・最高位の数字',
  body: String.raw`
<p>$\log_{10}2=0.3010$，$\log_{10}3=0.4771$ とする。</p>
<p><span class="q">(1)</span>　$6^{20}$ は $\bx{アイ}$ 桁の整数であり，その最高位の数字は $\bx{ウ}$ である。</p>
<p><span class="q">(2)</span>　$\left(\dfrac13\right)^{30}$ を小数で表すと，小数第 $\bx{エオ}$ 位に初めて 0 でない数字が現れる。</p>
<p><span class="q">(3)</span>　$\log_23\cdot\log_38=\bx{カ}$ であり，$\dfrac{\log_427}{\log_23}=\dfrac{\bx{キ}}{\bx{ク}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ', v: '16', pts: 3 },
    { q: '(1)', k: 'ウ', v: '3', pts: 3 },
    { q: '(2)', k: 'エオ', v: '15', pts: 3 },
    { q: '(3)', k: 'カ', v: '3', pts: 3 },
    { q: '(3)', k: 'キ/ク', v: '3/2', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\log_{10}6^{20}=20(\log_{10}2+\log_{10}3)=20\times0.7781=15.562$。</p>
<p>$10^{15}<6^{20}<10^{16}$ なので 16 桁。</p>
<p>$6^{20}=10^{15}\times10^{0.562}$。$\log_{10}3=0.4771<0.562<0.6020=\log_{10}4$ より $3<10^{0.562}<4$。最高位の数字は 3。</p>
<h3>(2)</h3>
<p>$\log_{10}3^{-30}=-30\times0.4771=-14.313$。$10^{-15}<3^{-30}<10^{-14}$ なので，小数第15位に初めて0でない数字が現れる。</p>
<h3>(3)</h3>
<p>底の変換：$\log_23\cdot\log_38=\log_23\cdot\dfrac{\log_28}{\log_23}=3$。</p>
<p>$\log_427=\dfrac{\log_227}{\log_24}=\dfrac{3\log_23}{2}$ なので $\dfrac{\log_427}{\log_23}=\dfrac32$。</p>
<div class="point">$N$ の桁数：$n-1\leqq\log_{10}N< n$ なら $n$ 桁。小数：$-n\leqq\log_{10}N<-n+1$ なら小数第 $n$ 位。</div>
`,
},

{
  id: '2BC-shisu-03',
  field: '2BC-shisu',
  points: 15,
  title: '対数関数の最大・最小と対数不等式',
  body: String.raw`
<p><span class="q">(1)</span>　$\dfrac12\leqq x\leqq16$ のとき，関数 $y=(\log_2x)^2-4\log_2x+1$ を考える。$t=\log_2x$ とおくと，$t$ のとり得る値の範囲は $\bx{アイ}\leqq t\leqq\bx{ウ}$ である。</p>
<p>$y$ の最小値は $\bx{エオ}$ で，そのときの $x$ の値は $x=\bx{カ}$ である。また，$y$ の最大値は $\bx{キ}$ で，そのときの $x$ の値は $x=\dfrac{\bx{ク}}{\bx{ケ}}$ である。</p>
<p><span class="q">(2)</span>　不等式 $\log_2(x-1)+\log_2(x+1)<3$ の解は $\bx{コ}< x<\bx{サ}$ である。</p>
<p><span class="q">(3)</span>　不等式 $2\log_{\frac12}x>\log_{\frac12}(x+2)$ の解は $0< x<\bx{シ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ,ウ', v: '-1,4', tex: String.raw`-1\leqq t\leqq4`, pts: 2 },
    { q: '(1)', k: 'エオ,カ', v: '-3,4', tex: String.raw`x=4\ \text{で最小値}\ -3`, pts: 3 },
    { q: '(1)', k: 'キ,ク/ケ', v: '6,1/2', tex: String.raw`x=\dfrac12\ \text{で最大値}\ 6`, pts: 3 },
    { q: '(2)', k: 'コ,サ', v: '1,3', tex: String.raw`1< x<3`, pts: 3 },
    { q: '(3)', k: 'シ', v: '2', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\log_2\frac12=-1$，$\log_216=4$ なので $-1\leqq t\leqq4$。</p>
<p>$y=t^2-4t+1=(t-2)^2-3$。$t=2$（$x=4$）で最小値 $-3$。</p>
<p>軸 $t=2$ から遠いのは $t=-1$ なので，$t=-1$（$x=\frac12$）で最大値 $9-3=6$。</p>
<h3>(2)</h3>
<p>真数条件：$x-1>0$ かつ $x+1>0$ より $x>1$。</p>
<p>$\log_2(x-1)(x+1)<\log_28$ より $x^2-1<8$，$-3< x<3$。真数条件と合わせて $1< x<3$。</p>
<h3>(3)</h3>
<p>真数条件：$x>0$ かつ $x+2>0$ より $x>0$。</p>
<p>$\log_{\frac12}x^2>\log_{\frac12}(x+2)$。底 $\frac12<1$ なので大小が逆転し $x^2< x+2$，$(x-2)(x+1)<0$，$-1< x<2$。</p>
<p>真数条件と合わせて $0< x<2$。</p>
<div class="point">対数不等式は「真数条件」と「底が1より小さいと不等号の向きが逆」の2点に注意。</div>
`,
},

{
  id: '2BC-shisu-04',
  field: '2BC-shisu',
  points: 15,
  title: '累乗根と対数の大小比較',
  body: String.raw`
<p><span class="q">(1)</span>　$a=2^{\frac12}$，$b=3^{\frac13}$，$c=5^{\frac15}$ とする。$a^{30}=\bx{アイウエオ}$ である。$a,\ b,\ c$ の大小関係は $\bx{カ}$ である。</p>
<p>$\bx{カ}$ の解答群</p>
<div class="choices"><span>⓪ $a< b< c$</span><span>① $a< c< b$</span><span>② $b< a< c$</span><span>③ $b< c< a$</span><span>④ $c< a< b$</span><span>⑤ $c< b< a$</span></div>
<p><span class="q">(2)</span>　$\log_23$，$\log_35$，$\dfrac32$ の大小関係は $\bx{キ}$ である。</p>
<p>$\bx{キ}$ の解答群</p>
<div class="choices"><span>⓪ $\log_23<\frac32<\log_35$</span><span>① $\log_35<\frac32<\log_23$</span><span>② $\frac32<\log_35<\log_23$</span><span>③ $\log_35<\log_23<\frac32$</span></div>
<p><span class="q">(3)</span>　正の実数 $x,\ y,\ z$ が $2^x=3^y=6^z\ (\neq1)$ を満たすとき，$\dfrac1x+\dfrac1y-\dfrac1z=\bx{ク}$ である。</p>
<p>また，$2^x=3^y=12$ のとき，$\dfrac2x+\dfrac1y=\bx{ケ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイウエオ', v: '32768', pts: 2 },
    { q: '(1)', k: 'カ', v: '④', tex: 'c< a< b', pts: 3 },
    { q: '(2)', k: 'キ', v: '①', tex: String.raw`\log_35<\frac32<\log_23`, pts: 4 },
    { q: '(3)', k: 'ク', v: '0', pts: 3 },
    { q: '(3)', k: 'ケ', v: '1', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>2，3，5 の最小公倍数 30 乗して比べる：$a^{30}=2^{15}=32768$，$b^{30}=3^{10}=59049$，$c^{30}=5^6=15625$。</p>
<p>正の数どうしなので，30乗の大小と元の大小は一致する。$c< a< b$（④）。</p>
<h3>(2)</h3>
<p>$\log_23$ と $\frac32$：$2^{\frac32}=2\sqrt2\fallingdotseq2.83<3$ なので $\log_23>\frac32$。</p>
<p>$\log_35$ と $\frac32$：$3^{\frac32}=3\sqrt3\fallingdotseq5.20>5$ なので $\log_35<\frac32$。</p>
<p>よって $\log_35<\frac32<\log_23$（①）。</p>
<h3>(3)</h3>
<p>$2^x=3^y=6^z=k$ とおくと（$k>0,\ k\neq1$），$x=\log_2k$ より $\frac1x=\log_k2$。同様に $\frac1y=\log_k3$，$\frac1z=\log_k6$。</p>
<p>$\frac1x+\frac1y=\log_k6=\frac1z$ なので，求める値は 0。</p>
<p>$2^x=3^y=12$ のとき $\frac1x=\log_{12}2$，$\frac1y=\log_{12}3$。$\frac2x+\frac1y=\log_{12}4+\log_{12}3=\log_{12}12=1$。</p>
<div class="point">累乗根の比較は「同じ数で累乗して整数にする」。$a^x=k$ の形は両辺の対数をとるか $\frac1x=\log_k a$ を使う。</div>
`,
},

{
  id: '2BC-shisu-05',
  field: '2BC-shisu',
  points: 15,
  title: '指数関数の応用と常用対数',
  body: String.raw`
<p>$\log_{10}2=0.3010$，$\log_{10}3=0.4771$ とする。</p>
<p><span class="q">(1)</span>　$\log_{10}1.5=\bx{ア}.\bx{イウエオ}$ である。</p>
<p>ある細菌は 1 時間ごとに 1.5 倍に増える。最初に 1000 個あったとき，細菌の数が初めて 100000 個以上になるのは $\bx{カキ}$ 時間後である。</p>
<p><span class="q">(2)</span>　ある放射性物質の量は 5 年ごとに半分になる。この物質の量が初めて最初の量の $\dfrac{1}{10}$ 以下になるのは $\bx{クケ}$ 年後である。ただし，年数は整数で答えよ。</p>
<p><span class="q">(3)</span>　$y=2^x$ のグラフと $y=\log_2x$ のグラフは $\bx{コ}$ に関して対称である。</p>
<p>$\bx{コ}$ の解答群</p>
<div class="choices"><span>⓪ $x$ 軸</span><span>① $y$ 軸</span><span>② 直線 $y=x$</span><span>③ 原点</span></div>
<p>また，$y=2^{x-1}+3$ のグラフは，$y=2^x$ のグラフを $x$ 軸方向に $\bx{サ}$，$y$ 軸方向に $\bx{シ}$ だけ平行移動したものである。</p>
`,
  answers: [
    { q: '(1)', k: 'ア.イウエオ', v: '0.1761', pts: 2 },
    { q: '(1)', k: 'カキ', v: '12', pts: 4 },
    { q: '(2)', k: 'クケ', v: '17', pts: 3 },
    { q: '(3)', k: 'コ', v: '②', note: '直線 y=x', pts: 3 },
    { q: '(3)', k: 'サ,シ', v: '1,3', tex: String.raw`x\ \text{方向に}\ 1,\ y\ \text{方向に}\ 3`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\log_{10}1.5=\log_{10}\frac32=0.4771-0.3010=0.1761$。</p>
<p>$n$ 時間後の数は $1000\times1.5^n$。$1000\times1.5^n\geqq100000 \iff 1.5^n\geqq100 \iff 0.1761n\geqq2 \iff n\geqq11.35\cdots$。よって 12 時間後。</p>
<h3>(2)</h3>
<p>$t$ 年後の量は最初の $\left(\frac12\right)^{t/5}$ 倍。$\left(\frac12\right)^{t/5}\leqq\frac1{10}$ の両辺の常用対数をとると $-\frac t5\times0.3010\leqq-1$，$t\geqq\frac{5}{0.3010}=16.6\cdots$。よって 17 年後。</p>
<h3>(3)</h3>
<p>$y=\log_2x$ は $y=2^x$ の逆関数（$x$ と $y$ を入れかえたもの）なので，直線 $y=x$ に関して対称（②）。</p>
<p>$y-3=2^{x-1}$ と見ると，$x$ を $x-1$，$y$ を $y-3$ に置きかえた形なので，$x$ 軸方向に 1，$y$ 軸方向に 3。</p>
<div class="point">「〜倍ずつ増える」量は指数関数。何回で超えるかは常用対数をとって不等式を解く。</div>
`,
}

);
