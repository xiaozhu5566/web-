import React, {Component} from 'react';

export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        console.log("constructor")
    }
    getDerivedStateFromPops(){
        console.log("静态周期函数 - getDerivedStateFromPops");
        return null
    }
    
    render(){
        console.log("render")
        return(
            <div>新周期函数</div>
        )
    }
    componentDidMount(){
        console.log("组件已经加载 - componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("组件是否更新 - shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("组件已经更新 - componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("组件将要卸载 - componentWillUnmount")
    }
}