**vue中的动画**

**过渡**

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

#### 过渡的类名

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

1. `v-enter-to`: **2.1.8版及以上** 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
2. `v-leave`: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
3. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
4. `v-leave-to`: **2.1.8版及以上** 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。



```html
<script src="../js/vue.js"></script>
		<!-- 2.自定义两组样式，来控制transition 内部的元素实现动画-->
		<style>
/* v-enter[这是一个时间点]是进入之前 ,元素的起始状态,此时还没有开始进入*/
/* v-leave-to [这是个时间点] 是动画离开之后 ，离开的终止状态 ，此时 ，元素 动画已经结束了*/
			.v-enter,.v-leave-to{
				opacity: 0;
				transform:translateX(200px);
			}
			.v-enter-to,.v-leave{
				opacity: 1;
				color: red;
			}
			/*入场动画的时间段                   立场动画的时间段*/
			.v-enter-active,.v-leave-active{
				transition: all 1s linear;
			}
		</style>
	</head>
	<body>
		<div id="dl">
			<!--定义一个开关来控制动画-->
			<input type="button" name="" id="" value="toggle" @click="moves" />
			<!-- transition元素,是Vue官方提供的-->
			<!-- 使用transition 元素，把需要被动画控制的元素，包裹起来-->
			<transition>
				<h1 v-if="move">我是一个标题</h1>
			</transition>
			
		</div>
		<script type="text/javascript">
			var vm=new Vue({
				el:'#dl',
				data:{
					//定义开关的值
					move:false
				},
				methods:{
					//控制开关函数
					moves(){
						this.move=!this.move
					}
				}
			})
		</script>
```

类名在transition元素未设置name 名时  以v-开头  

若是在transition元素中设置了name类名  则以name-开头；

#### 动画使用钩子函数

可以在属性中声明 JavaScript 钩子

```
<transition
  v-on:before-enter="beforeEnter"     入场动画开始之前·
  v-on:enter="enter"                  入场动画开始
  v-on:after-enter="afterEnter"       入场动画之后
  v-on:enter-cancelled="enterCancelled"  入场动画结束

  v-on:before-leave="beforeLeave"   离场动画开始之前·
  v-on:leave="leave"                离场动画开始
  v-on:after-leave="afterLeave"     离场动画之后
  v-on:leave-cancelled="leaveCancelled"离场场动画结束
>
  <!-- ... -->
</transition>
// ...
methods: {
  // --------
  // 进入中
  // --------

  beforeEnter: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```

这些钩子函数可以结合 CSS `transitions/animations` 使用，也可以单独使用。

<div id="dl">
			<!--定义一个开关来控制动画-->
			<input type="button" name="" id="" value="toggle" @click="move=!move" />
			<!-- transition元素,是Vue官方提供的-->
			<!-- 使用transition 元素，把需要被动画控制的元素，包裹起来-->
			<transition 
				<!--绑定钩子函数设置动画样式      这是动画入场开始前样式-->
				@before-enter='beforeEnter' 
				<!--入场后样式-->
				@enter='enter' 
				<!--出场动画前样式-->
				@before-leave='beforeLeave'
				<!--出场动画后样式-->
				@leave='leave'
				>
				<h1 v-if="move">我是一个标题</h1>
			</transition>

		</div>
		<script type="text/javascript">
			var vm=new Vue({
				el:'#dl',
				data:{
					//定义开关的值
					move:false
				},
				methods:{
					//第一个参数为绑定的元素，
					beforeEnter(el){
						el.style.transform='translate(150px,0)';
						el.style.opacity='0'
					
					},
					enter(el){
						el.offsetWidth
						el.style.transform='translate(0px,0)';
						el.style.opacity='1';
						el.style.transition='all 0.5s linear'
					},
					afterEnter(el){},
					beforeLeave(el){
						el.style.transform='translate(0px,0)';
						el.style.opacity='1';
					},
					leave(el){
						el.offsetWidth
						el.style.transform='translate(150px,0)';
						el.style.opacity='0'
						el.style.transition='all 0.5s linear'
					},
					
				}
			})
当只用 JavaScript 过渡的时候，**在 enter 和 leave 中必须使用 done 进行回调**。否则，它们将被同步调用，过渡会立即完成。

#### 列表动画

使用 `v-for`  在这种场景中，使用 `<transition-group>` 组件

`<transition-group>` 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 **v-move 特性**，它会在元素的改变定位的过程中应用。像之前的类名一样，可以通过 `name` 属性来自定义前缀，也可以通过 `move-class` 属性手动设置。



使用 `<transition-group>` 组件。在我们深入例子之前，先了解关于这个组件的几个特点：

- 不同于 `<transition>`，它会以一个真实元素呈现：默认为一个 `<span>`。你也可以通过 `tag` 特性更换为其他元素。
- [过渡模式](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E6%A8%A1%E5%BC%8F)不可用，因为我们不再相互切换特有的元素。
- 内部元素 **总是需要** 提供唯一的 `key` 属性值。
- CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身。



`v-move` 对于设置过渡的切换时机和过渡曲线非常有用

需要配合绝对定位使用

```html
<style>
	li{
		list-style: none;
		margin: 5px;
		border: 1px solid #CCCCCC;
		padding: 5px;
      }
		li:hover{
			background-color: pink;
			transition: all 1s linear;
		}
		/*因为transitio-group标签自定义了my的类名 ,所以my-enter代替v-enter*/
		.my-enter,.my-leave-to{
			opacity: 0;
			transform: translateY(80px);
		}
		.my-enter-active,.my-leave-ative{
			transition: all 1s linear;
		}
		/*.my-move和..my-leave-active配合使用可以让元素的移动产生平滑的效果*/
		.my-move{
			transition: all 0.5s linear;
		}
		/*必须给个绝对定位  不然效果出不来*/
		.my-leave-active{
			position: absolute;
		}
	</style>
	<script src="../js/vue.js"></script>
</head>
<body>
	<div id="box">
		<label>
			Id:
			<input type="text" v-model="id"/>
		</label>
		<label>
			name:
			<input type="text" v-model="name"/>
		</label>
		<button @click="add">添加</button>
		<ul>
			<!--在用v-for指令时  transition控制不了列表动画,必须要用transition-group包裹-->
            <!--添加appear属性可以给整个列表添加入场效果-->
			<transition-group name='my' appear>
				<li v-for="(item,i) in list" :key='item.id' @click="del(i)">{{item.id}}----{{item.name}}</li>
				
			</transition-group>
			
		</ul>
	</div>
	<script type="text/javascript">
		var vm=new Vue({
			el:'#box',
			data:{
				id:"",
				name:'',
				list:[
                   {id:1,name:"喜羊羊"},
                   {id:2,name:"美羊羊"},
                   {id:3,name:"懒羊羊"},
                   {id:4,name:"费羊羊"}
				]
			},
			methods:{
                //					添加列表元素函数
					add(){
						this.list.push({id:this.id,name:this.name});
						this.id='';
						this.name='';
					},
					//删除列表函数
					del(i){
						this.list.splice(i,1);
					}
				}
			})
		</script>
```

