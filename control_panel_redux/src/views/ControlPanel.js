import React, {Component} from 'react';

// 导入自定义组件Counter
import Counter from './Counter';

// 导入自定义组件Summary
import Summary from './Summary';

// 设定组件样式
const style = {
  margin: '20px'
};

// 创建自定义组件ControlPanel
class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        {/* 使用自定义组件Counter，传入props参数caption */}
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
