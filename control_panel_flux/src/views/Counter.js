import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 导入Action对象
import * as Actions from '../Actions';

// 导入Store对象：CounterStore
import CounterStore from '../stores/CounterStore';

// 设定Counter组件样式
const buttonStyle = {
  margin: '10px'
};

// 创建自定义组件Counter
class Counter extends Component {
  // 构造函数
  constructor(props) {
    // 子类继承父类必须调用super方法获得父类的this对象
    super(props);

    // 绑定成员函数的this对象
    this.onChange = this.onChange.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    // 初始化内部状态state，设置计数count的初始值
    this.state = {
      // 计数count初始值是在CounterStore对象上调用getCounterValues方法获得
      count: CounterStore.getCounterValues()[props.caption]
    }
  }

  // CounterStore发生变化执行函数
  onChange() {
    // 调用CounterStore对象上的getCounterValues方法获得计数count的值
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    // 调用setState方法更新内部状态state对象上计数count的值
    this.setState({count: newCount});
  }

  // 生命周期装载阶段增加对CounterStore变化的监听，发生变化执行回调onChange
  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  // 生命周期卸载阶段移除对CounterStore变化的监听
  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  onClickIncrementButton() {
    // 派发Action对象，增加计数count的值
    Actions.increment(this.props.caption);
  }

  onClickDecrementButton() {
    // 派发Action对象，减少计数count的值
    Actions.decrement(this.props.caption);
  }

  // render方法返回JSX对象，负责渲染内容
  render() {
    // 对象的结构赋值
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        {/* 读取内部状态state对象上计数count的值 */}
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

// 传入参数props类型检测
Counter.PropTypes = {
  caption: PropTypes.string.isRequired
};

// 导出自定义组件Counter
export default Counter;
