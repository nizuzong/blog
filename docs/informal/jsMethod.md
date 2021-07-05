---
title: js常用方法
date: 2021-05-12
tags: 随笔
categories: 
 - 随笔
---

## 去除空格
```js
export const trim = (str) => {
  // return typeof str === 'string'
  //   ? str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  //   : str;
    return typeof str === 'string'
        ? str.replace(/\s/g, '')
        : str;
}
```

## 防抖函数
```js
export const debounceFunc = (func, wait, immediate) => {
  var timeout, result;
  var debounced = function () {
      var context = this;
      var args = arguments;
      if (timeout) clearTimeout(timeout);
      if (immediate) {
          // 如果已经执行过，不再执行
          var callNow = !timeout;
          timeout = setTimeout(function(){
              timeout = null;
          }, wait)
          if (callNow) result = func.apply(context, args)
      }
      else {
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
      return result;
  };
  debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
  };
  return debounced;
}
```
## 跳转函数

```js
/*
 * @param  {[Object]} history          [router的history参数]
 * @param  {[String]} url              [跳转的路由]
 * @param  {Object} [params={}]      [需要带入的额外参数]
 * @param  {String} [type='default'] [跳转时是否需要关闭当前页面 default:不需要 replace:需要]
 */
export const jumpToPage = ({history,url,params={},type='default'}) => {
  if(type === 'default'){
    history.push(url,params)
  }else{
    history.replace(url,params)
  }
}
```

## 字符串首字母变大写
```js
/*
 * @param  {[String]} str [需变更的字符串]
 * @return {[String]}     [变更后的字符串]
 */
export const string2String = (str) => {
  const len = str.length
  const newString = str.substr(0,1).toUpperCase()+str.substr(1,len)
  return newString
}
```

## 日期格式化
```js
/**
 * 日期格式化
 * * @param {date} date 需转换的时间
 * * @param {string: all date time} type 转换后的格式
 */
export const dataFormat = (date, type = 'all') => {
  let string = ''
  switch (type) {
    case 'all':
      string = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
        date.getDate()
      )} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(
        date.getSeconds()
      )}`
      break
    case 'date':
      string = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
        date.getDate()
      )}`
      break
    case 'time':
      string = `${addZero(date.getHours())}:${addZero(
        date.getMinutes()
      )}:${addZero(date.getSeconds())}`
      break
    default:
      break
  }
  return string
}
```

## 填0函数
```js
export const addZero = str => {
  const newStr = str + ''
  if (newStr.length > 1) {
    return newStr
  } else {
    return '0' + newStr
  }
}
```

## 设置cookie
```js
/**
 * [setCookie 设置cookie]
 * @param {[string]} name  [cookie名]
 * @param {[string]} value [cookie值]
 * @param {[number]} day   [缓存时间]
 */
export const setCookie = (name, value, day) => {
  if (day !== 0) {
    //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = day * 24 * 60 * 60 * 1000
    var date = new Date(+new Date() + expires)
    document.cookie =
      name + '=' + escape(value) + ';expires=' + date.toUTCString()
  } else {
    document.cookie = name + '=' + escape(value)
  }
}
```

## uncode解码
```js
/**
 * [uncode 解码]
 * @param  {[string]} str [需解码的字段]
 * @return {[type]}        [description]
 */
export const uncode = (str = '', type = 'default') => {
  str = str || ''
  if (type === 'default') {
    return str
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
  } else {
    let newStr = str
      .replace(/&lt;script&gt;/g, '&script&')
      .replace(/&lt;\/script&gt;/g, '&/script&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
    return newStr
      .replace(/&script&/g, '&lt;script&gt;')
      .replace(/&\/script&/, '&lt;/script&gt;')
  }
}
```

## 加密&&解密
```js
  /*
  * @param {*需要加密的字符串 注：对象转化为json字符串再加密} word
  * @param {*aes加密需要的key值，这个key值后端同学会告诉你} keyStr
  */
 // 加密
export const encrypt = (word, keyStr) => {
  var key = CryptoJS.enc.Utf8.parse(keyStr)
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }) // 加密模式为ECB，补码方式为PKCS5Padding（也就是PKCS7）

  return encrypted.toString()
};
// 解密
export const decrypt = (word, keyStr) => {
  var key = CryptoJS.enc.Utf8.parse(keyStr)
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
};
```

## 获取search中的数据
```js
/* [searchToParams 获取search中的数据]
 * @return { [JSON]}[键值对数据]
 */
export const searchToParams = type => {
  const data = {}
  const { search } = window.location
  let realSearch = search.substring(1, search.length)
  if (type === 'login') {
    realSearch = realSearch.replace(/\|\|/g, '&')
  }
  realSearch.split('&').map(res => {
    const resArray = res.split('=')
    let urlParams = ''
    resArray.map((dt, inx) => {
      if (inx > 0) {
        if (urlParams) {
          urlParams += `=${dt}`
        } else {
          urlParams += `${dt}`
        }
      }
      return dt
    })
    data[resArray[0]] = urlParams ? decodeURI(urlParams) : ''
    return res
  })
  return data
}
```

