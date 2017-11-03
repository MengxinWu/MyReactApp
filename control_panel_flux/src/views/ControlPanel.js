import React, {Component} from 'react';

// 导入自定义组件Counter，Summary
import Counter from './Counter';
import Summary from './Summary';

// 设定样式
const style = {
  margin: '20px'
};

// 创建自定义组件ControlPanel
class ControlPanel extends Component {
  // render方法返回JSX对象，负责渲染内容
  render() {
    return (
      <div style={style}>
        {/* 使用自定义组件Counter，传入props参数：caption */}
        <Counter caption='First' />
        <Counter caption='Second' />
        <Counter caption='Third' />
        <hr />
        {/* 使用自定义组件Summary */}
        <Summary />
      </div>
    );
  }
}

// 导出自定义组件ControlPanel
export default ControlPanel;
