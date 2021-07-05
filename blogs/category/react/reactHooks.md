---
title: react-hooks
date: 2021-07-05
tags:
 - react
categories: 
 - react
---

## useOnce
__类似于componentDidMount__
```jsx
import * as React from 'react';

export const useOnce = (fn: () => any) => {
    const ref = React.useRef(fn);
    React.useEffect(() => {
        let effect: any = null;

        if (typeof ref.current === 'function') {
            effect = ref.current();
        }

        return () => {
            if (typeof effect === 'function') {
                effect();
            }
        };
    }, [ref]);
};
```
__使用方法__

```jsx
import { useOnce } from 'useOnce';

useOnce(() => {
  console.log('hello useOnce');
});

```


## EventBus
__事件的发布订阅__

```ts
class EventBus {
  callbacks: { [x: string]: Function[] };

  constructor() {
      this.callbacks = {};
  }

  on(event: string, cb: Function) {
      if (!this.callbacks[event]) this.callbacks[event] = [];
      this.callbacks[event].push(cb);
  }

  emit<T extends any = undefined>(event: string, data?: T) {
      const cbs = this.callbacks[event];

      if (cbs) {
          cbs.forEach(cb => cb(data));
      }
  }

  remove(event: string) {
      this.callbacks[event] = [];
  }
}

export default new EventBus();
```

__使用方法__
```jsx
import eventBus from 'eventBus';

// 发布
eventBus.emit('发布');

// 监听
eventBus.on('发布', () => {
  console.log('监听');
});