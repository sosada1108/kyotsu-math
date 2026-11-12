// 数学ⅠA 第1問〔2〕相当「図形と計量」 オリジナル類題 5題（各20点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '1A-keiryo-01',
  field: '1A-keiryo',
  points: 20,
  title: '三角形の外接円・内接円と角の二等分線',
  body: String.raw`
<p>$\triangle\mathrm{ABC}$ において，$\mathrm{AB}=5$，$\mathrm{AC}=3$，$\angle\mathrm{BAC}=120^\circ$ とする。</p>
<p><span class="q">(1)</span>　$\mathrm{BC}=\bx{ア}$ であり，$\triangle\mathrm{ABC}$ の面積は $\dfrac{\bx{イウ}\sqrt{\bx{エ}}}{\bx{オ}}$ である。</p>
<p><span class="q">(2)</span>　$\triangle\mathrm{ABC}$ の外接円の半径は $\dfrac{\bx{カ}\sqrt{\bx{キ}}}{\bx{ク}}$，内接円の半径は $\dfrac{\sqrt{\bx{ケ}}}{\bx{コ}}$ である。</p>
<p><span class="q">(3)</span>　$\angle\mathrm{BAC}$ の二等分線と辺 BC の交点を D とする。$\mathrm{BD}=\dfrac{\bx{サシ}}{\bx{ス}}$ であり，$\mathrm{AD}=\dfrac{\bx{セソ}}{\bx{タ}}$ である。</p>
<p><span class="q">(4)</span>　$\cos\angle\mathrm{ABC}=\dfrac{\bx{チツ}}{\bx{テト}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '7', pts: 2 },
    { q: '(1)', k: 'イウ,エ,オ', v: '15,3,4', tex: String.raw`\dfrac{15\sqrt{3}}{4}`, pts: 3 },
    { q: '(2)', k: 'カ,キ,ク', v: '7,3,3', tex: String.raw`\dfrac{7\sqrt{3}}{3}`, pts: 3 },
    { q: '(2)', k: 'ケ,コ', v: '3,2', tex: String.raw`\dfrac{\sqrt{3}}{2}`, pts: 3 },
    { q: '(3)', k: 'サシ/ス', v: '35/8', pts: 3 },
    { q: '(3)', k: 'セソ/タ', v: '15/8', pts: 3 },
    { q: '(4)', k: 'チツ/テト', v: '13/14', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>余弦定理より $\mathrm{BC}^2=5^2+3^2-2\cdot5\cdot3\cos120^\circ=25+9+15=49$，よって $\mathrm{BC}=7$。</p>
<p>面積 $S=\dfrac12\cdot5\cdot3\sin120^\circ=\dfrac12\cdot15\cdot\dfrac{\sqrt3}{2}=\dfrac{15\sqrt3}{4}$。</p>
<h3>(2)</h3>
<p>正弦定理より $2R=\dfrac{7}{\sin120^\circ}=\dfrac{14}{\sqrt3}$，$R=\dfrac{7}{\sqrt3}=\dfrac{7\sqrt3}{3}$。</p>
<p>内接円の半径 $r$ は $S=\dfrac12 r(a+b+c)$ より $\dfrac{15\sqrt3}{4}=\dfrac12r\cdot15$，$r=\dfrac{\sqrt3}{2}$。</p>
<h3>(3)</h3>
<p>角の二等分線の性質より $\mathrm{BD}:\mathrm{DC}=\mathrm{AB}:\mathrm{AC}=5:3$。よって $\mathrm{BD}=7\cdot\dfrac58=\dfrac{35}{8}$。</p>
<p>$\triangle\mathrm{ABD}+\triangle\mathrm{ACD}=\triangle\mathrm{ABC}$ を，$\mathrm{AD}=x$ として面積で書くと（$\angle\mathrm{BAD}=\angle\mathrm{CAD}=60^\circ$）</p>
<p>$$\frac12\cdot5x\sin60^\circ+\frac12\cdot3x\sin60^\circ=\frac{15\sqrt3}{4}$$</p>
<p>$\dfrac{\sqrt3}{4}\cdot8x=\dfrac{15\sqrt3}{4}$ より $x=\dfrac{15}{8}$。</p>
<h3>(4)</h3>
<p>$\cos\angle\mathrm{ABC}=\dfrac{\mathrm{AB}^2+\mathrm{BC}^2-\mathrm{AC}^2}{2\cdot\mathrm{AB}\cdot\mathrm{BC}}=\dfrac{25+49-9}{70}=\dfrac{65}{70}=\dfrac{13}{14}$。</p>
<div class="point">二等分線の長さは「面積の和」で求めるのが定番。</div>
`,
},

