import React from 'react';

// 创建展示组件Summary，渲染页面内容，无状态（state）
// 通过参数props和容器组件传递数据
function Summary(props) {
  const {sum} = props;
  return (
    <p>Total Count: {sum}</p>
  );
}

// 导出展示组件Summary
export default Summary;
