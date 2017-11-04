import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 导入Action构造函数
import * as Actions from '../Actions';

// 导入展示组件Counter
import Counter from './Counter';

// 创建容器组件CounterContainer
class CounterContainer extends Component {
  // 构造函数，props是从父组件传进来的参数，context为全局上下文环境
  constructor(props, context) {
    super(props, context);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onChange = this.onChange.bind(this);

    // 初始化内部状态state对象，设定计数count的初始值
    this.state = this.getStateCount();
  }

  // 从上下文环境context对象上获取Store对象，通过调用getState方法获得状态数据
  getStateCount() {
    return {count: this.context.store.getState()[this.props.caption]};
  }

  // 调用Action构造函数increment返回表示增加操作的Action对象
  // 从上下文环境context对象上获取Store对象，调用dispatch方法派发表示增加的Action对象
  onClickIncrementButton() {
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }

  onClickDecrementButton() {
    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }

  // Store对象发生变化的回调函数
  onChange() {
    // 调用setState方法更新组件内部状态state对象
    this.setState(this.getStateCount());
  }

  // 生命周期装载阶段，从上下文环境context对象上获取Store对象
  // 调用subscribe方法添加对Store对象的监听，发生变化执行回调函数onChange
  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  // 生命周期卸载阶段，从上下文环境context对象上获取Store对象
  // 调用unsubscribr方法移除对Store对象的监听，移除回调函数onChange
  componentWillUnmount() {
    this.context.store.unsubscribr(this.onChange);
  }

  render() {
    return (
      // 调用展示组件Counter，传入参数props
      <Counter caption={this.props.caption} onClickIncrementButton={this.onClickIncrementButton} onClickDecrementButton={this.onClickDecrementButton} count={this.state.count} />
    );
  }
}

// 定义下层组件的contextTypes属性来访问顶层组件提供的context对象，这里访问Store对象
CounterContainer.contextTypes = {
  store: PropTypes.object
};

// 导出容器组件CounterContainer
export default CounterContainer;
