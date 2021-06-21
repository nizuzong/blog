---
title: 使用lerna发布npm
date: 2021-05-12
tags: 随笔
categories: 
 - 随笔
---

# 前言

使用lerna搭建了一个脚手架，打算发布到npm上去，记录一下遇到的问题
## npm登录
登录过程
```javascript
npm login
username: xxx,
password: 你的登录密码
Email: 你的邮箱
```
这些输入之后一直处于一个登录状态，登录好长时间发现返回了一个
```Error: 500 Internal Server Error - PUT https://registry.npm.taobao.org/-/user/org.couchdb.user:linshen```

因为之前一直用的是淘宝的源，所以想着是不是因为源的问题导致的

这里使用的是```nrm```没装这个的话自己去装一下

```javascript
// 全局安装
npm install -g nrm
// 查看当前源
npm config get registry
// 切换淘宝源
nrm use taobao

// 切换npm源
nrm use npm
```
查看之后发现我之前直接设置的是淘宝源没有设置```npm```的源

```javascript
npm config set registry https://registry.npmjs.org/
```
这样```npm```源就设置好了
然后，我们再次执行```npm login```

返回
```javascript
Logged in as linshen on https://registry.npmjs.org/.
```
证明就执行成功了！

接下来就使用lerna发布npm

```js
lerna publish
```
提示我package.json中存在淘宝源

```javascript
"publishConfig": {
    "registry": "https://registry.npm.taobao.org/"
  },
```
导致报错

然后去lerna官网去查询发现只需要将
```javascript
"publishConfig": {
    "registry": "https://registry.npm.taobao.org/"
  },
  // 改成
  "publishConfig": {
    "access": "public"
  },
```
就可以了
执行```lerna publish```然后就发布成功了！
