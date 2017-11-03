import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

// 定义并导出Action构造函数
export const increment = (counterCaption) => {
  // 产生一个Action对象，并派发给Dispatcher对象
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  });
};

export const decrement = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  });
};
