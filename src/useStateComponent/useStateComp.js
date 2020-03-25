import React, { useState } from 'react'

export default function UseStateComp() {

    const [count,incCount]=useState(0);
    
    const incByFive = ()=>{
        incCount(prevCount => prevCount+5);
    }

    return (
        <div>
            <button onClick={()=>incCount(count+1)}>count {count}</button>
            <button onClick={incByFive}>count by 5 => {count}</button>
        </div>
    )
}
