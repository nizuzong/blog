---
title: JavaScript篇
date: 2021-05-15
tags:
 - 面试
categories:
 - 面试
---
## 1、箭头函数和普通函数的区别
1. 箭头函数和普通函数的样式不同，箭头函数的语法更加简洁、清晰，箭头函数是```=>```定义函数，普通函数是```function```定义函数
2. 箭头函数不能作为构造函数使用，也不能使用```new```关键字（```因为箭头函数中没有自己的this,它的this其实是继承了外层执行环境的this,且this指向是永远不会改变的，作为构造函数其他this要指向创建的新对象）
3. 箭头函数的```this```是捕获它所在执行上下文的```this```来作为自己的this,定义的时候就确定了
4. 箭头函数的```this```指向不会被```bind, call, apply```改变
5. 箭头函数是没有自己的```arg```的。如果要访问则会得到外层函数执行的值。
6. 箭头函数中没有```prototype```原型

## 2、let、const、var这三者的区别

__变量提升:__
+ ```var```声明的变量存在变量提升（变量可以在声明前调用，值为```undefined```）
+ ```let```和```const```不存在变量提升问题（因为let和const都有一个暂时性死区的概念，所以在没有得到赋值前是不能被调用的）
__块级作用域：__ ```var```不存在块级作用域，```let```和```const```存在块级作用域
__声明：__ ```var```允许重复声明，```let```和```const```在同一作用域下不允许重复声明变量。```const```声明的是一个只读的常量，所以声明后就不能改变（如果声明的是一个对象，对象里的属性时可以改变的，因为```const```声明的对象只保存对象的引用地址，只要地址不发生改变，那么就不会报错）

## 3、Bigint和Number的区别
1. ```Number```类型的数字有精度限制，数值的精度只能到53个二进制，大于这个范围的整数就无法精确表示了
2. ```Bigint```没有位数限制，任何位数的整数都可以精确表示。但是只能用于表示整数，为了和```Number```区分，```Bigint```类型的数据后面必须加后缀```n```。```Bigint```可以使用负号却不能使用正号。
3. 二者类型的数据不能或者计算

## 4、基本数据类型和引用数据类型的区别
__基本数据类型：__
1. 基本数据类型的值是不可变的（重新赋值属于改变属性名指向，而不是对值进行操作）
```js
let str = 'abc';
str.split('');
console.log(a); // abc
```
2. 基本数据类型不可以添加属性和方法
3. 基本数据类型的赋值是简单赋值，基本数据类型的比较是值的比较
4. 基本数据类型的存放在```栈```里面的

__引用数据类型：__
1. 引用数据类型的值是可以改变的
2. 引用类型可以添加属性和方法
3. 引用类型的赋值是对象引用，即声明的变量标识符，存储的只是对象的指针地址
4. 引用类型的比较是引用```指针地址```的比较
5. 引用类型是同时保存在```栈```和```堆```中的，栈中保存变量标识符和指向堆的地址

## 5、async await对比promise的优缺点
__async/await优点：__
1. 他做到了真正的串行的同步写法，代码阅读相对容易
2. 对于条件语句和其他流程语句比较友好，可以直接写到判断条件里面
```js
function a() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(222)
      }, 2222)
    })
  };
async function f() {
    try {
      if ( await a() === 222) {
        console.log('yes, it is!') // 会打印
      }
    } catch (err) {
      console.log(err)
    }
  }
