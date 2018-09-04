# vue-router

> Vue Router 是 Vue.js 官方的路由管理器。简单说,路由就是url和组件的一种映射关系，根据不同的url，加载不同的组件，进而渲染不同的页面效果。

## vue-router简介

 router-link: 是路由入口，该组件用于帮助用户进行导航 ，用 to 属性指定目标地址；

 router-view : 是路由的出口，路由匹配到的组件将渲染在这里,即渲染 router-link指向的目标地址。

## 如何创建vue-router

### 步骤

- 创建组件
- 配置路由
- 生成路由实例
- 将router挂载到根实例

### 完整demo

```js
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// 1.引入组件
import Home from './components/home.vue'
import Detail from './components/detail.vue'
import Detail2 from './components/detail2.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
// 2.配置路由
const routes = [
  {
 path: '/',
 component: Home
  },
  {
 path: '/detail',
 component: Detail,
 children: [ //嵌套router
   {
     path: 'detail2', //此处不带斜线/
     component: Detail2
   }
 ]
  },
  {
 path: '/detail2',
 name: 'detail2',
 component: Detail2
  },
]
// 3.生成路由实例
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  // 4.挂载到根实例
  router,
  components: { App },
  template: '<App/>'
})
```

## 编程式导航
![img](https://aaronwn.github.io/img/in-post/vue-router-js.jpg)

## 命名路由

有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
```

## 路由重定向和别名

### 重定向
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

### 别名
```js
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```
> 『重定向』的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么『别名』又是什么呢？
/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。

## 路由模式

> mode 表示路由的配置模式:hash、history两种。

- hash模式（默认）：使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。（在当前页面的 url 后面加上路径 ）；
- history 模式: 通过history 完成 URL 跳转。（history模式更美观一些，当然要做一些额外的工作）

```js
//创建路由实例 
const router = new VueRouter({
mode: 'history',//跳转页面
routes
})
```
