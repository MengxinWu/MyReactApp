import React, {Component} from 'react';

// 导入store对象
import store from '../Store';

// 导入Action构造函数
import * as Actions from '../Actions';

// 设定组件样式
const buttonStyle = {
  margin: '10px'
};

// 创建自定义组件Counter
class Counter extends Component {
  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onChange = this.onChange.bind(this);

    // 初始化内部状态state对象，设定计数count的初始值
    this.state = this.getStateCount();
  }

  // 从store对象上获取数据状态
  getStateCount() {
    return {count: store.getState()[this.props.caption]};
  }

  // 调用Action构造函数返回Action对象
  // 调用store对象的dispatch方法派发Action对象
  onClickIncrementButton() {
    store.dispatch(Actions.increment(this.props.caption));
  }

  onClickDecrementButton() {
    store.dispatch(Actions.decrement(this.props.caption));
  }

  // store对象发生变化执行函数
  onChange() {
    // 调用setState方法更新组件内部状态state对象
    this.setState(this.getStateCount());
  }

  // 生命周期装载阶段，添加对store对象的监听，发生变化执行回调函数onChange
  componentDidMount() {
    store.subscribe(this.onChange);
  }

  // 生命周期卸载阶段，移除对store对象的监听
  componentWillUnmount() {
    store.unsubscribr(this.onChange);
  }

  render() {
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

// 导出自定义组件Counter
export default Counter;
