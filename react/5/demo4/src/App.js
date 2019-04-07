import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class Button extends Component{
  static contextTypes = {
    themeColor: PropTypes.string,
    handleSwitchColor: PropTypes.func
  }
  render(){
    // const color = this.context.themeColor;
    const {themeColor,handleSwitchColor} = this.context;
    return(
      <div>
        <button style={{color: themeColor}}  onClick={() => this.context.handleSwitchColor("red")}>red</button>
        <button style={{color: themeColor}} onClick={() => this.context.handleSwitchColor("green")}>green</button>
      </div>
    )
  }
}

class Title extends Component{
  static contextTypes = {
    themeColor: PropTypes.string,
    handleSwitchColor: PropTypes.func
  }
  render(){
    const color = this.context.themeColor;
    return(
      <h1 style={{color: color}}>vhfyf</h1>
    )
  }
}

//TypeError: Cannot call a class as a function
// Title.prototype = {
//   title: PropTypes.string
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      themeColor: 'red'
    }
  }
  handleSwitchColor(color){
    this.setState({
      themeColor: color
    })
  }
  //静态类型检查
  static childContextTypes = {
    themeColor: PropTypes.string,
    handleSwitchColor: PropTypes.func
  }
  getChildContext(){
    return{
      themeColor: this.state.themeColor,
      handleSwitchColor: (color) =>{this.handleSwitchColor(color)}
    }
  }
  render() {
    return (
      <div>
        <Title>hhgh</Title>
        <Button></Button>
      </div>
    );
  }
}

export default App;
