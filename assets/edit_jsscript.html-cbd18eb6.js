const e=JSON.parse('{"key":"v-2fd3d5f8","path":"/advanced/edit_jsscript.html","title":"编写 JavaScript 插件","lang":"zh-cn","frontmatter":{"lang":"zh-cn","title":"编写 JavaScript 插件","description":"本节内容 本节将介绍 JavaScript 脚本的编写，请善用侧边栏和搜索，按需阅读文档。 我们假定你熟悉 JavaScript / TypeScript，编程语言的教学超出了本文档的目的，如果你还不熟悉它们，可以从互联网上寻找到很多优秀的教程。如： 现代 JavaScript 教程 (https://zh.javascript.info); Java...","head":[["meta",{"property":"og:url","content":"http://localhost:8080/sealdice-manual-next/advanced/edit_jsscript.html"}],["meta",{"property":"og:site_name","content":"海豹手册"}],["meta",{"property":"og:title","content":"编写 JavaScript 插件"}],["meta",{"property":"og:description","content":"本节内容 本节将介绍 JavaScript 脚本的编写，请善用侧边栏和搜索，按需阅读文档。 我们假定你熟悉 JavaScript / TypeScript，编程语言的教学超出了本文档的目的，如果你还不熟悉它们，可以从互联网上寻找到很多优秀的教程。如： 现代 JavaScript 教程 (https://zh.javascript.info); Java..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://localhost:8080/sealdice-manual-next/"}],["meta",{"property":"og:locale","content":"zh-cn"}],["meta",{"property":"og:updated_time","content":"2023-12-10T09:46:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"编写 JavaScript 插件"}],["meta",{"property":"article:author","content":"SealDice Team"}],["meta",{"property":"article:modified_time","content":"2023-12-10T09:46:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编写 JavaScript 插件\\",\\"image\\":[\\"http://localhost:8080/sealdice-manual-next/\\"],\\"dateModified\\":\\"2023-12-10T09:46:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SealDice Team\\",\\"url\\":\\"https://github.com/sealdice\\"}]}"]]},"headers":[{"level":2,"title":"一些有帮助的资源","slug":"一些有帮助的资源","link":"#一些有帮助的资源","children":[]},{"level":2,"title":"第一个 JS 扩展","slug":"第一个-js-扩展","link":"#第一个-js-扩展","children":[]},{"level":2,"title":"填写插件信息","slug":"填写插件信息","link":"#填写插件信息","children":[]},{"level":2,"title":"创建和注册扩展","slug":"创建和注册扩展","link":"#创建和注册扩展","children":[]},{"level":2,"title":"自定义指令","slug":"自定义指令","link":"#自定义指令","children":[{"level":3,"title":"创建指令","slug":"创建指令","link":"#创建指令","children":[]},{"level":3,"title":"指令参数与返回值","slug":"指令参数与返回值","link":"#指令参数与返回值","children":[]},{"level":3,"title":"指令核心执行流程","slug":"指令核心执行流程","link":"#指令核心执行流程","children":[]},{"level":3,"title":"注册指令","slug":"注册指令","link":"#注册指令","children":[]}]},{"level":2,"title":"生成随机数","slug":"生成随机数","link":"#生成随机数","children":[]},{"level":2,"title":"抽取牌堆","slug":"抽取牌堆","link":"#抽取牌堆","children":[{"level":3,"title":"示例代码：抽取牌堆","slug":"示例代码-抽取牌堆","link":"#示例代码-抽取牌堆","children":[]}]},{"level":2,"title":"权限识别","slug":"权限识别","link":"#权限识别","children":[{"level":3,"title":"示例代码：权限识别","slug":"示例代码-权限识别","link":"#示例代码-权限识别","children":[]}]},{"level":2,"title":"存取数据","slug":"存取数据","link":"#存取数据","children":[{"level":3,"title":"示例代码：投喂插件","slug":"示例代码-投喂插件","link":"#示例代码-投喂插件","children":[]},{"level":3,"title":"示例代码：群内安价收集","slug":"示例代码-群内安价收集","link":"#示例代码-群内安价收集","children":[]}]},{"level":2,"title":"数据处理模板","slug":"数据处理模板","link":"#数据处理模板","children":[]},{"level":2,"title":"读取玩家或群组数据","slug":"读取玩家或群组数据","link":"#读取玩家或群组数据","children":[]},{"level":2,"title":"编写暗骰指令","slug":"编写暗骰指令","link":"#编写暗骰指令","children":[]},{"level":2,"title":"编写代骰指令","slug":"编写代骰指令","link":"#编写代骰指令","children":[]},{"level":2,"title":"网络请求","slug":"网络请求","link":"#网络请求","children":[]},{"level":2,"title":"自定义 COC 规则","slug":"自定义-coc-规则","link":"#自定义-coc-规则","children":[]},{"level":2,"title":"补充：使用非指令关键词","slug":"补充-使用非指令关键词","link":"#补充-使用非指令关键词","children":[]},{"level":2,"title":"注册插件配置项","slug":"注册插件配置项","link":"#注册插件配置项","children":[{"level":3,"title":"示例代码：注册配置项","slug":"示例代码-注册配置项","link":"#示例代码-注册配置项","children":[]}]},{"level":2,"title":"使用 TS 模板","slug":"使用-ts-模板","link":"#使用-ts-模板","children":[{"level":3,"title":"clone 或下载项目","slug":"clone-或下载项目","link":"#clone-或下载项目","children":[]},{"level":3,"title":"使用和编译","slug":"使用和编译","link":"#使用和编译","children":[]},{"level":3,"title":"补全信息","slug":"补全信息","link":"#补全信息","children":[]},{"level":3,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]}]},{"level":2,"title":"JS 扩展 API","slug":"js-扩展-api","link":"#js-扩展-api","children":[{"level":3,"title":"部分 api 使用示例","slug":"部分-api-使用示例","link":"#部分-api-使用示例","children":[]},{"level":3,"title":"ctx 的内容","slug":"ctx-的内容","link":"#ctx-的内容","children":[]},{"level":3,"title":"msg 的内容","slug":"msg-的内容","link":"#msg-的内容","children":[]},{"level":3,"title":"cmdArgs 的内容","slug":"cmdargs-的内容","link":"#cmdargs-的内容","children":[]}]}],"git":{"createdTime":1698072668000,"updatedTime":1702201574000,"contributors":[{"name":"JustAnotherID","email":"just-another-id@outlook.com","commits":4},{"name":"Szzrain","email":"54656633+Szzrain@users.noreply.github.com","commits":3},{"name":"Xiangze Li","email":"lee_johnson@qq.com","commits":1},{"name":"檀轶步棋","email":"57583509+Verplitic@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":32.23,"words":9668},"filePathRelative":"advanced/edit_jsscript.md","localizedDate":"2023年10月23日","autoDesc":true,"excerpt":""}');export{e as data};