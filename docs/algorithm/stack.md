# 栈
#### 简介

栈是什么？
1. 一个```后进先出```的数据结构

```javascript
const stack = [];
stack.push(1);
stack.push(2);
const item1 = stack.pop();

console.log(stack, item1)
// [1], 2
```
### 应用场景
1. 十进制转二进制、判断z字符串的括号是否有效、函数调用堆栈

### 例子
#### 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
### 思路
#### 符合```后进先出```考虑用```栈```
1. 新建一个栈
2. 扫描字符串，遇左括号入栈，遇到和栈顶括号类型匹配的有括号出栈，类型不符合之间判定为不合法

```javascript
const isValid = (s) => {
  if (s % 2 === 1) { return false; }
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (
        (t === '(' && c === ')') ||
        (t === '[' && c ===']') ||
        (t === '{' && c === '}')
      ) {
        stack.pop();
      } else {
        return false
      }
    }
  }
  return stack.length === 0;
}
```

### js中的函数调用堆栈
```javascript
const fn1 = () => {
  fn2();
};

const fn2 = () => {
  fn3();
};

const fn3 = () => {
  console.log('fn3');
};

fn1();
```
