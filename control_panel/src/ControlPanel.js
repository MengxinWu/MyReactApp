import React, {Component} from 'react';

// 使用import导入自定义组件Counter
import Counter from './Counter';

// 设定组件样式
const style = {
	margin: '20px'
};

// 创建自定义组件类ControlPanel
class ControlPanel extends Component {
	// 构造函数：绑定成员函数的this对象和初始化内部状态state
	constructor(props) {
		// 子类继承父类必须调用super方法获得父类的this对象
		super(props);

		// 使用bind方法绑定成员函数的this对象
		this.onCounterUpdate = this.onCounterUpdate.bind(this);

		this.initValues = [10, 20, 30];

		// 使用reduce方法(累加器)求数组元素的和
		const initSum = this.initValues.reduce((a, b) => a + b, 0);

		// 初始化内部状态state，设置总和sum的初始值
		this.state = {
			sum: initSum
		};
	}

	// 通过props传递给子组件，在子组件里被调用，改变父组件的内部状态state
	onCounterUpdate(newValue, previousValue) {
		const valueChange = newValue - previousValue;
		// 使用setState方法改变内部状态state，更新总和sum的值
		this.setState({sum: this.state.sum + valueChange});
	}

	// render方法返回JSX对象，由React统一在DOM树上渲染内容
	render() {
		return (
			<div style={style}>
				{/*调用自定义组件Counter，通过props对象向子组件传入参数*/}
				<Counter onUpdate={this.onCounterUpdate} caption="First"  initValue={this.initValues[0]} />
				<Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
				<Counter onUpdate={this.onCounterUpdate} caption="Third"  initValue={this.initValues[2]} />
				<hr />
				{/*读取内部状态state的总和sum的值*/}
				<p>Total Count: {this.state.sum}</p>
			</div>
		);
	}
}

// 导出自定义组件ControlPanel
export default ControlPanel;