{
  id: '1A-keiryo-02',
  field: '1A-keiryo',
  points: 20,
  title: '円に内接する四角形',
  body: String.raw`
<p>円 O に内接する四角形 ABCD があり，$\mathrm{AB}=3$，$\mathrm{BC}=5$，$\mathrm{CD}=3$，$\angle\mathrm{ABC}=120^\circ$ である。</p>
<p><span class="q">(1)</span>　$\mathrm{AC}=\bx{ア}$ であり，$\angle\mathrm{ADC}=\bx{イウ}^\circ$ である。</p>
<p><span class="q">(2)</span>　$\mathrm{AD}=\bx{エ}$ である。また，四角形 ABCD の面積は $\dfrac{\bx{オカ}\sqrt{\bx{キ}}}{\bx{ク}}$ であり，円 O の半径は $\dfrac{\bx{ケ}\sqrt{\bx{コ}}}{\bx{サ}}$ である。</p>
<p><span class="q">(3)</span>　$\cos\angle\mathrm{BAD}=\dfrac{\bx{シ}}{\bx{ス}}$ であり，$\mathrm{BD}=\bx{セ}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '7', pts: 2 },
    { q: '(1)', k: 'イウ', v: '60', pts: 2 },
    { q: '(2)', k: 'エ', v: '8', pts: 3 },
    { q: '(2)', k: 'オカ,キ,ク', v: '39,3,4', tex: String.raw`\dfrac{39\sqrt{3}}{4}`, pts: 3 },
    { q: '(2)', k: 'ケ,コ,サ', v: '7,3,3', tex: String.raw`\dfrac{7\sqrt{3}}{3}`, pts: 3 },
    { q: '(3)', k: 'シ/ス', v: '1/2', pts: 3 },
    { q: '(3)', k: 'セ', v: '7', pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\triangle\mathrm{ABC}$ で余弦定理：$\mathrm{AC}^2=9+25-2\cdot3\cdot5\cos120^\circ=34+15=49$，$\mathrm{AC}=7$。</p>
<p>円に内接する四角形の対角の和は $180^\circ$ なので $\angle\mathrm{ADC}=60^\circ$。</p>
<h3>(2)</h3>
<p>$\mathrm{AD}=x$ として $\triangle\mathrm{ACD}$ で余弦定理：$49=x^2+9-2\cdot3x\cos60^\circ=x^2-3x+9$。</p>
<p>$x^2-3x-40=0$，$(x-8)(x+5)=0$，$x>0$ より $x=8$。</p>
<p>面積は $\triangle\mathrm{ABC}+\triangle\mathrm{ACD}=\dfrac12\cdot3\cdot5\cdot\dfrac{\sqrt3}{2}+\dfrac12\cdot8\cdot3\cdot\dfrac{\sqrt3}{2}=\dfrac{15\sqrt3}{4}+6\sqrt3=\dfrac{39\sqrt3}{4}$。</p>
<p>円 O は $\triangle\mathrm{ACD}$ の外接円でもあるので，正弦定理より $2R=\dfrac{7}{\sin60^\circ}$，$R=\dfrac{7}{\sqrt3}=\dfrac{7\sqrt3}{3}$。</p>
<h3>(3)</h3>
<p>$\angle\mathrm{BAD}=\theta$ とおくと $\angle\mathrm{BCD}=180^\circ-\theta$。BD を2通りに表す。</p>
<p>$\triangle\mathrm{ABD}$：$\mathrm{BD}^2=9+64-48\cos\theta=73-48\cos\theta$</p>
<p>$\triangle\mathrm{BCD}$：$\mathrm{BD}^2=25+9-30\cos(180^\circ-\theta)=34+30\cos\theta$</p>
<p>$73-48\cos\theta=34+30\cos\theta$ より $78\cos\theta=39$，$\cos\theta=\dfrac12$。</p>
<p>よって $\mathrm{BD}^2=73-24=49$，$\mathrm{BD}=7$。</p>
<div class="point">円に内接する四角形では $\cos(180^\circ-\theta)=-\cos\theta$ を使って，対角線を2通りに表すのが定番。</div>
`,
},

