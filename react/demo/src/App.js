import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//引入外部组件 - button.js组件
import Button, {Nav} from './button';

import Input from './input';

//引入组件 - 类方式
// class Nav extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <nav style={{ color: "white", backgroundColor: "black" }}>nav</nav>
//     )
//   }
// }
//引入组件 - 函数方式
// const Button = function(){
//   return(
//     <button>函数方式</button>
//   )
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      like: true
    }
  }
  hanleClick() {
    this.setState(
      {
        like: !this.state.like
      }
    )
    console.log(this.state.like)
  }

  render() {
    return (
      <div>
        <Nav title={"hello"}> 
          -nih5445
          <h1>hghuihuih</h1>
          <Button name1={"btn1"}></Button>
        </Nav>
        {/* <button style={this.state.like ? { color: 'GRAY' } : { color: 'RED' }} onClick={() => this.hanleClick()}>
          {this.state.like ? "已赞" : "点赞"}
        </button> */}
        <Input></Input>
        <Button name={"btn"}>这里写值不好使</Button>


      </div>

    );
  }
}

export default App;
