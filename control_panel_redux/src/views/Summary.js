import React from 'react';
import PropTypes from 'prop-types';

// 创建展示组件Summary，渲染页面内容，无状态（state）
// 通过参数props和容器组件传递数据
function Summary(props) {
  const {sum} = props;
  return (
    <p>Total Count: {sum}</p>
  );
}

// 组件Summary参数props类型检测
Summary.propTypes = {
  sum: PropTypes.number.isRequired
};

// 导出展示组件Summary
export default Summary;
