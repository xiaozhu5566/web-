//受控组件

import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        // this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        console.log(e.target.value)  //一直是两个数 1 + “输入的第一个字母”
        
        if(e.target.value.length > 10){
            console.log('大于 10')
            return;
        }
        this.setState = ({
                value: e.target.value
           })
        // console.log(this.state.value)   //一直是1
    }

    render() {
        return (
            <input type="text" onChange={(e) => this.handleInput(e)} value={this.state.value}/>
        )
    }
}