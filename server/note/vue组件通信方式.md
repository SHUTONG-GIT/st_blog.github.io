`Vue`的一个核心思想就是组件化。所谓组件化，就是把页面拆分成多个组件 (`component`)，每个组件依赖的 `CSS`、`JavaScript`、模板、图片等资源放在一起开发和维护。组件是资源独立的，组件在系统内部可复用，组件和组件之间可以嵌套。

我们在用 `Vue` 开发实际项目的时候，就是像搭积木一样，编写一堆组件拼装生成页面。那么组件之间必然少不了相互通信，而`Vue`也提供了组件间通信的多种方式，

### props / $emit（常用）

`props`和`$emit`适用于父子组件间通信，父组件通过`props`的方式向子组件传递数据，而子组件可以通过`$emit`向父组件通信。

### 2.1 父组件用props向子组件传递数据

下面通过一个例子说明父组件如何使用`props`向子组件传递数据：

```vue
//父组件
<template>
  <div>
    <h1>父组件</h1>
    <Son :brandList="brandList"></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Parent',
  components: { Son },
  data() {
    return {
      brandList: ['BMW', 'Benz', 'Audi']
    }
  }
}
</script>
// 子组件
<template>
  <div>
    <h1>子组件</h1>  
    <span v-for="(item, index) in brandList" :key="index">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'Son',
  props: ['brandList']
}
</script>
```

示例说明：

父组件在调用子组件`Son`时，需要把`brandList`传递给子组件，那么就在调用子组件时把需要传递的数据添加到子组件的调用标签上，如`<Son :brandList="brandList"></Son>`。

而在子组件中，用`props`属性来接收父组件传来的数据`brandList`，接收之后，子组件就可以在自己的模板中使用传来的数据了。

这样，就完成了父组件向子组件的数据传递。

### 2.2 子组件用$emit向父组件传递数据

下面通过一个例子说明子组件如何使用`$emit`向父组件传递数据：

```vue
// 子组件
<template>
  <div>
    <h1>子组件</h1>  
    <span v-for="(item, index) in brandList" :key="index" @click="emitBrand(item)">			{{item}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Son',
  props: ['brandList'],
  methods: {
    emitBrand(item){
      this.$emit('onEmitBrand',item)
    }
  }  
}
</script>
//父组件
<template>
  <div>
    <h1>父组件</h1>
    <Son :brandList="brandList"  @onEmitBrand="onEmitBrand"></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Parent',
  components: { Son },
  data() {
    return {
      brandList: ['BMW', 'Benz', 'Audi']
    }
  },
  methods: {
    onEmitBrand(item) {
      console.log(`您选择的品牌是${item}`)
    }
  }  
}
</script>
```

示例说明：

在子组件中，绑定了点击事件`emitBrand`，在这个点击事件中使用`$emit`广播了一个名字为`onEmitBrand`的消息，同时为该消息传递`item`参数。

在父组件中，调用子组件的同时，也监听了`onEmitBrand`消息，一旦收到`onEmitBrand`消息，就会执行对应的回调`onEmitBrand`函数，在该回调函数中可以接收到子组件广播消息时传递的`item`参数。

捋一下流程就是：子组件触发点击事件`emitBrand`后，此时广播`onEmitBrand`消息，同时携带数据`item`，而此时监听`onEmitBrand`消息的父组件就会出发回调`onEmitBrand`函数，同时获得携带的数据`item`。

这样，就完成了子组件向父组件的数据传递。

### 3. $parent / children

在父子组件中，使用`$parent`可以在子组件中获取父组件的实例，而使用`$children`可以在父组件中获取所有子组件实例组成的数组。既然能够拿到组件实例，就表明可以访问到此组件的所有东西。

下面通过一个例子来说明：

```vue
//父组件
<template>
  <div>
    <h1>父组件</h1>
    <div>父组件值:{{msg}}</div>  
    <p>获取子组件值:{{this.$children[0].message}}</p>  
    <button @click="changSon">点击改变子组件值</button>
    <hr/>  
    <h1>子组件</h1>  
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Parent',
  components: { Son },
  data() {
    return {
      msg: 'hello world'
    }
  },
  methods: {
    changSon() {
      this.$children[0].message = '父组件改变了子组件的值'
    }
  }  
}
</script>
// 子组件
<template>
  <div>
    <h1>子组件</h1>  
    <div>子组件值:{{message}}</div>  
    <p>获取父组件值:{{this.$parent.msg}}</p>
    <button @click="changeParent">点击改变父组件中的值</button>
  </div>
</template>

<script>
export default {
  name: 'Son',
  data () {
    return {
      message: '这是子组件'
    };
  },
  methods: {
    changeParent(){
      this.$parent.msg = '子组件改变了父组件的值'
    }
  }  
}
</script>
```

示例说明：

在父组件中通过`this.$children`可以获取所有子组件实例组成的数组，然后可以通过数组下标的形式取出所需要的子组件实例，然后就可以访问或修改子组件的内容了。

