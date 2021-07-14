---
title: react
date: 2021-05-15
tags:
 - react
categories: 
 - react
---
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

### 6、React.Component 和 React.PureComponent 的区别？

pureComponent表示一个纯组件，可以用来优化react组件，减少render函数执行的次数，从而提高组件的性能


在react中，当```props```或```state```发生变化时，可以通过在```shouldComponentUpdate```生命周期函数中执行```return false```来阻止页面的更新，从而减少不必要的render执行。React.PureComponent会自动执行 shouldComponentUpdate。

不过，pureComponent中的``` shouldComponentUpdate() ```进行的是 __浅比较__ ，也就是说如果是 __引用类型数据__ ,只会比较不是同一个地址，而不会比较这个地址里面的数据是否一致。浅比较会忽略属性或状态突变情况。其实也就是数据引用指针没有变化。而数据发生改变的时候render是不会执行的。
如果需要重新渲染那么就需要重新开辟空间引用数据。PureComponent一般会用在一些纯展示组件上。

#### 使用pureComponent的好处：

当组件更新时，如果组件的props或state没有改变，render函数就不会触发。省去虚拟dom的生成和对比过程，达到提升性能的目的。这是因为react自动做了一层浅比较。

### 7、Component, Element, Instance 之间有什么区别和联系？

__元素:__ 一个元素element是一个普通对象，描述了对于一个DOM节点或者其他组件component,你想让他在屏幕中呈现什么样子。素element可以在它的属性props中包含其他元素(译注:用于形成元素树)。创建一个React元素element成本很低。元素element创建之后是不可变的。


__组件：__ 一个组件component可以通过多种方式声明。可以是带有一个render()方法的类，简单点也可以定义为一个函数。这两种情况下，它都把属性props作为输入，把返回的一棵元素树作为输出。

__实例：__ 一个实例instance是你在所写的组件类```component class```中使用关键字this所指向的东西(译注:组件实例)。它用来存储本地状态和响应生命周期事件很有用。

函数试组件根本没有instance实例，类组件有实例，但是永远也不要直接创建一个组件的实例，因为react已经帮我们做了这些。

### 8、对componentWillReceiveProps 的理解

该生命周期函数只有在props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过调用```this.setState()```来更新你的组件状态，旧的属性还是可以通过```this.props```来获取，这里调用更新状态是安全的。并不会触发额外的render调用。

__使用好处：__ 在这个生命周期中，可以在子组件的render函数执行前获取新的props，从而更新子组件自己的state。可以将数据请求放在这里进行执行，需要传的参数则从```componentWillReceiveProps(nextProps)```中获取。而不必将所有的请求都放在父组件中。于是该请求只会在该组件渲染时才会发出，从而减轻请求负担。```componentWillReceiveProps(nextProps)```在初始化render的时候不会执行，它会在component接收到新的props（状态）时被触发，一遍用于父组件状态更新时子组件重新渲染。

### 9、哪些方法会触发 React 重新渲染？重新渲染 render 会做些什么？

__1、哪些方法会触发 react 重新渲染?__

+ setState()方法被调用

setState是react中最常用的命令，通常情况下，执行setState会触发render。但是这里有个点需要注意一下，执行setState的时候一定会重新渲染吗？答案是不一定，当setState传入null的时候，并不会触发render。

```jsx
class App extends React.Component {
  state = {
    a: 1
  };

  render() {
    console.log("render");
    return (
      <React.Fragement>
        <p>{this.state.a}</p>
        <button
          onClick={() => {
            this.setState({ a: 1 }); // 这里并没有改变 a 的值
          }}
        >
          Click me
        </button>
        <button onClick={() => this.setState(null)}>setState null</button>
        <Child />
      </React.Fragement>
    );
  }
}
```
+ 父组件重新渲染
只有父组件重新渲染了，即使传入子组件的props未发生变化，那么子组件也会重新渲染，进而触发render

