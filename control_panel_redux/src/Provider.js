import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 创建自定义组件Provider，提供context供所有下层组件访问
class Provider extends Component {
  // getChildContext内置方法返回表示context的对象，这里为Store对象
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  // 组件本身不渲染内容，直接渲染子组件
  render() {
    return this.props.children;
  }
}

// Provider组件props参数类型检测
Provider.propTypes = {
  store: PropTypes.object.isRequired
};

// 定义Provider组件的childContextTypes属性，必须和getChildContext方法对应
Provider.childContextTypes = {
  store: PropTypes.object
};

// 导出自定义组件Provider
export default Provider;