同样，在子组件中通过`this.$parent`可以获取父组件的实例，然后就可以访问或修改子组件的内容了。

**值得注意的边界情况是：**

当获取`$parent`得到的是`new Vue()`根实例时，如果在根实例上再获取`$parent`将得到的是`undefined`，同样，在最底层的子组件中获取`$children`将得到的是个空数组。

### 3.1 $dispatch`和`$broadcast`

如果我们想在子组件中与祖父组件，甚至更上层的组件通信时，此时就会出现`this.$parent.$parent.$parent....`，同样，当在上层组件中想与孙子组件，甚至更下层组件通信时，也会出现`this.$children.$children.$children....`，那么为了避免出现这种不优雅的情况，我们为此封装两个方法：`$dispatch`和`$broadcast`。

- **$dispatch——向上派发**

  ```javascript
  Vue.prototype.$dispatch = function $dispatch(eventName, data) {
    let parent = this.$parent;
    while (parent) {
      parent.$emit(eventName, data);
      parent = parent.$parent;
    }
  };
  ```

  如果子组件想向它的上层父级组件传递数据，我们就通过递归获取`this.$parent`的方式，一层一层向上广播消息以及携带需要传递的数据，然后在目的组件上监听这个消息即可。

- **$broadcast——向下广播**

  ```javascript
  Vue.prototype.$broadcast = function $broadcast(eventName, data) {
    const broadcast = function () {
      this.$children.forEach((child) => {
        child.$emit(eventName, data);
        if (child.$children) {
          $broadcast.call(child, eventName, data);
        }
      });
    };
    broadcast.call(this, eventName, data);
  };
  ```

  同理，如果父组件想向它的下层子级组件传递数据，我们就通过获取`this.$children`的方式，一层一层向下广播消息以及携带需要传递的数据，然后在目的组件上监听这个消息即可。

### 4. provide / inject

`provide` 和 `inject` 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深。简单来说就是父组件中通过`provide`来提供数据, 然后在子组件中通过`inject`来接收提供的数据，同时不论子组件嵌套的有多深,只要父级组件通过`provide`提供了数据，那么子组件就能够通过`inject`来接收到。

下面通过一个例子来说明：

```vue
//父组件
<template>
  <div>
    <h1>父组件</h1>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Parent',
  components: { Son },
  provide: {
    NLRX: "难凉热血"
  }
}
</script>
// 子组件
<template>
  <div>
    <h1>子组件</h1>
    {{NLRX}}  
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from './Grandson.vue'
export default {
  name: 'Son',
  components: { Grandson },
  inject: ['NLRX']
}
</script>
// 孙子组件
<template>
  <div>
    <h1>孙子组件</h1>
    {{NLRX}}  
  </div>
</template>

<script>
export default {
  name: 'Grandson',
  inject: ['NLRX']
}
</script>
```

示例说明：

上面示例中展示了两级嵌套的三个组件：父组件——>子组件——>孙子组件。在父组件中使用`provide`提供了`NLRX:'难凉热血'`变量后，在子组件和孙子组件中均能够使用`inject`接收到。

### 5. $attrs / listeners

在vue2.4中引入了`$attrs` 和`$listeners` ，同时新增了`inheritAttrs`选项,默认为`true`。这两个`api`也可以用于父子组件间的通信，其中`$attrs`向下传递属性，`$listeners`向下传递方法。

### 5.1 $attrs向下传递属性

`$attrs`包含了父作用域中不作为 `prop` 被识别 (且获取) 的特性绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件。

下面通过一个例子来说明：

```vue
// 父组件
<template>
  <div>
    <h1>父组件</h1>
    <Son
      name="难凉热血"
      age="18"
      gender="男"
      height="175"
      motto="叩首问路，码梦为生！"
    ></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Parent',
  components: { Son },
}
</script>
// 子组件
<template>
  <div>
    <h1>子组件</h1>
     <!-- 可以通过v-bind="$attrs"将属性继续向下传递 --> 
    <Grandson v-bind="$attrs"></Grandson>
  </div>
</template>
<script>
import Grandson from './Grandson.vue'
export default {
  name: 'Son',
  components: { Grandson },
  props: {
    name: String // name作为props属性绑定
  },
  inheritAttrs: false, // 此选项为false,组件根元素上的没有在props声明的属性可以被$attrs获取到，
                       // 若为true,则没有在props声明的属性将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上
  created() {
    console.log(this.$attrs);// { "age": "18", "gender": "男", "height": "175", "motto": "叩首问路，码梦为生！" }
  }
}
</script>
// 孙子组件
<template>
  <div>
    <h1>孙子组件</h1> 
  </div>
</template>

<script>
export default {
  name: 'Grandson',
  props: {
    age: String
  },
  created() {
    console.log(this.$attrs); // { "name": "难凉热血", "gender": "男", "height": "175", "motto":"叩首问路，码梦为生！" }
  } 
}
</script>
```

示例说明：