__2、重新渲染render会做些什么？__
+ 会对新旧Vnode进行对比，也就是我们所说的diff算法
+ 对新旧两颗树进行一个深度优先遍历，这样每一个节点都会有一个标记，在到深度遍历的时候，每遍历到一个节点。就把该节点和新的节点树进行对比，如果有差异就放到一个对象里面
+ 遍历差异对象，根据差异的类型，根据应对规则更新Vnode

react的处理Render的基本思维模式是每次一有变动就会去重新渲染整个应用。在虚拟dom没出现之前，最简单的方法就是直接调用innerHTML。虚拟dom厉害的地方并不是说他比直接操作dom快，而是说不管数据怎么变，都会尽量以最小的代价去更新dom，react将render函数返回的虚拟dom树与老的进行比较，从而确定dom要不要更新、怎么更新。当DOM树很大时，遍历两棵树进行各种比对是相当耗性能的，特别是在顶层setState一个微小的修改，默认回去遍历整颗树。尽管react使用高度优化的diff算法，但是这个过程仍会损耗性能。

### 10、React如何判断什么时候重新渲染组件？
组件状态的改变可以因为props的改变，或者直接通过setState方法改变。组件获得新的状态然后React决定是否应该重新渲染组件。只要组件的State发生变化，react就会对组件进行重新渲染。这是因为react中的```shouldComponentUpdate```方法默认返回 ```true```，这就是导致每次更新都重新渲染的原因。

当react将要渲染组件时会执行```shouldComponentUpdate```方法来看它是否返回true（组件应该更新，也就是重新渲染）。所以需要重写```shouldComponentUpdate```方法让它根据情况返回true或者false来告诉React什么时候重新渲染什么时候跳过重新渲染。

### 11、对有状态组件和无状态组件的理解及使用场景
__有状态组件 特点：__ 
+ 是一个类组件、有继承、可以使用this
+ 可以使用react的生命周期
+ 使用较多，容易频繁触发生命周期钩子函数，影响性能
+ 内部使用state,维护自身状态的变化，有状态组件根据外部组件传入的props和自身的State进行渲染

__使用场景__
+ 需要使用到状态的
+ 需要使用状态操作组件的（无状态组件的也可以实现新版本react hooks也可以实现）

__总结：__
类组件可以维护自身的状态变量，即组件的state,类组件还有不同的生命周期方法，可以让开发者能够在组件的不同阶段（挂载、更新、卸载），对组件做更多的控制。类组件既可以充当无状态组件，也可以充当有状态组件。当一个类组件不需要管理自身状态时，也可以被称为无状态组件。

__无状态组件  特点__
+  不依赖自身的状态state
+ 可以使类组件或者函数组件
+ 可以完全避免使用```this```关键字（由于使用的是箭头函数无需绑定）
+ 有更高的性能。当不需要使用生命周期钩子时，应该首先使用无状态组件
+ 组件内部不维护state，只根据外部组件传入的props进行渲染的组件，当props改变时，组件重新渲染

__使用场景__
+ 组件不需要管理state，纯展示

__有点__

+ 简化代码，专注render
+ 组件不需要被实例化，无生命周期，提高性能。渲染只取决于属性，无副作用
+ 视图和数据的解耦分离

__缺点__

+ 无法使用ref和生命周期方法
+ 无法控制组件的重渲染，因为无法使用```shouldComponentUpdate```方法，当组件接收到的属性时则会冲渲染

__总结：__
组件内部状态且与外部无关的组件，可以考虑用五状态组件，这样状态数就不会过于复杂，易于理解和管理。当一个组件不需要管理自身状态时，也就是无状态组件，应该优先设计为函数组件。