{
  id: '1A-keiryo-03',
  field: '1A-keiryo',
  points: 20,
  title: '直方体を切る平面と四面体',
  body: String.raw`
<p>直方体 ABCD-EFGH において，$\mathrm{AB}=4$，$\mathrm{AD}=3$，$\mathrm{AE}=2$ とする。ただし，辺 AE，BF，CG，DH は互いに平行である。</p>
<p><span class="q">(1)</span>　$\mathrm{BD}=\bx{ア}$ であり，頂点 A から線分 BD に下ろした垂線の長さは $\dfrac{\bx{イウ}}{\bx{エ}}$ である。</p>
<p><span class="q">(2)</span>　$\mathrm{DE}=\sqrt{\bx{オカ}}$ であり，$\cos\angle\mathrm{DBE}=\dfrac{\bx{キ}\sqrt{\bx{ク}}}{\bx{ケコ}}$ である。</p>
<p><span class="q">(3)</span>　$\triangle\mathrm{BDE}$ の面積は $\sqrt{\bx{サシ}}$ である。</p>
<p><span class="q">(4)</span>　四面体 ABDE の体積は $\bx{ス}$ であり，頂点 A から平面 BDE に下ろした垂線の長さは $\dfrac{\bx{セソ}\sqrt{\bx{タチ}}}{\bx{ツテ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '5', pts: 2 },
    { q: '(1)', k: 'イウ/エ', v: '12/5', pts: 3 },
    { q: '(2)', k: 'オカ', v: '13', pts: 2 },
    { q: '(2)', k: 'キ,ク,ケコ', v: '8,5,25', tex: String.raw`\dfrac{8\sqrt{5}}{25}`, pts: 3 },
    { q: '(3)', k: 'サシ', v: '61', pts: 3 },
    { q: '(4)', k: 'ス', v: '4', pts: 3 },
    { q: '(4)', k: 'セソ,タチ,ツテ', v: '12,61,61', tex: String.raw`\dfrac{12\sqrt{61}}{61}`, pts: 4 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\triangle\mathrm{ABD}$ は $\angle\mathrm{A}=90^\circ$ の直角三角形なので $\mathrm{BD}=\sqrt{16+9}=5$。</p>
<p>垂線の長さを $h$ とすると，面積を2通りに表して $\dfrac12\cdot4\cdot3=\dfrac12\cdot5\cdot h$，$h=\dfrac{12}{5}$。</p>
<h3>(2)</h3>
<p>$\mathrm{DE}=\sqrt{\mathrm{AD}^2+\mathrm{AE}^2}=\sqrt{9+4}=\sqrt{13}$，$\mathrm{BE}=\sqrt{16+4}=2\sqrt5$。</p>
<p>$$\cos\angle\mathrm{DBE}=\frac{\mathrm{BD}^2+\mathrm{BE}^2-\mathrm{DE}^2}{2\cdot\mathrm{BD}\cdot\mathrm{BE}}=\frac{25+20-13}{2\cdot5\cdot2\sqrt5}=\frac{32}{20\sqrt5}=\frac{8}{5\sqrt5}=\frac{8\sqrt5}{25}$$</p>
<h3>(3)</h3>
<p>$\sin\angle\mathrm{DBE}=\sqrt{1-\dfrac{64}{125}}=\sqrt{\dfrac{61}{125}}=\dfrac{\sqrt{61}}{5\sqrt5}$。</p>
<p>面積 $=\dfrac12\cdot5\cdot2\sqrt5\cdot\dfrac{\sqrt{61}}{5\sqrt5}=\sqrt{61}$。</p>
<h3>(4)</h3>
<p>四面体 ABDE は，底面 $\triangle\mathrm{ABD}$（面積6），高さ AE $=2$ と見ると，体積 $=\dfrac13\cdot6\cdot2=4$。</p>
<p>底面を $\triangle\mathrm{BDE}$ と見たときの高さを $d$ とすると $\dfrac13\cdot\sqrt{61}\cdot d=4$，$d=\dfrac{12}{\sqrt{61}}=\dfrac{12\sqrt{61}}{61}$。</p>
<div class="point">「点と平面の距離」は，四面体の体積を2通りに表して求める。</div>
`,
},

