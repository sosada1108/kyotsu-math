// 数学ⅠA 第1問〔1〕相当「数と式」 オリジナル類題 5題（各10点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '1A-sushiki-01',
  field: '1A-sushiki',
  points: 10,
  title: '無理数の整数部分と小数部分',
  body: String.raw`
<p>$a=\dfrac{4}{3-\sqrt{5}}$ とする。</p>
<p><span class="q">(1)</span>　$a$ の分母を有理化すると $a=\bx{ア}+\sqrt{\bx{イ}}$ である。</p>
<p><span class="q">(2)</span>　$a$ の整数部分は $\bx{ウ}$ であり，小数部分を $b$ とすると $b=\sqrt{\bx{エ}}-\bx{オ}$ である。</p>
<p><span class="q">(3)</span>　$b+\dfrac{1}{b}=\bx{カ}\sqrt{\bx{キ}}$ であり，$b^2+\dfrac{1}{b^2}=\bx{クケ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '3,5', tex: String.raw`3+\sqrt{5}`, pts: 2 },
    { q: '(2)', k: 'ウ', v: '5', pts: 2 },
    { q: '(2)', k: 'エ,オ', v: '5,2', tex: String.raw`\sqrt{5}-2`, pts: 2 },
    { q: '(3)', k: 'カ,キ', v: '2,5', tex: String.raw`2\sqrt{5}`, pts: 2 },
    { q: '(3)', k: 'クケ', v: '18', pts: 2 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$$a=\frac{4(3+\sqrt5)}{(3-\sqrt5)(3+\sqrt5)}=\frac{4(3+\sqrt5)}{9-5}=3+\sqrt5$$</p>
<h3>(2)</h3>
<p>$2<\sqrt5<3$（$4<5<9$ だから）より $5<3+\sqrt5<6$。よって整数部分は 5。</p>
<p>小数部分は $b=a-5=\sqrt5-2$。</p>
<h3>(3)</h3>
<p>$\dfrac1b=\dfrac{1}{\sqrt5-2}=\dfrac{\sqrt5+2}{5-4}=\sqrt5+2$ なので $b+\dfrac1b=2\sqrt5$。</p>
<p>$$b^2+\frac1{b^2}=\left(b+\frac1b\right)^2-2=20-2=18$$</p>
<div class="point">小数部分は「もとの数 − 整数部分」。$x^2+\dfrac1{x^2}=\left(x+\dfrac1x\right)^2-2$ はよく使う変形。</div>
`,
},

