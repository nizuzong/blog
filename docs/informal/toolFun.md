---
title: 工具函数
date: 2021-05-12
tags: 工具
categories: 
 - 工具
---

# localStorage的已使用空间
在较新的chrome上测试，localStorage的存储是按照字符个数来算的。 包含键和值的。
所以在测试代码中，你把```a```修改```啊```，不会影响存储的数量。 但是键的长度，会影响存储的数量。
```js
function getLSUsedSpace() {
    return Object.keys(localStorage).reduce((total, curKey) => {
        if (!localStorage.hasOwnProperty(curKey)) {
            return total;
        }
        total += localStorage[curKey].length + curKey.length;
        return total;
    }, 0)
}
```
__示例__
```js
localStorage.clear();
localStorage.a = "啊";
console.log(getLSUsedSpace()); // 2
```
# 带图带事件的桌面通知
```js
function doNotify(title, options = {}, events = {}) {
    const notification = new Notification(title, options);
    for (let event in events) {
        notification[event] = events[event];
    }
}

function notify(title, options = {}, events = {}) {
    if (!("Notification" in window)) {
        return console.error("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
        doNotify(title, options, events);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {           
            if (permission === "granted") {
                doNotify(title, options, events);
            }
        });
    }
}
```
__示例__
```js
     notify("中奖提示", {
            icon: "https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/f1a9f122e925aeef5e4534ff7f706729~300x300.image",
            body: "恭喜你，掘金签到一等奖",
            tag: "prize"
        }, {
            onclick(ev) {
                console.log(ev);
                ev.target.close();
                window.focus();
            }
        })
```
# 原生30行代码实现视频截图
基本原理就是把视频画到Canvas里面，然后调用toDataURL或者toBlob，再利用a标签模拟点击，download属性指定名字。
```js
     function captureVideo(videoEl) {
            let canvasEl;
            let dataUrl;
            try {
                const cps = window.getComputedStyle(videoEl);
                const width = +cps.getPropertyValue("width").replace("px", "");
                const height = +cps.getPropertyValue("height").replace("px", "");

                canvasEl = document.createElement("canvas");
                canvasEl.style.cssText = `position:fixed;left:-9999px`;
                canvasEl.height = height;
                canvasEl.width = width;

                document.body.appendChild(canvasEl);
                
                const ctx = canvasEl.getContext("2d");
                ctx.drawImage(videoEl, 0, 0, width, height);
                // const image = canvas.toDataURL("image/png");
                dataUrl = canvasEl.toDataURL();

                document.body.removeChild(canvasEl);
                canvasEl = null;
                return dataUrl;
            } finally {
                if (canvasEl) {
                    document.body.removeChild(canvasEl);
                }
                if (dataUrl) {
                    return dataUrl;
                }
            }
        }

```
__示例__
注意添加```crossorigin="anonymous"```，不然转为图片会失败。
```js

  <video id="videoEL" controls autoplay crossorigin="anonymous"
        src="https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4" width="500"></video>

function download(url) {
    const aEl = document.createElement("a");
    aEl.href = url;
    aEl.download = "视频.png";
    aEl.click();
}


function doCaptureVideo() {
    const url = captureVideo(videoEL);
    download(url);
}

doCaptureVideo()
```
# 基于UR```LSearchParams```或```URL```获取queryString的值
常用的方式是使用正则或者```split```方法，其实不然，```URLSearchParams```和```URL```都能很好的实现功能。
```js
const urlSP = new URLSearchParams(location.search);
function getQueryString(key){
    return urlSP.get(key)
}

const urlObj = new URL(location.href);
function getQueryString(key){
    return urlObj.searchParams.get(key)
}
```
__示例__
```js
测试地址： /index.html?pid=10

const log = console.log;
getQueryString

log("pid", getQueryString("pid"));  // pid 10
log("cid", getQueryString("cid"));  // cid null

```
# 基于```atob```和```btoa```的base64编码和解码
浏览器内置了base64编码和解码的能力，第三方库，不需要的。
```js
function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}
```
__示例__
```js
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
```
# 非正则替换的html代码encode和decode
常规的方式是使用正则替换，这里是另外一种思路。
```js
function htmlencode(s){
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(s));
    var result = div.innerHTML;
    div = null;
    return result;
}
function htmldecode(s){
    var div = document.createElement('div');
    div.innerHTML = s;
    var result = div.innerText || div.textContent;
    div = null;
    return result;
}
```
__示例__
```js
htmlencode("<div>3>5 & 666</div>"); // &lt;div&gt;3&gt;5 &amp; 666&lt;/div&gt;
htmldecode("&lt;div&gt;3&gt;5 &amp; 666&lt;/div&gt;") // <div>3>5 & 666</div>
```

# 相对地址转换为绝对地址
```js
function realativeToAbs(href) {
    let aEl = document.createElement("a");
    aEl.href = href;    

    const result = aEl.href;
    aEl = null;
    return result;
}
```
__示例__
```js
console.log("realativeToAbs", realativeToAbs("../a/b/b/index.html"));
// realativeToAbs http://127.0.0.1:5500/a/b/b/index.html
```
# 基于```URL```或者```Crypto.getRandomValues```生成UUID
URL.createObjectURL 产生的地址为 ```blob:https://developer.mozilla.org/cb48b940-c625-400a-a393-176c3635020b```, 其后部分就是一个UUID
1. 方法一
```js
function genUUID() {
    const url = URL.createObjectURL(new Blob([]));
    // const uuid = url.split("/").pop();
    const uuid = url.substring(url.lastIndexOf('/')+ 1);
    URL.revokeObjectURL(url);
    return uuid;
}

genUUID() // cd205467-0120-47b0-9444-894736d873c7

```
2. 方法二
```js
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
}

uuidv4() // 38aa1602-ba78-4368-9235-d8703cdb6037
```

