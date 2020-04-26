**JavaScript中的this指向**

首先必须要说的是，**this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁**，**实际上this的最终指向的是那个调用它的对象（**这句话有些问题，后面会解释为什么会有问题，虽然网上大部分的文章都是这样说的，虽然在很多情况下那样去理解不会出什么问题，但是实际上那样理解是不准确的，所以在你理解this的时候会有种琢磨不透的感觉**）**，那么接下来我会深入的探讨这个问题。

1.普通函数调用，就是指向全局对象  window

```js
var a=10;
function fn(){
    a=20
    console.log(this.a)
}
fn();// 10
```

2.对象函数调用   指向调用者

```js
    var a=10;
    var obj={
        a:20,
        fn:function(){
            console.log(this.a)
        }
        
    }
    
    obj.fn();//20
```

3.构造函数调用    指向new的对象

```
function demo() {
 //alert(this); // this -> object
 this.testStr = 'this is a test';
}
let a = new demo();
alert(a.testStr); // 'this is a test'
```

4.定时器中的this，指向是window

```
setTimeout(function() {
    alert(this); // this -> window ，严格模式 也是指向window
},500)
```

5.严格模式下，this是undefined

```
function demo() {
 'use strict';
 alert(this); // undefined
}
demo();
```

6.用call与apply的方式调用函数

```
function fn(){
    alert(this);
}
fn.call('abc');//abc
fn.call(null);//window
fn.call(undefined);//window
```

7.元素绑定事件，this指向当前元素

```
window.onload = function() {
 let $btn = document.getElementById('btn');
 $btn.onclick = function(){
 alert(this); // this -> 当前触发
 }
}
```

8.函数调用时如果绑定了bind，那么函数中的this指向了bind中绑定的元素

```
window.onload = ``function``() {
 ``let $btn = document.getElementById(``'btn'``);
 ``$btn.addEventListener(``'click'``,``function``() {
 ``alert(``this``); ``// window
 ``}.bind(window))
}
```

### 