{
  id: '1A-sushiki-02',
  field: '1A-sushiki',
  points: 10,
  title: '絶対値を含む不等式と整数解の個数',
  body: String.raw`
<p>$a$ を実数の定数とし，$x$ についての不等式</p>
<p>$$|2x-3|< x+a \quad\cdots\cdots①$$</p>
<p>を考える。</p>
<p><span class="q">(1)</span>　$a=1$ のとき，① の解は $\dfrac{\bx{ア}}{\bx{イ}}< x<\bx{ウ}$ であり，① を満たす整数 $x$ は $\bx{エ}$ 個ある。</p>
<p><span class="q">(2)</span>　$a=2$ のとき，① の解は $\dfrac{\bx{オ}}{\bx{カ}}< x<\bx{キ}$ である。</p>
<p><span class="q">(3)</span>　① を満たす整数 $x$ がちょうど5個となるような $a$ の値の範囲は $\bx{ク}< a\leqq\bx{ケ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア/イ,ウ', v: '2/3,4', tex: String.raw`\dfrac{2}{3}< x<4`, pts: 3 },
    { q: '(1)', k: 'エ', v: '3', pts: 2 },
    { q: '(2)', k: 'オ/カ,キ', v: '1/3,5', tex: String.raw`\dfrac{1}{3}< x<5`, pts: 2 },
    { q: '(3)', k: 'ク,ケ', v: '2,3', tex: String.raw`2< a\leqq 3`, pts: 3 },
  ],
  explanation: String.raw`
<p>$|A|< B \iff -B< A< B$ を使う。① は</p>
<p>$$-(x+a)<2x-3< x+a$$</p>
<p>と同じである。左側から $3x>3-a$ すなわち $x>1-\dfrac a3$，右側から $x< a+3$。よって ① の解は</p>
<p>$$1-\frac a3< x< a+3$$</p>
<p>（ただし $1-\frac a3< a+3$，すなわち $a>-\frac32$ のときに解がある。）</p>
<h3>(1)</h3>
<p>$a=1$ のとき $\dfrac23< x<4$。整数は $1,2,3$ の3個。</p>
<h3>(2)</h3>
<p>$a=2$ のとき $\dfrac13< x<5$。</p>
<h3>(3)</h3>
<p>$a$ が大きくなると，解の範囲は左右両方に広がる。整数が5個になるのは $1,2,3,4,5$ の場合で，そのためには</p>
<ul>
<li>5 を含む：$a+3>5$ より $a>2$</li>
<li>6 を含まない：$a+3\leqq6$ より $a\leqq3$</li>
<li>0 を含まない：$1-\frac a3\geqq0$ より $a\leqq3$</li>
</ul>
<p>よって $2< a\leqq3$。（$a=3$ のとき解は $0< x<6$ で，両端の 0，6 は含まれない。）</p>
<div class="point">端の値で等号を入れるかどうかは，その値を代入して確認する。</div>
`,
},

{
  id: '1A-sushiki-03',
  field: '1A-sushiki',
  points: 10,
  title: '必要条件と十分条件',
  body: String.raw`
<p>次の (1)～(5) の空欄に当てはまるものを，下の解答群から一つずつ選べ。ただし，同じものを繰り返し選んでもよい。$x,\,y$ は実数，$m,\,n$ は整数とする。</p>
<p><span class="q">(1)</span>　$x^2-4x+3<0$ であることは，$2< x<3$ であるための $\bx{ア}$。</p>
<p><span class="q">(2)</span>　$|x-1|<2$ であることは，$x^2<9$ であるための $\bx{イ}$。</p>
<p><span class="q">(3)</span>　$mn$ が偶数であることは，$m$ が偶数であるための $\bx{ウ}$。</p>
<p><span class="q">(4)</span>　$m+n$ と $mn$ がともに偶数であることは，$m$ と $n$ がともに偶数であるための $\bx{エ}$。</p>
<p><span class="q">(5)</span>　$x>y$ であることは，$x^2>y^2$ であるための $\bx{オ}$。</p>
<p>$\bx{ア}$ ～ $\bx{オ}$ の解答群</p>
<div class="choices"><span>⓪ 必要十分条件である</span><span>① 必要条件であるが，十分条件ではない</span><span>② 十分条件であるが，必要条件ではない</span><span>③ 必要条件でも十分条件でもない</span></div>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '①', note: '必要条件だが十分条件でない', pts: 2 },
    { q: '(2)', k: 'イ', v: '②', note: '十分条件だが必要条件でない', pts: 2 },
    { q: '(3)', k: 'ウ', v: '①', note: '必要条件だが十分条件でない', pts: 2 },
    { q: '(4)', k: 'エ', v: '⓪', note: '必要十分条件', pts: 2 },
    { q: '(5)', k: 'オ', v: '③', note: 'どちらでもない', pts: 2 },
  ],
  explanation: String.raw`
<p>「$p$ は $q$ であるための十分条件」⇔ $p\Rightarrow q$ が真。「必要条件」⇔ $q\Rightarrow p$ が真。範囲で考えるときは「$p$ の範囲が $q$ の範囲に含まれる ⇔ $p\Rightarrow q$」。</p>
<h3>(1)</h3>
<p>$x^2-4x+3<0 \iff (x-1)(x-3)<0 \iff 1< x<3$。$2< x<3$ は $1< x<3$ に含まれるので「$2< x<3\Rightarrow 1< x<3$」は真，逆は偽（$x=1.5$）。よって必要条件だが十分条件でない（①）。</p>
<h3>(2)</h3>
<p>$|x-1|<2 \iff -1< x<3$，$x^2<9\iff -3< x<3$。$-1< x<3$ は $-3< x<3$ に含まれるので十分条件。逆は $x=-2$ が反例。よって②。</p>
<h3>(3)</h3>
<p>$m$ が偶数なら $mn$ は偶数（真）。逆は $m=1,\ n=2$ が反例。よって「$mn$ が偶数」は必要条件だが十分条件でない（①）。</p>
<h3>(4)</h3>
<p>$m,n$ がともに偶数なら和も積も偶数（真）。逆に，$mn$ が偶数なら $m,n$ の少なくとも一方が偶数。さらに $m+n$ が偶数なら $m,n$ の偶奇は一致するので，ともに偶数。よって必要十分条件（⓪）。</p>
<h3>(5)</h3>
<p>$x=1,\ y=-2$ のとき $x>y$ だが $x^2< y^2$。$x=-3,\ y=1$ のとき $x^2>y^2$ だが $x< y$。どちらの向きも偽なので③。</p>
<div class="point">偽を示すには反例を1つ挙げればよい。負の数を含めて考えると反例が見つかりやすい。</div>
`,
},

