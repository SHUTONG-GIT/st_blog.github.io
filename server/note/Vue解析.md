## 1.Vue是什么？

Vue是一套构建用户界面的渐进式框架，也是一个非常典型的 MVVM 的程序结构（model-view-viewmodel）。

官方用语：

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

## 2.vue既然是MVVM结构比MVC好在哪里？

MVC模式是MVVM模式的基础，这两种模式更像是MVC模式的优化改良版,他们两个的MV即Model，view相同，不同的是MV之间的纽带部分。

**☞什么是MVC？**

 MVC允许在不改变视图的情况下改变视图对用户输入的响应方式，用户把对View的操作交给了Controller处理，在Controller中响应View的事件调用Model的接口对数据进行操作，一旦Model发生变化便通知相关视图进行更新。



如果前端没有框架，只使用原生的html+js，MVC模式可以这样理解。将html看成view;js看成controller，负责处理用户与应用的交互，响应对view的操作（对事件的监听），调用Model对数据进行操作，完成model与view的同步（根据model的改变，通过选择器对view进行操作）;将js的ajax当做Model，也就是数据层，通过ajax从服务器获取数据。

**☞什么是MVVM?**

MVVM与MVC两者之间最大的区别就是：MVVM实现了对View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素来改变View的变化，而是改变其属性后，该属性对应的View层数据会自动改变。 以Vue为例：

```
 <div id="vueDemo">
  <p>{{ title }}</p>
  <button v-on:click="clickEvent">hello word</button>
</div>
复制代码
var vueDemo = new Vue({  
    el: '#vueDemo',  
    data: {    
        title: 'Hello Vue!'  
    },  
    methods: {    
        clickEvent: function () {      
            this.title = "hello word!"  
        }  
    }
})
复制代码
```

这里的html => View层，可以看到这里的View通过模板语法来声明式的将数据渲染进DOM元素，当ViewModel对Model进行更新时，通过数据绑定更新到View。

Vue实例中的data相当于Model层，而ViewModel层的核心是Vue中的双向数据绑定，当Model发生变化时View也可以跟着实时更新，同理，View变化也能让Model发生变化。

总的看来，MVVM比MVC精简很多，不仅简化了业务与界面的依赖，还解决了数据频繁更新的问题，不用再用选择器操作DOM元素。因为在MVVM中，View不知道Model的存在，Model和ViewModel也观察不到View，这种低耦合模式提高代码的可重用性。

## 3.Vue响应式原理是什么？

Vue是基于 Object.defineProperty 来实现数据响应的，而 Object.defineProperty 是 ES5 中一个无法 shim 的特性，不支持IE8以下版本的浏览器。Vue通过Object.defineProperty的 getter/setter 方法对收集的依赖项进行监听,在属性被访问和修改时通知变化,进而更新视图数据； 受现代JavaScript 的限制 (以及废弃 Object.observe)，Vue不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让Vue转换它，这样才能让它是响应的。



![img](https://user-gold-cdn.xitu.io/2018/10/1/1662e8c2955ff0f3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

 观察者模式（Observer, Watcher, Dep)



先简介一下，后面的文章会具体的写到：

Observer类

主要用于给Vue的数据defineProperty增加getter/setter方法，并且在getter/setter中收集依赖或者发送通知进行更新。

Watcher类

用于观察数据（或者表达式）变化然后执行回调函数（其中也有收集依赖的过程），主要用于$watch API和指令上。

Dep类（Dependence依赖的缩写）

就是一个可观察对象，可以有不同指令订阅它（它是多播的）

观察者模式,跟发布／订阅模式有点像，但是其实略有不同。

发布／订阅模式是由统一的事件分发调度中心，on则往中心中数组加事件（订阅），emit则从中心中数组取出事件（发布），发布和订阅以及发布后调度订阅者的操作都是由中心统一完成。

但是观察者模式则没有这样的中心，观察者模式中包含observer观察者和subject主题对象。observer需要观察subject时，需要先到subject里进行注册subject对象持有observer对象的集合句柄，当subject对象的内部状态发生变化的时候，就会把这个变化通知所有的观察者。

作者：DIVI

链接：https://juejin.im/post/5bae435b6fb9a05d0d287c13

来源：掘金

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。