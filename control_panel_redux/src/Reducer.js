import * as ActionTypes from './ActionTypes';

// 导出状态更新函数Reducer，相当于Flux中Dispatcher中注册的回调函数
// Reducer函数是纯函数，根据state和action对象返回一个新的状态对象
// 不能直接修改state和action对象
export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      // 使用扩展操作符返回一个新对象，不改变原来的state对象
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state;
  }
}
