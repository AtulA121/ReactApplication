import React, { useReducer } from 'react'

const initialState={
    firstCount : 0
};

const reducer = (state,action)=>{
    switch (action.type){
        case 'inc' : 
            return {...state, firstCount : state.firstCount+action.value };
        case 'desc' : 
            return {...state, firstCount : state.firstCount-action.value };
        case 'reset' : 
            return initialState;
        default : 
            return state;
    }
}

export default function UseReducerWithObjectComp() {
    const [count,reduceCount] = useReducer(reducer,initialState);
    return (
        <div>
            count : {count.firstCount}
            <button onClick={()=>reduceCount({type : 'inc',value : 5})}>Increment</button>
            <button onClick={()=>reduceCount({type : 'desc', value : 5})}>Decrement</button>
            <button onClick={()=>reduceCount({type : 'reset',value : 0})}>Reset</button>
        </div>
    )
}
