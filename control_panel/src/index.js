import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// 使用import导入自定义组件ControlPanel
import ControlPanel from './ControlPanel';

ReactDOM.render(
	// 使用自定义组件ControlPanel
	<ControlPanel />, 
	document.getElementById('root')
);

registerServiceWorker();