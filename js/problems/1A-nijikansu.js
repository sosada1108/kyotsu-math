// 数学ⅠA 第2問〔1〕相当「2次関数」 オリジナル類題 5題（各15点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '1A-nijikansu-01',
  field: '1A-nijikansu',
  points: 15,
  title: '頂点の動きと区間での最小値',
  body: String.raw`
<p>$a$ を実数の定数とし，$f(x)=x^2-2ax+2a+3$ とする。</p>
<p><span class="q">(1)</span>　放物線 $y=f(x)$ の頂点の $y$ 座標は $-a^2+\bx{ア}a+\bx{イ}$ であり，これは $a=\bx{ウ}$ のとき最大値 $\bx{エ}$ をとる。</p>
<p><span class="q">(2)</span>　放物線 $y=f(x)$ が $x$ 軸と異なる2点で交わるような $a$ の値の範囲は $a<\bx{オカ}$，$\bx{キ}< a$ である。</p>
<p><span class="q">(3)</span>　$0\leqq x\leqq2$ における $f(x)$ の最小値を $m$ とする。$a>2$ のとき $m=\bx{ク}-\bx{ケ}a$ である。</p>
<p>$m=0$ となる $a$ の値は $a=\dfrac{\bx{コサ}}{\bx{シ}},\ \dfrac{\bx{ス}}{\bx{セ}}$ である。</p>
<p>また，$0\leqq x\leqq2$ を満たすすべての $x$ に対して $f(x)>0$ となるような $a$ の値の範囲は $\dfrac{\bx{ソタ}}{\bx{チ}}< a<\dfrac{\bx{ツ}}{\bx{テ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '2,3', tex: String.raw`-a^2+2a+3`, pts: 2 },
    { q: '(1)', k: 'ウ,エ', v: '1,4', tex: String.raw`a=1\ \text{で最大値}\ 4`, pts: 2 },
    { q: '(2)', k: 'オカ,キ', v: '-1,3', tex: String.raw`a<-1,\ 3< a`, pts: 3 },
    { q: '(3)', k: 'ク,ケ', v: '7,2', tex: String.raw`7-2a`, pts: 2 },
    { q: '(3)', k: 'コサ/シ,ス/セ', v: '-3/2,7/2', tex: String.raw`a=-\dfrac{3}{2},\ \dfrac{7}{2}`, pts: 3 },
    { q: '(3)', k: 'ソタ/チ,ツ/テ', v: '-3/2,7/2', tex: String.raw`-\dfrac{3}{2}< a<\dfrac{7}{2}`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$f(x)=(x-a)^2-a^2+2a+3$。頂点は $(a,\ -a^2+2a+3)$。</p>
<p>$-a^2+2a+3=-(a-1)^2+4$ なので，$a=1$ のとき最大値 4。</p>
<h3>(2)</h3>
<p>判別式 $D/4=a^2-(2a+3)=a^2-2a-3=(a-3)(a+1)>0$ より $a<-1,\ 3< a$。</p>
<h3>(3)</h3>
<p>軸 $x=a$ と区間 $0\leqq x\leqq2$ の位置で場合分けする。</p>
<ul>
<li>$a<0$：$m=f(0)=2a+3$</li>
<li>$0\leqq a\leqq2$：$m=f(a)=-a^2+2a+3$</li>
<li>$a>2$：$m=f(2)=4-4a+2a+3=7-2a$</li>
</ul>
<p>$m=0$ となるのは，$a<0$ で $2a+3=0$ より $a=-\frac32$。$0\leqq a\leqq2$ では $-(a-3)(a+1)=0$ の解 $a=3,-1$ はどちらも範囲外。$a>2$ で $7-2a=0$ より $a=\frac72$。</p>
<p>$f(x)>0$ が区間全体で成り立つ $\iff m>0$。</p>
<ul>
<li>$a<0$：$2a+3>0$ より $-\frac32< a<0$</li>
<li>$0\leqq a\leqq2$：$-(a-3)(a+1)>0$ は $-1< a<3$ なので常に成り立つ</li>
<li>$a>2$：$7-2a>0$ より $2< a<\frac72$</li>
</ul>
<p>合わせて $-\dfrac32< a<\dfrac72$。</p>
<div class="point">「区間で常に正」は「区間での最小値が正」と言いかえる。最小値は軸の位置で場合分け。</div>
`,
},

