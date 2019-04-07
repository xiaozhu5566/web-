import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input'

class Btn extends Component {
  constructor() {
    super()
  }
 
  render() {
    const color = this.props.themeColor;
    return (
      <div>
        <button onClick={() => this.props.handleClick('red')} style={{ color: color }}>btn1</button>
        <button onClick={() => this.props.handleClick('green')} style={{ color: color }}>btn2</button>
      </div>
    )
  }
}

class Title extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const color = this.props.themeColor;
    return (
      <h1 style={{color: color}}>标题</h1>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      themeColor: 'gray',
      value: ''
    }
  }
  handleClick(color) {
    this.setState({
      themeColor: color
    })
  }

  handleInput(e){
    if(e.target.value.length > 10){
      alert("输入内容大于10")
      return;
    }
    this.setState({
      value: e.target.value
    })
    // console.log(this.state.value)
  }

  render() {
    return (
      <div className="App">
        <h1>app</h1>
        <Title themeColor={this.state.themeColor} handleClick={(color) =>{this.handleClick(color)}}></Title>
        <Btn themeColor={this.state.themeColor} handleClick={(color) =>{this.handleClick(color)}}></Btn>
        {/* <input type="text" onChange={(e) =>{this.handleInput(e)}} value={this.state.value}/> */}
        <Input></Input>
      </div>
    );
  }
}

export default App;
