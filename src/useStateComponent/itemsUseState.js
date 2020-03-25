import React, { useState, useEffect } from 'react'

export default function ItemsUseState() {
    const [items,setItem]=useState([]);

    function fillItem(){
        setItem([...items,{
            id : items.length+1,
            number : Math.floor(Math.random * 10)+1
        }]);
    }

    useEffect(()=>{
        document.title=`Clicked : ${items.length}`
    })

    return (
        <div>
            <button onClick={fillItem}>Add Item</button>
            <ul>
                {
                    items.map(item =>{
                        return (
                            <li key={item.id}>{item.id}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