{
  id: '1A-sushiki-04',
  field: '1A-sushiki',
  points: 10,
  title: '対称式の値',
  body: String.raw`
<p>$x=\dfrac{3+\sqrt5}{2}$，$y=\dfrac{3-\sqrt5}{2}$ とする。</p>
<p><span class="q">(1)</span>　$x+y=\bx{ア}$，$xy=\bx{イ}$ である。</p>
<p><span class="q">(2)</span>　$x^2+y^2=\bx{ウ}$，$x^3+y^3=\bx{エオ}$ である。</p>
<p><span class="q">(3)</span>　$x^2-y^2=\bx{カ}\sqrt{\bx{キ}}$ であり，$x^4+y^4=\bx{クケ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '3,1', tex: String.raw`x+y=3,\ xy=1`, pts: 2 },
    { q: '(2)', k: 'ウ', v: '7', pts: 2 },
    { q: '(2)', k: 'エオ', v: '18', pts: 2 },
    { q: '(3)', k: 'カ,キ', v: '3,5', tex: String.raw`3\sqrt{5}`, pts: 2 },
    { q: '(3)', k: 'クケ', v: '47', pts: 2 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$x+y=\dfrac{6}{2}=3$，$xy=\dfrac{9-5}{4}=1$。</p>
<h3>(2)</h3>
<p>$x^2+y^2=(x+y)^2-2xy=9-2=7$。</p>
<p>$x^3+y^3=(x+y)^3-3xy(x+y)=27-9=18$。</p>
<h3>(3)</h3>
<p>$x-y=\sqrt5$ なので $x^2-y^2=(x+y)(x-y)=3\sqrt5$。</p>
<p>$x^4+y^4=(x^2+y^2)^2-2(xy)^2=49-2=47$。</p>
<div class="point">$x,y$ をそのまま代入せず，基本対称式 $x+y,\ xy$ で表してから計算すると速く正確。</div>
`,
},

{
  id: '1A-sushiki-05',
  field: '1A-sushiki',
  points: 10,
  title: '料金プランの比較と1次不等式',
  body: String.raw`
<p>ある月のデータ通信量を $x$ GB（$0\leqq x\leqq10$）とする。3つの料金プランの月額料金は次の通りである。</p>
<div class="box-def">
プラン A：基本料金 1000 円に加え，1 GB あたり 400 円<br>
プラン B：基本料金 2200 円に加え，1 GB あたり 250 円<br>
プラン C：通信量にかかわらず 3000 円
</div>
<p><span class="q">(1)</span>　プラン A の料金がプラン B の料金より安くなるのは $x<\bx{ア}$ のときである。</p>
<p><span class="q">(2)</span>　プラン C の料金がプラン A，B のどちらの料金よりも安くなるのは $x>\bx{イ}$ のときである。</p>
<p><span class="q">(3)</span>　プラン A の 1 GB あたりの料金を $a$ 円に変更する（基本料金は 1000 円のまま）。$0\leqq x\leqq10$ のすべての $x$ について，プラン A の料金がプラン B，C のどちらの料金以下にもなるような $a$ の最大値は $\bx{ウエオ}$ である。</p>
<p><span class="q">(4)</span>　もとのプラン A，B について，プラン B の料金がプラン A の料金の 1.2 倍以下となるのは $x\geqq\dfrac{\bx{カキク}}{\bx{ケコ}}$ のときである。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '8', pts: 2 },
    { q: '(2)', k: 'イ', v: '5', pts: 2 },
    { q: '(3)', k: 'ウエオ', v: '200', pts: 3 },
    { q: '(4)', k: 'カキク/ケコ', v: '100/23', pts: 3 },
  ],
  explanation: String.raw`
<p>料金は A：$1000+400x$，B：$2200+250x$，C：$3000$（円）。</p>
<h3>(1)</h3>
<p>$1000+400x<2200+250x \iff 150x<1200 \iff x<8$。</p>
<h3>(2)</h3>
<p>C が A より安い：$3000<1000+400x \iff x>5$。</p>
<p>C が B より安い：$3000<2200+250x \iff x>3.2$。</p>
<p>両方を満たすのは $x>5$。</p>
<h3>(3)</h3>
<p>A の料金は $1000+ax$。1次式どうしの大小は，区間の両端 $x=0,\ x=10$ で成り立てば区間全体で成り立つ。$x=0$ では A が最も安いので，$x=10$ で調べればよい。</p>
<ul>
<li>A ≦ B：$1000+10a\leqq 2200+2500 \iff a\leqq370$</li>
<li>A ≦ C：$1000+10a\leqq3000 \iff a\leqq200$</li>
</ul>
<p>よって $a\leqq200$ で，最大値は 200。</p>
<h3>(4)</h3>
<p>$2200+250x\leqq1.2(1000+400x)=1200+480x \iff 1000\leqq230x \iff x\geqq\dfrac{100}{23}$。</p>
<div class="point">文章題は「それぞれの料金を $x$ の式で表す → 条件を不等式にする」の順で整理する。</div>
`,
}

);
