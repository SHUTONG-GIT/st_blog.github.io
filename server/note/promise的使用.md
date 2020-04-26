**Promise 是异步编程的一种解决方案**：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。promise有三种状态：**pending(等待态)，fulfiled(成功态)，rejected(失败态)**；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。

**promise是用来解决两个问题的：**

- 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象

- promise可以支持多个并发的请求，获取并发请求中的数据

  这个promise可以解决异步的问题，本身不能说promise是异步的

Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，原型上有then、catch等同样很眼熟的方法。

```js
let p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(() => {
        console.log('执行完成');
        resolve('我是成功！！');
    }, 2000);
});
p.then((data) => {
    console.log(data);
})
.then((data) => {
    console.log(data);
})
.then((data) => {
    console.log(data);
});
```

Promise的构造函数接收一个参数：函数，并且这个函数需要传入两个参数：

- resolve ：异步操作执行成功后的回调函数
- reject：异步操作执行失败后的回调函数

### catch的用法

我们知道Promise对象除了then方法，还有一个catch方法，它是做什么用的呢？其实它和then的第二个参数一样，用来指定reject的回调。用法是这样：

```javascript
p.then((data) => {
    console.log('resolved',data);
}).catch((err) => {
    console.log('rejected',err);
});
 
```

效果和写在then的第二个参数里面一样。不过它还有另外一个作用：在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中。请看下面的代码：

```javascript
p.then((data) => {
    console.log('resolved',data);
    console.log(somedata); //此处的somedata未定义
})
.catch((err) => {
    console.log('rejected',err);
});
```

在resolve的回调中，我们console.log(somedata);而somedata这个变量是没有被定义的。如果我们不用Promise，代码运行到这里就直接在控制台报错了，不往下运行了。但是在这里，会得到这样的结果：

```js
let Promise1 = new Promise(function(resolve, reject){})
let Promise2 = new Promise(function(resolve, reject){})
let Promise3 = new Promise(function(resolve, reject){})
 
let p = Promise.all([Promise1, Promise2, Promise3])
 
p.then(funciton(){
  // 三个都成功则成功  
}, function(){
  // 只要有失败，则失败 
})

```

也就是说进到catch方法里面去了，而且把错误原因传到了reason参数中。即便是有错误的代码也不会报错了，这与我们的try/catch语句有相同的功能

### all的用法：谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise对象

Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。看下面的例子：

```javascript
let Promise1 = new Promise(function(resolve, reject){})
let Promise2 = new Promise(function(resolve, reject){})
let Promise3 = new Promise(function(resolve, reject){})
let p = Promise.all([Promise1, Promise2, Promise3])
p.then(funciton(){
  // 三个都成功则成功  
}, function(){
  // 只要有失败，则失败 
})
```

有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据，是不是很酷？*有一个场景是很适合用这个的，一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。*

### race的用法：谁跑的快，以谁为准执行回调

race的使用场景：比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作，代码如下：

```javascript
 //请求某个图片资源
    function requestImg(){
        var p = new Promise((resolve, reject) => {
            var img = new Image();
            img.onload = function(){
                resolve(img);
            }
            img.src = '图片的路径';
        });
        return p;
    }
    //延时函数，用于给请求计时
    function timeout(){
        var p = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('图片请求超时');
            }, 5000);
        });
        return p;
    }
    Promise.race([requestImg(), timeout()]).then((data) =>{
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
```

1. requestImg函数会异步请求一张图片，我把地址写为"图片的路径"，所以肯定是无法成功请求到的。timeout函数是一个延时5秒的异步操作。我们把这两个返回Promise对象的函数放进race，于是他俩就会赛跑，如果5秒之内图片请求成功了，那么遍进入then方法，执行正常的流程。如果5秒钟图片还未成功返回，那么timeout就跑赢了，则进入catch，报出“图片请求超时”的信息。运行结果如下：