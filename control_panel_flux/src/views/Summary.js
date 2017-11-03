import React, {Component} from 'react';

// 导入Store对象： SummaryStore
import SummaryStore from '../stores/SummaryStore';

// 创建自定义组件Summary
class Summary extends Component {
  // 构造函数
  constructor(props) {
    // 子类继承父类必须调用super方法获得父类的this对象
    super(props);

    // 绑定成员函数的额this对象
    this.onUpdate = this.onUpdate.bind(this);

    // 初始化内部状态state，设置总和sum的初始值
    this.state = {
      // 总和sum的初始值是在SummaryStore对象上调用getSummary方法获得
      sum: SummaryStore.getSummary()
    }
  }

  // SummaryStore变化执行函数
  onUpdate() {
    // 调用SummaryStore对象上的getSummary方法获得总和sum的值
    const newSum = SummaryStore.getSummary();
    // 调用setState方法更新内部状态state对象上的总和sum的值
    this.setState({sum: newSum});
  }

  // 生命周期装载阶段增加对SummaryStore对象变化的监听，发生变化执行回调onUpdate
  componentDidMount() {
    SummaryStore.addChangeListener(this.onUpdate);
  }

  // 生命周期卸载阶段移除对SummaryStore对象变化的监听
  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onUpdate);
  }

  // render方法返回JSX对象，负责渲染内容
  render() {
    return (
      // 读取内部状态state对象上总和sum的值
      <p>Total Count: {this.state.sum}</p>
    );
  }
}

// 导出自定义组件Summary
export default Summary;