{
  id: '1A-keiryo-04',
  field: '1A-keiryo',
  points: 20,
  title: '塔の高さの測量と15°の三角比',
  body: String.raw`
<p>水平な地面に垂直に立つ塔 PQ（P が頂上，Q が地面上の点）がある。地面上の地点 A から P を見上げた角は $30^\circ$ であり，A から Q に向かってまっすぐ 20 m 進んだ地点 B から P を見上げた角は $45^\circ$ であった。A，B，Q は一直線上にある。目の高さは考えないものとする。</p>
<p><span class="q">(1)</span>　塔の高さ PQ は $\bx{アイ}(\sqrt{\bx{ウ}}+\bx{エ})$ m であり，$\mathrm{AP}=\bx{オカ}(\sqrt{\bx{キ}}+\bx{ク})$ m である。</p>
<p><span class="q">(2)</span>　$\mathrm{BP}=\bx{ケコ}(\sqrt{\bx{サ}}+\sqrt{\bx{シ}})$ m である。ただし，$\bx{サ}>\bx{シ}$ とする。</p>
<p><span class="q">(3)</span>　$\angle\mathrm{APB}=\bx{スセ}^\circ$ である。$\triangle\mathrm{APB}$ に正弦定理を用いると</p>
<p>$$\sin\bx{スセ}^\circ=\frac{\sqrt{\bx{ソ}}-\sqrt{\bx{タ}}}{\bx{チ}}$$</p>
<p>であり，$\cos\bx{スセ}^\circ=\dfrac{\sqrt{\bx{ツ}}+\sqrt{\bx{テ}}}{\bx{ト}}$ である。ただし，$\bx{ソ}>\bx{タ}$，$\bx{ツ}>\bx{テ}$ とする。</p>
<p><span class="q">(4)</span>　$\triangle\mathrm{APB}$ の面積は $\bx{ナニヌ}(\sqrt{\bx{ネ}}+\bx{ノ})$ m$^2$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ,ウ,エ', v: '10,3,1', tex: String.raw`10(\sqrt{3}+1)`, pts: 3 },
    { q: '(1)', k: 'オカ,キ,ク', v: '20,3,1', tex: String.raw`20(\sqrt{3}+1)`, pts: 2 },
    { q: '(2)', k: 'ケコ,サ,シ', v: '10,6,2', tex: String.raw`10(\sqrt{6}+\sqrt{2})`, pts: 3 },
    { q: '(3)', k: 'スセ', v: '15', pts: 2 },
    { q: '(3)', k: 'ソ,タ,チ', v: '6,2,4', tex: String.raw`\dfrac{\sqrt{6}-\sqrt{2}}{4}`, pts: 4 },
    { q: '(3)', k: 'ツ,テ,ト', v: '6,2,4', tex: String.raw`\dfrac{\sqrt{6}+\sqrt{2}}{4}`, pts: 3 },
    { q: '(4)', k: 'ナニヌ,ネ,ノ', v: '100,3,1', tex: String.raw`100(\sqrt{3}+1)`, pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>$\mathrm{PQ}=h$ とする。$\triangle\mathrm{BPQ}$ は直角二等辺三角形なので $\mathrm{BQ}=h$。$\triangle\mathrm{APQ}$ で $\tan30^\circ=\dfrac{h}{\mathrm{AQ}}$ より $\mathrm{AQ}=\sqrt3h$。</p>
<p>$\mathrm{AQ}-\mathrm{BQ}=20$ より $(\sqrt3-1)h=20$，$h=\dfrac{20}{\sqrt3-1}=\dfrac{20(\sqrt3+1)}{2}=10(\sqrt3+1)$。</p>
<p>$\mathrm{AP}=\dfrac{h}{\sin30^\circ}=2h=20(\sqrt3+1)$。</p>
<h3>(2)</h3>
<p>$\mathrm{BP}=\sqrt2h=10\sqrt2(\sqrt3+1)=10(\sqrt6+\sqrt2)$。</p>
<h3>(3)</h3>
<p>$\angle\mathrm{PBQ}=45^\circ$ は $\triangle\mathrm{APB}$ の外角なので $\angle\mathrm{APB}=45^\circ-30^\circ=15^\circ$。</p>
<p>正弦定理 $\dfrac{\mathrm{AB}}{\sin15^\circ}=\dfrac{\mathrm{BP}}{\sin30^\circ}$ より</p>
<p>$$\sin15^\circ=\frac{20\cdot\frac12}{10(\sqrt6+\sqrt2)}=\frac{1}{\sqrt6+\sqrt2}=\frac{\sqrt6-\sqrt2}{4}$$</p>
<p>$\sin^215^\circ=\dfrac{8-2\sqrt{12}}{16}=\dfrac{2-\sqrt3}{4}$ なので $\cos^215^\circ=\dfrac{2+\sqrt3}{4}=\dfrac{8+2\sqrt{12}}{16}=\left(\dfrac{\sqrt6+\sqrt2}{4}\right)^2$。$\cos15^\circ>0$ より $\cos15^\circ=\dfrac{\sqrt6+\sqrt2}{4}$。</p>
<h3>(4)</h3>
<p>底辺 AB $=20$，高さ PQ $=h$ と見て，面積 $=\dfrac12\cdot20\cdot10(\sqrt3+1)=100(\sqrt3+1)$。</p>
<div class="point">外角の性質（外角は隣り合わない2つの内角の和）から $15^\circ$ が現れる。</div>
`,
},

