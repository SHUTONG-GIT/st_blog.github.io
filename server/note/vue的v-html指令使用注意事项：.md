**vue的v-html指令使用注意事项：**

V-html更新的是元素的 innerHTML 。内容按普通 HTML 插入， 不会作为 Vue 模板进行编译 。但是有的时候我们需要渲染的html片段中有插值表达式，或者按照Vue模板语法给dom元素绑定了事件；

使用v-html需要注意的第二个问题是：在单文件组件里，scoped 的样式不会应用在 v-html 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果你希望针对 v-html 的内容设置带作用域的 CSS，你可以替换为 CSS Modules 或用一个额外的全局

**Vue为v-html中标签添加CSS样式**

```
`<template>`` ``<div class=``"hello"``>`` ``<section>``  ``<h2 class=``"title"``>{{news.title}}</h2>``  ``<p class=``"news-time"``>{{news.datetime}}</p>``  ``<div class=``"con"` `v-html=``"news.dec"``>``  ``</div>``  ``<button class=``"back"` `@click=``"goBack()"``>返回列表</button>`` ``</section>`` ``</div>``</template>`
```

当我们使用v-html渲染页面，使用下面这种方式去修改样式并没有效果，

```
`<style scoped lang=``"less"``>``.con{`` ``p {`` ``font-size``: ``14px``;`` ``line-height``: ``28px``;`` ``text-align``: ``left``;`` ``color``: ``rgb``(``238``, ``238``, ``238``);`` ``color``: ``#585858``;`` ``text-indent``: ``2em``;`` ``}``}``</style>`
```

**解决方案：**

当我们引入第三方组件或加载html元素时，想修改下样式，就可以用以下三种方式：

**一.去掉<style scoped>中的scoped**

这个方法不建议使用，会改变布局

**二.定义两个style标签，一个含有scoped属性，一个不含有scoped属性**

使用方法为

```
`<style scoped>`` ``.introduction{ `` ``width``: ``100%``; `` ``margin-bottom``: ``3``rem;`` ``}``</style>` `<style>`` ``.introduction img{`` ``width``: ``100%``;`` ``object-fit: fill;`` ``}``</style>`
```

**三.通过 >>> 可以使得在使用scoped属性的情况下，穿透scoped，修改其他组件的值**

使用模板为：

```
`.introduction>>> img{`` ``width``: ``100%``;`` ``object-fit: fill;``}`
```

但是这里需要注意，当你的vue项目使用less或者sass的时候，>>>这个玩意可能会失效，我们用/deep/来代替，代码如下：

```bash
.a {
/deep/ .b{/* ... */}
}
```

参考链接：https://blog.csdn.net/weixin_44683255/article/details/104564860