当父组件调用子组件时，为子组件传递了除`props`选项接收的`name`属性之外的其他属性，如`age`、`height`等，而这些多余的属性在子组件中可以通过`this.$attrs`获取到，同时在子组件调用孙子组件时，通过为孙子组件添加`v-bind="$attrs"`，可以将多余的属性继续向下传递。以达到父组件向子组件通信的目的。

### 5.2 $listeners向下传递方法

`$listeners`包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件。

下面通过一个例子来说明：

```vue
// 父组件
<template>
  <div>
    <h1>父组件</h1>
    <Son @click="()=>{consoloe.log('难凉热血')}"></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Parent',
  components: { Son },
}
</script>
// 子组件
<template>
  <div>
    <h1>子组件</h1>
     <!-- 可以通过v-on="$listeners"将方法继续向下传递 --> 
    <Grandson v-on="$listeners"></Grandson>
  </div>
</template>
<script>
import Grandson from './Grandson.vue'
export default {
  name: 'Son',
  components: { Grandson },
  created() {
    this.listeners.click() // 难凉热血
  }
}
</script>
// 孙子组件
<template>
  <div>
    <h1>孙子组件</h1> 
  </div>
</template>

<script>
export default {
  name: 'Grandson',
  created() {
    this.listeners.click() // 难凉热血
  } 
}
</script>
```

示例说明：

与`$attrs`不同的是，`$listeners`是传递方法，将父组件的方法向下传递。

### 6. ref / $refs

`ref` 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 `$refs` 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例。

下面通过一个例子来说明：

```vue
// 父组件
<template>
  <div>
    <h1>父组件</h1>
    <Son ref='son'></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Parent',
  components: { Son },
  methods: {
    a () {
      const son = this.$refs.son;
      console.log(son.name);  // Son
      console.log(son.message);  // 这是子组件  
      son.sayHello();  // hello
    }
  }  
}
</script>
// 子组件
<template>
  <div>
    <h1>子组件</h1>
  </div>
</template>
<script>
export default {
  name: 'Son',
  data () {
    return {
      message: '这是子组件'
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }  
}
</script>
```

示例说明：

父组件在调用子组件时，为子组件添加了`ref`属性，那么在父组件中就可以通过`this.$refs.son`来获取到子组件的实例，这样就可以访问子组件上的东西了。

### 7. eventBus（常用）

`eventBus` 又称为事件总线，在`vue`中可以用它来作为组件之间通信的桥梁, 所有组件共用相同的事件中心，所有组件都用它来注册发送事件和接收事件，其实这就是一个典型的发布订阅模式，由各个组件向`eventBus`订阅事件，并由`eventBus`发布事件，对于小型不复杂的项目可以使用这种方式。

它的使用方式如下：

1. 创建一个事件总线并将其导出

   ```javascript
   // event-bus.js
   
   import Vue from 'vue'
   export const EventBus = new Vue()
   ```

2. 发布事件

   ```vue
      // A组件
      <template>
        <div>
          <h1>A组件</h1>
          <button @click="emitEvent">发布事件</button>   
        </div>
      </template>
      
      <script>
      import {EventBus} from './event-bus.js'    
      export default {
        name: 'ComA',
        methods: {
          emitEvent () {
            EventBus.$emit('nlrx', {
              nlrx:'难凉热血'
            })
          }
        }  
      }
      </script>
   ```

   创建一个A组件，并且在A组件中发布一个名为`nlrx`的消息，消息内容是`{nlrx:'难凉热血'}`。

3. 订阅事件

   ```vue
   // B组件
   <template>
     <div>
       <h1>B组件</h1>
       <button @click="receiveEvent">接收事件</button>   
     </div>
   </template>
   
   <script>
   import {EventBus} from './event-bus.js'    
   export default {
     name: 'ComB',
     mounted() {
       EventBus.$on('nlrx', data => {
         console.log(data.nlrx)  // 难凉热血
       })
     }
   }
   </script>
   ```

   创建一个B组件，并且在B组件中订阅监听`nlrx`消息，同时回调函数中的`data`参数即是消息内容`{nlrx:'难凉热血'}`。

### 8. vuex（常用）

`Vuex` 是一个专为`Vue` 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
`Vuex` 解决了多个视图依赖于同一状态和来自不同视图的行为需要变更同一状态的问题，将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上。

关于`Vuex`的具体介绍以及使用方式可参见之前的一篇博文：[通俗易懂了解Vuex](https://www.cnblogs.com/wangjiachen666/p/9539039.html)!

### 9. 总结

以上就是盘点了`Vue`中组件间通信的七种方式，这些方式根据使用场景大致可分为：

- 父子组件通信：`props / $emit`; `$children / $parent` ; `provide / inject` ; `ref / refs`; `$attrs / $listeners`
- 兄弟组件通信：`eventBus`; `vuex`
- 跨级组件通信： `eventBus`；`Vuex`；`provide / inject`

转载自：<https://www.cnblogs.com/wangjiachen666/p/11738629.html#_label5>

