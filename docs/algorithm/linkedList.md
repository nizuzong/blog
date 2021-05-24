# 链表
### 简介

链表是什么？
1. 多个元素组成的列表
2. 元素存储不连续，用next指针连在一起

## 数组VS链表
1. 数组：增删非首尾元素时往往需要移动元素
2. 链表：增删首尾元素，不需要移动元素，只需要更改next指向即可

## JS中的链表
1. js中没有链表
2. 可以用Object模拟链表

```javascript
const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };

a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let self = a;
while (self) {
  console.log(self.val);
  self = self.next;
}

// 插入
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除
c.next = d;
```
### leetCode 237 删除链表中的节点
```javascript
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```
### LeetCode 206 反转链表
#### 思路
1. 反转两个节点：将```n+1```的```next```指向```n```
2. 反转多个节点：双指针遍历链表
```javascript
var reverseList = function(head) {
    let l1 = head;
    let l2 = null;
    while(l1){
        const tmp = l1.next;
        l1.next = l2;
        l2 = l1;
        l1 = tmp;
    }
    return l2;
};
```
