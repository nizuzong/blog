---
title: TypeScript
date: 2017-09-21
tags:
 - TypeScript
categories: 
 - TypeScript
---

## Typescript 介绍 、Typescript 安装、 Typescript 开发工具
__Typescript 介绍__
1. TypeScript 是由```微软```开发的一款开源的编程语言。 
2. TypeScript 是 ```Javascript``` 的超集，遵循最新的 ```ES6、Es5``` 规范。TypeScript 扩展了 ```JavaScript``` 的语法。 
3. TypeScript 更像后端 ```java、C#```这样的面向对象语言，可以让 js 开发大型企业项目。
4. 谷歌也在大力支持 ```Typescript``` 的推广，谷歌的 ```angular2.x+```就是基于 ```Typescript``` 语法。 
5. 最新的 ```Vue 、React``` 也可以集成 TypeScript。 
6. Nodejs 框架 ```Nestjs、midway``` 中用的就是 TypeScript 语法。

## Typescript 安装 编译
__注意：__ ```在使用 npm 命令之前电脑必须得安装 nodejs```

安装:

```ts
npm install -g typescript
// 或者
cnpm install -g typescript 
// 或者
yarn global add typescript
```

运行：

新建一个helloword.ts文件
```ts
tsc helloworld.ts
```

### Typescript 开发工具 Vscode 自动编译.ts 文件
1. 创建 tsconfig.json 文件 tsc --init 生成配置文件
2. 老版本 vscode 点击: 任务->运行任务-> tsc:监视-tsconfig.json 然后就可以自动生 成代码了
3. 最新版本 vscode 点击: 终端->运行任务->typescript->tsc:监视-tsconfig.json 然后就 可以自动生成代码了

## TypeScript数据类型
+ 布尔类型 boolean
+ 数字类型 number
+ 字符串类型 string
+ 数组类型 array
+ 元祖类型 tuple
+ 枚举类型 enum
+ 任意类型 any
+ null和undefined
+ void 类型
+ never类型

```ts
 // 布尔类型 boolean  true false
 let falg: boolean =  true;
 flag = false;

// 数组类型 number
let num: number = 123;
let num1: number = 1.23;
console.log(num, num1) // 123, 1.23
let nums: number = '123';
console.log(nums); //提示类型错误
 
// 字符串写法 string
let str = "hello word";
console.log(str); // hello word

// 数组写法 array  两种写法
// 第一种
let arr: number[] = [123,1,2,3];
let arr1: string[] = ['a', 'b', 'c'];
console.log(arr, arr1); //123,1,2,3 a,b,c

// 第二种
let arr:Array<number> = [1,2,3,4,5];
let arr1:Array<string> = ['a', 'b', 'c'];
console.log(arr, arr1); //123,1,2,3 a,b,c

// 元祖 属于数组的一种
let arr:[boolean, number, string] = [true, 1, 'a'];
console.log(true, 1, a);

// 枚举类型 enum
enum Flag {success = 1, error = -1};
let types: Flag = Flag.success;
console.log(types) // 1

enum color {orange, yellow, blue}; //未赋值的话打印出的值是索引值
let colour:color = color.yellow;
console.log(colour); // 1

enum color {orange, yellow = 5, blue};
let colour1:color = color.orange;
let colour2:color = color.yellow;
let colour3:color = color.blue;
console.log(colour1,colour2,colour3); // 0, 5, 6

// 任意类型 any
let arbitrarily1: any = 123;
let arbitrarily2: boolean = true;
let arbitrarily3: string = '123';
let arbitrarily4: number = 123;
let arbitrarily5: number[] = [1,2,3,4,5];
let Box: any = document.getElementById('box');
box.style.color = 'red';

// null 和undefined 其他数据类型的子类型

let num: undefined;
console.log(num); // undefined
let num1: number | undefined;
num1 = 123;
console.log(num1); // 123
num1;
console.log(num1); // undefined

let nu: null;
nu = null;
console.log(nu); // null

// void类型  表示没有任何类型， 一般定义方法的时候方法没有返回值
function run(): void {}; run(); // 表示该方法没有返回值

// 有返回值
function run(): number {
	return 123
}; 
run();

// never类型 包括null和undefined的子类型，代表从不会出现的值， 也就是说never的变量值能被never类型所赋值
let a: undefined;
a = 123; // 错误
a = undefined; //正确

let b: null;
b = 123; // 错误
b = null; // 正确

let fn: never;
fn=(() => {
	throw new Error('错误');
})();

```
## TypeScript函数
```ts
// 函数声明法
function run(): string {
	return '123';
};

// 匿名函数
const fn = function(): numer{
	return 123;
};

// 定义方法传参
function getInfo(name: string, age: number): string {
	return `${name}--${age}`
};
alert(getInfo('张三', 22));

// 方法的可选参数
// 注意：可选参数必须配置到参数的最后面
function getInfo(name: string, age?: number): string {
	return `${name}--${age}`
};
alert(getInfo('张三'));

// 设置默认参数
function getInfo(name: string, age: number = 22): string {
	return `${name}--${age}`
};
alert(getInfo('张三')); // 张三,22
alert(getInfo('张三',33)); // 张三,33

// 剩余参数
function sum(a:number,b:number,...arr:number[]): number {
  let sum = a + b;
  
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}
sum(1,2,3,4); // 10

// 函数重载 通过为同一个函数提供多个函数类型定义来试下多种功能的目的

function getInfo(name:string):string;
function getInfo(age:number):number;
function getInfo(str:any):any{
  if(typeof str === "string") {
    	return str;
     } else {
       return str;
     }
}
getInfo('张三'); // 张三
getInfo(12); // 12
```

## TypeScript中的类
```ts
// 定义类
class Person {
	name: sring; // 属性前面省略了public关键词
  constructor(n: string){ // 构造函数
    this.name = n;
  }
  run():void{
  	console.log(thhis.name);
  }
}
let fn = new Person('法外狂徒张三');
fn.run();


class Person {
	name: sring; // 属性前面省略了public关键词
  constructor(name: string){ // 构造函数
    this.name = n;
  }
  getName():string{
  	return this.name;
  }
  setName():void {
  	this.name = name;
  }
}
let fn = new Person('法外狂徒张三');
fn.run(); // 法外狂徒张三
fn.setName('李四'); // 李四

// 实现继承
class Person {
  constructor(name: string){ // 构造函数
    this.name = name;
  }
  run():string{
  	return `狂徒变${this.name}了`
  }
}
let fn = new Person('王五');
fn.run();  // 狂徒变王五了

class Web extends Person {
  constructor(name: string){
  	super(name);
  }
}
let func = new Web('赵六');
func.run(); // 狂徒变赵六了

// 类的修饰符 

/*
* public  公有  在类里面、子类、类外面都可以访问
* protected  保护类型 在类里面、子类里面可以访问 在类外部都无法访问
* private 私有 在类里面可以访问、 子类、类外部都无法访问
* 属性不假修饰符 默认为公有 public
*/
class Person {
  public name:string; // 公有属性
  protected name: string; // 保护类型
  private name: string; // 保护类型
  constructor(name: string){ // 构造函数
    this.name = name;
  }
  run():string{
  	return `狂徒变${this.name}了`
  }
}
let fn = new Person('呵呵');
alert(fn.name); //呵呵
alert(fn.name); //类外部无法访问
alert(fn.name); // 类外部无法访问

```