import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as v,c as p,a as e,b as a,w as i,d as n,e as d}from"./app-27d44939.js";const b={},m=d('<h1 id="特色功能" tabindex="-1"><a class="header-anchor" href="#特色功能" aria-hidden="true">#</a> 特色功能</h1><div class="hint-container info"><p class="hint-container-title">本节内容</p><p>本节将会介绍海豹的特色功能。</p></div><h2 id="指令兼容性" tabindex="-1"><a class="header-anchor" href="#指令兼容性" aria-hidden="true">#</a> 指令兼容性</h2><p>海豹核心兼容了溯洄核心、赵骰核心和塔骰核心的绝大部分主流指令，无论之前用过哪一个都可以轻松上手。</p><p>海豹核心对指令格式不敏感，你可以使用 <code>.r1d20 +1</code>、<code>.r d20+1</code>、<code>.stshow力量 敏捷</code>、<code>。st hp - 1</code> 等等各种写法。</p><div class="hint-container info"><p class="hint-container-title">虽然海豹尽可能提高兼容性，我们仍推荐适当使用空格，以避免预期外结果。</p></div><h2 id="易于部署和使用" tabindex="-1"><a class="header-anchor" href="#易于部署和使用" aria-hidden="true">#</a> 易于部署和使用</h2><p>海豹的设计初衷是 <strong>「能被任何 TRPG 玩家喜爱和使用」</strong>，同时秉持 <strong>「没有提供 UI 的功能等于不存在」</strong> 的理念。</p><p>只需一个不到 25 MB 的安装包、一个可用的机器人账号、和一小段空闲时间，任何人都可以搭建一个 TRPG 骰子。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你希望在 QQ 平台上搭建骰子，由于 QQ 原则上不允许机器人账号，你会需要使用一些<strong>特殊技术</strong>，这可能花费你更多时间和精力。</p></div><h2 id="极少的资源占用" tabindex="-1"><a class="header-anchor" href="#极少的资源占用" aria-hidden="true">#</a> 极少的资源占用</h2><p>由于 Golang 的高效，海豹核心只占用大概 40 MB 内存，以及极少的 CPU 资源。</p><p>自带的《CoC 7th 怪物之锤》和《D&amp;D 系列资料》会另外占用 50 - 70 MB 内存，但能提供极为强大的资料查询功能。</p><p>内存占用会随着持续运行而稍稍增长并有所波动。根据我们的观察，即使是持续运行数月的大型公骰，内存占用也不会超过数百 MB。</p><h2 id="强自定义" tabindex="-1"><a class="header-anchor" href="#强自定义" aria-hidden="true">#</a> 强自定义</h2><p>提供了友好的 WebUI 界面，可以自定义大部分指令的回复语句。</p><p>同时对于自定义回复功能进行了强化，你可以编写一些复杂逻辑，使你的骰子更加鲜活。</p><h2 id="人工智能鸽子" tabindex="-1"><a class="header-anchor" href="#人工智能鸽子" aria-hidden="true">#</a> 人工智能鸽子</h2><p>让你想咕就咕。</p>',19),_={class:"hint-container note"},g=e("p",{class:"hint-container-title"},"示例",-1),f=d(`<h2 id="强大的查询功能" tabindex="-1"><a class="header-anchor" href="#强大的查询功能" aria-hidden="true">#</a> 强大的查询功能</h2><p>海豹搭载了全文搜索技术（仅限 PC 版），可以看作是一个微型搜索引擎。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.find 30尺 法术
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),x=d('<h2 id="通用特化支持" tabindex="-1"><a class="header-anchor" href="#通用特化支持" aria-hidden="true">#</a> 通用特化支持</h2><h3 id="代替他人检定-操作他人属性" tabindex="-1"><a class="header-anchor" href="#代替他人检定-操作他人属性" aria-hidden="true">#</a> 代替他人检定 / 操作他人属性</h3><h2 id="coc-特化支持" tabindex="-1"><a class="header-anchor" href="#coc-特化支持" aria-hidden="true">#</a> CoC 特化支持</h2><h3 id="属性同义词" tabindex="-1"><a class="header-anchor" href="#属性同义词" aria-hidden="true">#</a> 属性同义词</h3><p>各种旧版翻译、俗称、简繁汉字的属性被视为同一属性。</p><h3 id="默认技能等级" tabindex="-1"><a class="header-anchor" href="#默认技能等级" aria-hidden="true">#</a> 默认技能等级</h3><p>内置部分人物卡上没有的默认技能等级。</p><p>包括不限于速记、园艺、攀爬、各种武器等等。</p><h3 id="支持-scb-指令" tabindex="-1"><a class="header-anchor" href="#支持-scb-指令" aria-hidden="true">#</a> 支持 .scb 指令</h3><p>用于在 sc 时附加一个奖励骰。</p><p>适用于规则书中的<strong>关键连接</strong>自救规则。</p><h2 id="d-d-特化支持" tabindex="-1"><a class="header-anchor" href="#d-d-特化支持" aria-hidden="true">#</a> D&amp;D 特化支持</h2><h3 id="属性同义词-1" tabindex="-1"><a class="header-anchor" href="#属性同义词-1" aria-hidden="true">#</a> 属性同义词</h3><p>各种旧版翻译、俗称、简繁汉字的属性被视为同一属性。</p><h3 id="优势骰劣势骰" tabindex="-1"><a class="header-anchor" href="#优势骰劣势骰" aria-hidden="true">#</a> 优势骰劣势骰</h3>',15),C={class:"hint-container note"},k=e("p",{class:"hint-container-title"},"示例",-1),E=d('<h3 id="属性调整值和熟练自动计算" tabindex="-1"><a class="header-anchor" href="#属性调整值和熟练自动计算" aria-hidden="true">#</a> 属性调整值和熟练自动计算</h3><h3 id="临时属性" tabindex="-1"><a class="header-anchor" href="#临时属性" aria-hidden="true">#</a> 临时属性</h3><h3 id="法术位支持" tabindex="-1"><a class="header-anchor" href="#法术位支持" aria-hidden="true">#</a> 法术位支持</h3><h3 id="死亡豁免" tabindex="-1"><a class="header-anchor" href="#死亡豁免" aria-hidden="true">#</a> 死亡豁免</h3><h3 id="休息" tabindex="-1"><a class="header-anchor" href="#休息" aria-hidden="true">#</a> 休息</h3><h2 id="可以实时编辑的跑团日志" tabindex="-1"><a class="header-anchor" href="#可以实时编辑的跑团日志" aria-hidden="true">#</a> 可以实时编辑的跑团日志</h2>',6),B={href:"https://log.sealdice.com/",target:"_blank",rel:"noopener noreferrer"},A=d(`<p>在海豹中记录的日志会自动上传，省去你一一发送日志文件的麻烦。</p><p>除了海豹 Log 自用之外，支持 QQ 格式和塔骰格式，将你的 Log 全文粘贴到文本框里即可。</p><h2 id="是纯净骰-也是娱乐骰" tabindex="-1"><a class="header-anchor" href="#是纯净骰-也是娱乐骰" aria-hidden="true">#</a> 是纯净骰，也是娱乐骰</h2><p>海豹除了核心指令之外，都被设计为可插拔的，目前有 7 个内置扩展。</p><p>关闭对应扩展会连同扩展带来的指令一块关闭。</p><p>因此在跑团时，如果你不想要任何娱乐功能，你可以（以 CoC 团为例）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.ext fun off // 关闭.jrrp和.gugu
.ext reply off // 关闭关键字回复
.ext deck off // 关闭抽牌 .draw
.ext dnd5e off // 关闭dnd5e系列指令
.ext story off // 关闭.name[随机指令]/.modu[魔都查询]/.who[排序]等

也可以写成一行:
.ext fun reply deck dnd5e story off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来，就只剩下 coc 系列指令和 log 指令了。</p><p>这个改动在当前群聊持续生效。你也可以再打开相应扩展：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.ext fun on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你是骰主，你也可以在 WebUI 中设置各个扩展是否默认开启。这配置对于海豹核心新加入的群聊生效。</p><h2 id="更强的指令支持" tabindex="-1"><a class="header-anchor" href="#更强的指令支持" aria-hidden="true">#</a> 更强的指令支持</h2><p>海豹核心将表达式翻译成字节码，丢进指令虚拟机里执行，同时也做了很强的兼容性处理。</p><p>可以在不同骰系下测试一下这些指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.r 30 + (-1d20) + 49
.r d20 + (3 + 1d4)
.r 1 + (3+2)d(4+2d10)

.sc 0/-1
.sc (1+2)/0
.sc 0/1d4+(3*2)
.sc 1 / 2
.sc 1/2 + 3

.ra b 测试50
.ra b 50 测试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>彩蛋：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.r 1+d10-3*4 --asm
&lt;木落&gt;掷出了 1+d10-3*4=1 + 3[1d10=3] - 12=-8
=== VM Code ===
push 1
mark.left
push 1
mark.left
push 10
dice
add
mark.left
push 3
mark.left
push 4
mul
sub
halt
=== VM Code End===
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨平台" tabindex="-1"><a class="header-anchor" href="#跨平台" aria-hidden="true">#</a> 跨平台</h2><p>海豹核心的底层架构，支持单进程<strong>多号</strong>，也支持很方便地<strong>多开</strong>。</p><p><strong>多号</strong>指每个骰子上连接多个帐号，并且支持同时连接不同平台。</p><p><strong>多开</strong>指同时运行多个海豹核心，以提供各自不同的服务内容。</p><h2 id="trpg-规则支持列表" tabindex="-1"><a class="header-anchor" href="#trpg-规则支持列表" aria-hidden="true">#</a> TRPG 规则支持列表</h2>`,22),D=e("li",null,"COC7",-1),w=e("li",null,"COC - DeltaGreen (.setcoc dg)",-1),L=e("li",null,"DND5e",-1),M=e("li",null,"暗影狂奔 (.rsr)",-1),Q=e("li",null,"WOD/无限团 (.ww)",-1),T=e("li",null,"双十字 DoubleCross (.dx)",-1),V=e("li",null,"共鸣性怪异 Emoklore (.ek .ekgen)",-1),G=e("li",null,"剑世界 2.5 (插件)",-1),I=e("li",null,"明日方舟跑团规则 (插件)",-1),N={href:"https://github.com/sealdice/javascript/tree/main/scripts/%E6%A1%8C%E6%B8%B8%E8%A7%84%E5%88%99",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"如果你不跑这些规则，或者觉得并无必要，可以在后台关闭对应的指令。",-1),R=e("p",null,"如果你喜欢的规则这里没有，那么可以去插件仓库看一看，或者自己编写规则模板插件！",-1);function y(U,F){const t=s("ChatBox"),h=s("Tabs"),o=s("RouterLink"),c=s("ExternalLinkIcon");return v(),p("div",null,[m,e("div",_,[g,a(h,{id:"61",data:[{id:".gugu"},{id:"查看鸽子背后的故事"}]},{title0:i(({value:r,isActive:l})=>[n(".gugu")]),title1:i(({value:r,isActive:l})=>[n("查看鸽子背后的故事")]),tab0:i(({value:r,isActive:l})=>[a(t,{messages:[{content:".gugu",send:!0},{content:"🕊️: <木落>在来开团的路上被巨龙叼走了！"}]},null,8,["messages"])]),tab1:i(({value:r,isActive:l})=>[a(t,{messages:[{content:".gugu 来源",send:!0},{content:`🕊️: 前往了一个以前捕鲸的小岛度假~这里人很亲切！但是吃了这里的鱼肉料理之后有点晕晕的诶...想到前几天<木落>的短信，还是别追究他为什么不在了。
	——鹊鹊结合实际经历创作`}]},null,8,["messages"])]),_:1},8,["data"])]),f,e("p",null,[n("细节可参见 "),a(o,{to:"/use/core.html#find-%E8%AF%8D%E6%9D%A1%E6%9F%A5%E8%AF%A2%E6%8C%87%E4%BB%A4"},{default:i(()=>[n("查询指令")]),_:1}),n(" 一节。")]),x,e("div",C,[k,a(t,{messages:[{content:".set 20",send:!0},{content:"设定默认骰子面数为 20"},{content:".r d20优势",send:!0},{content:"<木落>掷出了 d20优势=[{7 | 6 }]=7"},{content:".r d劣势",send:!0},{content:"<木落>掷出了 d劣势=[{16 | 18 }]=16"}]},null,8,["messages"])]),E,e("p",null,[n("海豹开发了 "),e("a",B,[n("日志在线染色器"),a(c)]),n("。")]),A,e("ul",null,[D,w,L,M,Q,T,V,G,I,e("li",null,[n("其它插件由海豹社区提供，欢迎前去 "),e("a",N,[n("插件仓库"),a(c)]),n(" 查看")])]),P,R])}const j=u(b,[["render",y],["__file","special_feature.html.vue"]]);export{j as default};
