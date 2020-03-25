import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

export default function AxiosFunctional() {

    const [id,setId]=useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        });
    },[id]);

    return (
        <div>
            <input type="text" value={id} onChange={$event=>setId($event.target.value)}/>
        </div>
    )
}
