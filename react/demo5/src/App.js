import React, { Component } from 'react';
import './App.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

var images = [img1,img2,img3];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }
_goNext(){
  var {index} = this.state;
  if(index == images.length - 1){
      index = 0;
  }else{
      index ++;
  }
  this.setState({
    index: index
  })
}
_goPrev(){
  var {index} = this.state;
  if(index == 0){
      index = images.length - 1;
  }else{
      index --;
  }
  this.setState({
    index: index
  })
}
  render() {
    var {index} = this.state;
    return (
      <div className={"wrap"}>
        <ul className={"list"}>
          {
            images.map((item,i) =>{
              return(
                // 必须有个key
                <li className={`item ${index == i ? "active" : ""}`} key={i}> <img src={item}/> </li>
              )
            })
          }
         
        </ul>
        <button className={"btn left"} onClick={() => this._goPrev()}> &lt; </button>
        <button className={"btn right"} onClick={() => this._goNext()}> &gt; </button>
      </div>
    );
  }
}

export default App;
