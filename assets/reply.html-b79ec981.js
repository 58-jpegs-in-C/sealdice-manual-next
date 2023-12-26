import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as u,c as g,f,a,b as s,d as e,w as i,e as o}from"./app-27d44939.js";const _="/sealdice-manual-next/assets/reply-ui-21e723ec.png",b="/sealdice-manual-next/assets/reply-config-9a9b3956.png",v="/sealdice-manual-next/assets/reply-file-192cfb5e.png",m="/sealdice-manual-next/assets/reply-file-disable-2c78163f.png",x="/sealdice-manual-next/assets/reply-add-53e5e751.png",E={},y=o('<h1 id="自定义回复" tabindex="-1"><a class="header-anchor" href="#自定义回复" aria-hidden="true">#</a> 自定义回复</h1><div class="hint-container info"><p class="hint-container-title">本节内容</p><p>本节将介绍自定义回复功能，请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="什么是自定义回复" tabindex="-1"><a class="header-anchor" href="#什么是自定义回复" aria-hidden="true">#</a> 什么是自定义回复？</h2><blockquote><ul><li><p>我希望让骰子能回复用户发送的早安、午安、晚安，应该怎么做？</p></li><li><p>我不会 JavaScript，有没有更简单的方式给骰子编写功能呢？</p></li><li><p>……</p></li></ul></blockquote><p>如果希望骰子能对某些关键词做出响应，最简单的方式就是使用「自定义回复」功能。</p>',5),A={class:"hint-container note"},k=a("p",{class:"hint-container-title"},"示例",-1),B=o('<p>「自定义回复」是海豹核心提供的一种功能扩展方式。它的形式自由，触发机制多样（关键字、正则表达式等），并且能配合海豹核心的变量系统与牌堆功能使用。无论你只是想增加简单的回复，还是需要复杂的判断和响应，都可以尝试使用自定义回复。</p><h2 id="在哪编写自定义回复" tabindex="-1"><a class="header-anchor" href="#在哪编写自定义回复" aria-hidden="true">#</a> 在哪编写自定义回复？</h2><p>点击海豹 UI 界面的「扩展功能 - 自定义回复」选项，你就可以进入「自定义回复」的设置页面。</p><figure><img src="'+_+'" alt="自定义回复页" tabindex="0" loading="lazy"><figcaption>自定义回复页</figcaption></figure><p>默认情况下，自定义回复功能是被关闭的，你可以点击 <strong>页面左上角的开关</strong> 打开这一功能，在同意许可协议后，你就可以看到自定义回复的设置页面，下面我们将一一介绍其中的功能。</p><figure><img src="'+b+'" alt="自定义回复设置页" tabindex="0" loading="lazy"><figcaption>自定义回复设置页</figcaption></figure><p>在页面的上半部分，你可以看见一些帮助信息，阅读它们也能为编写自定义回复带来帮助。</p><h3 id="当前回复文件" tabindex="-1"><a class="header-anchor" href="#当前回复文件" aria-hidden="true">#</a> 当前回复文件</h3><figure><img src="'+v+'" alt="自定义回复文件" tabindex="0" loading="lazy"><figcaption>自定义回复文件</figcaption></figure><p>「自定义回复」支持多个设置文件，你可以在下拉框选择进行切换。默认状态下，会有一个名为 <code>reply.yaml</code> 的初始自定义回复文件，可以直接在该文件中进行自定义回复的编写。</p><p>你可以分别控制回复文件的启用与否。启用了的回复文件会显示「已启用」，如果显示「未启用」，可以点击它启用该文件。</p><figure><img src="'+m+'" alt="未启用的自定义回复文件" tabindex="0" loading="lazy"><figcaption>未启用的自定义回复文件</figcaption></figure><p>对于每一个自定义回复文件，都可以进行「删除」和「下载」操作，方便你管理和分享它们。</p><p>在编写过程中，可以勾选「开启回复调试日志」项，来为你编写回复提供更多有用信息。</p><div class="hint-container danger"><p class="hint-container-title">删除要谨慎！</p><p>点击「删除」时，会弹出二次确认框。<strong>一旦点击确认，删除的文件将无法找回</strong>，务必在删除时小心确认。</p><p>可以选择点击「已启用」按钮禁用它来代替删除。</p></div><h3 id="新建-解析-导入自定义回复文件" tabindex="-1"><a class="header-anchor" href="#新建-解析-导入自定义回复文件" aria-hidden="true">#</a> 新建/解析/导入自定义回复文件</h3><p>在当前文件的右侧有三个按钮，它们是快速创建新自定义回复的不同方式：</p><ul><li>新建：创建一个新的自定义回复文件。在你想要将不同的回复区分开，方便管理的时候，可以新建一个文件；</li><li>解析：通过粘贴文本来快速向当前文件添加自定义回复项。通常来说这段文本是其他人分享给你的；</li><li>上传：直接上传 <code>.yaml</code> 格式的自定义回复文件，通常来说这也是其他人分享给你的。</li></ul><h3 id="获取自定义回复文件" tabindex="-1"><a class="header-anchor" href="#获取自定义回复文件" aria-hidden="true">#</a> 获取自定义回复文件</h3>',19),C={href:"https://github.com/sealdice/reply",target:"_blank",rel:"noopener noreferrer"},D=o('<div class="hint-container note"><p class="hint-container-title">无法访问仓库？</p><p>仓库位于 GitHub，访问时请确认你的网络状况。</p></div><h2 id="设置回复项" tabindex="-1"><a class="header-anchor" href="#设置回复项" aria-hidden="true">#</a> 设置回复项</h2><p>在自定义回复页的左下角有一个「添加一项」按钮，点击可以向当前文件中添加一条回复项。</p><figure><img src="'+x+'" alt="添加回复项" tabindex="0" loading="lazy"><figcaption>添加回复项</figcaption></figure><p>每一个自定义回复项都包括两个部分：<strong>「条件」</strong> 和 <strong>「结果」</strong>，分别对应着该回复项的触发条件和骰子的回复动作。</p><p>在回复项的左上角可以控制该项的启用与否，右上角可以删除这一条回复项。当回复项较多的时候，可以点击「收缩」来将不重要的项折叠起来。</p><div class="hint-container tip"><p class="hint-container-title">随时保存修改</p><p>记得随时保存自己的修改，防止改动内容丢失。</p></div><h3 id="回复项的条件" tabindex="-1"><a class="header-anchor" href="#回复项的条件" aria-hidden="true">#</a> 回复项的条件</h3><p>在回复项的左上角是该项的匹配模式，可以理解为当什么情况下会触发这一条回复项。目前提供了三种匹配模式：</p><ul><li>文本匹配：即设置什么样的内容会触发这条回复项；</li><li>文本长度：即当回复内容的长度满足什么条件时会触发这条回复项；</li><li>表达式为真：此处不介绍，见 <a href="#%E6%9B%B4%E5%A4%8D%E6%9D%82%E7%9A%84%E5%9B%9E%E5%A4%8D">更复杂的回复</a>。</li></ul><p>回复项的条件支持多个，点击「增加」即可为该回复项增加一个条件。当回复项有多个条件时，<strong>必须同时满足所有条件</strong> 才会触发该回复项。</p><div class="hint-container tip"><p class="hint-container-title">如何实现多个内容中任意一个均可触发回复项？</p><blockquote><ul><li>我希望 <code>v我50</code> 和 <code>vme50</code> 任意一个都能触发同样的回复，我该不会需要编写两条相同的回复项吧？</li></ul></blockquote><p>当然不用！你可以使用文本匹配中的「任意相符」方式来实现，或者直接使用「正则匹配」方式。见 <a href="#%E6%96%87%E6%9C%AC%E5%8C%B9%E9%85%8D">文本匹配</a>。</p></div><h4 id="文本匹配" tabindex="-1"><a class="header-anchor" href="#文本匹配" aria-hidden="true">#</a> 文本匹配</h4><p>文本匹配支持多种方式，在内容中填写要匹配的内容，即可按设置的方式匹配触发回复项。</p><ul><li>精准匹配：当骰子收到和内容 <strong>完全一致</strong> 的消息时，触发该回复项；</li><li>任意相符：收到符合任意一个内容的消息时，都能触发该回复项，如 aa|bb，则 aa 或 bb 均可触发；</li><li>包含文本：消息包含此内容时触发；</li><li>不含文本：消息不包含此内容时触发；</li><li>模糊匹配：消息与内容相似时触发该回复项；<em>（普通用户无需纠结什么叫相似）</em></li><li>正则匹配：消息匹配正则表达式时触发，此处不介绍，见 <a href="#%E6%9B%B4%E5%A4%8D%E6%9D%82%E7%9A%84%E5%9B%9E%E5%A4%8D">更复杂的回复</a>；</li><li>前缀匹配：消息以内容为开头时触发；</li><li>后缀匹配：消息以此内容为结尾时触发。</li></ul>',15),q={class:"hint-container note"},z=a("p",{class:"hint-container-title"},"「任意相符」示例",-1),N=a("p",null,[e("设置：任意相符，文本 "),a("code",null,"a|b"),e("，回复 "),a("code",null,"c"),e("。")],-1),V=o('<div class="hint-container tip"><p class="hint-container-title">常用方式</p><p>「精准匹配」与「任意相符」是最常用的模式。当然，对于了解正则表达式的用户，「正则匹配」也是经常被使用的。</p></div><h4 id="文本长度" tabindex="-1"><a class="header-anchor" href="#文本长度" aria-hidden="true">#</a> 文本长度</h4><p>指定字数，当消息长度「大于等于」或「小于等于」给定的字数时触发对应回复项。</p><div class="hint-container warning"><p class="hint-container-title">汉字的长度</p><p>在文本长度匹配中，一个汉字算作两个字符。如 <code>你好</code> 两字可以触发大于等于 4 的文本长度匹配。</p></div><h3 id="回复项的结果" tabindex="-1"><a class="header-anchor" href="#回复项的结果" aria-hidden="true">#</a> 回复项的结果</h3><p>每一个回复项可以有一个或者多个「回复结果」，多个回复结果将 <strong>从上到下依次执行</strong>。点击「增加」可以新增一条结果，也可以通过「删除结果」按钮去掉对应结果。</p><p>每一个回复结果可以有多条回复文本，结果会在这些文本中 <strong>随机抽取</strong> 一条作为结果。</p><p>回复可以是直接的回复，也可以指定是「私聊回复」或者「群内回复」。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>回复项有几个结果，该回复项就会发送几条消息。</p></div><h4 id="回复结果延迟" tabindex="-1"><a class="header-anchor" href="#回复结果延迟" aria-hidden="true">#</a> 回复结果延迟</h4><p>可以给回复结果设置延迟，消息将在此延迟后发送，单位是秒，可以是小数。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>QQ 消息的随机延迟仍会被加入，如果你希望保证发言顺序，记得考虑这点。</p></div><h2 id="更复杂的回复" tabindex="-1"><a class="header-anchor" href="#更复杂的回复" aria-hidden="true">#</a> 更复杂的回复</h2><blockquote><ul><li><p>自定义回复要怎么抽取牌堆？</p></li><li><p>我想控制只有私聊才触发回复，要怎样设置？</p></li><li><p>我希望编写有一定逻辑的自定义回复，我要怎么做？</p></li><li><p>前缀/后缀/包含等文本匹配方式不够用/出现误判，听说可以用正则匹配解决？要怎样使用呢？</p></li><li><p>……</p></li></ul></blockquote><p>更复杂的自定义回复编写，会涉及到海豹提供的其他系统，如牌堆、内置脚本语法、变量机制等。也有可能要求你有其它知识的了解，如正则表达式等。</p>',15);function w(L,I){const l=c("ChatBox"),r=c("ExternalLinkIcon"),d=c("Tabs"),p=c("RouterLink");return u(),g("div",null,[y,f(" ![自定义回复的典型使用场景](./images/reply-example.png =65%x65%) "),a("div",A,[k,s(l,{messages:[{content:"v我50",send:!0},{content:"¥50"}]})]),B,a("p",null,[e("你可以在 "),a("a",C,[e("自定义回复仓库"),s(r)]),e(" 或官方群的群文件中找到其他骰主分享的文件，使用「上传」功能导入它们。")]),D,a("div",q,[z,N,s(d,{id:"233",data:[{id:"输入：a"},{id:"输入：b"},{id:"输入：ab（不回复）"},{id:"输入：a|b（不回复）"},{id:"输入：其它（不回复）"}]},{title0:i(({value:t,isActive:n})=>[e("输入：a")]),title1:i(({value:t,isActive:n})=>[e("输入：b")]),title2:i(({value:t,isActive:n})=>[e("输入：ab（不回复）")]),title3:i(({value:t,isActive:n})=>[e("输入：a|b（不回复）")]),title4:i(({value:t,isActive:n})=>[e("输入：其它（不回复）")]),tab0:i(({value:t,isActive:n})=>[s(l,{messages:[{content:"a",send:!0},{content:"c"}]})]),tab1:i(({value:t,isActive:n})=>[s(l,{messages:[{content:"b",send:!0},{content:"c"}]})]),tab2:i(({value:t,isActive:n})=>[s(l,{messages:[{content:"ab",send:!0}]})]),tab3:i(({value:t,isActive:n})=>[s(l,{messages:[{content:"a|b",send:!0}]})]),tab4:i(({value:t,isActive:n})=>[s(l,{messages:[{content:"114514",send:!0}]})]),_:1})]),V,a("p",null,[e("如果你有复杂回复编写的需要，或想了解更多细节，可以跳转到 "),s(p,{to:"/advanced/edit_reply.html"},{default:i(()=>[e("进阶 - 编写自定义回复")]),_:1}),e(" 进行阅读。")])])}const R=h(E,[["render",w],["__file","reply.html.vue"]]);export{R as default};