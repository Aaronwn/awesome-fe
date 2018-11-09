(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{171:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router","aria-hidden":"true"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),a("blockquote",[a("p",[t._v("Vue Router 是 Vue.js 官方的路由管理器。简单说,路由就是url和组件的一种映射关系，根据不同的url，加载不同的组件，进而渲染不同的页面效果。")])]),t._v(" "),a("h2",{attrs:{id:"vue-router简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router简介","aria-hidden":"true"}},[t._v("#")]),t._v(" vue-router简介")]),t._v(" "),a("p",[t._v("router-link: 是路由入口，该组件用于帮助用户进行导航 ，用 to 属性指定目标地址；")]),t._v(" "),a("p",[t._v("router-view : 是路由的出口，路由匹配到的组件将渲染在这里,即渲染 router-link指向的目标地址。")]),t._v(" "),a("h2",{attrs:{id:"如何创建vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何创建vue-router","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何创建vue-router")]),t._v(" "),a("h3",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("ul",[a("li",[t._v("创建组件")]),t._v(" "),a("li",[t._v("配置路由")]),t._v(" "),a("li",[t._v("生成路由实例")]),t._v(" "),a("li",[t._v("将router挂载到根实例")])]),t._v(" "),a("h3",{attrs:{id:"完整demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整demo","aria-hidden":"true"}},[t._v("#")]),t._v(" 完整demo")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./App'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueRouter "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 1.引入组件")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Home "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./components/home.vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Detail "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./components/detail.vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Detail2 "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./components/detail2.vue'")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productionTip "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 2.配置路由")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Home\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/detail'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Detail"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//嵌套router")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'detail2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//此处不带斜线/")]),t._v("\n     component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Detail2\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/detail2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'detail2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Detail2\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 3.生成路由实例")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 4.挂载到根实例")]),t._v("\n  router"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" App "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<App/>'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"编程式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程式导航","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程式导航")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://aaronwn.github.io/img/in-post/vue-router-js.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"命名路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名路由","aria-hidden":"true"}},[t._v("#")]),t._v(" \b命名路由")]),t._v(" "),a("p",[t._v("有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/user/:userId'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'user'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"路由重定向和别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由重定向和别名","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由重定向和别名")]),t._v(" "),a("h3",{attrs:{id:"重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重定向","aria-hidden":"true"}},[t._v("#")]),t._v(" 重定向")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirect"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/b'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名","aria-hidden":"true"}},[t._v("#")]),t._v(" 别名")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("A")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alias"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/b'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("『重定向』的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么『别名』又是什么呢？\n/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。")])]),t._v(" "),a("h2",{attrs:{id:"路由模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由模式")]),t._v(" "),a("blockquote",[a("p",[t._v("mode 表示路由的配置模式:hash、history两种。")])]),t._v(" "),a("ul",[a("li",[t._v("hash模式（默认）：使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。（在当前页面的 url 后面加上路径 ）；")]),t._v(" "),a("li",[t._v("history 模式: 通过history 完成 URL 跳转。（history模式更美观一些，当然要做一些额外的工作）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//创建路由实例 ")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nmode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'history'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//跳转页面")]),t._v("\nroutes\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="vue-router.md";s.default=o.exports}}]);