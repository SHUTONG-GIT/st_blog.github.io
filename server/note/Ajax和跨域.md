**Ajax**

**什么是Ajax**：是一种用于创建快速动态网页的技术  Ajax代表异步Javascript和XML。它是用于异步显示数据的相关技术。（在不重新加载网页的情况下发送和检索数据）

```
我对 ajax 的理解是，它是一种异步通信的方法，通过直接由 js 脚本向服务器发起 http 通信，然后根据服务器返回的数据，
 更新网页的相应部分，而不用刷新整个页面的一种方法。

 创建一个 ajax 有这样几个步骤

 首先是创建一个 XMLHttpRequest 对象。

 然后在这个对象上使用 open 方法创建一个 http 请求，open 方法所需要的参数是请求的方法、请求的地址、是否异步和用户
 的认证信息。

 在发起请求前，我们可以为这个对象添加一些信息和监听函数。比如说我们可以通过 setRequestHeader 方法来为请求添加头信
 息。我们还可以为这个对象添加一个状态监听函数。一个 XMLHttpRequest 对象一共有 5 个状态，当它的状态变化时会触发on
 readystatechange 事件，我们可以通过设置监听函数，来处理请求成功后的结果。当对象的 readyState 变为 4 的时候，代
 表服务器返回的数据接收完成，这个时候我们可以通过判断请求的状态，如果状态是 2xx 或者 304 的话则代表返回正常。这个时
 候我们就可以通过 response 中的数据来对页面进行更新了。

 当对象的属性和监听函数设置完成后，最后我们调用 sent 方法来向服务器发起请求，可以传入参数作为发送的数据体。
```

**特点：**

- 通过异步模式，提升了用户体验
- 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用
- Ajax引擎在客户端运行，承担了一部分本来由浏览器承担的工作，从而减少了大用户量下的服务器负载

**优点：**

- 页面不需要刷新，用户体验好
- 使用异步方式与服务器通信，具有更加迅速的响应能力
- 减轻服务器和带宽的负担

**缺点：**

- ajax不支持浏览器back按钮
- 安全问题（Ajax源码是可读的）
- 对搜索引擎的支持较弱(不利于seo)
- 破坏了程序的异常机制
- 不容易调试

**原生js ajax请求有几个步骤？分别是什么**

```
//创建 XMLHttpRequest 对象
var ajax = new XMLHTTpRequest;
//规定请求的类型、URL 以及是否异步处理请求。
ajax.open('GET',url,true);
//发送信息至服务器时内容编码类型
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
//发送请求
ajax.send(null);  
//接受服务器响应数据
ajax.onreadystatechange = function () {
    if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) { 
    }
};
```

**什么情况造成跨域**

同源策略限制不同源便会造成跨域，

同源：协议   域名  端口号全部相同 

非同源： 只要有一个不同就是非同源

### 解决跨域

jsonp**方式解决跨域**

**原理：**因为script脚本本身拥有跨域能力，利用script标签的scr属性不受同源策略限制，可以请求第三方服务器数据内容。

**步骤：**

\1. 去创建一个script标签

\2. script的src属性设置接口地址

\3. 接口参数,必须要带一个自定义函数名 要不然后台无法返回数据。

\4. 通过定义函数名去接收后台返回数据

```js
//去创建一个script标签
var  script = document.createElement("script");
//script的src属性设置接口地址 并带一个callback回调函数名称
script.src = "http://127.0.0.1:8888/index.php?callback=jsonpCallback";
//插入到页面
document.head.appendChild(script);
//通过定义函数名去接收后台返回数据function jsonpCallback(data){
    //注意  jsonp返回的数据是json对象可以直接使用
    //ajax  取得数据是json字符串需要转换成json对象才可以使用。
}
```

基于jsonp的实现原理，所以jsonp只能解决get跨域

CORS**解决跨域**

- 原理：服务器设置Access-control-Allow-OriginHTTP 响应头后，浏览器将会允许跨域请求

- 限制:浏览器需要支持HTML5，

- ```
  需要后台设置
  Access-Control-Allow-Origin: *              //允许所有域名访问，或者
  Access-Control-Allow-Origin: http://a.com   //只允许所有域名访问
  ```

### 