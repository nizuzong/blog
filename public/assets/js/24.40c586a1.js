(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{530:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),t("h4",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("webpack是一个打包模块的"),t("code",[s._v("javaScript")]),s._v("的工具，它会从入口模块出发，识别出源码中的模块化导出语句，递归地找出入口文件的所有依赖，将入口和其他\n所有的依赖打包到一个单独的w文件中，是工程化、自动化思想在前端开发中的体现。")]),s._v(" "),t("h3",{attrs:{id:"安装webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack"}},[s._v("#")]),s._v(" 安装webpack")]),s._v(" "),t("h4",{attrs:{id:"全局安装-不推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-不推荐"}},[s._v("#")]),s._v(" 全局安装（不推荐）")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装webpack v4+版本时,需要额外安装webpack-cli")]),s._v("\n\nnpm install webpack webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查版本")]),s._v("\nwebpack "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 卸载")]),s._v("\nnpm uninstall webpack webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("为什么不推荐全局安装webpack?")]),s._v(" "),t("p",[s._v("全局安装"),t("code",[s._v("webpack")]),s._v("，这会将你项目中的"),t("code",[s._v("webpack")]),s._v("锁定到指定版本，造成不同的项目红因为"),t("code",[s._v("webpack")]),s._v("\n依赖不同版本而d导致冲突，构建失败。")]),s._v(" "),t("h4",{attrs:{id:"推荐安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐安装"}},[s._v("#")]),s._v(" 推荐安装")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装最稳定的版本")]),s._v("\nnpm  install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" webpack\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装指定版本")]),s._v("\nnpm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" webpack@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装最新体验版  可能包含bug 不要用于生产环境")]),s._v("\nnpm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" webpack@beta\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装webpack v4+版本时，需要额外安装webpack-cli")]),s._v("\nnpm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h4",{attrs:{id:"检查安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查安装"}},[s._v("#")]),s._v(" 检查安装")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("webpack "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// command not found 默认在全局环境中查找")]),s._v("\n\nnpx webpack "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npx帮助我们在项目中的node_modules中查找webpack")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("webpack "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 到当前的node_modules模块里指定webpack")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"启动webpack执行构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动webpack执行构建"}},[s._v("#")]),s._v(" 启动webpack执行构建")]),s._v(" "),t("h5",{attrs:{id:"webpack默认配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack默认配置"}},[s._v("#")]),s._v(" webpack默认配置")]),s._v(" "),t("ol",[t("li",[s._v("webpack默认支持"),t("code",[s._v("js")]),s._v("模块和"),t("code",[s._v("JSON")]),s._v("模块")]),s._v(" "),t("li",[s._v("支持"),t("code",[s._v("CommonJs Es module AMD")]),s._v("等模块类型")]),s._v(" "),t("li",[s._v("webpack4支持零配置使用，但是很弱，稍微复杂些的场景都需要额外的扩展")])]),s._v(" "),t("h5",{attrs:{id:"准备执行构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备执行构建"}},[s._v("#")]),s._v(" 准备执行构建")]),s._v(" "),t("ol",[t("li",[s._v("新建"),t("code",[s._v("src")]),s._v("文件")]),s._v(" "),t("li",[s._v("新建"),t("code",[s._v("src/index.js、src/index.json、src/other.js")])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./index.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// common.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./other.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// es module")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// other.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("n1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);