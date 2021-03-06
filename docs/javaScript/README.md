---
title: javascript
date: 2021-06-02
---
### js中的事件循环机制
#### 进程、线程
1. 进程是系统分配的独立资源，是 CPU 资源分配的基本单位，进程是由一个或者多个线程组成的。

2. 线程是进程的执行流，是CPU调度和分派的基本单位，同个进程之中的多个线程之间是共享该进程的资源的。

### 浏览器内核
浏览器是多进程的，浏览器每一个 tab 标签都代表一个独立的进程（也不一定，因为多个空白 tab 标签会合并成一个进程），浏览器内核（浏览器渲染进程）属于浏览器多进程中的一种。

浏览器内核有多种线程在工作。

#### GUI 渲染线程:

负责渲染页面，解析 HTML，CSS 构成 DOM 树等，当页面重绘或者由于某种操作引起回流都会调起该线程。
和 JS 引擎线程是互斥的，当 JS 引擎线程在工作的时候，GUI 渲染线程会被挂起，GUI 更新被放入在 JS 任务队列中，等待 JS 引擎线程空闲的时候继续执行。
#### JS 引擎线程:

单线程工作，负责解析运行 JavaScript 脚本。
和 GUI 渲染线程互斥，JS 运行耗时过长就会导致页面阻塞。
事件触发线程:

当事件符合触发条件被触发时，该线程会把对应的事件回调函数添加到任务队列的队尾，等待 JS 引擎处理。
#### 定时器触发线程:

浏览器定时计数器并不是由 JS 引擎计数的，阻塞会导致计时不准确。
开启定时器触发线程来计时并触发计时，计时完成后会被添加到任务队列中，等待 JS 引擎处理。
#### http 请求线程:

http 请求的时候会开启一条请求线程。
请求完成有结果了之后，将请求的回调函数添加到任务队列中，等待 JS 引擎处理。

![image.pnh](https://user-gold-cdn.xitu.io/2018/7/3/1645bc78ff44b314?w=287&h=577&f=png&s=23011)


### JavaScript 引擎是单线程
JavaScript 引擎是单线程，也就是说每次只能执行一项任务，其他任务都得按照顺序排队等待被执行，只有当前的任务执行完成之后才会往下执行下一个任务。
HTML5 中提出了 Web-Worker API，主要是为了解决页面阻塞问题，但是并没有改变 JavaScript 是单线程的本质

### JavaScript 事件循环机制

JavaScript 事件循环机制分为浏览器和 Node 事件循环机制，两者的实现技术不一样，浏览器 Event Loop 是 HTML 中定义的规范，Node Event Loop 是由 libuv 库实现。这里主要讲的是浏览器部分。

Javascript 有一个 main thread 主线程和 call-stack 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。

#### JS 调用栈

JS 调用栈是一种后进先出的数据结构。当函数被调用时，会被添加到栈中的顶部，执行完成之后就从栈顶部移出该函数，直到栈内被清空。

#### 同步任务、异步任务

JavaScript 单线程中的任务分为同步任务和异步任务。同步任务会在调用栈中按照顺序排队等待主线程执行，异步任务则会在异步有了结果后将注册的回调函数添加到任务队列(消息队列)中等待主线程空闲的时候，也就是栈内被清空的时候，被读取到栈中等待主线程执行。任务队列是先进先出的数据结构。

#### Event Loop

调用栈中的同步任务都执行完毕，栈内被清空了，就代表主线程空闲了，这个时候就会去任务队列中按照顺序读取一个任务放入到栈中执行。每次栈内被清空，都会去读取任务队列有没有任务，有就读取执行，一直循环读取-执行的操作，就形成了事件循环。


![img.png](https://user-gold-cdn.xitu.io/2018/7/3/1645bc78ffad47d7?w=636&h=518&f=png&s=27798)

![img_1.png](https://user-gold-cdn.xitu.io/2018/7/3/1645bc78ff90482b?w=1148&h=960&f=png&s=281358)


#### 定时器

定时器会开启一条定时器触发线程来触发计时，定时器会在等待了指定的时间后将事件放入到任务队列中等待读取到主线程执行。

定时器指定的延时毫秒数其实并不准确，因为定时器只是在到了指定的时间时将事件放入到任务队列中，必须要等到同步的任务和现有的任务队列中的事件全部执行完成之后，才会去读取定时器的事件到主线程执行，中间可能会存在耗时比较久的任务，那么就不可能保证在指定的时间执行。

#### 宏任务(macro-task)、微任务(micro-task)

除了广义的同步任务和异步任务，JavaScript 单线程中的任务可以细分为宏任务和微任务。

macro-task包括：script(整体代码), ```setTimeout, setInterval, setImmediate, I/O, UI rendering```。

micro-task包括：```process.nextTick, Promises, Object.observe, MutationObserver```。
```javascript

console.log(1);
setTimeout(function() {
console.log(2);
})
var promise = new Promise(function(resolve, reject) {
console.log(3);
resolve();
})
promise.then(function() {
console.log(4);
})
console.log(5);
```

示例中，```setTimeout``` 和 ```Promise```被称为任务源，来自不同的任务源注册的回调函数会被放入到不同的任务队列中。

有了宏任务和微任务的概念后，那 JS 的执行顺序是怎样的？是宏任务先还是微任务先？

第一次事件循环中，JavaScript 引擎会把整个 script 代码当成一个宏任务执行，执行完成之后，再检测本次循环中是否寻在微任务，存在的话就依次从微任务的任务队列中读取执行完所有的微任务，再读取宏任务的任务队列中的任务执行，再执行所有的微任务，如此循环。JS 的执行顺序就是每次事件循环中的宏任务-微任务。

上面的示例中，第一次事件循环，整段代码作为宏任务进入主线程执行。
遇到了 setTimeout ，就会等到过了指定的时间后将回调函数放入到宏任务的任务队列中。
遇到 Promise，将 then 函数放入到微任务的任务队列中。
整个事件循环完成之后，会去检测微任务的任务队列中是否存在任务，存在就执行。
第一次的循环结果打印为: 1,3,5,4。
接着再到宏任务的任务队列中按顺序取出一个宏任务到栈中让主线程执行，那么在这次循环中的宏任务就是 setTimeout 注册的回调函数，执行完这个回调函数，发现在这次循环中并不存在微任务，就准备进行下一次事件循环。
检测到宏任务队列中已经没有了要执行的任务，那么就结束事件循环。
最终的结果就是 1,3,5,4,2。
### js中微任务和宏任务的区别
1. 宏任务：当前调用栈中执行的代码成为宏任务。（主代码快，定时器等等）。

2. 微任务： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务,可以理解为回调事件。（promise.then，proness.nextTick等等）。 
3. 宏任务中的事件放在callback queue中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护。

#### 运行机制
1. 在执行栈中执行一个宏任务。

2. 执行过程中遇到微任务，将微任务添加到微任务队列中。

3. 当前宏任务执行完毕，立即执行微任务队列中的任务。

4. 当前微任务队列中的任务执行完毕，检查渲染，GUI线程接管渲染。

5. 渲染完毕后，js线程接管，开启下一次事件循环，执行下一次宏任务（事件队列中取）。

微任务：process.nextTick、MutationObserver、Promise.then catch finally

宏任务：I/O、setTimeout、setInterval、setImmediate、requestAnimationFrame
