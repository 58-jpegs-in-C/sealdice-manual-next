import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,e as i}from"./app-27d44939.js";const a={},n=i(`<h1 id="内置脚本语言" tabindex="-1"><a class="header-anchor" href="#内置脚本语言" aria-hidden="true">#</a> 内置脚本语言</h1><div class="hint-container info"><p class="hint-container-title">本节内容</p><p>本节将介绍海豹内置的脚本语言，请善用侧边栏和搜索，按需阅读文档。</p></div><p>为了在很多地方支持实现一些逻辑，但又不至于直接使用学习门槛较高的正式编程语言，海豹提供了一种简单易学的脚本语言，可以称为「海豹语」「豹语」等。</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>你可能注意到，在自定义文案等地方，出现了一些以 <code>$t</code> 开头的东西，这些是海豹中的<strong>变量</strong>。</p><p>变量的名称可以是汉字、字母和数字，<code>$t</code> 是一个特殊的变量前缀，还有其它的前缀。不同前缀代表不同的作用域：</p><table><thead><tr><th>变量名字</th><th>用途</th><th>举例</th></tr></thead><tbody><tr><td>普通名字</td><td>玩家的角色属性</td><td>理智、力量、智力</td></tr><tr><td><code>$t开头</code></td><td>个人临时变量，不存数据库</td><td><code>$t随机点数</code></td></tr><tr><td><code>$m开头</code></td><td>个人变量，跨群存在</td><td><code>$m今日人品</code></td></tr><tr><td><code>$g开头</code></td><td>群变量，群内所有人共享</td><td><code>$g群主体重</code></td></tr></tbody></table><p>所有变量均可以在 <code>.rx</code> / <code>.rxh</code> / <code>.ra</code>/ <code>.text</code> 等指令以及「自定义文案」中使用。</p><div class="hint-container tip"><p class="hint-container-title">变量不生效？</p><p>如果一部分变量无效，请检查海豹是否为最新版本。</p></div><div class="hint-container note"><p class="hint-container-title">一些内置变量</p><table><thead><tr><th>变量名</th><th>内容</th><th>示例结果</th></tr></thead><tbody><tr><td><code>$t玩家</code></td><td>当前人物卡的名字，如果不存在则为群昵称或 QQ 昵称。</td><td>&lt;木落&gt;</td></tr><tr><td><code>$t玩家_RAW</code></td><td>同上，但没有&lt;&gt;</td><td>木落</td></tr><tr><td><code>$tQQ昵称</code></td><td>QQ 昵称</td><td>&lt;木落&gt;</td></tr><tr><td><code>$t账号ID</code></td><td>海豹格式的 ID</td><td>QQ:123456789</td></tr><tr><td><code>$t账号ID_RAW</code></td><td>原始格式的 ID</td><td>123456789</td></tr><tr><td><code>$tQQ</code></td><td>海豹格式的 ID</td><td>QQ:123456789</td></tr><tr><td><code>$t群名</code></td><td>群名</td><td>海豹核心·SealDice 用户群</td></tr><tr><td><code>$t群号</code></td><td>海豹格式的 ID</td><td>QQ-Group:987654321</td></tr><tr><td><code>$t群号_RAW</code></td><td>原始格式的 ID</td><td>987654321</td></tr><tr><td><code>$t个人骰子面数</code></td><td>个人骰子面数</td><td>100</td></tr><tr><td><code>$tDate</code></td><td>数字格式的现日期</td><td>20230109</td></tr><tr><td><code>$tYear</code></td><td>数字格式的年份</td><td>2023</td></tr><tr><td><code>$tMonth</code></td><td>数字格式的现月份</td><td>1</td></tr><tr><td><code>$tDay</code></td><td>数字格式的现日期</td><td>9</td></tr><tr><td><code>$tWeekday</code></td><td>数字格式的星期（1-7）</td><td>1</td></tr><tr><td><code>$tHour</code></td><td>数字格式的现时间（小时）</td><td>15</td></tr><tr><td><code>$tMinute</code></td><td>数字格式的现时间（分钟）</td><td>41</td></tr><tr><td><code>$tSecond</code></td><td>数字格式的现时间（秒）</td><td>55</td></tr><tr><td><code>$tTimestamp</code></td><td>数字格式的 10 位时间戳</td><td>1673250115</td></tr><tr><td><code>$t文本长度</code></td><td>触发消息的文本，汉字长度为 3，英文字母和数字长度为 1。</td><td>6</td></tr><tr><td><code>$t平台</code></td><td>触发的平台</td><td>QQ</td></tr><tr><td><code>$t游戏模式</code></td><td>随 <code>.set coc/dnd</code> 改变</td><td>coc7</td></tr><tr><td><code>$t消息类型</code></td><td>触发位置为群还是私聊（group/private）</td><td>group</td></tr><tr><td><code>娱乐:今日人品</code></td><td>自定义文案</td><td>&lt;木落&gt; 的今日人品为 0</td></tr><tr><td><code>常量:APPNAME</code></td><td>软件名</td><td>SealDice</td></tr><tr><td><code>常量:VERSION</code></td><td>版本号</td><td>1.4.0</td></tr><tr><td><code>$tMsgID</code></td><td>消息 ID，仅自定义回复中可用。</td><td>-123</td></tr></tbody></table><p>所有自定义文案也均为可用变量。</p></div><h2 id="数据类型和赋值" tabindex="-1"><a class="header-anchor" href="#数据类型和赋值" aria-hidden="true">#</a> 数据类型和赋值</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 注意，目前并不支持写注释，此为教程中便于展示
// 文本类型
$t0 = &#39;文本&#39;
$t0 = &quot;也是文本&quot;
$t0 = \`特殊文本类型，可以插入表达式，例如，玩家的力量数值: {力量}\`
$t0 = \`另一种插入表达式的写法 {% 力量 %} \`

// 数字类型
$t0 = 1

// 布尔类型：没有专门的布尔类型，0 或空字符串被视为 False，非零和非空字符串为 True
$t0 &gt; 1
$t0 &gt;= 1
$t0 == 1
$t0 != 1
$t0 &lt; 1
$t0 &lt;= 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2><p>多个语句可以用 <code>;</code> 分隔，取分隔后的最后一项的值，为整个表达式的值，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$t0 = 1;2;3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时 <code>$t0</code> 的值为 3</p><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="数学运算" tabindex="-1"><a class="header-anchor" href="#数学运算" aria-hidden="true">#</a> 数学运算</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>加减乘除余 + -* / %
乘方 ^ ** // 2 ** 3 或 2 ^ 3，即 2 的 3 次方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="骰子算符" tabindex="-1"><a class="header-anchor" href="#骰子算符" aria-hidden="true">#</a> 骰子算符</h3><p>d 常规骰子算符，用法举例 d20 2d20k1 d20 优势</p><p>f 命运骰，随机骰 4 次，每骰结果可能是 -1 0 1，记为 - 0 +</p><p>b 奖励骰 (COC)</p><p>p 惩罚骰 (COC)</p><p>c 双十字</p><h3 id="条件算符" tabindex="-1"><a class="header-anchor" href="#条件算符" aria-hidden="true">#</a> 条件算符</h3><h4 id="条件算符-1" tabindex="-1"><a class="header-anchor" href="#条件算符-1" aria-hidden="true">#</a> 条件算符 <code>?</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>灵视 &gt;= 40 ? &#39;如果灵视达到40以上，你就能看到这句话&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以用这个指令测试，下同：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.st 灵视 41
.text {灵视 &gt;= 40 ? &#39;如果灵视达到 40 以上，你就能看到这句话&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多重条件算符" tabindex="-1"><a class="header-anchor" href="#多重条件算符" aria-hidden="true">#</a> 多重条件算符 <code>? ,</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>灵视 &gt;= 80 ? &#39;看得很清楚吗？&#39;,
灵视 &gt;= 50 ? &#39;不错，再靠近一点……&#39;,
灵视 &gt;= 30 ? &#39;仔细听……&#39;,
灵视 &gt;= 0 ? &#39;呵，无知之人。&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用举例，默认的 jrrp</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{$t玩家} 今日人品为{$t人品}，{%
    $t人品 &gt; 95 ? &#39;人品爆表！&#39;,
    $t人品 &gt; 80 ? &#39;运气还不错！&#39;,
    $t人品 &gt; 50 ? &#39;人品还行吧&#39;,
    $t人品 &gt; 10 ? &#39;今天不太行&#39;,
    1 ? &#39;流年不利啊！&#39;
%}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三目运算符" tabindex="-1"><a class="header-anchor" href="#三目运算符" aria-hidden="true">#</a> 三目运算符 <code>? :</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>灵视 &gt;= 40 ? &#39;如果灵视达到 40 以上，你就能看到这句话&#39; : &#39;无知亦是幸运&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if $t0 &gt; 10 {
    $t1 = &quot;aaa&quot;
} else {
    $t1 = &#39;bbb&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">出现格式化错误</p><p>如果上面的代码输出「格式化错误」，那是因为你的 <code>$t0</code> 不是数值。字符串当然不能和数值比较大小，所以会报错。</p><p>解决方法：<code>.text {$t0=0}</code></p></div><p>实际测试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.text {% if $t0 &gt; 10 { $t1=&quot;aaa&quot;} else { $t1 = &#39;bbb&#39; }; $t1 %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,41),r=[n];function c(s,l){return t(),e("div",null,r)}const u=d(a,[["render",c],["__file","script.html.vue"]]);export{u as default};