```
3. 处理复杂流程是，在代码清晰度方面有优势

__async/await缺点：__
1. 无法处理```promise```返回的```reject```对象，要借助```try...catch```
2. 用```await```可能会导致性能问题，因为```await```会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性
```js
Promise.all([ajax1(), ajax2()])
```
3. ```try...catch```内部的变量无法传递给下一个```try...catch```，```Promise```和```then/catch```内部定义的变量，能通过```then```联调的参数传递到下一个```then/catch```，但是```async/await```的```try```内部的变量，
如果用```let```和```const```定义则无法传递到下一个```try...catch```，只能在外层作用域先定义好。

但是呢。```async/await```确实解决了```promise```一些问题的，更加灵活的处理异步

__promise的一些问题：__
+ 执行的过程中，中途不能取消，链式调用多个```then```中间不能随便跳出来
+ 错误无法在外部被捕捉，只能在内部进行预判处理，如果不设置回调函数，```promise```内部抛出的错误不会再外部被发现
+ ```promise```内部如何执行，监测起来很难，当处于```pending```状态时，无法得知目前进展到哪一个阶段

## 6、get和post的区别
+ ```GET```是将参数写在```url中?```后面，并且用```&```分割不同的参数；而```POST```是将信息存放在```Message Body```中传送，参数不会显示在```URL```中(Restful规范中是这样，但post在有需要时可以把参数放在```url```中)。 ```GET```方式需要使用```Request.QueryString```来取得变量的值，而```POST```方式通过```Request.Form```来获取变量的值。也就是说```GET```是通过地址栏来传值，而```POST```是通过提交表单来传值。
+ ```GET```请求提交的数据长度限制（HTTP协议本身没有限制url及正文长度，对url的限制大多是浏览器和服务器的问题），```POST```请求没有内容长度限制。
+ ```GET```请求会被浏览器缓存起来。而每次提交```POST```请求，浏览器不会缓存```post```请求返回的内容
+ ```GET```对数据进行查询，```POST```主要对数据进行增删改！说白了就是get只读，post是写。
+ 之前一直说get请求不安全post请求安全是因为，```GET```请求方式是从浏览器的```URL```地址就可以看到参数，所以不安全。其实无论是```GET```还是```POST```其实都是不安全的，因为```http```协议是明文传输，只要拦截封包就能轻易获取到重要内容。想要安全传输资料。必须使用```SSL/TLS```来加密封包，也就是```HTTPS```

__为什么推崇使用post来处理敏感数据呢__
因为```GET```请求记录会保存在浏览器，上网日志中，而是用```POST```不会被记录存储在浏览器的记录和网址访问记录中，这样会有更大的安全性

__误区：说GET产生一个TCP数据包；POST产生两个TCP数据包__
+ 对于```GET```方式的请求，浏览器会把```http header```和```data```一并发送出去，服务端响应```200```，请求成功。
+ 对于```POST```方式的请求，浏览器会把```http header```给服务daunt，告诉服务端等下会有数据过来，服务端响应```100 continue```，告诉浏览器我已经准备接收数据，浏览区再post发送一个```data```给服务端，服务端形影```200```，请求成功。

面所说的post会比get多一个tcp包其实不太严谨。多发的那个expect 100 continue header报文，是```由客户端对http的post和get的请求策略决定的```，目的是为了避免浪费资源，如带宽，数据传输消耗的时间等等。所以客户端会在发送header的时候添加expect 100去探探路，如果失败了就不用继续发送data，从而减少了资源的浪费。所以是否再发送一个包取决了客户端的实现策略，和get/post并没什么关系。有的客户端比如fireFox就只发送一个包。

## 7、fetch、ajax、axios区别
Ajax是什么：ajax是（Asynchronous JavaScript and XML）的缩写。现在，允许浏览器与服务器通信而无须刷新当前页面的技术都被叫做ajax。核心是用```XMLHttpRequest```对象。

axios是什么：axios是一个基于```promise```用于浏览器和```nodejs```的```HTTP```客户端，本质上```也是对原生XHR```的封装，只不过她是promise的实现版本，符合新的es规范

fetch是什么： fetch被称为下一代的```ajax```技术，采用promise方式来处理数据，是一种简洁明了的API，比XMLHttpRequest更加简单易用。

所以其主要区别是：axios、fetch请求后都支持promise对象API，ajax只能用回调函数。

## TCP的UDP的区别
+ TCP是面向连接的，udp是无法连接的及发送数据前不需要简历链接
+ TCP提供可靠的服务。也就是说，通过```TCP```连接传送的数据，无差错哦，不丢失，不重复，且按需到达；UDP尽最大努力交付，即不保证可靠交付。并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。
+ TCP是面向字节流，UDP面向保温，并且网络出现拥塞不会使得发送速率降低
+ TCP只能是1对1的，而UDP支持1对1，1对多。
+ TCP的首部较大为20字节，而UDP只有8字节。
+ TCP是面向连接的可靠性传输，而UDP是不可靠的。

## bind call apply区别
+ 三者都可以改变函数的```this```对象指向
+ 三者第一个参数都是```this```要指向的对象，如果没有这个参数或参数为```undefined```或```null```，则默认指向全局```window```。
+ 三者都可以传参，但是apply是数据，而call是参数列表，且apply是call是一次性传入参数，而```bind```可以分为多次传入。
+ bind改变this指向后不会立即执行，而是返回一个永久改变this指向的函数便于稍后调用；apply和call则是立即调用。

## 8、JavaScript和typeScript的区别
1. TypeScript从核心语言方面和类概念的模塑方面对```JavaScript```对象模型进行扩展。
2. JavaScript代码可以在无需任何修改的情况下与```TypeScript```一同工作，同时可以使用编译器将```TypeScript```代码转换为```JavaScript```。
3. TypeScript通过类型注解提供编译时的静态类型检查。
4. TypeScript中的数据要求带有明确的类型，JavaScript不要求。
5. TypeScript为函数提供了缺省参数值
6. TypeScript引入了JavaScript中没有的```类```概念
6. TypeScript中引入了模块的概念，可以吧声明、数据、函数和类封装在模块中

# 数据类型
## 1、JavaScript有哪些数据类型，它们的区别
```javascript```共有七中基本数据类型，分别是```undefined、null、boolean、number、string```,还有es6中新增的```Symbol```和```BigInt```类型：
+ Symbol代表创建后独一无二且不可变的数据类型，它的出现我任务主要是为了解决可能出现的全局变量冲突的问题。
+ BigInt是一种数字类型的数据，它可以表示任意精度格式的整数，使用```BigInt```可以安全地存储和操作大整数，即使这个树已经超出了```Number```能够表示的安全整数范围。

__这些数据可以分为```原始数据类型```和```引用数据类型```__
+ 栈：原始数据类型（undefined、null、boolean、number、string）
+ 堆：引用数据类型（object、array、function）

__区别__
+ 存储位置不同

1. 原始数据类型直接存储在```栈```中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。
2. 引用数据类型存储在```堆```中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后村堆中获得实体。

__堆和栈的概念存在于数据结构中和操作系统内存中：__
+ 在数据结构中，栈中数据的存取方式为先进后出
+ 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式

在操作系统中，内存被分为栈区和堆区：
1. 栈区内存由编译器自动分配存放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈
2. 堆区内存以便由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收

## 2、数据类型检测的方式有哪些
__1、typeof__
```js
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
```
其中数组、对象、null都会被判断为```object```，其他判断都正确

__2、instanceof__
```instanceof```可以正确判断对象的类型，因为其内部的机制是通过判断在其原型链中能否找到该类型的原型。
```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log('str' instanceof String);                // false
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```
instanceof只能正确判断引用数据类型，而不能判断基本数据类型

```instanceof```运算符用来测试一个对象在其原型链中是否存在一个构造函数的```prototype```属性

__3、constructor__
```js
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```
```constructor```有两个作用，一是判断数据的类型，二是对象实例通过```constructor```对象访问它的构造函数

__注意__
如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了
```js
function Fn(){};
Fn.prototype = new Array();
var f = new Fn();
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true
```
__4、Object.prototype.toString.call()__
```Object.prototype.toString.call()```使用```Object```对象的原型方法```toString```，判断数据类型
```js
var a = Object.prototype.toString;
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```
同样是检测对象```obj```调用```toString```方法，```obj.toString```的结果和```Object.prototype.toString.call()```的结果不一样，这是为什么？

这是因为```toString```为```Object```的原型方法，而```Array、function```等类型作为```Object```实例，都重写了```toString```方法，不同的对象类型调用```toString```方法时，根据原型链的只是，调用的是对应的重写之后的```toString```方法（```function```类型返回内容为函数体的字符串，```Array```类型返回元素组成的字符串...），而不会去调用```Object```上原型```toString```方法（返回对象的具体类型），所以采用```obj.toString```不能得到其对象类型，只能将```obj```转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用```Object```上原型```toString```方法。

## 3、判断数据的方式有哪些
+ 通过Object.prototype.toString.call()做判断
```js
Object.prototype.toString.call().slice(8,-1) === 'Array';
```
+ 通过原型链来判断
```js
obj.__proto__ === Array.prototype;
```
+ 通过es6```Array.isArray()```做判断
```js
Array.isArray(obj);
```
+ 通过```instanceof```做判断
```js
obj instanceof Array
```
+ 通过```Array.prototype.isPrototypeOf```
```js
Array.prototype.isPrototypeOf(obj);
```

## 4、null和undefined区别
首先```undefined```和```null```都是基本数据类型，这两个基本数据类型分别只有一个值，就是```undefined```和```null```。

```undefined```代表的含义是未定义，```null```代表的含义是空对象。一般变量声明了但还没有定义的时候会返回```undefined```，```null```主要用于赋值给一写可能会返回对象的变量，作为初始化。

```undefined```在js中不是一个保留字，这意味着可以使用```undefined```来作为一个变量名，这样的做法是非常危险的，它会影响对```undefined```值得判断。但是可以通过一个方法获得安全的```undefined```值，比如说```void 0```。

当对两种类型使用```typeof```进行判断的时候，```null```类型化会返回```object```，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回```true```，使用三个等号时会返回```false```

## 5、instanceof操作符的实现原理及实现

```instanceof```运算符用于判断构造函数的```prototype```属性是否出现在对象的原型链中的任何尾椎。
```js
function myInstanceOf(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的prototype对象
  prototype = right.prototype;
  // 判断构造函数的prototype对象是否在对象的原型链上
  while(true) {
    if (!proto) return false;
    if (proto === prototype) return false;
    proto = Object.getPrototypeOf(proto);
  };
};
```