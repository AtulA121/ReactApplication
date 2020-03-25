import React, { useReducer } from 'react'

let initialCount=0;
const reducer= (state,action)=>{
    switch (action){
        case 'inc' : 
            return state+1;
        case 'desc' : 
            return state-1;
        case 'reset' : 
            return initialCount;
        default : 
        return state+5;
    }
}

export default function UseReducerComp() {
    const [count,reduceCount]=useReducer(reducer,initialCount);
    return (
        <div>
            count : {count}
            <button onClick={()=>reduceCount('inc')}>Increment</button>
            <button onClick={()=>reduceCount('desc')}>Decrement</button>
            <button onClick={()=>reduceCount('reset')}>Reset</button>
        </div>
    )
}
