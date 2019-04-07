import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test'
import Demo from './demo';

//第三方模块 - prop-type(类型检查)
import PropType from 'prop-types';

class Title extends Component{
  constructor(props){
    super(props)
  }
  static PropType = {
    value: PropType.string
  }
  static defaultProps = {
    value: "默认参数"
  }
  render(){
    return(
      <h2>{this.props.value}</h2>
    )
  }
}

//es6写法
// Title.defaultProps = {
//   value:"默认"
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRenderState: true
    }
  }
  render() {
    return (
      <div>
        {this.state.isRenderState ? <Demo></Demo> : "不渲染"}
        APP
        <button onClick={() => {this.setState({})}}>App 更新</button>
        <button onClick={() => {this.setState({isRenderState: !this.state.isRenderState})}}>切换得脉</button>
        <br/>
        <Title value={555}>111</Title>
      </div>
    );
  }
}

export default App;