# 基于```Array.from```的序列生成器
造有序数据，无序数据，等等。
```js
const range = (start, stop, step) => Array.from(
    { length: (stop - start) / step + 1}, 
    (_, i) => start + (i * step)
);
```
__示例__
```js
range(0, 4, 1); // [0, 1, 2, 3, 4]
range(0, 9, 3); // [0, 3, 6, 9]
range(0, 8, 2.5) // [0, 2.5, 5, 7.5]
```
# 基于```sendBeacon```的安全的数据上报
```js
function report(url, data) {
    if (typeof navigator.sendBeacon !== "function") {
        return console.error("sendBeacon不被支持");
    }
    navigator.sendBeacon(url, data);
}
```
__示例__
```js
window.addEventListener('unload', logData, false);
function logData() {
   report("/log", "被卸载了");
}
```
# 基于```toLocaleString```千分位
正则？ 遍历？ 不需要的。内置函数就解决。
当然，如果是超大的数，可能是会有问题的。
```js
function formatMoney(num){
    return (+num).toLocaleString("en-US");
}
```
__示例__
```js
console.log(formatMoney(123456789));  // 123,456,789
console.log(formatMoney(6781)) // 6,781
console.log(formatMoney(5)) // 5

// 超大的数
formatMoney(19999999933333333333333) // 19,999,999,933,333,333,000,000
```
# Promise顺序执行
让Promise顺序的执行，并支持初始化参数和结果作为参数传递。
```js
function runPromises(promiseCreators, initData) {
    return promiseCreators
        .reduce((promise, next) => promise
                .then((data) => next(data))
            , Promise.resolve(initData));
}
```
__示例__
```js
var promise1 = function (data = 0) {
    return new Promise(resolve => {
        resolve(data + 1000);
    });
}
var promise2 = function (data) {
    return new Promise(resolve => {
        resolve(data -500);
    });
}

runPromises([promise1, promise2], 1).then(res=>console.log(res));
```
# 延时执行delay
延时执行某函数，且只会执行一次。
```js
function delay(fn = () => { }, delay = 5000, context = null) {
    let ticket = null;
    let runned = false;
    return {
        run(...args) {
            return new Promise((resolve, reject) => {
                if (runned === true) {
                    return;
                }
                runned = true;
                ticket = setTimeout(async () => {
                    try {
                        const res = await fn.apply(context, args);
                        resolve(res);
                    } catch (err) {
                        reject(err)
                    }
                }, delay)
            })
        },
        cancel: () => {
            clearTimeout(ticket);
        }
    }
}
```
__示例__
```js
delay(function () {
    console.log("你们好");
}).run();

const { run, cancel } = delay(function (name) {
    console.log("你好：", name);
});

run("吉他");
run("吉他");

// 你们好
// 你好： 吉他
```

# 进度值映射
进度映射，比较只有 10%的进度，确要显示50%的进度的场景。
```ts
function adjustProgress(progress: number, mapping: { real: number; target: number }[] = []) {
    if (progress < 0) {
        return 0;
    }
    if (!mapping || mapping.length <= 0) {
        return progress;
    }
    // 第一个
    const f = mapping[0];
    if (progress <= f.real) {
        return progress * (f.target / f.real);
    }
    // 最后一个
    const l = mapping[mapping.length - 1];
    if (progress >= l.target) {
        return l.target;
    }
    const curIndex = mapping.findIndex(m => m.real >= progress);
    if (!curIndex) {
        return progress;
    }
    const cur = mapping[curIndex];
    const pre = mapping[curIndex - 1];
    //     原基数     +   实际进度/最大实际进度 * 期望间距
    return pre.target + (progress - pre.real) / (cur.real - pre.real) * (cur.target - pre.target);
}
```
__示例__
```js
const mapping = [{
    real: 0,
    target: 0,
}, {
    real: 30,
    target: 50
}, {
    real: 60,
    target: 80
}, {
    real: 100,
    target: 100
}];


console.log("15", adjustProgress(15, mapping));  // 15 25
console.log("25", adjustProgress(25, mapping)); // 25 41.66666666666667
console.log("50", adjustProgress(50, mapping)); // 50 70
console.log("60", adjustProgress(60, mapping)); // 60 80
console.log("100", adjustProgress(100, mapping)); // 100 100
```

# 滑滚动页面到顶部
PC端滚动的根元素是```document.documentElement```,
移动端滚动的的根元素是```document.body```,
有一个更好的属性```document.scrollingElement```能自己识别文档的滚动元素， 其在PC端等于document.documentElement, 其在移动端等于```document.body```
```js
// smooth 选项在Safari上支持不好
function scrollToTop(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

function scrollToTop() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
    }
};

```
# 禁止选择和复制
```js
['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
    document.addEventListener(ev, function(ev){
        ev.preventDefault();
        ev.returnValue = false;
    })
});
```
__CSS__
```css
body {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
```

# 禁止图片拖拽
```js
['dragstart'].forEach(function(ev){
    document.addEventListener(ev, function(ev){
        ev.preventDefault();
        ev.returnValue = false;
    })
});
```

# 自增长ID
自己生产自增长的ID值，当然可以更复杂一些。
```js
let id = 0;
function getId() {
    return id++;
}
```
__示例__
```js
console.log(getId()); // 1
console.log(getId()); // 2
```
