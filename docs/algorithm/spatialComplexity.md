# 空间复杂度
简述：

1、一个函数，用大O表示，比如O(1)、O(N)、O(n^2)......

2、算法唉运行过程中临时占用存储空间大小的量度

### O(1)

```javascript
let i = 0;
i + 1;
```

### O(n)

```javascript
let list = [];

for (let i = 0; i < n; i += 1) {
  list.push(i);
};
```

### O(n^2)

```javascript
// 矩阵
const matrix = [];

for (let i = 0; i< n; i += 1) {
  matrix.push([]);
  for (let j = 0; j < n; j += 1) {
    matrix[i].push(j);
  };
};
```
