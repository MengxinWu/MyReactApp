# React应用：Control Panel with Redux

在之前单纯的React应用中引入Redux来管理应用数据。注：代码包含大量注释。

这个例子主要是和Flux进行比较：

1. Redux中只有一个Store对象，因此没有Flux中存在的Store之间有依赖关系问题；
2. Redux取消了Dispatcher对象，因为只有一个Store对象，一个Store对象注册到一个Dispatcher对象上，可以直接省略Dispatcher对象，关于Dispatcher对象的派发Action对象和注册回调函数的事情都交给了Store对象来处理；
3. Redux中Action构造函数只返回了Action对象，而Flux中不仅创建了Action对象并且直接通过Dispatcher对象调用dispatch方法直接派发出去，Redux中Action对象的派发是交给Store对象负责的；
4. Flux中Dispatcher对象负责注册回调函数，派发的Action对象都会传递给回调函数，而在Redux中只有一个Store对象，没有Dispatcher对象，回调函数被状态更新函数Reducer取代，负责更新状态，并且它是一个纯函数，不直接改变状态数据，返回一个新的状态对象 。

Redux框架进一步改进了Flux框架：

1. Store对象调用dispatch方法派发Action对象；
2. 派发的Action对象传递给状态更新函数Reducer，负责更新Store对象状态；
3. View监听Store对象的变化来更新本身内部状态State。

该例子详细地介绍了如何在React中引入Redux框架，并和Flux框架进行了比较。

---

第二版修改：

1. 把原来的应用组件进一步拆分为**容器组件**和**展示组件**，容器组件负责和Store对象通信，管理应用数据，展示组件是负责渲染页面内容，是无状态组件，通过props和容器组件进行数据交互；
2. 增加Context上下文环境功能，避免在组件中重复直接导入Store对象，手动实现顶层组件Provider提供Context的功能，在下层组件中访问context来获得上下文环境。
