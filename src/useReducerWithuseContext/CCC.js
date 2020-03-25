import React, { useContext } from 'react'
import {CountContext} from "../App"

export default function CCC() {
    const obj=useContext(CountContext);
    return (
        <div>
            count : {obj.count}
            <button onClick={()=>obj.countDispatch('inc')}>Increment</button>
            <button onClick={()=>obj.countDispatch('desc')}>Decrement</button>
            <button onClick={()=>obj.countDispatch('reset')}>Reset</button>
        </div>
    )
}