### 12、对React中Fragment的理解，它的使用场景是什么？
在react中，组件返回的元素只能有一个根元素。为了不添加多余的dom节点，我们可以使用```Fragment```标签来包裹所有的元素，Fragment标签不会渲染出任何元素。
```jsx
import React, { Component, Fragment } from 'react'

// 一般形式
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
// 也可以写成以下形式
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

### 13、在React中如何避免不必要的render？

React基于虚拟DOM和高效diff算法的完美配合，实现了对DOM最小粒度的更新。大多情况下，react对DOM的渲染效率足以业务日常。但在个别复杂业务场景下，性能问题依然存在。此时需要采取一些措施来提升运行性能，其很重要的一个方向就是尽可能的避免```render```

+ shouldComponentUpdate和PureComponent

在react类组件中，可以利用```shouldComponentUpdate```或者```pureComponent```来减少因父组件更新而触发子组件render，从而达到目的。```shouldComponentUpdate```来决定是否组件是否重新渲染，如果不希望组件重新渲染，返回```false```即可。

+ 利用高阶组件

在函数组件中，并没有 ```shouldComponentUpdate```这个生命周期，可以利用高阶组件，封装一个类似```PureComponet```的功能

+ 使用React.memo

React.mome是react```16.0```新的一个API，用来缓存组件的渲染，避免不必要的更新，其实也会死你一个高阶组件，与```PureComponent```十分类似，但不同的是```React.memo```只能用于函数组件。

### 14、对 React context 的理解

在React中， 数据传递一般使用props传递数据，维持单项数据流，这样可以让组件之间的关系变得简单可预测，但是单向数据流在某些场景中并不适用。单纯一对的父子组件传递并无问题，但要是组件之间层层依赖深入，```props```就需要层层传递，显然这样做太繁琐了。

```Context```提供了一种在组件之间共享此类值得方法，而不必显式的通过组件树的逐层传递 ```props```

可以把```context```当做是特定一个组件数内共享的```store```，用来做数据传递。```简单的说就是，当年你不想在组件树中通过逐层传递props或者state的方式来传递数据时，可以使用Context来实现跨层级的组件数据传递。```

js的代码在执行期间，会创建一个相应的作用域链，这个作用域链记录这运行时js代码块执行期间所能访问的活动对象，包括变量和函数，js程序通过作用域链访问到代码块内部或者外部的变量和函数

假如以js的作用域链作为类比，react组件提供的context对象其实就是好比一个提供给子组件访问的作用域，而Context对象的属性可以看成作用域上的活动对象。由于组件的context由父节点链上所有组件通过```getChildContext（）```返回的context对象组合而成，所以组件通过context是可以访问到其父组件链上所有节点组件提供的context的属性。

### 15、为什么React并不推荐优先考虑使用Context？

+ context目前还处于实验阶段，可能会在后面发行版本中有很大的变化，事实上这种情况已经发生了，所以为了避免给今后升级带来的影响和麻烦，不建议在app中使用context。

+ 尽管不建议在app中使用context，但是独有组件而言，由于影响范围小于app，如果可以做到高内聚，不破坏组件树之间的依赖关系，可以考虑使用context；

+ 对于组件之间的数据通信或者状态管理，有效使用props或者State解决，然后再考虑使用第三方的成熟库进行解决，以上的方法都不是最佳方案的时候，考虑context

+ context的更新需要通过```setState()```触发，但是这并不是可靠的，context支持跨组件的访问，但是如果中间的子组件通过一些方法不影响更新，比如```shouldComponentUpdate() ```返回```false```那么不能保证context的更新一定可以使用context的子组件，因此，context的可靠性需要关注

### 16、React中refs的作用是什么？有哪些应用场景？
Refs提供了一种方式，用于访问在 ```render```方法中创建的```react```元素或```DOM```节点，refs应该谨慎使用，如下场景使用refs比较适合：
+ 处理焦点、文本选择或者媒体的控制
+ 触发必要的动画
+ 集成第三方DOM库

__注意：__

+ 不应该国度的使用refs
+ ref的返回值取决于节点的类型
1. 当ref属性被用于一个普通的```HTML```元素时，```react.createRef()```将接收底层```DOM```元素作为它的```current```属性以创建ref。
2. 当ref属性被用于一个自定义的类组件时，ref对象将接收该组件已挂载的实例作为它的```current```
+ 当在父组件中需要访问子组件中的ref时可使用传递refs或回调refs。


### 17、React组件的构造函数有什么作用？它是必须的吗？
构造函数主要用于两个目的：
+ 通过将对象分配给```this.state```来初始化本地状态
+ 将事件处理程序方法绑定到实例上

所以，当在React class中需要设置state的初始值或者绑定事件时，需要加上构造函数，官方Demo:

```js
class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </div>
    );
  }
}
ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);
```
构造函数用来新建父类的```this```对象；子类必须在```constructor```方法中调用```super```方法；否则新建实例时会报错；因为子类没有自己的```this```对象，而是继承父类的```this```对象，然后对其进行加工。如果不调用```super```方法；子类就得不到```this```对象。

__注意：__

+ constructor() 必须配上super()，如果要在constructor内部使用```this.props```就要传入```props```，否则不用
+ js中的```bind```每次都会返回一个新的函数，为了性能等考虑，尽量在```constructor```中绑定事件

### 18、React.forwardRef是什么？它有什么作用？

React.forwardRef会创建一个react组件，这个组件能够将其接受的```ref```属性转发到其组件树下的另一个组件中。这种技术并不常见，实例
+ 转发ref到DOM组件
+ 在高阶组件中转发refs

### 19、类组件与函数组件有什么异同？

__相同点：__ 组件是react可复用的最小代码片段，他们会在页面中渲染的react元素，也正因为组件是react的最小编码单位，所以无论是函数组件还是类组件，在使用方法和最终呈现效果上是完全一致的。

我们可以将一个类组件改写成函数组件，或者把一个函数组件改写成类组件（虽然并不推荐这种重构行为）。从使用者的角度而言，很难从体验上区分两者，而且在现代浏览器中，闭包和类的性能只能在极端场景下才会有明显的差别。

所以，基本可认为两者作为组件是完全一致的。

__不同点：__
+ 它们在开发时的心智模型上却存在巨大差异。类组件时基于面向对象编程的，它主打的是继承、生命周期等核心概念；而函数组件内核是函数式编程，主打的是```immutable```、没有副作用、引用透明等特点。
+ 之前，在使用的场景上，如果存在需要使用生命周期的组件，那么主推类组件；设计模式上，如果需要使用继承，那么主推类组件。但现在由于```react hooks```的推出，生命周期概念的淡出，函数组件可以完全取代类组件。其次继承并不是组件最佳的设计模式，官方更推崇```组合优于继承```的设计概念，所以类组件在这方面的优势也在淡出。
+ 组件优化上，类组件主要依靠```shouldComponentUpdate```阻断渲染来提升性能，而函数组件依靠```react.memo```来缓存渲染结果来提升性能。
+ 从上手程度而言，类组件更容易上手，从未来趋势看，由于```react hooks```的推出，函数组件成了社区未来主推的方案。
+ 类组件在未来时间切片与并发模式中，由于生命周期带来的复杂度，并不易于优化。而函数组件本身轻量简单，且```hooks```的基础上提供了比原来更细粒度的逻辑组织与复用，更能适应react的未来发展。

### 20、数据管理
__React setState调用的原理__
具体的执行过程如下（源码级解析）：

```html
” alt=”在这里插入图片描述” data-src=”https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/699f9a657581499cad192a379c19878f~tplv-k3u1fbpfcp-zoom-1.image” data-width=”800″ data-height=”600″ />
```
+ 首先调用了```setState```入口函数，入口函数在这里就是充当一个分发器的角色，根据入参的不同，将其分发到不同的功能函数中去；
```jsx
ReactComponent.prototype.setState = function(partialState, callback) {
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this,callback, 'setState');
  }
};
```
+ enqueueSetState方法将薪的```state```放进组件的状态队列里，并调用```enqueueUpdate```来处理将要更新的实例对象；
```jsx
enqueueSetState: function(publicInstance, partialState) {
  // 根据 this 拿到对应的组件实例
  var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
  // 这个 queue 对应的就是一个组件实例的 state 数组
  var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
  queue.push(partialState);
  //  enqueueUpdate 用来处理当前的组件实例
  enqueueUpdate(internalInstance);
}
```
+ 在```enqueueUpdate```方法中引出了一个关键的对象```batchingStrategy```，该对象所具备的```isBatchingUpdates```属性直接决定了当下是要走更新流程，还是应该排队等待；如果轮到执行，就调用```batchedUpdates```方法来直接发起更新流程。由此可以推测，```batchingStrategy```或许正是```React```内部专门用于管控批量更新的对象。
```jsx
function enqueueUpdate(component) {
  ensureInjected();
  // 注意这一句是问题的关键，isBatchingUpdates标识着当前是否处于批量创建/更新组件的阶段
  if (!batchingStrategy.isBatchingUpdates) {
    // 若当前没有处于批量创建/更新组件的阶段，则立即更新组件
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;
  }
  // 否则，先把组件塞入 dirtyComponents 队列里，让它“再等等”
  dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = updateBatchNumber + 1;
  }
}
```
__注意：__ ```batchingStrategy```对象可以理解为“锁管理器”。这里的“锁”，是指```React```全局唯一的```isBatchingUpdates```变量，```isBatchingUpdates```的初始值是```false```，意味着“当前并未执行任何批量更新操作”。每当```React```调用```batchedUpdate```去执行更新动作时，会先把这个锁给“锁上”（设置为```true```），表明“现在正处于批量更新过程中”，当锁被“锁上”的时候，任何需要更新的组件都只能暂时进入```dirtyComponents```里排队等候下一次的批量更新，而不能随意“排队”。此处体现的“任务锁”的思想，是```React```面对大量状态仍然能够用实现有序分批处理的基石。

## React setState 调用之后发生了什么？是同步还是异步？
__1、React中setState后发生了什么？__
在代码中调用```setState```函数之后，```React```会将传入的参数对象与当前的状态合并，然后触发所为的```调和过程```。

经过调和过程，React会以相对高效的方式根据新的状态构建```React```元素树并且着手重新渲染整个```UI```界面。在```React```得到元素树之后，```React```会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，```React```能够相对精确的指导哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

如果在短时间内频繁```setState```，React会将```state```的改变压入栈中，在合适的时机，批量更新```state```和视图，达到提高性能的效果。

__2、setState是同步还是异步的？__

假如所有```setState```是同步的，意味着每执行一次```setState```(有可能一个同步代码中，多次setState)，都重新```vnode diff + dom```修改，这对性能来说是极不友好的。如果是异步，则可以把一个同步代码中的多个```setState```合并成一次组件更新。所以默认是异步的，但是在一些情况下是同步的。

```setState```并不是单纯同步/异步的，它的表现会因调用场景的不同而不同。在源码中```isBatchingUpdates```来判断```setState```是先存进```state```队列还是直接更新，如果值为```true```则执行异步操作，为```false```则直接更新。
+ __同步：__ 在React可以控制的地方，就为```true```，比如在react生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。
+ __异步：__ 在react无法控制的地方，比如原生事件，具体就是在```addEventListener 、setTimeout、setInterval```等事件中，就只能同步更新

一般认为，做异步设计是为了性能优化、减少渲染次数：

+ setState设计为异步，可以显著的提升性能。如果每次调用```setState```都进行一次更新，那么就意味着```render```函数会被频繁调用，界面重新渲染，这样效率是很低的’最好的办法应该是获取到多个更新，之后进行批量更新。
+ 如果同步更新了```state```，但是还没有执行```render```函数，那么```state```和```props```不能保持同步。```state```和```props```不能保持一致性，会在开发中产生很多的问题。

__3、React中的setState批量更新的过程是什么？__
调用```setState```时，组件的```state```并不会立即改变，```setState```只是把要修改的```state```放入一个队列，React会优化真正的执行时机，并出于性能原因，会将```React事件处理程序```中的多次React事件处理程序中的多次```setState```的状态修改合并成一次状态修改。最终更新只产生一次组件及其子组件的重新渲染，这对于大型应用程序中的性能提升至关重要。
```jsx
this.setState({
  count: this.state.count + 1    //    入队，[count+1的任务]
});
this.setState({
  count: this.state.count + 1    // 入队，[count+1的任务，count+1的任务]
});
                                 //        合并 state，[count+1的任务]
                                 //        执行 count+1的任务
