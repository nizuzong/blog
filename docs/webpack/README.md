---
title: webpack
date: 2021-05-31
---
## webpack
#### 简介

webpack是一个打包模块的```javaScript```的工具，它会从入口模块出发，识别出源码中的模块化导出语句，递归地找出入口文件的所有依赖，将入口和其他
所有的依赖打包到一个单独的w文件中，是工程化、自动化思想在前端开发中的体现。

### 安装webpack
#### 全局安装（不推荐）
```javascript
// 安装webpack v4+版本时,需要额外安装webpack-cli

npm install webpack webpack-cli -g

// 检查版本
webpack -v

// 卸载
npm uninstall webpack webpack-cli -g
```
为什么不推荐全局安装webpack?

全局安装```webpack```，这会将你项目中的```webpack```锁定到指定版本，造成不同的项目红因为```webpack```
依赖不同版本而d导致冲突，构建失败。

#### 推荐安装
```javascript
// 安装最稳定的版本
npm  install -D webpack

// 安装指定版本
npm install -D webpack@<version>

// 安装最新体验版  可能包含bug 不要用于生产环境
npm install -D webpack@beta

// 安装webpack v4+版本时，需要额外安装webpack-cli
npm install -D webpack-cli
```
#### 检查安装
```javascript
webpack -v // command not found 默认在全局环境中查找

npx webpack -v  // npx帮助我们在项目中的node_modules中查找webpack
./node_modules/webpack/.bin/webpack -v // 到当前的node_modules模块里指定webpack
```
#### 启动webpack执行构建
##### webpack默认配置
1. webpack默认支持```js```模块和```JSON```模块
2. 支持```CommonJs Es module AMD ```等模块类型
3. webpack4支持零配置使用，但是很弱，稍微复杂些的场景都需要额外的扩展

##### 准备执行构建
1. 新建```src```文件
2. 新建```src/index.js、src/index.json、src/other.js```
```javascript
// index.js
const json = require('./index.json'); // common.js
import { add } from './other.js'; // es module
console.log(json, add(2, 3));

// index.json
{
  "name": "json"
}

// other.js
export function add(n1, n2) {
  return n1 + n2
}
```
