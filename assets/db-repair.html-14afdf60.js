import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as p,b as t,w as d,a as e,d as a,e as n}from"./app-27d44939.js";const v={},h=n('<h1 id="数据库检查和修复" tabindex="-1"><a class="header-anchor" href="#数据库检查和修复" aria-hidden="true">#</a> 数据库检查和修复</h1><div class="hint-container info"><p class="hint-container-title">本节内容</p><p>本节包括两项内容：如何判断海豹的数据库是否损坏，在损坏时如何修复。</p><p>数据库损坏发生的原因很多，包括但不限于突发断电、硬盘受到物理损坏、或硬盘空间占满。</p></div><h2 id="确定问题" tabindex="-1"><a class="header-anchor" href="#确定问题" aria-hidden="true">#</a> 确定问题</h2><p>如果你发现角色卡或 Log 会在重启海豹后丢失，或数据库文件变得很大（通常在 200MB 以上），建议对数据库进行完整性检查。</p><p>首先，停止海豹运行。在 Windows 系统上，你可以右键点击托盘图标并选择退出；在其他系统上，通常是在执行海豹核心的终端使用 ctrl+c 组合键；如果你注册了系统服务，通常是使用 <code>systemctl stop sealdice</code> 命令。</p><p>稍作等待，以确保数据被写入硬盘。</p><p>随后，使用命令行程序进入海豹的目录，执行以下命令。如果对使用命令行感到困难，后面有一个简化的替代方案。</p>',7),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`sealdice-core /db-check
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`./sealdice-core --db-check
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),_=n(`<p>你将看到类似的输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数据库检查结果：
data.db: true
data-logs.db: true
data-censor.db: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这代表数据库是正常的。列出的是海豹核心使用的 3 个数据库文件：</p><ul><li>data.db - 人物卡和群内临时卡</li><li>data-logs.db - 跑团日志</li><li>data-censor.db - 敏感词库</li></ul><p>如果有某个数据库文件后输出了 <code>false</code>，说明该文件内容损坏。</p><h3 id="无法使用命令行" tabindex="-1"><a class="header-anchor" href="#无法使用命令行" aria-hidden="true">#</a> 无法使用命令行</h3><p>如果你对使用命令行感到困难，可以这样做：</p><p>打开记事本，将以下内容复制进去：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sealdice-core /db-check
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将它命名为 <code>检查.cmd</code>，保存在海豹的主程序所在目录，或者保存完复制过去。</p><p>双击 <code>检查.cmd</code> 执行，之后同上。</p><h2 id="修复数据库-通过回滚备份" tabindex="-1"><a class="header-anchor" href="#修复数据库-通过回滚备份" aria-hidden="true">#</a> 修复数据库 - 通过回滚备份</h2><p>对于大多数情况，我们推荐直接回滚到备份文件的状态。这种方法简便、容易成功。代价是损失从备份时间点到当前时间的数据。</p><p>海豹核心默认每 12 小时进行一次备份，你可在 <code>backups/</code> 目录下找到所有的备份文件。备份的时间可以直接查看文件创建时间，也可以从文件名中确定。</p><p>将你损坏的数据库文件另外保存一份以防万一，并且确保你的硬盘有适当的空闲空间。</p><p>在备份文件中找到最新的一份（如果你能确定导致你数据库出问题的事件，也可以找到该时间点前的最后一份），从中解压出数据库文件，替换掉你发现损坏的数据库。</p><p>替换完成后，再进行一次完整性检查。如果仍然提示损坏，则使用更早的一份备份重新替换，直到数据库文件正常。</p><h2 id="修复数据库-通过数据库修复指令" tabindex="-1"><a class="header-anchor" href="#修复数据库-通过数据库修复指令" aria-hidden="true">#</a> 修复数据库 - 通过数据库修复指令</h2><p>如果你熟悉 Sqlite 3，或者没有可用的备份文件，尝试以下方案。</p><p>这种办法有一定的操作难度，酌情进行使用。这里我们以 Windows 系统为例。</p><p>首先，你需要安装或下载一个 Sqlite 3 程序。</p>`,21),x={href:"https://www.sqlite.org/download.html",target:"_blank",rel:"noopener noreferrer"},g=n(`<p>下载完成后，找出 sqlite.exe 放到空目录备用。</p><p>将损坏的数据文件（如 data.db）从海豹的 data/defualt/ 目录中复制出来，放在和 sqlite.exe 同一个目录。</p><p>使用命令行工具打开这个目录，在此目录下，执行下面的指令：</p><p>导出数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sqlite3.exe data.db
.output 1.sql
.recover
.exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复数据到 a.db，并删除无效数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sqlite3.exe a.db
.read 1.sql
delete from attrs_group where id is null;
delete from attrs_user where id is null;
delete from group_info where id is null;
delete from attrs_group_user where id is null;
delete from ban_info where id is null;
delete from group_player_info where id is null;
.exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来这个 a.db 就是修好的数据库了，将其复制回海豹的原路径，并改名回 data.db。</p>`,8);function f(w,q){const r=l("Tabs"),c=l("ExternalLinkIcon");return u(),p("div",null,[h,t(r,{id:"26",data:[{id:"cmd"},{id:"others"}],"tab-id":"shell"},{title0:d(({value:i,isActive:s})=>[a("Windows-命令提示符（cmd）")]),title1:d(({value:i,isActive:s})=>[a("其他 Shell")]),tab0:d(({value:i,isActive:s})=>[b]),tab1:d(({value:i,isActive:s})=>[m]),_:1}),_,e("p",null,[a("你可以从其"),e("a",x,[a("官网下载页"),t(c)]),a("，找到 Precompiled Binaries for Windows，下载其中的 sqlite-tools。确保你下载的是 3.40 以上版本，通常来说，直接下载最新版即可。")]),g])}const A=o(v,[["render",f],["__file","db-repair.html.vue"]]);export{A as default};