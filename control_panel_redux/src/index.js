import React from 'react';
import ReactDOM from 'react-dom';

// 导入Store对象，管理应用数据
import store from './Store';

// 导入自定义组件Provider，提供Context（上下文环境）
import Provider from './Provider';

// 导入应用组件ControlPanel，应用顶层组件
import ControlPanel from './views/ControlPanel';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // 组件Provider放在顶层，所有下层组件都可以访问该组件提供的context
  // 把Store对象放进context，所有下层组件不需要使用import直接导入Store对象
  <Provider store={store}>
    {/* 调用应用组件ControlPanel */}
    <ControlPanel />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
