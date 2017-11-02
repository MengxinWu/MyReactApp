import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 设定组件样式 
const buttonStyle = {
	margin: '10px'
};

// 创建自定义组件类Counter
class Counter extends Component {
	// 构造函数，装载过程中构造函数第一个被调用
	constructor(props) {

		// 子类继承父类必须调用super()方法获得父类的this对象
		super(props);

		console.log('enter constructor: ' + this.props.caption);

		// 使用bind()方法绑定成员函数的this对象
		this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
		this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

		// 初始化内部状态state，设定计数count的初始值为传入的props对象的initValue
		this.state = {
			count: props.initValue
		};
	}

	// 生命周期函数：组件装载阶段在render方法之前
	componentWillMount() {
		console.log('enter componentWillMount: ' + this.props.caption);
	}

	// 生命周期函数：组件装载阶段在render方法之后
	// 不是紧跟着render方法，由React统一进行调用
	componentDidMount() {
		console.log('enter componentDidMount: ' + this.props.caption);
	}

	// 生命周期函数：组件更新阶段，在render方法之前
	// 判断组件是否需要重新渲染，返回布尔值决定
	shouldComponentUpdate(nextProps, nextState) {
		console.log('enter shouldComponentUpdate: ' + this.props.caption);
		return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
	}

	// 生命周期函数：组件更新阶段在render方法之前
	componentWillUpdate() {
		console.log('enter componentWillUpdate: ' + this.props.caption);
	}

	// 生命周期函数：组件更新阶段在render方法之后
	componentDidUpdate() {
		console.log('enter componentDidUpdate: ' + this.props.caption);
	}

	// 生命周期函数：组件卸载阶段
	componentWillUnmount() {
		console.log('enter componentWillUnmount: ' + this.props.caption);
	}

	onClickIncrementButton() {
		this.updateCount(true);
	}

	onClickDecrementButton() {
		this.updateCount(false);
	}

	updateCount(isIncrement) {
		const previousValue = this.state.count;
		const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

		// 使用setState方法改变内部状态state，更新计数count的值
		this.setState({count: newValue});

		// 调用传入的props对象的onUpdate函数将数据传递给父组件
		this.props.onUpdate(newValue, previousValue);
	}

	// render方法返回JSX对象，由React统一在DOM树上渲染内容
	render() {
		// 对象的解构赋值，等价于caption=this.props.caption
		const {caption} = this.props;

		return (
			<div>
				<button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
				<button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
				{/*读取内部状态state的计数count的值*/}
				<span>{caption} count: {this.state.count}</span>
			</div>
		);
	}
}

// props参数类型检测
Counter.PropTypes = {
	caption: PropTypes.string,
	initValue: PropTypes.number,
	onUpdate: PropTypes.func
};

// 声明props的默认值
Counter.defaultProps = {
	initValue: 0,
	// f => f 无意义函数
	onUpdate: f => f
};

// 导出自定义组件Counter
export default Counter;