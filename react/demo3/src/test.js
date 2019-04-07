import React, { Component } from 'react';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }
        console.log("constructor")
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }
    //组件加载
    componentWillMount(){
        // console.log(this)  //Test 组件
        this.timeId = setInterval(() => this.tick(),1000)

        console.log("组件将要加载 - componentWillMount")
    }
    componentDidMount(){
        console.log("组件已经加载 - componentDidMount")
    }

    //更新生命周期
    componentWillReceiveProps(){
        console.log("组件将要接受参数 - componentWillReceiveProps")
    }
    shouldComponentUpdate(){
        console.log("组件是否更新 - componentWillUpdate")
        
        //warning: shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.
        return true;   //必须return booolean
        
    }
    componentWillUpdate(){
        console.log("组件将要更新 - componentWillUpdate")
    }
    // getSnapshotBeforeUpdate(){
    //     console.log("在更新前获取快照 - componentWillUpdate")
    // }
    componentDidUpdate(){
        console.log("组件已经更新 - componentDidUpdate")
    }

    //卸载
    componentWillUnmount(){
        console.log("组件将要卸载 - componentWillUnmount");
        clearInterval(this.timeId)
    }
    render(){
        console.log("render")
        return(
            <div style={{border: "1px solid black"}}>生命周期函数Test
                <br/>
                {this.state.time.getSeconds()}
                <br/>
                <button onClick={() => this.setState({})}>this.setState更新测试</button>
                <button onClick={() => this.forceUpdate()}>this.forceUpdate更新测试</button>
            </div>
        )
    }
}

export default Test;