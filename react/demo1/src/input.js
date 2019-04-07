import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
        super()
        this.state = {
            value: ""
        }
    }
    handleInput(e){
        if(e.target.value.length > 10){
            return
        }
        console.log(this.state.value)
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return(
            <input type="text" onChange={e =>{this.handleInput(e)}} value={this.state.value}/>
        )
    }
}

export default Input;