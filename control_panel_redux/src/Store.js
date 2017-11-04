import {createStore} from 'redux';

// 导入状态更新函数Reducer
import reducer from './Reducer';

// 定义计数count的初始值
const initValues = {
  First: 10,
  Second: 20,
  Third: 30
};

// 调用Redux的createStore函数创建唯一的Store对象
// 第一个参数状态更新函数Reducer，第二个参数是初始状态
const store = createStore(reducer, initValues);

// 导出store对象
export default store;
