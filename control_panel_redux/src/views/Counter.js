import React from 'react';
import PropTypes from 'prop-types';

// 设定组件样式
const buttonStyle = {
  margin: '10px'
};

// 创建展示组件Counter，负责渲染内容，不需要组件状态state
// 展示组件通过props参数从容器组件获取需要的数据
function Counter(props) {
  const {caption, onClickIncrementButton, onClickDecrementButton, count} = props;
  return (
    <div>
      <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
      <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
      <span>{caption} count: {count}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onClickIncrementButton: PropTypes.func.isRequired,
  onClickDecrementButton: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

// 导出展示组件Counter
export default Counter;
