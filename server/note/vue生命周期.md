**生命周期**

什么是生命周期:从Vue实例创建、 运行、到销毁期间,总是伴随着各种各样的事件,这些事件,统称为 生命周期!

生命周期钩子:就是生命周期事件的别名而已;

生命周期钩子=生命周期函数=生命周期事件

**主要的生命周期函数分类:**

创建期间的生命周期函数:

**beforeCreate :**实例刚在内存中被创建出来,此时,还没有初始化好data和methods

属性

**created :**实例已经在内存中创建OK，此时data和methods已经创建OK，此时还没有

开始编译模板

**beforeMount** :此时已经完成了模板的编译，但是还没有挂载到页面中

**mounted** :此时,已经将编译好的模板,挂载到了页面指定的容器中显示

运行期间的生命周期函数:

**beforeUpdate** :状态更新之前执行此函数，此时data中的状态值是最新的,但是界面上

显示的数据还是旧的，因为此时还没有开始重新渲染DOM节点

**updated** :实例更新完毕之后调用此函数,此时data中的状态值和界面上显示的数据，

都已经完成了更新,界面已经被重新渲染好了!

。销毁期间的生命周期函数:

**beforeDestroy** :实例销毁之前调用。在这一步,实例仍然完全可用。

**destroyed** : Vue实例销毁后调用。调用后, Vue实例指示的所有东西都会解绑定,所有

的事件监听器会被移除,所有的子实例也会被销毁。

**钩子函数**

大致可以分成四类，官方常用8个，剩下3个不常用，分别是以下示例

1. beforeCreate()和created()：**组件创建前后**
2. beforeMount()和mounted()：**vue启动前后**
3. beforeUpdated()和updated()：**组件更新前后**
4. beforeDestroyed()和destroyed()：**组件销毁前后**(一般配合**v-if**使用)
5. activated()和deactivated()：**组件激活时，未激活时**
6. errorCaptured() ：**当捕获一个来自子孙组件的错误时被调用**

**Vue 的父组件和子组件生命周期钩子执行顺序是什么？**

**渲染过程：**
 父组件挂载完成一定是等子组件都挂载完成后，才算是父组件挂载完，所以父组件的mounted在子组件mouted之后
 父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted

**子组件更新过程：**

1. 影响到父组件： 父beforeUpdate -> 子beforeUpdate->子updated -> 父updted
2. 不影响父组件： 子beforeUpdate -> 子updated

**父组件更新过程：**

1. 影响到子组件： 父beforeUpdate -> 子beforeUpdate->子updated -> 父updted
2. 不影响子组件： 父beforeUpdate -> 父updated

**销毁过程：**
 父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed

看起来很多好像很难记忆，其实只要理解了，不管是哪种情况，都一定是父组件等待子组件完成后，才会执行自己对应完成的钩子，就可以很容易记住。