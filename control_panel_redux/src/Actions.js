// 导入Action类型
import * as ActionTypes from './ActionTypes';

// 导出Action构造函数返回Action对象
// Flux的构造函数产生Action对象并立即通过Dispatcher派发出去
export const increment = (counterCaption) => {
  // 直接返回Action对象
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
