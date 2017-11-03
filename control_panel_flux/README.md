# React 应用：Control Panel with Flux

在之前单纯的React应用中引入Flux来管理数据。
注：代码包含大量注释。

这个例子中React负责View部分，Flux负责数据状态部分。

Flux框架下的React组件：

1. 创建React组件先要读取Store对象的状态来初始化组件内部状态State；
2. React组件监听Store对象的变化来更新内部状态（setState）；
3. React组件改变Store状态，只能通过给Dispatcher对象派发Action对象。

Flux框架：单向数据流

1. 派发Action对象给Dispatcher对象；
2. Dispatcher注册回调函数，根据派发的对象控制Store对象；
3. View监听Store对象的变化来更新本身状态State。

该例子详细介绍了如何在React组件中引入Flux框架来管理应用数据。
