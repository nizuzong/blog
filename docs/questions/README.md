---
title: 面试题
date: 2021-06-05
---
# react篇

## 组件基础
### 1、react事件绑定原理
```typescript jsx
<div onClick={this.handleClick}></div>
```
react 并不是将```click```事件绑定到了```div```真实的```DOM```上，而是在```document```处监听了所有的事件，当事件发生并且冒泡到```document```处的时候，
react 将事件内容封装并交由真正的处理函数执行。这样的方式不仅仅减少了内存的消耗，还能在组件挂载销毁时统一订阅和移除事件。


还有， 冒泡到```document```上的事件也不是原生的浏览器事件，而是由react自己合成的事件，所以不想要事件冒泡的话应该调用```event.preventDefault()```方法，而
不是调用```event.stopProppagation()```方法

### 2、React的事件和普通的HTML事件有什么不同？

#### 区别：
1. 对于事件名称的命名方式，原生事件为全小写，而react 事件采用小驼峰
2. 对于事件函数处理语法，原生事件为字符串，react 事件为函数
3. react 事件不能采取```return false```的方法来阻止浏览器的默认行为，而必须要地明确地调用```preventDefault()```来阻止默认行为

### 合成事件是 react 模拟原生 DOM 事件所有能力的一个事件对象 优点
1. 兼容所有的浏览器，更好的跨平台
2. 将事件统一存放在一个数组，避免频繁的新增和删除（垃圾回收）
3. 方便react统一管理和事件机制

### 3、 React 组件中怎么做事件代理？它的原理是什么？
react基于```Virtual DOM```实现一个```事件合成层```，定义的事件处理器会接收到一个合成事件对象的实例。它符合W3CW标准，且与原生浏览器事件有相同的接口。
支持冒泡事件，所有的事件都自动绑定在最外层。

#### 在React底层，主要对合成事件做了：事件委派和自动绑定。
+ __事件委派：__ react会把所有事件绑定到结构的最外层，使用统一的事件监听器，这个事件监听器上w维持了一个映射来保存s所有组件内部事件监听和处理函数
+ __自动绑定：__ react组件中，每个方法的上下文都对指向该组件的实例，即自动绑定 __this__ 为当前组件

### 4、React 高阶组件、Render props、hooks 有什么区别，为什么要不断迭代
__这三个是目前react解决代码复用的主要方式。__
+ 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。具体而言，高阶组件是参数为组件，返回值为新组件的函数。
+ render props是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术，更具体的说，render prop 是一个用于告知组件需要渲染什么内容的函数 prop。
+ 通常，render props 和高阶组件只渲染一个子节点。让 Hook 来服务这个使用场景更加简单。这两种模式仍有用武之地，（例如，一个虚拟滚动条组件或许会有一个 ```renderltem``` 属性，或是一个可见的容器组件或许会有它自己的 DOM 结构）。但在大部分场景下，```Hook``` 足够了，并且能够帮助减少嵌套。 
  
__HOC 官方解释∶__

    高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。
    HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。
__简单的来说，HOC是一种组件的设计模式，HOC接受一个组件和额外的参数（如果需要），返回一个新的组件。HOC 是纯函数，没有副作用。__
```jsx
// hoc的定义
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props)
      };
    }
    // 一些通用的逻辑处理
    render() {
      // ... 并使用新数据渲染被包装的组件!
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };

// 使用
const BlogPostWithSubscription = withSubscription(BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id));

```
#### hoc的优缺点∶
+ 优点∶ 逻辑服用、不影响被包裹组件的内部逻辑
+ 缺点：hoc传递给被包裹组件的props容易和被包裹后的组件重名，进而被覆盖

#### Render props 官方解释∶
    ”render prop”是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
具有```render prop``` 的组件接受一个返回 __react__ 元素的函数，将render的渲染逻辑注入到组件内部，在这里 __render__ 的命名
可以使其他有效的标识符
```typescript jsx
// DataProvider组件内部的渲染逻辑如下
class DataProvider extends React.Components {
     state = {
    name: 'Tom'
  }

    render() {
    return (
        <div>
          <p>共享数据组件自己内部的渲染逻辑</p>
          { this.props.render(this.state) }
      </div>
    );
  }
}

// 调用方式
<DataProvider render={data => (
  <h1>Hello {data.name}</h1>
)}/>
```
#### 由此可以看到，render props的优缺点也很明显∶
+ 优点：数据共享、代码复用，将组件内的state作为props传递给调用者，将渲染逻辑交给调用者。
+ 缺点：无法在 return 语句外访问数据、嵌套写法不够优雅

#### Hooks 官方解释∶
    Hook是 React 16.8 的新增特性。
    它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
    通过自定义hook，可以复用代码逻辑。
```typescript jsx
// 自定义一个获取订阅数据的hook
function useSubscription() {
  const data = DataSource.getComments();
  return [data];
}
// 
function CommentList(props) {
  const {data} = props;
  const [subData] = useSubscription();
    ...
}
// 使用
<CommentList data='hello' />
```
以上可以看出，hook解决了hoc的prop覆盖的问题，同时使用的方式解决了render props的嵌套地狱的问题。hook的优点如下∶

+ 使用直观
+ 解决hoc的prop 重名问题
+ 解决render props 因共享数据 而出现嵌套地狱的问题
+ 能在return之外使用数据的问题

需要注意的是∶hook只能在组件顶层使用，不可在分支语句中使用。

__总结：__ Hoc、render props和hook都是为了解决代码复用的问题，但是hoc和render props都有特定的使用场景和明显的缺点。hook是react16.8更新的新的API，让组件逻辑复用更简洁明了，同时也解决了hoc和render props的一些缺点。


### 5、对React-Fiber的理解，它解决了什么问题？
React V15 在渲染时，会递归比对 VirtualDOM 树，找出需要变动的节点，然后同步更新它们， 一气呵成。这个过程期间， React 会占据浏览器资源，这会导致用户触发的事件得不到响应，并且会导致掉帧，
__导致用户感觉到卡顿__

为了给用户制造一种应用很快的“假象”，不能让一个任务长期霸占着资源。 可以将浏览器的渲染、布局、绘制、资源加载(例如 HTML 解析)、事件响应、脚本执行视作操作系统的“进程”，需要通过某些调度策略合理地分配 CPU 资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。

所以 React 通过Fiber 架构，让这个执行过程变成可被中断。“适时”地让出 CPU 执行权，除了可以让浏览器及时地响应用户的交互，还有其他好处:

+ 分批延时对DOM进行操作，避免一次性操作大量 DOM 节点，可以得到更好的用户体验；
+ 给浏览器一点喘息的机会，它会对代码进行编译优化（JIT）及进行热代码优化，或者对 reflow 进行修正。__核心思想：__Fiber 也称协程、或者纤程。它和线程并不一样，协程本身是没有并发或者并行能力的（需要配合线程），它只是一种控制流程的让出机制。
  让出 CPU 的执行权，让 CPU 能在这段时间执行其他的操作。渲染的过程可以被中断，可以将控制权交回浏览器，让位给高优先级的任务，浏览器空闲后再恢复渲染。

### 7、React.Component 和 React.PureComponent 的区别
