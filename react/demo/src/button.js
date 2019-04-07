//外部引入组件

import React, { Component } from 'react';

export default class Button extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            //类方式  组件参数传递 this.props.
           <button>like-{this.props.name}</button>
        )
    }
}

//函数 组件参数传递  props.
const Nav = function(props){
    return(
        <div style={{color: "white", background : "black"}}>
           {props.title}
           {props.children}
        </div>
    )
        
    
}

// export default Nav;

export {Nav}