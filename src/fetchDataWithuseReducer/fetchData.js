import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function FetchData() {

    const [data,setData]=useState({});
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        console.log("useEffect : ");
        axios.get("https://jsonplaceholder.typicode.com/posts/11").then(res=>{
            setData(res.data);
            setLoading(false);
            setError('');
        }).catch(err=>{
            setData({});
            setLoading(false);
            setError('Something went wrong...');
        });
    },[]);

    return (
        <div>
            {
                loading ? 'Loading...' :
                    error !== '' ? error : data.title
            }
        </div>
    )
}