```
需要注意的是，只要同步代码还在执行，“攒起来”这个动作就不会停止。（注：这里之所以多次 +1 最终只有一次生效，是因为在同一个方法中多次 setState 的合并动作不是单纯地将更新累加。比如这里对于相同属性的设置，React 只会为其保留最后一次的更新）。

__4、React中有使用过getDefaultProps吗？它有什么作用？__
通过实现组件的```getDefaultProps```，对属性设置默认值（es5的写法）
```jsx
var ShowTitle = React.createClass({
  getDefaultProps:function(){
    return{
      title : "React"
    }
  },
  render : function(){
    return <h1>{this.props.title}</h1>
  }
});
```
__5、React中setState的第二个参数作用是什么？__
```setState```的第二个参数是一个可选的回调函数。这个回调函数将在组件重新渲染后执行。等价于在```componentDidUpdate```生命周期内执行。通常建议使用```componentDidUpdate```来代替此方式。在这个回调函数中你可以拿到更新后```state```的值：
```jsx
this.setState({
    key1: newState1,
    key2: newState2,
}, callback)
```

__6、React中的setState和replaceState的区别是什么？__
1. setState()用于设置状态对象，其语法如下：
```jsx
setState({object nextState[, function callback]});
```
+ nextState,将要设置的新状态，改状态会和当前的state合并
+ callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用

合并nextState和当前state，并重新渲染组件。setState是React时间处理函数中和请求回调函数中触发Ul更新的主要方法

2. replaceState方法与setState方法类似，但是方法只会保留```nextState```中状态，原```state```不在```nextState```中的状态都会被删除。
```jsx
replaceState(object nextState[, function callback]);
```
+ nextState，将要设置的新状态，该状态会替换当前的state
+ callback， 可选参数，回调函数。该函数会在replaceState设置爱成功，且组件重新渲染后调用

__总结：__ setState是修改其中的部分状态，相当于```Object.assign```，只是覆盖，不会减少原来的状态。而```replaceState```是完全替换原来的状态，相当于赋值，将原来的```state```替换为另一个对象，如果薪状态属性减少，那么```state```中就没有这个状态了。

__7、在React中组件的this.state和setState有什么区别？__
```this.state```通常是用来初始化```state```的，```this.setState```是用来修改```state```值的。如果初始化了```state```之后再使用```this.state```，之前的```state```会被覆盖掉，如果使用```this.setState```，只会替换掉相应的```state```值，所以，如果想要修改```state```的值，就需要使用```setState```，而不能直接修改```state```，直接修改```state```之后页面是不会更新的。

# 路由

1. react-router的实现原理是什么？
客户端路由实现的思想：
+ 基于hash的路由： 通过监听hashchange事件，感知hash的变化
+ 改变hash可以直接通过```location.hash = xxx```
__基于H5 history路由：__
+ 改变url可以通过```history.pushState```和```replaceState```等，会将URL压入堆栈，同时能够应用```history.go()```等API
+ 监听url的变化可以通过自定义事件触发实现

__react-router实现的思想__
+ 基于history库来实现上述不同的客户端路由实现思想，并且能够保存历史记录等，磨平浏览器差异，上层无感知
+ 通过维护的列表，在每次URL发生变化的回收，通过配置的路由路径，匹配到对应的```Component```，并且```render```

2. 如何配置react-router实现路由切换
+ 使用组件，路由匹配时通过比较的path属性和当前地址的pathname来实现的。当一个匹配成功时，它将渲染其内容，当它不匹配时就会渲染null，没有路径时将始终被匹配。
```jsx
<Route path='/about' component={About}/> // renders <About/>
<Route path='/contact' component={Contact}/> // renders null
<Route component={Always}/> 
```
+ 结合使用 组件和组件用于分组
```jsx
<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
</Switch>
```
不是分组所必须的，但他通常很有用。一个会遍历其所有的子元素，并仅渲染与当前地址匹配的第一个元素
+ 使用```<Link><NavLink>、<Redirect> 组件 <Link> 组件来在你的应用程序中创建链接。无论你在何处渲染一个 <Link> ，都会在应用程序的 HTML 中渲染锚（<a>）```
```jsx
<Link to="">Home</Link>
```
是一种特殊类型的，当它的to属性与当前地址匹配时，可以将其定义为“活跃的”
```jsx
<NavLink to="/react" activeClassName="hurray">
    React
