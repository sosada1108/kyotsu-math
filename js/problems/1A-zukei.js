// 数学ⅠA 第3問相当「図形の性質」 オリジナル類題 5題（各20点）
window.PROBLEMS = window.PROBLEMS || [];
window.PROBLEMS.push(

{
  id: '1A-zukei-01',
  field: '1A-zukei',
  points: 20,
  title: 'メネラウスの定理・チェバの定理と面積比',
  body: String.raw`
<p>$\triangle\mathrm{ABC}$ において，辺 AB を $2:1$ に内分する点を D，辺 AC を $3:1$ に内分する点を E とする。線分 BE と線分 CD の交点を P，直線 AP と辺 BC の交点を F とする。</p>
<p><span class="q">(1)</span>　$\mathrm{BP}:\mathrm{PE}=\bx{ア}:\bx{イ}$，$\mathrm{CP}:\mathrm{PD}=\bx{ウ}:\bx{エ}$ である。</p>
<p><span class="q">(2)</span>　$\mathrm{BF}:\mathrm{FC}=\bx{オ}:\bx{カ}$，$\mathrm{AP}:\mathrm{PF}=\bx{キ}:\bx{ク}$ である。</p>
<p><span class="q">(3)</span>　$\triangle\mathrm{PBC}$ の面積は $\triangle\mathrm{ABC}$ の面積の $\dfrac{\bx{ケ}}{\bx{コ}}$ 倍であり，$\triangle\mathrm{APE}$ の面積は $\triangle\mathrm{ABC}$ の面積の $\dfrac{\bx{サ}}{\bx{シ}}$ 倍である。</p>
<p>ただし，比はもっとも簡単な整数の比で答えよ。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '2,1', tex: '2:1', pts: 3 },
    { q: '(1)', k: 'ウ,エ', v: '1,1', tex: '1:1', pts: 3 },
    { q: '(2)', k: 'オ,カ', v: '3,2', tex: '3:2', pts: 3 },
    { q: '(2)', k: 'キ,ク', v: '5,1', tex: '5:1', pts: 3 },
    { q: '(3)', k: 'ケ/コ', v: '1/6', pts: 4 },
    { q: '(3)', k: 'サ/シ', v: '1/4', pts: 4 },
  ],
  explanation: String.raw`
<p>$\mathrm{AD}:\mathrm{DB}=2:1$，$\mathrm{AE}:\mathrm{EC}=3:1$。</p>
<h3>(1)</h3>
<p>$\triangle\mathrm{ABE}$ と直線 DC にメネラウスの定理：$\dfrac{\mathrm{AD}}{\mathrm{DB}}\cdot\dfrac{\mathrm{BP}}{\mathrm{PE}}\cdot\dfrac{\mathrm{EC}}{\mathrm{CA}}=1$ より $2\cdot\dfrac{\mathrm{BP}}{\mathrm{PE}}\cdot\dfrac14=1$，$\mathrm{BP}:\mathrm{PE}=2:1$。</p>
<p>$\triangle\mathrm{ACD}$ と直線 BE：$\dfrac{\mathrm{AE}}{\mathrm{EC}}\cdot\dfrac{\mathrm{CP}}{\mathrm{PD}}\cdot\dfrac{\mathrm{DB}}{\mathrm{BA}}=1$ より $3\cdot\dfrac{\mathrm{CP}}{\mathrm{PD}}\cdot\dfrac13=1$，$\mathrm{CP}:\mathrm{PD}=1:1$。</p>
<h3>(2)</h3>
<p>チェバの定理：$\dfrac{\mathrm{AD}}{\mathrm{DB}}\cdot\dfrac{\mathrm{BF}}{\mathrm{FC}}\cdot\dfrac{\mathrm{CE}}{\mathrm{EA}}=1$ より $2\cdot\dfrac{\mathrm{BF}}{\mathrm{FC}}\cdot\dfrac13=1$，$\mathrm{BF}:\mathrm{FC}=3:2$。</p>
<p>$\triangle\mathrm{ABF}$ と直線 DC：$\dfrac{\mathrm{AD}}{\mathrm{DB}}\cdot\dfrac{\mathrm{BC}}{\mathrm{CF}}\cdot\dfrac{\mathrm{FP}}{\mathrm{PA}}=1$ より $2\cdot\dfrac52\cdot\dfrac{\mathrm{FP}}{\mathrm{PA}}=1$，$\mathrm{AP}:\mathrm{PF}=5:1$。</p>
<h3>(3)</h3>
<p>$\triangle\mathrm{ABC}$ の面積を $S$ とする。$\triangle\mathrm{EBC}=\dfrac{\mathrm{EC}}{\mathrm{AC}}S=\dfrac14S$。P は BE を $2:1$ に分けるので $\triangle\mathrm{PBC}=\dfrac23\triangle\mathrm{EBC}=\dfrac16S$。</p>
<p>$\triangle\mathrm{ABE}=\dfrac34S$，$\triangle\mathrm{APE}=\dfrac{\mathrm{PE}}{\mathrm{BE}}\triangle\mathrm{ABE}=\dfrac13\cdot\dfrac34S=\dfrac14S$。</p>
<p>（検算：$\mathrm{AP}:\mathrm{PF}=5:1$ より $\triangle\mathrm{PBC}=\dfrac16\triangle\mathrm{ABC}$ とも一致する。）</p>
<div class="point">メネラウスの定理は「三角形と，それを横切る1本の直線」を見つけるのがコツ。頂点 → 分点 → 頂点 → … と一周する。</div>
`,
},

{
  id: '1A-zukei-02',
  field: '1A-zukei',
  points: 20,
  title: '方べきの定理と接弦定理',
  body: String.raw`
<p>円 O の外部の点 P から円 O に接線を引き，接点を T とする。また，P を通る直線が円 O と 2 点 A，B で交わり，$\mathrm{PA}=4$，$\mathrm{AB}=5$（$\mathrm{PA}<\mathrm{PB}$）である。</p>
<p><span class="q">(1)</span>　$\mathrm{PT}=\bx{ア}$ である。</p>
<p><span class="q">(2)</span>　P と中心 O を通る直線が円 O と交わる点を P に近い方から C，D とすると，$\mathrm{PC}=3$ であった。このとき，円 O の半径は $\dfrac{\bx{イ}}{\bx{ウ}}$ であり，$\mathrm{PO}=\dfrac{\bx{エオ}}{\bx{カ}}$ である。</p>
<p><span class="q">(3)</span>　$\angle\mathrm{PTA}$ と大きさが等しい角は $\bx{キ}$ である。</p>
<p>$\bx{キ}$ の解答群</p>
<div class="choices"><span>⓪ $\angle\mathrm{TAB}$</span><span>① $\angle\mathrm{TBA}$</span><span>② $\angle\mathrm{TPB}$</span><span>③ $\angle\mathrm{ATB}$</span></div>
<p>このことから $\triangle\mathrm{PTA}\sim\triangle\mathrm{PBT}$ であり，$\mathrm{TA}:\mathrm{TB}=\bx{ク}:\bx{ケ}$，$\triangle\mathrm{PTA}$ と $\triangle\mathrm{PBT}$ の面積比は $\bx{コ}:\bx{サ}$ である。</p>
<p><span class="q">(4)</span>　弦 AB と中心 O の距離は $\sqrt{\bx{シス}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア', v: '6', pts: 3 },
    { q: '(2)', k: 'イ/ウ', v: '9/2', pts: 3 },
    { q: '(2)', k: 'エオ/カ', v: '15/2', pts: 2 },
    { q: '(3)', k: 'キ', v: '①', note: '∠TBA', pts: 3 },
    { q: '(3)', k: 'ク,ケ', v: '2,3', tex: '2:3', pts: 3 },
    { q: '(3)', k: 'コ,サ', v: '4,9', tex: '4:9', pts: 3 },
    { q: '(4)', k: 'シス', v: '14', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>方べきの定理 $\mathrm{PT}^2=\mathrm{PA}\cdot\mathrm{PB}=4\cdot9=36$ より $\mathrm{PT}=6$。</p>
<h3>(2)</h3>
<p>$\mathrm{PC}\cdot\mathrm{PD}=36$ より $\mathrm{PD}=12$。CD は直径なので $\mathrm{CD}=12-3=9$，半径は $\dfrac92$。</p>
<p>$\mathrm{PO}=\mathrm{PC}+\dfrac92=\dfrac{15}{2}$。（$\mathrm{PT}^2+\mathrm{OT}^2=36+\frac{81}{4}=\frac{225}{4}=\mathrm{PO}^2$ で確かに $\mathrm{OT}\perp\mathrm{PT}$。）</p>
<h3>(3)</h3>
<p>接弦定理より，接線 PT と弦 TA のなす角 $\angle\mathrm{PTA}$ は，弧 TA に対する円周角 $\angle\mathrm{TBA}$ に等しい（①）。</p>
<p>$\angle\mathrm{P}$ が共通なので $\triangle\mathrm{PTA}\sim\triangle\mathrm{PBT}$。相似比は $\mathrm{PT}:\mathrm{PB}=6:9=2:3$。</p>
<p>よって $\mathrm{TA}:\mathrm{BT}=2:3$，面積比は相似比の2乗で $4:9$。</p>
<h3>(4)</h3>
<p>中心から弦に下ろした垂線は弦を2等分する。距離を $d$ とすると $d^2+\left(\frac52\right)^2=\left(\frac92\right)^2$，$d^2=\frac{81-25}{4}=14$，$d=\sqrt{14}$。</p>
<div class="point">方べきの定理：$\mathrm{PA}\cdot\mathrm{PB}=\mathrm{PC}\cdot\mathrm{PD}=\mathrm{PT}^2$。接弦定理は相似を見つける手がかりになる。</div>
`,
},

{
  id: '1A-zukei-03',
  field: '1A-zukei',
  points: 20,
  title: '二等辺三角形の重心・内心・外心',
  body: String.raw`
<p>$\mathrm{AB}=\mathrm{AC}=5$，$\mathrm{BC}=6$ である $\triangle\mathrm{ABC}$ の重心を G，内心を I，外心を O とする。また，辺 BC の中点を M とする。</p>
<p><span class="q">(1)</span>　$\mathrm{AM}=4$ である。$\mathrm{AG}=\dfrac{\bx{ア}}{\bx{イ}}$ である。</p>
<p><span class="q">(2)</span>　$\triangle\mathrm{ABC}$ の内接円の半径は $\dfrac{\bx{ウ}}{\bx{エ}}$ であり，$\mathrm{AI}=\dfrac{\bx{オ}}{\bx{カ}}$ である。</p>
<p><span class="q">(3)</span>　$\triangle\mathrm{ABC}$ の外接円の半径は $\dfrac{\bx{キク}}{\bx{ケ}}$ である。</p>
<p><span class="q">(4)</span>　G，I，O は直線 AM 上にある。$\mathrm{OI}=\dfrac{\bx{コ}}{\bx{サ}}$，$\mathrm{OG}=\dfrac{\bx{シス}}{\bx{セソ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア/イ', v: '8/3', pts: 3 },
    { q: '(2)', k: 'ウ/エ', v: '3/2', pts: 3 },
    { q: '(2)', k: 'オ/カ', v: '5/2', pts: 3 },
    { q: '(3)', k: 'キク/ケ', v: '25/8', pts: 3 },
    { q: '(4)', k: 'コ/サ', v: '5/8', pts: 4 },
    { q: '(4)', k: 'シス/セソ', v: '11/24', pts: 4 },
  ],
  explanation: String.raw`
<p>二等辺三角形なので $\mathrm{AM}\perp\mathrm{BC}$，$\mathrm{AM}=\sqrt{25-9}=4$。面積 $S=\frac12\cdot6\cdot4=12$。重心・内心・外心はすべて対称軸 AM 上にある。</p>
<h3>(1)</h3>
<p>重心は中線を $2:1$ に内分するので $\mathrm{AG}=\frac23\cdot4=\frac83$。</p>
<h3>(2)</h3>
<p>$S=\frac12r(5+5+6)$ より $12=8r$，$r=\frac32$。I は AM 上で $\mathrm{IM}=r$ なので $\mathrm{AI}=4-\frac32=\frac52$。</p>
<h3>(3)</h3>
<p>$\sin B=\frac{\mathrm{AM}}{\mathrm{AB}}=\frac45$。正弦定理 $2R=\frac{\mathrm{AC}}{\sin B}=\frac{5}{4/5}=\frac{25}{4}$ より $R=\frac{25}{8}$。</p>
<h3>(4)</h3>
<p>O も AM 上で $\mathrm{AO}=R=\frac{25}{8}$（$<4$ なので O は線分 AM 上）。</p>
<p>$\mathrm{OI}=\mathrm{AO}-\mathrm{AI}=\frac{25}{8}-\frac{20}{8}=\frac58$。</p>
<p>$\mathrm{OG}=\mathrm{AO}-\mathrm{AG}=\frac{25}{8}-\frac83=\frac{75-64}{24}=\frac{11}{24}$。</p>
<div class="point">重心は中線の $2:1$，内心は面積 $S=\frac12r(a+b+c)$，外心は正弦定理で求める。</div>
`,
},

{
  id: '1A-zukei-04',
  field: '1A-zukei',
  points: 20,
  title: '2つの円の位置関係と共通接線',
  body: String.raw`
<p>半径 5 の円 $C_1$ と半径 3 の円 $C_2$ があり，中心間の距離を $d$ とする。</p>
<p><span class="q">(1)</span>　$C_1$ と $C_2$ が異なる 2 点で交わるような $d$ の値の範囲は $\bx{ア}< d<\bx{イ}$ である。</p>
<p><span class="q">(2)</span>　$C_1$ と $C_2$ の共通接線がちょうど 3 本となるのは $d=\bx{ウ}$ のときであり，ちょうど 1 本となるのは $d=\bx{エ}$ のときである。</p>
<p><span class="q">(3)</span>　$d=10$ のとき，共通外接線について，2 つの接点の間の距離は $\bx{オ}\sqrt{\bx{カ}}$ であり，共通内接線について，2 つの接点の間の距離は $\bx{キ}$ である。</p>
<p><span class="q">(4)</span>　$d=\bx{ウ}$ のとき，共通外接線について，2 つの接点の間の距離は $\bx{ク}\sqrt{\bx{ケコ}}$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'ア,イ', v: '2,8', tex: '2< d<8', pts: 3 },
    { q: '(2)', k: 'ウ', v: '8', pts: 3 },
    { q: '(2)', k: 'エ', v: '2', pts: 3 },
    { q: '(3)', k: 'オ,カ', v: '4,6', tex: String.raw`4\sqrt{6}`, pts: 4 },
    { q: '(3)', k: 'キ', v: '6', pts: 4 },
    { q: '(4)', k: 'ク,ケコ', v: '2,15', tex: String.raw`2\sqrt{15}`, pts: 3 },
  ],
  explanation: String.raw`
<p>半径 $r_1=5$，$r_2=3$。</p>
<h3>(1)</h3>
<p>2点で交わる $\iff r_1-r_2< d< r_1+r_2 \iff 2< d<8$。</p>
<h3>(2)</h3>
<p>共通接線の本数は，離れている：4本，外接（$d=8$）：3本，2点で交わる：2本，内接（$d=2$）：1本，内部にある：0本。</p>
<h3>(3)</h3>
<p>共通外接線：中心 $O_1,O_2$ から接線に下ろした垂線（長さ5と3）を考え，$O_2$ を通り接線に平行な線を引くと，直角三角形の斜辺 $d$，一辺 $r_1-r_2$ ができる。</p>
<p>$$\sqrt{d^2-(r_1-r_2)^2}=\sqrt{100-4}=\sqrt{96}=4\sqrt6$$</p>
<p>共通内接線では一辺が $r_1+r_2$ になる：$\sqrt{100-64}=6$。</p>
<h3>(4)</h3>
<p>$d=8$ のとき $\sqrt{64-4}=\sqrt{60}=2\sqrt{15}$。</p>
<div class="point">共通接線の長さは，接線を平行移動して直角三角形を作る。外接線は半径の差，内接線は半径の和。</div>
`,
},

{
  id: '1A-zukei-05',
  field: '1A-zukei',
  points: 20,
  title: '立方体の角を切り落とした多面体',
  body: String.raw`
<p>1辺の長さが 6 の立方体がある。この立方体の各頂点について，その頂点から出る3本の辺上で頂点からの距離が 2 である3点を通る平面で切り，頂点を含む部分を切り落とす。このとき残った立体を $K$ とする。</p>
<p><span class="q">(1)</span>　$K$ の面の数は $\bx{アイ}$，辺の数は $\bx{ウエ}$，頂点の数は $\bx{オカ}$ である。</p>
<p><span class="q">(2)</span>　$K$ の体積は $\dfrac{\bx{キクケ}}{\bx{コ}}$ である。</p>
<p><span class="q">(3)</span>　$K$ の表面積は $\bx{サシス}+\bx{セソ}\sqrt{\bx{タ}}$ である。</p>
<p><span class="q">(4)</span>　$K$ の面のうち，もとの立方体の面に含まれる八角形の1つの内角の大きさは $\bx{チツテ}^\circ$ である。</p>
`,
  answers: [
    { q: '(1)', k: 'アイ', v: '14', pts: 3 },
    { q: '(1)', k: 'ウエ', v: '36', pts: 3 },
    { q: '(1)', k: 'オカ', v: '24', pts: 3 },
    { q: '(2)', k: 'キクケ/コ', v: '616/3', pts: 4 },
    { q: '(3)', k: 'サシス,セソ,タ', v: '168,16,3', tex: String.raw`168+16\sqrt{3}`, pts: 4 },
    { q: '(4)', k: 'チツテ', v: '135', pts: 3 },
  ],
  explanation: String.raw`
<h3>(1)</h3>
<p>面：もとの6面（八角形になる）＋ 切り口8個（三角形）＝ 14。</p>
<p>頂点：切り口の三角形の頂点が 8×3 ＝ 24 個（もとの頂点はなくなる）。</p>
<p>辺：三角形の辺 8×3 ＝ 24 本 ＋ もとの各辺の残りの部分 12 本 ＝ 36。</p>
<p>オイラーの多面体定理 $v-e+f=24-36+14=2$ で確認できる。</p>
<h3>(2)</h3>
<p>切り落とす1つの部分は，直角をはさむ3辺が 2 の三角錐で，体積 $\frac13\cdot\frac12\cdot2\cdot2\cdot2=\frac43$。8個で $\frac{32}{3}$。</p>
<p>$6^3-\frac{32}{3}=216-\frac{32}{3}=\frac{616}{3}$。</p>
<h3>(3)</h3>
<p>八角形1つの面積：正方形 36 から直角二等辺三角形（等辺2）4個 $4\cdot2=8$ を除いて 28。6面で 168。</p>
<p>切り口の三角形は1辺 $2\sqrt2$ の正三角形で，面積 $\frac{\sqrt3}{4}(2\sqrt2)^2=2\sqrt3$。8個で $16\sqrt3$。</p>
<p>表面積は $168+16\sqrt3$。</p>
<h3>(4)</h3>
<p>正方形の角を $45^\circ$ の方向に切っているので，八角形の各内角は $180^\circ-45^\circ=135^\circ$。（辺の長さは 2 と $2\sqrt2$ が交互に並ぶので正八角形ではないが，内角はすべて $135^\circ$。）</p>
<div class="point">多面体の頂点・辺・面を数えたら，オイラーの多面体定理 $v-e+f=2$ で確認する。</div>
`,
}

);
