import React, {Component} from 'react';

// 导入容器组件CounterContainer
import CounterContainer from './CounterContainer';

// 导入容器组件Summary
import SummaryContainer from './SummaryContainer';

// 设定组件样式
const style = {
  margin: '20px'
};

// 创建顶层应用组件ControlPanel
class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        {/* 使用容器组件CounterContainer，传入props参数caption */}
        <CounterContainer caption='First' />
        <CounterContainer caption='Second' />
        <CounterContainer caption='Third' />
        <hr />
        {/* 使用容器组件SummaryContainer */}
        <SummaryContainer />
      </div>
    );
  }
}

// 导出顶层应用组件组件ControlPanel
export default ControlPanel;