{
  id: '1A-keiryo-05',
  field: '1A-keiryo',
  points: 20,
  title: '正弦の比から決まる三角形',
  body: String.raw`
<p>$\triangle\mathrm{ABC}$ において，$\sin A:\sin B:\sin C=5:7:8$ が成り立っている。</p>
<p><span class="q">(1)</span>　$\triangle\mathrm{ABC}$ の3つの内角のうち，最も大きい角は $\bx{ア}$ である。</p>
<p>$\bx{ア}$ の解答群</p>
<div class="choices"><span>⓪ $A$</span><span>① $B$</span><span>② $C$</span></div>
<p><span class="q">(2)</span>　$\cos C=\dfrac{\bx{イ}}{\bx{ウ}}$ であり，$B=\bx{エオ}^\circ$ である。</p>
<p><span class="q">(3)</span>　$\triangle\mathrm{ABC}$ の外接円の半径が 7 のとき，$\mathrm{CA}=\bx{カ}\sqrt{\bx{キ}}$ であり，$\triangle\mathrm{ABC}$ の面積は $\bx{クケ}\sqrt{\bx{コ}}$，内接円の半径は $\bx{サ}$ である。</p>
<p><span class="q">(4)</span>　$\sin C=\dfrac{\bx{シ}\sqrt{\bx{ス}}}{\bx{セ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '②', note: 'C', pts: 2 },
    { q: '(2)', k: 'イ/ウ', v: '1/7', pts: 3 },
    { q: '(2)', k: 'エオ', v: '60', pts: 3 },
    { q: '(3)', k: 'カ,キ', v: '7,3', tex: String.raw`7\sqrt{3}`, pts: 3 },
    { q: '(3)', k: 'クケ,コ', v: '30,3', tex: String.raw`30\sqrt{3}`, pts: 3 },
    { q: '(3)', k: 'サ', v: '3', pts: 3 },
    { q: '(4)', k: 'シ,ス,セ', v: '4,3,7', tex: String.raw`\dfrac{4\sqrt{3}}{7}`, pts: 3 },
  ],
  explanation: String.raw`
<p>正弦定理 $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$ より，$a:b:c=\sin A:\sin B:\sin C=5:7:8$。$a=5k,\ b=7k,\ c=8k$（$k>0$）とおく。</p>
<h3>(1)</h3>
<p>最も長い辺 $c$ の対角が最大なので $C$（②）。</p>
<h3>(2)</h3>
<p>$\cos C=\dfrac{25+49-64}{2\cdot5\cdot7}=\dfrac{10}{70}=\dfrac17$。</p>
<p>$\cos B=\dfrac{25+64-49}{2\cdot5\cdot8}=\dfrac{40}{80}=\dfrac12$ より $B=60^\circ$。</p>
<h3>(3)</h3>
<p>$\mathrm{CA}=b=2R\sin B=14\cdot\dfrac{\sqrt3}{2}=7\sqrt3$。よって $k=\sqrt3$，$a=5\sqrt3$，$c=8\sqrt3$。</p>
<p>面積 $=\dfrac12ca\sin B=\dfrac12\cdot8\sqrt3\cdot5\sqrt3\cdot\dfrac{\sqrt3}{2}=30\sqrt3$。</p>
<p>内接円の半径 $r$：$30\sqrt3=\dfrac12r(5\sqrt3+7\sqrt3+8\sqrt3)=10\sqrt3\,r$ より $r=3$。</p>
<h3>(4)</h3>
<p>$\sin C=\sqrt{1-\dfrac1{49}}=\dfrac{\sqrt{48}}{7}=\dfrac{4\sqrt3}{7}$。（検算：$c=2R\sin C=14\cdot\dfrac{4\sqrt3}{7}=8\sqrt3$ で一致。）</p>
<div class="point">正弦の比 ＝ 辺の比。比のまま余弦定理を使えば角が求まる。</div>
`,
}

);