{
  id: '1A-nijikansu-02',
  field: '1A-nijikansu',
  points: 15,
  title: '販売価格と利益の最大化',
  body: String.raw`
<p>ある店で商品 X を 1 個 $p$ 円で売ると，1 日あたり $600-3p$ 個売れることが分かっている。ただし，$0< p<200$ とし，売れる個数が整数でない場合も考えるものとする。</p>
<p><span class="q">(1)</span>　1 日の売上金額が最大になるのは $p=\bx{アイウ}$ のときで，そのときの売上金額は $\bx{エオカキク}$ 円である。</p>
<p><span class="q">(2)</span>　商品 X の仕入れ値は 1 個 60 円であり，売れた個数の分だけ仕入れるものとする。1 日の利益（売上金額から仕入れ金額を引いたもの）が正になるのは $\bx{ケコ}< p<\bx{サシス}$ のときである。</p>
<p>利益が最大になるのは $p=\bx{セソタ}$ のときで，そのときの利益は $\bx{チツテトナ}$ 円である。</p>
<p><span class="q">(3)</span>　利益が 12000 円以上になるような $p$ の値の範囲は $\bx{ニヌネ}\leqq p\leqq\bx{ノハヒ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイウ', v: '100', pts: 2 },
    { q: '(1)', k: 'エオカキク', v: '30000', pts: 2 },
    { q: '(2)', k: 'ケコ,サシス', v: '60,200', tex: String.raw`60< p<200`, pts: 2 },
    { q: '(2)', k: 'セソタ', v: '130', pts: 3 },
    { q: '(2)', k: 'チツテトナ', v: '14700', pts: 3 },
    { q: '(3)', k: 'ニヌネ,ノハヒ', v: '100,160', tex: String.raw`100\leqq p\leqq160`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>売上金額は $p(600-3p)=-3p^2+600p=-3(p-100)^2+30000$。$p=100$ で最大値 30000 円。</p>
<h3>(2)</h3>
<p>利益は $(p-60)(600-3p)$ 円。$0< p<200$ では $600-3p>0$ なので，利益が正 $\iff p>60$。よって $60< p<200$。</p>
<p>$(p-60)(600-3p)=-3p^2+780p-36000=-3(p-130)^2+14700$。$p=130$ で最大値 14700 円。</p>
<h3>(3)</h3>
<p>$-3p^2+780p-36000\geqq12000 \iff p^2-260p+16000\leqq0 \iff (p-100)(p-160)\leqq0$。よって $100\leqq p\leqq160$。</p>
<div class="point">利益 ＝（1個あたりのもうけ）×（個数）。2次関数は平方完成して最大値を読む。</div>
`,
},

