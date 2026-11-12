// 数学ⅡBC 第4問相当「数列」 オリジナル類題 5題（各16点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '2BC-suretsu-01',
  field: '2BC-suretsu',
  points: 16,
  title: '等差数列・等比数列とその積の和',
  body: String.raw`
<p>等差数列 $\{a_n\}$ は $a_3=7$，$a_8=22$ を満たす。また，等比数列 $\{b_n\}$ は初項 2，公比 3 である。</p>
<p><span class="q">(1)</span>　$a_n=\bx{ア}n-\bx{イ}$ であり，初項から第 $n$ 項までの和は $\dfrac{\bx{ウ}n^2-n}{\bx{エ}}$ である。</p>
<p>初項から第 $n$ 項までの和が初めて 500 を超えるのは $n=\bx{オカ}$ のときである。</p>
<p><span class="q">(2)</span>　$\displaystyle\sum_{k=1}^nb_k=\bx{キ}^n-\bx{ク}$ である。</p>
<p><span class="q">(3)</span>　$T_n=\displaystyle\sum_{k=1}^na_kb_k$ とする。$T_n-3T_n$ を計算することにより</p>
<p>$$T_n=\frac{(\bx{ケ}n-\bx{コ})\cdot3^n+\bx{サ}}{\bx{シ}}$$</p>
<p>である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '3,2', tex: 'a_n=3n-2', pts: 2 },
    { q: '(1)', k: 'ウ,エ', v: '3,2', tex: String.raw`\dfrac{3n^2-n}{2}`, pts: 2 },
    { q: '(1)', k: 'オカ', v: '19', pts: 3 },
    { q: '(2)', k: 'キ,ク', v: '3,1', tex: '3^n-1', pts: 3 },
    { q: '(3)', k: 'ケ,コ', v: '6,7', tex: '(6n-7)', pts: 3 },
    { q: '(3)', k: 'サ,シ', v: '7,2', tex: String.raw`T_n=\dfrac{(6n-7)\cdot3^n+7}{2}`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>公差を $d$ とすると $a_8-a_3=5d=15$，$d=3$。$a_1=7-2\cdot3=1$。$a_n=1+3(n-1)=3n-2$。</p>
<p>和は $\frac{n(1+3n-2)}{2}=\frac{3n^2-n}{2}$。</p>
<p>$\frac{3n^2-n}{2}>500 \iff 3n^2-n>1000$。$n=18$：$972-18=954$，$n=19$：$1083-19=1064$。よって $n=19$。</p>
<h3>(2)</h3>
<p>$\displaystyle\sum_{k=1}^n2\cdot3^{k-1}=\frac{2(3^n-1)}{3-1}=3^n-1$。</p>
<h3>(3)</h3>
<p>$a_kb_k=(3k-2)\cdot2\cdot3^{k-1}$。</p>
<p>$$\begin{aligned} T_n&=1\cdot2+4\cdot2\cdot3+7\cdot2\cdot3^2+\cdots+(3n-2)\cdot2\cdot3^{n-1}\\ 3T_n&=\phantom{1\cdot2+{}}1\cdot2\cdot3+4\cdot2\cdot3^2+\cdots+(3n-5)\cdot2\cdot3^{n-1}+(3n-2)\cdot2\cdot3^n\end{aligned}$$</p>
<p>引くと $-2T_n=2+3\cdot2(3+3^2+\cdots+3^{n-1})-(3n-2)\cdot2\cdot3^n$。</p>
<p>$3+\cdots+3^{n-1}=\frac{3^n-3}{2}$ なので $-2T_n=2+3(3^n-3)-(6n-4)3^n=(7-6n)3^n-7$。</p>
<p>$T_n=\dfrac{(6n-7)\cdot3^n+7}{2}$。（$n=1$ で $\frac{-3+7}{2}=2=a_1b_1$ と一致。）</p>
<div class="point">（等差）×（等比）の和は，$S-rS$（$r$ は公比）を計算して等比数列の和に帰着させる。</div>
`,
},

