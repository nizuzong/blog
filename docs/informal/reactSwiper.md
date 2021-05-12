---
title: react-swiper
date: 2021-05-12
---
## 移动端滑动轮播

```jsx
import React, { useState, useEffect } from 'react';
import './index.css';
const data = [1,2,3,4,5,65,76,7,8,98,7,6,5,5,4,4,3]
const Demo = (props) => {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className="box">
     <ul>
       {
         data.map(res => {
           return <li>{res}</li>
         })
       }
     </ul>
    </div>
  )
}

export default Demo
```
```less
.box{
  width: 100%;
  overflow: hidden;
  background: red;
}

ul{
  width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
}
ul::-webkit-scrollbar {
  display: none;
}
 ul li{
  display: inline-block;
  width: 33%;
  background: yellow;
 }
```