</NavLink>
```
当我们想强制导航时，可以渲染一个，当一个渲染时，它将使用它的to属性进行定向。

3. React-Router怎么设置重定向？
使用组件实现路由的重定向：
```jsx
<Switch>
  <Redirect from='/users/:id' to='/users/profile/:id'/>
  <Route path='/users/profile/:id' component={Profile}/>
</Switch>
```
当请求 /users/:id 被重定向去 '/users/profile/:id'：
+ 属性```from: string```;需要匹配的将要被重定向路径
+ 属性```to:string```;重定向的url字符串
+ 属性```to: object```;重定向的location对象
+ 属性```push: bool```;若为真，重定向操作将会把新地址加入到访问历史记录里面，并且无法回退到当前的页面

4. react-router 里的 Link 标签和 a 标签的区别
从最终渲染的DOM来看，这两者都是链接，都是标签，区别是：

react-router里实现路由跳转的链接，一般配合使用，react-router接管了其默认的链接跳转行为，区别于传统的页面跳转，跳转行为只会触发想匹配的对应的页面内容更新，而不会刷新整个页面，做了三件事：
+ 有```onclick```那就执行onclick
+ ```click```的时候阻止```a```标签默认事件
+ 根据跳转href(即是to)，用history (web前端路由两种方式之一，history & hash)跳转，此时只是链接变了，并没有刷新页面而标签就是普通的超链接了，用于从当前页面跳转到href指向的另一 个页面(非锚点情况)。

__a标签默认事件禁掉之后做了什么才实现了跳转?__
```jsx
let domArr = document.getElementsByTagName('a')
[...domArr].forEach(item=>{
    item.addEventListener('click',function () {
        location.href = this.href
    })
})
```

5. React-Router如何获取URL的参数和历史对象？
__1.获取URL的参数__
+ __get传值__
路由配置还是普通的配置，如： 'admin'传参方式如：'/admin?id=123'。通过```this.props.location.search```获取url获取到讴歌字符串```?id=123```可以用```url,qs,querystring```浏览器提供的api```URLSearchParams```对象或者自己封装的方法去解析出```id```的值。
+ __动态路由传值__
路由需要配置成动态路由：```path='/admin:id'```传参方式```'/admin/123'```通过```this.props.match.params.id```取得url中的动态路由```id```部分的值，除此之外还可以通过```userParams(hooks)```来获取
+ __通过query或state传值__
传餐方式：在```Link```组件的```to```属性中可以传递对象```{pathname:'/admin',query:'111',state:'111'}```。通过```this.props.location.state```或```this.props.location.query```来获取即可，传递的参数可以使对象、数组等，但是存在缺点就是只要页面刷新，参数就会丢失。

1. 获取历史对象
+ 如果React => 16.8时可以使用React Route中提供的Hooks
```jsx
import { useHistory } from 'react-router-dom';
let history = useHistory();
```
2. 使用this.props.history获取历史对象
```jsx 
let history = this.props.history;
```
6.  React-Router 4怎样在路由变化时重新渲染同一个组件？
当路由变化时，即组建的```props```发生了变化，会调用```componentWillReceiveProps```等生命周期狗子。那需要做的只是：当路由改变时，根据路由，也去请求数据
```jsx
class NewsList extends Component {
  componentDidMount () {
     this.fetchData(this.props.location);
  }
  
