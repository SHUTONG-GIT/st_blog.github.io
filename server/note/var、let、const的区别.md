在JavaScript中有三种声明变量的方式：var、let、const。下文给大家介绍js中三种定义变量的方式const， var， let的区别。

- let const定义变量不存在声明提升，var存在声明提前。
- let 和const定义变量必须先声明再使用，否则会报错。
- const定义变量不能直接修改赋值
- const一旦声明必须赋值,不能使用null占位
- var声明的变量会挂载在window上，而let和const声明的变量不会：
- let和const声明形成块作用域
- 同一作用域下let和const不能声明同名变量，而var可以

#### 一、var声明的变量会挂载在window上，而let和const声明的变量不会：

```
var a = 100;
console.log(a,window.a);    // 100 100

let b = 10;
console.log(b,window.b);    // 10 undefined

const c = 1;
console.log(c,window.c);    // 1 undefined
```

#### 二、var声明变量存在变量提升，let和const不存在变量提升

```
console.log(a); // undefined  ===>  a已声明还没赋值，默认得到undefined值
var a = 100;
console.log(b); // 报错：b is not defined  ===> 找不到b这个变量
let b = 10;
console.log(c); // 报错：c is not defined  ===> 找不到c这个变量
const c = 10;
```

#### 三、let和const声明形成块作用域

```
if(1){
    var a = 100;
    let b = 10;
}

console.log(a); // 100
console.log(b)  // 报错：b is not defined  ===> 找不到b这个变量
```

```
if(1){

    var a = 100;
        
    const c = 1;
}
 console.log(a); // 100
 console.log(c)  // 报错：c is not defined  ===> 找不到c这个变量
```

#### 四、同一作用域下let和const不能声明同名变量，而var可以

```
var a = 100;
console.log(a); // 100

var a = 10;
console.log(a); // 10

let a = 100;
let a = 10;

//  控制台报错：Identifier 'a' has already been declared  ===> 标识符a已经被声明了。
```

#### 五、暂存死区

```

var a = 100;

if(1){
    a = 10;
    //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，
    // 而这时，还未到声明时候，所以控制台Error:a is not defined
    let a = 1;
}
```

#### 六、const

```

/*
* 　　1、一旦声明必须赋值,不能使用null占位。
*
* 　　2、声明后不能再修改
*
* 　　3、如果声明的是复合类型数据，可以修改其属性
*
* */

const a = 100; 

const list = [];
list[0] = 10;
console.log(list);　　// [10]

const obj = {a:100};
obj.name = 'apple';
obj.a = 10000;
console.log(obj);　　// {a:10000,name:'apple'}
```

转载自：<https://www.cnblogs.com/zhaoxiaoying/p/9031890.html>