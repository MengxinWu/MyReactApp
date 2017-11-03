import {EventEmitter} from 'events';

// 导入全局唯一的Dispatcher对象，派发Action对象，注册回调函数
import AppDispatcher from '../AppDispatcher';

// 导入Action类型
import * as ActionTypes from '../ActionTypes';

// 定义CounterStore对象变化的事件
const CHANGE_EVENT = 'changed';

// 设置计数count的初始值
const counterValues = {
  First: 10,
  Second: 20,
  Third: 30
};

// 定义CounterStore对象
const CounterStore = Object.assign({}, EventEmitter.prototype, {
  // getCounterValues方法获取计数count的值
  getCounterValues: function() {
    return counterValues;
  },

  // emitChange方法触发CounterStore对象发生变化
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // addChangeListener方法添加对CounterStore对象发生变化的监听，发生变化时执行回调callback
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  // removeChangeListener方法移除对CounterStore对象发生变化的监听
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// 把Store注册到Dispatcher上，通过register方法注册回调函数
// 所有派发给Dispatcher的action对象都会传递给回调函数
// register方法返回dispatchToken用来处理Store之前的依赖关系，在SummaryStore中会用到
CounterStore.dispatchToken = AppDispatcher.register((action) => {
  // 回调函数根据Action对象进行更新状态
  // Action对象的类型字段判断操作（增加或减少）
  if(action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption]++;

    // 调用CounterStore对象的emitChange方法触发CounterStore对象发生变化
    CounterStore.emitChange();
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption]--;
    CounterStore.emitChange();
  }
});

// 导出CounterStore对象
export default CounterStore;