{
  id: '2BC-suretsu-02',
  field: '2BC-suretsu',
  points: 16,
  title: '階差数列・部分分数分解・群数列',
  body: String.raw`
<p><span class="q">(1)</span>　数列 $\{a_n\}$ は $a_1=2$，$a_{n+1}-a_n=2n+1$（$n=1,2,3,\ldots$）を満たす。このとき $a_n=n^2+\bx{ア}$ であり</p>
<p>$$\sum_{k=1}^na_k=\frac{n(\bx{イ}n^2+\bx{ウ}n+\bx{エ})}{\bx{オ}}$$</p>
<p>である。</p>
<p><span class="q">(2)</span>　$\displaystyle\sum_{k=1}^n\frac{1}{(2k-1)(2k+1)}=\frac{n}{\bx{カ}n+\bx{キ}}$ である。</p>
<p><span class="q">(3)</span>　自然数を次のように群に分ける。第 $m$ 群には $m$ 個の数が入る。</p>
<p>$$1\ |\ 2,\ 3\ |\ 4,\ 5,\ 6\ |\ 7,\ 8,\ 9,\ 10\ |\ 11,\ \cdots$$</p>
<p>100 は第 $\bx{クケ}$ 群の $\bx{コ}$ 番目の数である。また，第 10 群に含まれる数の和は $\bx{サシス}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '1', pts: 2 },
    { q: '(1)', k: 'イ,ウ,エ,オ', v: '2,3,7,6', tex: String.raw`\dfrac{n(2n^2+3n+7)}{6}`, pts: 4 },
    { q: '(2)', k: 'カ,キ', v: '2,1', tex: String.raw`\dfrac{n}{2n+1}`, pts: 3 },
    { q: '(3)', k: 'クケ,コ', v: '14,9', tex: String.raw`\text{第}14\text{群の}9\text{番目}`, pts: 4 },
    { q: '(3)', k: 'サシス', v: '505', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$n\geqq2$ のとき $a_n=a_1+\displaystyle\sum_{k=1}^{n-1}(2k+1)=2+(n-1)n+(n-1)=n^2+1$。$n=1$ でも $a_1=2$ で成り立つ。</p>
<p>$$\sum_{k=1}^n(k^2+1)=\frac{n(n+1)(2n+1)}{6}+n=\frac{n(2n^2+3n+1+6)}{6}=\frac{n(2n^2+3n+7)}{6}$$</p>
<h3>(2)</h3>
<p>$\dfrac{1}{(2k-1)(2k+1)}=\dfrac12\left(\dfrac{1}{2k-1}-\dfrac{1}{2k+1}\right)$ と分解すると，途中が打ち消し合って</p>
<p>$$\frac12\left(1-\frac{1}{2n+1}\right)=\frac{n}{2n+1}$$</p>
<h3>(3)</h3>
<p>第 $m$ 群の最後の数は $1+2+\cdots+m=\frac{m(m+1)}{2}$。$m=13$ で 91，$m=14$ で 105。よって 100 は第14群に入り，第14群は 92 から始まるので $100-91=9$ 番目。</p>
<p>第10群は $\frac{9\cdot10}{2}+1=46$ から $55$ までの10個。和は $\frac{10(46+55)}{2}=505$。</p>
<div class="point">群数列は「第 $m$ 群の最後までに何個あるか」を先に求める。</div>
`,
},

