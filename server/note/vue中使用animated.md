**vue中使用第三方插件animate.css实现动画效果**
1.首先先引入第三方类animated.css
2.将你所需要动画的标签用包裹起来
3.在transition元素中添加enter-active-class/leave-active-class入场离场属性
但是设置的值前面必须加上animated（当然也可以不在transition上设置animated，可以在你所要进行动画的标签上设置class属性为animated）
4.也可以加入:duration来统一设置入场和离场时候的时长
案例如下

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="lib/vue.js"></script>
    <link rel="stylesheet" href="lib/animate.css">
</head>
<body>
    <div id="app">
        <input type="button" value="toggle" @click="flag=!flag">
        <!-- <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
                <h3 v-if="flag">这是一个H3</h3>
        </transition> -->
        <transition enter-active-class="bounceIn" leave-active-class="bounceOut" :duration:"400">
                <h3 v-if="flag" class="animated">这是一个H3</h3>
        </transition>
    </div>
    <script>
        var vm=new Vue({
            el:'#app',
            data:{
                flag:false
            },
            methods:{

​```
        }
    })
</script>
​```

</body>
</html>

```

### 在vue的项目中使用animated

#### 第一步：安装

```js
cnpm install animate.css --save
```

#### 第二步：引用并使用

在main.js中引用并使用

```js
import Vue from 'vue'
import App from './App.vue'
import animate from 'animate.css'

Vue.config.productionTip = false

Vue.prototype.bus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.use(animate);
```

#### 第三步：使用类名

1. 必须在自定义类名中使用animated 类名。
2. 必须在自定义类名中使用此处使用的动画名称。

```js
<template>
    <div>
        <transition name="fade" enter-active-class="animated swing" leave-active-class="animated shake">
            <div v-if="show">transition</div>
        </transition>
        <button @click="handleClick">切换</button>
    </div>
</template>
<script>
export default {
    name:"Yuanli",
    data() {
        return {
            show:true
        }
    },
    methods: {
        handleClick:function(){
            this.show = !this.show;
        }
    },
}
</script>
<style scoped></style>
```

#### 设置初次加载动画

> 设置初次加载动画指：页面在刷新后第一次加载时执行的动画

1. 向transition组件添加appear属性
2. 向transition组件添加appear-active-class属性并设置页面初次加载时执行的动画

```html
<template>
    <div>
        vue中css的动画
        <div>
            <transition
                name="fade"
                appear
                enter-active-class="active animated swing"
                leave-active-class="leave animated shake"
                appear-active-class="active animated swing"
            >
                <div v-if="show">transition</div>
            </transition>
            <button @click="handleClick">切换</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"Yuanli",
    data() {
        return {
            show:true
        }
    },
    methods: {
        handleClick:function(){
            this.show = !this.show;
        }
    },
}
<style scoped></style>
```

#### 多个动画时间的设定

> 可通过type="属性值"进行动画时间统一，表示当前animate的动画时间是根据属性值进行改变的。

```html
<template>
    <div>
        vue中css的动画
        <div>
            <transition
                name="fade"
                appear
                type="transition"
                enter-active-class="active animated swing"
                leave-active-class="leave animated shake"
                appear-active-class="active animated swing"
            >
                <div v-if="show">transition</div>
            </transition>
            <button @click="handleClick">切换</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"Yuanli",
    data() {
        return {
            show:true
        }
    },
    methods: {
        handleClick:function(){
            this.show = !this.show;
        }
    },
}
</script>
<style scoped>
/* 从隐藏到显示 */
.fade-enter{
    opacity:0;
}
.fade-enter-active,.active{
    transition: opacity 3s;
}
/* 从显示到隐藏 */
.fade-leave-to{
    opacity: 0;
}
.fade-leave-active,.leave{
    transition: opacity 3s;
}
</style>
```

#### 自定义动画的执行时间

1. duration可以分别定义时间：:duration="{enter:1000,leave:9000}"
2. duration可以直接设置时间：:duration=“10000”
3. 时间单位均为ms

```html
<template>
    <div>
        vue中css的动画原理
        <div>
            <transition
                name="fade"
                :duration="{enter:1000,leave:9000}"
                enter-active-class="active animated swing"
                leave-active-class="leave animated shake"
                appear-active-class="active animated swing"
            >
                <div v-if="show">transition</div>
            </transition>
            <button @click="handleClick">切换</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"Yuanli",
    data() {
        return {
            show:true
        }
    },
    methods: {
        handleClick:function(){
            this.show = !this.show;
        }
    },
}
</script>
<style scoped></style>
```

## 

参考链接：https://blog.csdn.net/weixin_44759289/article/details/101620186

参考链接：<https://blog.csdn.net/weixin_39893889/article/details/103237056>

