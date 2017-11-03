import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// 导入自定义组件ControlPanel
import ControlPanel from './views/ControlPanel';

ReactDOM.render(
	<ControlPanel />,
	document.getElementById('root')
);
registerServiceWorker();
