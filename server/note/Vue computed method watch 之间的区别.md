**Vue computed method watch 之间的区别**

computed区别于method的两个核心
computed是属性调用，而methods是函数调用

computed带有缓存功能，而methods不是

```
<!--HTML部分-->
<div id="app">
    <h1>{{message}}</h1>
    <p class="test1">{{methodTest}}</p>
    <p class="test2-1">{{methodTest()}}</p>
    <p class="test2-2">{{methodTest()}}</p>
    <p class="test2-3">{{methodTest()}}</p>
    <p class="test3-1">{{computedTest}}</p>
    <p class="test3-2">{{computedTest}}</p>
</div>

<!--script部分-->
let vm = new Vue({
    el: '#app',
    data: {
        message: '我是消息，'
    },
    methods: {
        methodTest() {
            return this.message + '现在我用的是methods'
        }
    },
    computed: {
        computedTest() {
            return this.message + '现在我用的是computed'
        }
    }
})
```

computed的属性调用
computed定义的方法我们是以属性访问的形式调用的，{{computedTest}}

但是methods定义的方法，我们必须要加上()来调用，如{{methodTest()}},否则，视图会出现test1的情况，

function(){[native code]}
1
计算属性计算时所依赖的属性一定是响应式依赖，否则计算属性不会执行

计算属性是基于依赖进行缓存的，就是说在依赖没有更新的情况，调用计算属性并不会重新计算，可以减少开销

应用场景
复杂的渲染数据计算，用computed计算属性可以减少一定计算开销，增加可维护性
从Vuex Store中收集相关信息，对Vuex中的数据做计算的时候的要特别注意computed的缓存属性，在对Vuex中的对象值进行属性修改的时候，并不会触发computed的中值的变化，这时需要**Object.assign({},obj)**对依赖对象进行跟新返回一个新对象触发依赖跟新
表单校验，这个应用场景应该是比较常见的，利用正则表达式对每个表单项的实时监控，判断表单是否可以提交
所以，官方文档才反复强调对于任何复杂逻辑，你都应当使用计算属性

computed依赖于data中的数据，只有在它的相关依赖数据发生改变时才会重新求值

如上例，在Vue实例化的时候，computed定义computedTest方法会做一次计算，返回一个值，在随后的代码编写中，只要computedTest方法依赖的message数据不发生改变，computedTest方法是不会重新计算的

computed的其它说明
computed其实是既可以当做属性访问也可以当做方法访问
computed的由来有一个重要原因，就是防止文本插值中逻辑过重，导致不易维护
methods
methods大家应该都会用，是vue中的方法属性，所有的方法调用都会写到这里面，大家用的最多也是在累似@click这样事件调用中使用，但是很多人都忽视methods的另一个用法，就是在模版中使用methods，下面来看一个例子：

```
<div id="app">
  <div v-for="(item, idx) in arr">
    {{ matching(item) }}
  </div>
</div>



var app = new Vue({
  el: '#app',
  data: {
    arr: ['a', 'b', 'c'],
    obj: {a: 'hello', b: 'world'}
  },
  methods: {
    matching (key) {
      if (this.obj[key]) {
        return this.obj[key]
      } else {
        return 'not found'
      }
    }
  }
})
```

上面的例子就是methods在模版中常常使用的一个场景，当模版中的某个循环的值需要进行一定逻辑运算时，这时候你就可以使用methods方法，将对应的值传入，然后计算出结果返回到模版显示，这个时候用computed是没法实现的，computed中你无法传参，methods和computed除了这个不一样之外，还有就是在methods中的计算是不会做缓存的，也就是你调用多少次就会计算多少次，相对computed的开销要大一些。
watch
侦听属性是专门用来观察和响应vue实例上的数据变动，能使用watch属性的场景基本上都可以使用computed属性，而且computed属性开销小，性能高，因此能使用computed就尽量使用computed属性，那么watch属性是不是就没用武之地了呢？当执行异步操作的时候你可能就必须用watch而不是computed了，下面看一个例子：

```
<div id="app">
  <div>{{ obj1.a  }}</div>
</div>var app = new Vue({

  el: '#app',
  data: {
    obj: {a: 'hello'},
    obj1: {a: 'hello'},
    test: 'aaa'
  },
  computed: {
    getObj () {
      setTimeout(() => {
        this.obj.a = this.test + 'word'
        return this.obj
      }, 1000)
    }
  },
  watch: {
    test () {
      setTimeout(() => {
        this.obj1.a = this.test + 'word'
      }, 1000)
    }
  },
  mounted () {
    this.test = 'hello'
  }
})
```

上述例子中，当在模版中调用getObj.a时，如果没有setTimeout这异步操作，直接返回一个值是可以直接在模版中显示的，但是由于加异步操作就会导致没有返回值同时调用对象的属性，就会报错，而调用obj1.a却不一样，模版会先显示hello，然后在触发了watch属性时，setTimeout触发，一秒钟之后模版会显示helloword，这就watch中可以使用异步函数，而computed不行的原因

总结：**computed**是在HTML DOM加载后马上执行的，如赋值；

**methods**则必须要有一定的触发条件才能执行，如点击事件；

**watch**用于观察Vue实例上的数据变动。对应一个对象，键是观察表达式，值是对应回调。

转载自https://blog.csdn.net/weixin_43550660/article/details/102992103