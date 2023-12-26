import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c as p,a as n,d as s,b as c,e as i}from"./app-27d44939.js";const l={},r=n("h1",{id:"编写帮助文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编写帮助文档","aria-hidden":"true"},"#"),s(" 编写帮助文档")],-1),d={class:"hint-container info"},u=n("p",{class:"hint-container-title"},"本节内容",-1),k=n("p",null,"本节将介绍帮助文档的编写，请善用侧边栏和搜索，按需阅读文档。",-1),v=n("p",null,"我们假定你已了解 JSON 格式。如果你对 JSON 还很陌生，可以阅读以下教程或自行在互联网搜索：",-1),q={href:"https://www.runoob.com/json/json-tutorial.html",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="创建-json-格式的帮助文档" tabindex="-1"><a class="header-anchor" href="#创建-json-格式的帮助文档" aria-hidden="true">#</a> 创建 JSON 格式的帮助文档</h2><p>你可以直接按照以下格式书写 <code>&lt;helpdoc&gt;.json</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;名字&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;作者&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brief&quot;</span><span class="token operator">:</span> <span class="token string">&quot;概述&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;备注&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;helpdoc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;词条A&quot;</span><span class="token operator">:</span> <span class="token string">&quot;词条 A 的具体内容。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;词条B&quot;</span><span class="token operator">:</span> <span class="token string">&quot;词条 B 的具体内容。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;词条C&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[图:data/images/sealdice.png] 词条 C 的图片与内容。&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若你的文本需要换行，你可以使用 <code>\\n</code> 作为换行符，而不是在编写时直接换行，这会导致格式错误。你还可以使用 <code>\\f</code> 或 <code>{FormFeed}</code> 作为分页符。</p><div class="hint-container warning"><p class="hint-container-title">标准 JSON 而不是 JSON5</p><p>海豹支持的 JSON 帮助文档是「<strong>标准 JSON</strong>」格式，诸如注释，尾逗号等语法不属于 JSON 语法，而是 JSON5 这个扩展标准的语法，出错时请严格检查。</p><p><em>目前暂不考虑支持 JSON5 标准。</em></p></div><div class="hint-container warning"><p class="hint-container-title">文件编码</p><p>请<strong>永远</strong>使用 UTF-8 编码编写 helpdoc。</p></div><p>你可以在 JSON 格式的帮助文档中嵌套引用其它条目：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;helpdoc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;词条A&quot;</span><span class="token operator">:</span> <span class="token string">&quot;词条 A 的具体内容。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;词条B&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{词条A}词条 B 的具体内容。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;词条C&quot;</span><span class="token operator">:</span> <span class="token string">&quot;你还可以 {词条A}\\n{词条B}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此一来当你发送 <code>.help 词条 B</code> 时，骰子将回复：「词条 A 的具体内容。词条 B 的具体内容。」。</p><h3 id="示例文档-塔罗牌-节选" tabindex="-1"><a class="header-anchor" href="#示例文档-塔罗牌-节选" aria-hidden="true">#</a> 示例文档：塔罗牌（节选）</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;KIYTarot&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;浣熊旅記&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brief&quot;</span><span class="token operator">:</span> <span class="token string">&quot;KIY 塔罗牌&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;释义来源网络。&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;helpdoc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;愚者逆位&quot;</span><span class="token operator">:</span> <span class="token string">&quot;漂泊，冒险，鲁莽，冒失，疯狂，无视物质损失，灵魂堕落，内心空虚，感情轻浮。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;魔术师逆位&quot;</span><span class="token operator">:</span> <span class="token string">&quot;方向错误，被骗或失败，局面失控，二流角色，缺乏热忱和创造力，爱情难有进展。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;女祭司逆位&quot;</span><span class="token operator">:</span> <span class="token string">&quot;挑剔，贪心，目光短浅，洁癖，不适宜的激情，自尊心太强，锋芒外露，单相思。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;女皇逆位&quot;</span><span class="token operator">:</span> <span class="token string">&quot;冷淡，缺乏上进心，困难，享乐，环境险恶，贴近自然，自负，纠纷，感情挫折。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;皇帝逆位&quot;</span><span class="token operator">:</span> <span class="token string">&quot;幼稚，挫折，武断，滥用权利，冷酷，占有欲和控制力强烈，感情勉强。&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-excel-格式的帮助文档" tabindex="-1"><a class="header-anchor" href="#创建-excel-格式的帮助文档" aria-hidden="true">#</a> 创建 EXCEL 格式的帮助文档</h2><p>你还可以按照以下格式书写 <code>&lt;helpdoc&gt;.xlsx</code>：</p><table><thead><tr><th>Key</th><th>Synonym</th><th>Content</th><th>Description</th><th>Catalogue</th><th>Tag</th></tr></thead><tbody><tr><td>词条 A</td><td>词条同义词</td><td>词条内容</td><td>对词条的简述</td><td>所属目录</td><td>内容 TAG</td></tr><tr><td>海豹骰</td><td>豹骰/海豹/sealdice</td><td>一个简单易用的跑团骰子系统。<br>形象是海豹，可以被叫做海豹骰、豹骰，豹子骰之类。</td><td></td><td></td><td></td></tr></tbody></table><p>Excel 格式的 helpdoc 分为 <code>Key</code>、<code>Synonym</code>、<code>Content</code>、<code>Description</code>、<code>Catalogue</code>、<code>Tag</code> 六块，其中第二列、后三项为选填，一般情况下你都可以留空。</p><ul><li><code>Synonym</code> 列可以填写多个同义词，使用 <code>/</code> 分隔即可。</li><li>Excel 中的词条内容可以直接换行（也可以使用 <code>\\n</code> 来换行，但不支持其它换行符与分页符），因此它常用来快速编写有大段文字的帮助文档。</li><li>帮助文档所在工作表的名称会作为前缀加入词条。如将工作表命名为 <code>测试</code>，则对应的词条会显示为 <code>测试:词条 A</code>。由于海豹的 <code>.find</code> 指令会对词条进行模糊检索，所以你不必担心前缀对查询带来的影响。</li></ul><div class="hint-container warning"><p class="hint-container-title">必须保留首行！</p><p>不要删去第一行的 <code>Key</code>、<code>Synonym</code> 等词。请从第二行开始编写词条。</p></div><div class="hint-container tip"><p class="hint-container-title">EXCEL 格式的帮助文档</p><p><code>&lt;helpdoc&gt;.xlsx</code> 原本是梨骰用于 D&amp;D 词条查询的格式，但海豹同样可以读取它。</p></div>`,18);function m(b,g){const a=o("ExternalLinkIcon");return e(),p("div",null,[r,n("div",d,[u,k,v,n("ul",null,[n("li",null,[n("a",q,[s("菜鸟教程 - JSON"),c(a)])])])]),h])}const x=t(l,[["render",m],["__file","edit_helpdoc.html.vue"]]);export{x as default};
