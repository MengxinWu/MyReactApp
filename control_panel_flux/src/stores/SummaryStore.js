import {EventEmitter} from 'events';

// 导入全局唯一的Dispatcher对象，派发Action对象，注册回调函数
import AppDispatcher from '../AppDispatcher';

// 导入Action类型
import * as ActionTypes from '../ActionTypes';

// 导入CounterStore对象
import CounterStore from './CounterStore';

// 定义SummaryStore对象变化的事件
const CHANGE_EVENT = 'changed';

// 定义函数计算counterValues对象的和
function computeSummary(counterValues) {
  let summary = 0;
  for(let key in counterValues) {
    if(counterValues.hasOwnProperty(key)) {
      summary += counterValues[key];
    }
  }
  return summary;
}

// 定义SummaryStore对象：不存储状态，实时读取CounterStore的状态，实时计算总和sum的值
const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  // getSummary方法获得总和sum的值
  getSummary: function() {
    // 调用computeSummary函数计算总和sum的值
    return computeSummary(CounterStore.getCounterValues());
  },

  // emitChange方法触发SummaryStore对象发生变化
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // addChangeListener方法添加对SummaryStore对象发生变化的监听，发生变化时执行回调callback
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  // removeChangeListener方法移除对SummaryStore对象发生变化的监听
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// 把Store注册到Dispatcher上，通过register方法注册回调函数
// 所有派发给Dispatcher的action对象都会传递给回调函数
SummaryStore.dispatchToken = AppDispatcher.register((action) => {
  if(action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT) {
    // 调用waitFor方法等待CounterStore对象的dispatchToken代表的回调函数执行完成
    // 必须用完成CounterStore对象上的状态更新才能去更新SummaryStore对象的状态
    AppDispatcher.waitFor([CounterStore.dispatchToken]);

    // 调用SummaryStore对象的emitChange方法触发SummaryStore对象发生变化
    SummaryStore.emitChange();
  }
})

// 导出SummaryStore对象
export default SummaryStore;