{
  id: '1A-nijikansu-03',
  field: '1A-nijikansu',
  points: 15,
  title: '2次方程式の解の配置',
  body: String.raw`
<p>$a$ を実数の定数とし，$x$ の2次方程式</p>
<p>$$x^2-2ax+a+6=0 \quad\cdots\cdots①$$</p>
<p>を考える。$f(x)=x^2-2ax+a+6$ とおく。</p>
<p><span class="q">(1)</span>　① が異なる2つの実数解をもつような $a$ の値の範囲は $a<\bx{アイ}$，$\bx{ウ}< a$ である。</p>
<p><span class="q">(2)</span>　① の異なる2つの実数解がともに 1 より大きいような $a$ の値の範囲は $\bx{エ}< a<\bx{オ}$ である。</p>
<p><span class="q">(3)</span>　① の一方の解が 1 より大きく，他方の解が 1 より小さいような $a$ の値の範囲は $a>\bx{カ}$ である。</p>
<p><span class="q">(4)</span>　① の異なる2つの実数解がともに $-3$ と $0$ の間にあるような $a$ の値の範囲は $\dfrac{\bx{キクケ}}{\bx{コ}}< a<\bx{サシ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ,ウ', v: '-2,3', tex: String.raw`a<-2,\ 3< a`, pts: 3 },
    { q: '(2)', k: 'エ,オ', v: '3,7', tex: String.raw`3< a<7`, pts: 4 },
    { q: '(3)', k: 'カ', v: '7', pts: 3 },
    { q: '(4)', k: 'キクケ/コ,サシ', v: '-15/7,-2', tex: String.raw`-\dfrac{15}{7}< a<-2`, pts: 5 },
  ],
  explanation: String.raw`
<p>$f(x)=(x-a)^2-a^2+a+6$。軸は $x=a$。</p>
<h3>(1)</h3>
<p>$D/4=a^2-(a+6)=(a-3)(a+2)>0$ より $a<-2,\ 3< a$。</p>
<h3>(2)</h3>
<p>グラフが $x>1$ の部分で $x$ 軸と2点で交わる条件は</p>
<ul>
<li>判別式：$a<-2,\ 3< a$</li>
<li>軸：$a>1$</li>
<li>端点：$f(1)=1-2a+a+6=7-a>0$ より $a<7$</li>
</ul>
<p>共通部分は $3< a<7$。</p>
<h3>(3)</h3>
<p>$f(1)<0$ ならグラフは $x=1$ の左右で $x$ 軸と交わる。$7-a<0$ より $a>7$。</p>
<h3>(4)</h3>
<ul>
<li>判別式：$a<-2,\ 3< a$</li>
<li>軸：$-3< a<0$</li>
<li>$f(0)=a+6>0$ より $a>-6$</li>
<li>$f(-3)=9+6a+a+6=7a+15>0$ より $a>-\frac{15}{7}$</li>
</ul>
<p>共通部分は $-\dfrac{15}{7}< a<-2$。（$-\frac{15}{7}\fallingdotseq-2.14$）</p>
<div class="point">解の配置は「判別式・軸・端点の値」の3点セットで考える。グラフをかいて確認するとよい。</div>
`,
},

{
  id: '1A-nijikansu-04',
  field: '1A-nijikansu',
  points: 15,
  title: '動く区間での最大値と最小値',
  body: String.raw`
<p>$f(x)=x^2-4x+5$ とする。$t$ を実数とし，$t\leqq x\leqq t+2$ における $f(x)$ の最大値を $M$，最小値を $m$ とする。</p>
<p><span class="q">(1)</span>　放物線 $y=f(x)$ の頂点の座標は $(\bx{ア},\ \bx{イ})$ である。</p>
<p><span class="q">(2)</span>　$t<0$ のとき $m=t^2+\bx{ウ}$ である。また，$m=1$ となるような $t$ の値の範囲は $\bx{エ}\leqq t\leqq\bx{オ}$ である。</p>
<p><span class="q">(3)</span>　$M-m=2$ となるような $t$ の値は $t=\bx{カ}-\sqrt{\bx{キ}},\ \sqrt{\bx{ク}}$ である。</p>
<p><span class="q">(4)</span>　$M-m$ は $t=\bx{ケ}$ のとき最小値 $\bx{コ}$ をとる。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '2,1', tex: String.raw`(2,\ 1)`, pts: 2 },
    { q: '(2)', k: 'ウ', v: '1', pts: 2 },
    { q: '(2)', k: 'エ,オ', v: '0,2', tex: String.raw`0\leqq t\leqq2`, pts: 3 },
    { q: '(3)', k: 'カ,キ,ク', v: '2,2,2', tex: String.raw`t=2-\sqrt{2},\ \sqrt{2}`, pts: 4 },
    { q: '(4)', k: 'ケ,コ', v: '1,1', tex: String.raw`t=1\ \text{で最小値}\ 1`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$f(x)=(x-2)^2+1$。頂点 $(2,1)$。</p>
<h3>(2)</h3>
<p>最小値 $m$ は軸 $x=2$ と区間の位置で決まる。</p>
<ul>
<li>$t+2<2$（$t<0$）：$m=f(t+2)=t^2+1$</li>
<li>$t\leqq2\leqq t+2$（$0\leqq t\leqq2$）：$m=f(2)=1$</li>
<li>$t>2$：$m=f(t)=t^2-4t+5$</li>
</ul>
<p>$t<0$ や $t>2$ では $m>1$ なので，$m=1 \iff 0\leqq t\leqq2$。</p>
<h3>(3)</h3>
<p>最大値 $M$ は，区間の中央 $t+1$ と軸の位置で決まる。軸から遠い端で最大。</p>
<ul>
<li>$t+1\leqq2$（$t\leqq1$）：$M=f(t)=t^2-4t+5$</li>
<li>$t\geqq1$：$M=f(t+2)=t^2+1$</li>
</ul>
<p>よって $M-m$ は</p>
<ul>
<li>$t<0$：$(t^2-4t+5)-(t^2+1)=4-4t$（$>4$）</li>
<li>$0\leqq t\leqq1$：$t^2-4t+4=(t-2)^2$</li>
<li>$1\leqq t\leqq2$：$t^2$</li>
<li>$t>2$：$(t^2+1)-(t^2-4t+5)=4t-4$（$>4$）</li>
</ul>
<p>$M-m=2$：$0\leqq t\leqq1$ で $(t-2)^2=2$ より $t=2-\sqrt2$（$\fallingdotseq0.59$，範囲内）。$1\leqq t\leqq2$ で $t^2=2$ より $t=\sqrt2$。他の範囲では $M-m>4$ なので解なし。</p>
<h3>(4)</h3>
<p>$0\leqq t\leqq1$ で $(t-2)^2$ は減少して $t=1$ で 1，$1\leqq t\leqq2$ で $t^2$ は増加。よって $t=1$ で最小値 1。</p>
<div class="point">最小値は「軸が区間の左・中・右」，最大値は「軸が区間の中央より左か右か」で場合分けする。</div>
`,
},

{
  id: '1A-nijikansu-05',
  field: '1A-nijikansu',
  points: 15,
  title: '放物線の移動と接する直線',
  body: String.raw`
<p>放物線 $C:\ y=2x^2-8x+5$ を考える。</p>
<p><span class="q">(1)</span>　$C$ の頂点の座標は $(\bx{ア},\ \bx{イウ})$ である。</p>
<p><span class="q">(2)</span>　$C$ を $x$ 軸方向に $p$，$y$ 軸方向に $q$ だけ平行移動した放物線が 2 点 $(1,\ 1)$，$(5,\ 9)$ を通るとき，$p=\dfrac{\bx{エ}}{\bx{オ}}$，$q=\dfrac{\bx{カキ}}{\bx{ク}}$ である。</p>
<p><span class="q">(3)</span>　$C$ を $x$ 軸に関して対称移動した放物線の方程式は $y=\bx{ケコ}x^2+\bx{サ}x+\bx{シス}$ であり，原点に関して対称移動した放物線の方程式は $y=\bx{セソ}x^2+\bx{タチ}x+\bx{ツテ}$ である。</p>
<p><span class="q">(4)</span>　直線 $y=2x+k$ が $C$ に接するのは $k=\dfrac{\bx{トナニ}}{\bx{ヌ}}$ のときである。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イウ', v: '2,-3', tex: String.raw`(2,\ -3)`, pts: 2 },
    { q: '(2)', k: 'エ/オ,カキ/ク', v: '1/2,-1/2', tex: String.raw`p=\dfrac12,\ q=-\dfrac12`, pts: 4 },
    { q: '(3)', k: 'ケコ,サ,シス', v: '-2,8,-5', tex: String.raw`y=-2x^2+8x-5`, pts: 3 },
    { q: '(3)', k: 'セソ,タチ,ツテ', v: '-2,-8,-5', tex: String.raw`y=-2x^2-8x-5`, pts: 3 },
    { q: '(4)', k: 'トナニ/ヌ', v: '-15/2', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$y=2(x-2)^2-3$。頂点 $(2,-3)$。</p>
<h3>(2)</h3>
<p>移動後の放物線は $y=2(x-h)^2+k$（$h=2+p$，$k=-3+q$）とおける。2点を代入して</p>
<p>$1=2(1-h)^2+k$，$9=2(5-h)^2+k$。辺々引くと $8=2\{(5-h)^2-(1-h)^2\}=2(24-8h)$，$h=\dfrac52$。</p>
<p>$k=1-2\left(-\frac32\right)^2=-\dfrac72$。よって $p=\dfrac52-2=\dfrac12$，$q=-\dfrac72+3=-\dfrac12$。</p>
<h3>(3)</h3>
<p>$x$ 軸対称：$y\to-y$ として $-y=2x^2-8x+5$，すなわち $y=-2x^2+8x-5$。</p>
<p>原点対称：$x\to-x,\ y\to-y$ として $-y=2x^2+8x+5$，すなわち $y=-2x^2-8x-5$。</p>
<h3>(4)</h3>
<p>$2x^2-8x+5=2x+k \iff 2x^2-10x+5-k=0$ が重解をもてばよい。$D/4=25-2(5-k)=15+2k=0$ より $k=-\dfrac{15}{2}$。</p>
<div class="point">対称移動は「$x$ 軸対称：$y\to-y$」「$y$ 軸対称：$x\to-x$」「原点対称：両方」。接する ⇔ 連立した2次方程式が重解をもつ。</div>
`,
}

);
