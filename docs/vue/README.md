# vue

>

::: tip
记录vue重要知识点、项目中踩坑心得，方便后期回顾
:::

## MVVM
![img](https://user-gold-cdn.xitu.io/2018/6/24/1643060c121f7361?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

MVVM拆开来即为Model-View-ViewModel，有View，ViewModel，Model三部分组成。View层代表的是视图、模版，负责将数据模型转化为UI展现出来。Model层代表的是模型、数据，可以在Model层中定义数据修改和操作的业务逻辑。ViewModel层连接Model和View。


## 双向数据绑定
实现数据绑定的做法有大致如下几种：
- 发布者-订阅者模式（backbone.js）
- 脏检查（angular.js） 
- 数据劫持（vue.js）

vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

## 生命周期

总共分为8个阶段 创建前/后，载入前/后，更新前/后，销毁前/后。
- beforeCreate:vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。

- created:vue实例的数据对象data有了，$el还没有。
- beforeMount:vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。
- mounted:vue实例挂载完成，data.message成功渲染。
- beforeUpdate/updated:当data变化时，会触发beforeUpdate和updated方法。
- beforeDestroy/destroyed:在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

## 常用指令
```js 
1. v-if(销毁、重建)
2. v-show(动态改变display属性)
3. v-bind(简写:)
4. v-on(简写@)
5. v-model
6. v-for
```

