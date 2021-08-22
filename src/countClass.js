import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increment = () =>{
        this.setState({count:this.state.count + 1})
    }
    decrement = () =>{
        this.setState({count:this.state.count - 1})
    }
    reset = () =>{
        this.setState({count:0})
    }

    render(){
        return(
            <>
            <p>value - {this.state.count}</p>
            <button onClick = {this.increment}>Increment</button>
            <button onClick = {this.decrement}>decrement</button>
            <button onClick = {this.reset}>reset</button>
            </>
        )
    }
}

export default Counter;