{
  id: '2BC-suretsu-03',
  field: '2BC-suretsu',
  points: 16,
  title: 'いろいろな漸化式',
  body: String.raw`
<p><span class="q">(1)</span>　$a_1=1$，$a_{n+1}=3a_n+2$ で定められる数列 $\{a_n\}$ について，漸化式は</p>
<p>$$a_{n+1}+\bx{ア}=\bx{イ}(a_n+\bx{ア})$$</p>
<p>と変形できる。よって $a_n=\bx{ウ}\cdot\bx{エ}^{n-1}-\bx{オ}$ である。</p>
<p><span class="q">(2)</span>　$b_1=\dfrac12$，$b_{n+1}=\dfrac{b_n}{2b_n+1}$ で定められる数列 $\{b_n\}$ について，$b_n=\dfrac{1}{\bx{カ}n}$ である。</p>
<p><span class="q">(3)</span>　$c_1=2$，$c_{n+1}=2c_n+2^{n+1}$ で定められる数列 $\{c_n\}$ について，$c_n=n\cdot\bx{キ}^n$ である。また</p>
<p>$$\sum_{k=1}^nc_k=(n-\bx{ク})\cdot2^{n+\bx{ケ}}+\bx{コ}$$</p>
<p>である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '1,3', tex: String.raw`a_{n+1}+1=3(a_n+1)`, pts: 3 },
    { q: '(1)', k: 'ウ,エ,オ', v: '2,3,1', tex: String.raw`a_n=2\cdot3^{n-1}-1`, pts: 3 },
    { q: '(2)', k: 'カ', v: '2', tex: String.raw`b_n=\dfrac{1}{2n}`, pts: 3 },
    { q: '(3)', k: 'キ', v: '2', tex: String.raw`c_n=n\cdot2^n`, pts: 3 },
    { q: '(3)', k: 'ク,ケ,コ', v: '1,1,2', tex: String.raw`(n-1)\cdot2^{n+1}+2`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\alpha=3\alpha+2$ を満たす $\alpha=-1$ を使うと，$a_{n+1}-(-1)=3\{a_n-(-1)\}$，すなわち $a_{n+1}+1=3(a_n+1)$。</p>
<p>$\{a_n+1\}$ は初項 2，公比 3 の等比数列なので $a_n+1=2\cdot3^{n-1}$，$a_n=2\cdot3^{n-1}-1$。</p>
<h3>(2)</h3>
<p>$b_n>0$ なので逆数をとると $\dfrac{1}{b_{n+1}}=\dfrac{2b_n+1}{b_n}=2+\dfrac{1}{b_n}$。$\left\{\dfrac1{b_n}\right\}$ は初項 2，公差 2 の等差数列で $\dfrac1{b_n}=2n$，$b_n=\dfrac{1}{2n}$。</p>
<h3>(3)</h3>
<p>両辺を $2^{n+1}$ で割ると $\dfrac{c_{n+1}}{2^{n+1}}=\dfrac{c_n}{2^n}+1$。$\left\{\dfrac{c_n}{2^n}\right\}$ は初項 1，公差 1 の等差数列で $\dfrac{c_n}{2^n}=n$，$c_n=n\cdot2^n$。</p>
<p>$S=\sum k\cdot2^k$ とし $S-2S$ を計算すると</p>
<p>$-S=2+2^2+\cdots+2^n-n\cdot2^{n+1}=2^{n+1}-2-n\cdot2^{n+1}$。</p>
<p>よって $S=(n-1)\cdot2^{n+1}+2$。</p>
<div class="point">$a_{n+1}=pa_n+q$ は特性方程式 $\alpha=p\alpha+q$，分数型は逆数，$p^n$ を含む型は $p^{n+1}$ で割る。</div>
`,
},

{
  id: '2BC-suretsu-04',
  field: '2BC-suretsu',
  points: 16,
  title: '漸化式で表される個体数の変化',
  body: String.raw`
<p>ある池の魚の数を毎年調べる。1年目の調査では 200 匹であった。毎年，前年の魚のうち 80％ が残り，さらに 100 匹を放流するものとする。$n$ 年目の魚の数を $a_n$ 匹とすると，$a_1=200$，$a_{n+1}=0.8a_n+100$ である。</p>
<p><span class="q">(1)</span>　漸化式は</p>
<p>$$a_{n+1}-\bx{アイウ}=\frac{\bx{エ}}{\bx{オ}}\left(a_n-\bx{アイウ}\right)$$</p>
<p>と変形でき，$a_n=500-\bx{カキク}\left(\dfrac45\right)^{n-1}$ である。</p>
<p><span class="q">(2)</span>　$a_n\geqq450$ となる最小の $n$ は $n=\bx{ケコ}$ である。必要ならば $\log_{10}2=0.3010$，$\log_{10}3=0.4771$ を用いてよい。</p>
<p><span class="q">(3)</span>　$\displaystyle\sum_{k=1}^na_k=500n-\bx{サシスセ}\left\{1-\left(\frac45\right)^n\right\}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイウ,エ/オ', v: '500,4/5', tex: String.raw`a_{n+1}-500=\dfrac45(a_n-500)`, pts: 4 },
    { q: '(1)', k: 'カキク', v: '300', pts: 3 },
    { q: '(2)', k: 'ケコ', v: '10', pts: 4 },
    { q: '(3)', k: 'サシスセ', v: '1500', pts: 5 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\alpha=0.8\alpha+100$ より $\alpha=500$。$a_{n+1}-500=\frac45(a_n-500)$。</p>
<p>$\{a_n-500\}$ は初項 $-300$，公比 $\frac45$ の等比数列なので $a_n=500-300\left(\frac45\right)^{n-1}$。</p>
<h3>(2)</h3>
<p>$500-300\left(\frac45\right)^{n-1}\geqq450 \iff \left(\frac45\right)^{n-1}\leqq\frac16$。</p>
<p>常用対数をとる。$\log_{10}\frac45=\log_{10}\frac{8}{10}=3\times0.3010-1=-0.0970$，$\log_{10}\frac16=-(0.3010+0.4771)=-0.7781$。</p>
<p>$-0.0970(n-1)\leqq-0.7781 \iff n-1\geqq8.02\cdots$。よって $n-1\geqq9$，$n\geqq10$。最小の $n$ は 10。</p>
<p>（確認：$0.8^8\fallingdotseq0.168>\frac16$，$0.8^9\fallingdotseq0.134<\frac16$。）</p>
<h3>(3)</h3>
<p>$$\sum_{k=1}^n\left\{500-300\left(\frac45\right)^{k-1}\right\}=500n-300\cdot\frac{1-\left(\frac45\right)^n}{1-\frac45}=500n-1500\left\{1-\left(\frac45\right)^n\right\}$$</p>
<div class="point">$a_n$ は 500 に近づいていく（500 は漸化式の「つり合いの値」）。</div>
`,
},