  fetchData(location) {
    const type = location.pathname.replace('/', '') || 'top'
    this.props.dispatch(fetchListData(type))
  }
  componentWillReceiveProps(nextProps) {
     if (nextProps.location.pathname != this.props.location.pathname) {
         this.fetchData(nextProps.location);
     } 
  }
  render () {
    <></>
  }
  ```
  利用```componentWillReceiveProps```，进行重新```render```的预处理操作。

  7. React-Router的路由有几种模式？
  React-Router支持使用```hash```(对应HashRouter)和```browser```(对应BrowserRouter)，两种路由规则，react-router-dom提供了```BrowserRouter```个```HashRouter```两个组件来实现应用的UI和URL同步
  + BrowserRouter 创建的 URL 格式：xxx.com/path
  + HashRouter 创建的 URL 格式：xxx.com/#/path
  
  1. ```BrowserRouter```它使用HTML5提供的```history api```pushState、replaceState 和 popstate 事件）来保持UI和URL的同步。由此可以看出```BrowserRouter```是使用HTML5的```history api```来控制路由跳转的
```jsx
  <BrowserRouter
    basename={string}
    forceRefresh={bool}
    getUserConfirmation={func}
    keyLength={number}
/>
```
  
__属性：__

+ ```basename```所有路由的基准URL。```basename```的正确格式是前面有一个前导斜杠，但尾部不能有斜杠
```jsx
<BrowserRouter basename="/calendar">
    <Link to="/today" />
</BrowserRouter>
```
等同于

```jsx
<a href="/calendar/today" />
```
+ ```forceRefresh```如果为```true```，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持HTML5 history API 的浏览器中使用此功能；
+ ```getUserConfirmation```用于确认导航的函数，默认使用```window.confirm```,当从 /a 导航至 /b 时，会使用默认的 confirm 函数弹出一个提示，用户点击确定后才进行导航，否则不做任何处理；

```jsx
// 这是默认的确认函数
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
<BrowserRouter getUserConfirmation={getConfirmation} />
```

+ KeyLength 用来设置 Location.Key 的长度。

2. ```HashRouter```使用URL的hash部分（window.location.hash）来保持UI和URL的同步。由此可以看出```HashRouter```是通过URL的hash属性来控制路由跳转的
```jsx
<HashRouter
    basename={string}
    getUserConfirmation={func}
    hashType={string}  
/>
```
参数:
+ basename, getUserConfirmation 和 BrowserRouter 功能一样；
+ hashType window.location.hash 使用的 hash 类型，有如下几种：
 + slash – 后面跟一个斜杠，例如 #/ 和 #/sunshine/lollipops；
 + noslash – 后面没有斜杠，例如 # 和 #sunshine/lollipops；
 + hashbang – Google 风格的 ajax crawlable，例如 #!/ 和 #!/sunshine/lollipops。

8. React-Router 4的Switch有什么用？
Switch 通常被用来包裹 Route，用于渲染与路径匹配的第一个子 <Route> 或 <Redirect>，它里面不能放其他元素。

1. 如果不加<Switch>:
```jsx
import { Route } from 'react-router-dom'

<Route path="/" component={Home}></Route>
<Route path="/login" component={Login}></Route>
```
Route组件中的```path```属性用于匹配路径，因为需要匹配```/```到```Home```，匹配```/login```到```Login```，所以需要两个Route。但是不能这么写。这样写的话，当URL的```path```为```/login```时，```<Route path="/" />```和```<Route path="/login" />```都会被匹配，因此页面会展示```Home```和```Login```两个组件。这时就需要借助```<Switch>```来做到只显示一个匹配组件
```jsx
import { Switch, Route} from 'react-router-dom'
    
<Switch>
    <Route path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
</Switch>
```
此时，再访问```/login```路径时，却只显示了```Home```组件。这就用到了```exact```属性，它的作用就是精确匹配路径，经常与```<Switch>```联合使用，只有当URL和该```<Route>```的```path```属性完全一致的情况下才能匹配上：
```jsx
import { Switch, Route} from 'react-router-dom'
   
<Switch>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/login" component={Login}></Route>
</Switch>
```



转载自：https://juejin.cn/post/6941546135827775525