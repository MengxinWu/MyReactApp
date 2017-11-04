import React, {Component} from 'react';

// 导入store对象
import store from '../Store';

// 创建自定义组件Summary
class Summary extends Component {
  constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);

    // 初始化内部状态state对象，设定总和sum的初始值
    this.state = this.getStateSum();
  }

  // 从store对象上获取数据状态，计算总和sum的值
  getStateSum() {
    const state = store.getState();
    let sum = 0;
    for(let key in state) {
      if(state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return {sum: sum};
  }

  // store对象发生变化执行函数
  onUpdate() {
    // 调用setState方法更新组件内部状态state对象
    this.setState(this.getStateSum);
  }

  // 生命周期装载阶段，添加对store对象的监听，发生变化执行回调函数onUpdate
  componentDidMount() {
    store.subscribe(this.onUpdate);
  }

  // 生命周期卸载阶段，移除对store对象的监听
  componentWillUnmount() {
    store.unsubscribe(this.onUpdate);
  }

  render() {
    return (
      <p>Total Count: {this.state.sum}</p>
    );
  }
}

// 导出自定义组件Summary
export default Summary;