{
  id: '2BC-suretsu-05',
  field: '2BC-suretsu',
  points: 16,
  title: '和の公式と数学的帰納法',
  body: String.raw`
<p><span class="q">(1)</span>　すべての自然数 $n$ について</p>
<p>$$1\cdot2+2\cdot3+\cdots+n(n+1)=\frac{n(n+1)(n+2)}{\bx{ア}}\quad\cdots\cdots①$$</p>
<p>が成り立つことを数学的帰納法で示す。$n=k$ のとき ① が成り立つと仮定すると</p>
<p>$$\frac{k(k+1)(k+2)}{\bx{ア}}+(k+1)(k+2)=\frac{(k+1)(k+2)(k+\bx{イ})}{\bx{ウ}}$$</p>
<p>となり，$n=k+1$ のときも成り立つ。</p>
<p><span class="q">(2)</span>　$\displaystyle\sum_{k=1}^nk(k+1)(k+2)=\frac{n(n+1)(n+2)(n+3)}{\bx{エ}}$ である。</p>
<p><span class="q">(3)</span>　$\displaystyle\sum_{k=1}^n\frac{1}{k(k+1)(k+2)}=\frac{\bx{オ}}{\bx{カ}}-\frac{1}{\bx{キ}(n+1)(n+2)}$ である。</p>
<p><span class="q">(4)</span>　不等式 $2^n>n^2$ は，$n\geqq\bx{ク}$ を満たすすべての自然数 $n$ について成り立つ。このような $\bx{ク}$ のうち最小のものを答えよ。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '3', pts: 3 },
    { q: '(1)', k: 'イ,ウ', v: '3,3', tex: String.raw`\dfrac{(k+1)(k+2)(k+3)}{3}`, pts: 3 },
    { q: '(2)', k: 'エ', v: '4', pts: 3 },
    { q: '(3)', k: 'オ/カ,キ', v: '1/4,2', tex: String.raw`\dfrac14-\dfrac{1}{2(n+1)(n+2)}`, pts: 4 },
    { q: '(4)', k: 'ク', v: '5', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$n=1$：左辺 $=2$，右辺 $=\frac{1\cdot2\cdot3}{3}=2$。</p>
<p>$\frac{k(k+1)(k+2)}{3}+(k+1)(k+2)=\frac{(k+1)(k+2)(k+3)}{3}$ で，これは ① の $n=k+1$ の場合。</p>
<h3>(2)</h3>
<p>$k(k+1)(k+2)=\frac14\{k(k+1)(k+2)(k+3)-(k-1)k(k+1)(k+2)\}$ と変形すると，和は打ち消し合って $\frac{n(n+1)(n+2)(n+3)}{4}$。</p>
<h3>(3)</h3>
<p>$\dfrac{1}{k(k+1)(k+2)}=\dfrac12\left\{\dfrac{1}{k(k+1)}-\dfrac{1}{(k+1)(k+2)}\right\}$ より</p>
<p>$$\sum_{k=1}^n=\frac12\left\{\frac12-\frac{1}{(n+1)(n+2)}\right\}=\frac14-\frac{1}{2(n+1)(n+2)}$$</p>
<h3>(4)</h3>
<p>$n=1$：$2>1$（成立），$n=2$：$4>4$（不成立），$n=3$：$8>9$（不成立），$n=4$：$16>16$（不成立），$n=5$：$32>25$（成立）。</p>
<p>$n=k\ (\geqq5)$ で $2^k>k^2$ と仮定すると $2^{k+1}>2k^2$。$2k^2-(k+1)^2=(k-1)^2-2>0$（$k\geqq5$）なので $2^{k+1}>(k+1)^2$。よって $n\geqq5$ で常に成り立ち，最小は 5。</p>
<div class="point">連続する整数の積の和は「差の形」に変形すると打ち消し合う。</div>
`,
}

);
