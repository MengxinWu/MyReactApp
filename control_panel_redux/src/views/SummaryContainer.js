import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 导入展示组件Summary
import Summary from './Summary';

// 创建容器组件SummaryContainer，和Store对象通信，管理应用数据
// 通过参数props和展示组件传递数据
class SummaryContainer extends Component {
  // 构造函数，props是从父组件传进来的参数，context为全局上下文环境
  constructor(props, context) {
    super(props, context);

    this.onUpdate = this.onUpdate.bind(this);

    // 初始化内部状态state对象，设定总和sum的初始值
    this.state = this.getStateSum();
  }

  // 从上下文环境context对象上获取Store对象，通过调用getState方法获得状态数据
  // 根据从Store对象上获得状态数据计算总和sum的值
  getStateSum() {
    const state = this.context.store.getState();
    let sum = 0;
    for(let key in state) {
      if(state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return {sum: sum};
  }

  // Store对象发生变化的回调函数
  onUpdate() {
    // 调用setState方法更新组件内部状态state对象
    this.setState(this.getStateSum);
  }

  // 生命周期装载阶段，从上下文环境context对象上获取Store对象
  // 调用subscribe方法添加对Store对象的监听，发生变化执行回调函数onUpdate
  componentDidMount() {
    this.context.store.subscribe(this.onUpdate);
  }

  // 生命周期卸载阶段，从上下文环境context对象上获取Store对象
  // 调用unsubscribr方法移除对Store对象的监听，移除回调函数onUpdate
  componentWillUnmount() {
    this.context.store.unsubscribe(this.onUpdate);
  }

  render() {
    return (
      // 调用展示组件Summary，传入参数props
      <Summary sum={this.state.sum} />
    );
  }
}

// 定义下层组件的contextTypes属性来访问顶层组件提供的context对象，这里访问Store对象
SummaryContainer.contextTypes = {
  store: PropTypes.object
};

// 导出容器组件SummaryContainer
export default SummaryContainer;
