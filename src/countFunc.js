import React, {useState} from "react";

function CounterFunc(){
    const [state,setState] = useState({
        count:0,
        name:"name",
    });
    const increment = ()=>{
        setState({...state,count : state.count + 1})
    }
    const decrement = () => {
        setState({...state,count : state.count - 1})
    }
    const reset = () => {
        setState({...state,count:0})
    }
    const change = () => {
        setState({...state, name:"ahamed"})
    }   
    return(
        <>
        <p>value - {state.count}</p>
        <p>name - {state.name}</p>
        <button onClick={change}>name</button>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        </>
    )
}

export default CounterFunc;