## 检测浏览器window.search是否有指定字段
```js
/**
 * 检测浏览器window.search是否有指定字段
 * @param {String} name 判断名字
 */
export const getQueryStringByName = (name) => {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return (r[2])
    };
    return null;
};
```

## 延迟函数delay
```js
const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

const getData = status => new Promise((resolve, reject) => {
    status ? resolve('done') : reject('fail')
})
const getRes = async (data) => {
    try {
        const res = await getData(data)
        const timestamp = new Date().getTime()
        await delay(1000)
        console.log(res, new Date().getTime() - timestamp)
    } catch (error) {
        console.log(error)
    }
}
getRes(true) // 隔了1秒
```

## 分割指定长度的元素数组
```js
const listChunk = (list, size = 1, cacheList = []) => {
    const tmp = [...list]
    if (size <= 0) {
        return cacheList
    }
    while (tmp.length) {
        cacheList.push(tmp.splice(0, size))
    }
    return cacheList
}

console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)) // []
console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)) // []
```

## 获取数组交集
```js
const intersection = (list, ...args) => list.filter(item => args.every(list => list.includes(item)))

console.log(intersection([2, 1], [2, 3])) // [2]
console.log(intersection([1, 2], [3, 4])) // []
```

## 函数柯里化
```js
const curring = fn => {
    const { length } = fn
    const curried = (...args) => {
        return (args.length >= length
              ? fn(...args)
              : (...args2) => curried(...args.concat(args2)))
    }
    return curried
}

const listMerge = (a, b, c) => [a, b, c]
const curried = curring(listMerge)
console.log(curried(1)(2)(3)) // [1, 2, 3]
console.log(curried(1, 2)(3)) // [1, 2, 3]
console.log(curried(1, 2, 3)) // [1, 2, 3]
```

## 字符串前面空格去除与替换
```js
const trimStart = str => str.replace(new RegExp('^([\\s]*)(.*)$'), '$2')
console.log(trimStart(' abc ')) // abc
console.log(trimStart('123 ')) // 123
```

## 字符串后面空格去除与替换
```js
const trimEnd = str => str.replace(new RegExp('^(.*?)([\\s]*)$'), '$1')
console.log(trimEnd(' abc ')) //   abc  
console.log(trimEnd('123 ')) // 123  
```

## 获取当前子元素是其父元素下子元素的排位
```js
const getIndex = el => {
    if (!el) {
        return -1
    }
    let index = 0
    do {
        index++
    } while (el = el.previousElementSibling);
    return index
}
```

## 获取当前元素相对于document的偏移量
```js
const getOffset = el => {
    const {
        top,
        left
    } = el.getBoundingClientRect()
    const {
        scrollTop,
        scrollLeft
    } = document.body
    return {
        top: top + scrollTop,
        left: left + scrollLeft
    }
}
```

## 获取元素类型
```js
const dataType = obj => Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
```

## 判断是否是移动端
```js
const isMobile = () => 'ontouchstart' in window;
```

## fade动画
```js
const fade = (el, type = 'in') {
    el.style.opacity = (type === 'in' ? 0 : 1)
    let last = +new Date()
    const tick = () => {
        const opacityValue = (type === 'in' 
                            ? (new Date() - last) / 400
                            : -(new Date() - last) / 400)
        el.style.opacity = +el.style.opacity + opacityValue
    	last = +new Date()
        if (type === 'in'
          ? (+el.style.opacity < 1)
          : (+el.style.opacity > 0)) {
            requestAnimationFrame(tick)
        }
    }
    tick()
}
```

## 将指定格式的字符串解析为日期字符串
```js
const dataPattern = (str, format = '-') => {
    if (!str) {
        return new Date()
    }
    const dateReg = new RegExp(`^(\\d{2})${format}(\\d{2})${format}(\\d{4})$`)
    const [, month, day, year] = dateReg.exec(str)
    return new Date(`${month}, ${day} ${year}`)
} 

console.log(dataPattern('12-25-1995')) // Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)
```

## 禁止网页复制粘贴
```js
const html = document.querySelector('html')
html.oncopy = () => false
html.onpaste = () => false
```

## input框限制只能输入中文
```js
const input = document.querySelector('input[type="text"]')
const clearText = target => {
    const {
        value
    } = target
    target.value = value.replace(/[^\u4e00-\u9fa5]/g, '')
}
input.onfocus = ({target}) => {
    clearText(target)
}
input.onkeyup = ({target}) => {
    clearText(target)
}
input.onblur = ({target}) => {
    clearText(target)
}
input.oninput = ({target}) => {
    clearText(target)
}
```

## 去除字符串中的html代码
```js
const removeHTML = (str = '') => str.replace(/<[\/\!]*[^<>]*>/ig, '')
console.log(removeHTML('<h1>哈哈哈哈<呵呵呵</h1>')) // 哈哈哈哈<呵呵呵
```

## mac安装brew
```js
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```