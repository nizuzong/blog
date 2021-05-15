# 时间复杂度

### O(1)

```javascript
// 只执行一次
let i = 0;
i + 1;
```

### O(n)

```javascript
// for循环中的代码执行了n次
for (let i = 0; i < n; i += 1) {
  console.log(i);
}
```

### O(n) * O(n) = O(n^2)
```javascript
// n*n = n^2
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    console.log(i, j);
  }
}
```
### O(logN)
```javascript
let i = 1;
while (i < n) {
  console.log(i);
  i *= 2;
}
```
