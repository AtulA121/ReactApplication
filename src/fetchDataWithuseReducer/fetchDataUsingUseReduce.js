import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios';

const initialState={
    data : {},
    error : '',
    loading : true
}

const reducer = (state,option)=>{
    console.log(option);
    switch(option.type){
        case 'FETCH_SUCCESS' : 
            return {
                loading : false,
                error : '',
                data : option.payload,
            }
        case 'FETCH_ERROR' : 
            return {
                loading : false,
                data : {},
                error : 'Something went wrong.'
            }
        default : 
            return state;
    }
}

export default function FetchDataUsingUseReduce() {
    const [obj,dispatchRequest]=useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res=>{
            dispatchRequest({type : "FETCH_SUCCESS",payload : res.data});
        }).catch(err=>{
            dispatchRequest({type : "FETCH_ERROR",payload : err});
        });
    },[]);

    return (
        <div>
            {
                obj.loading ? 'Loading...' :
                    obj.error !== '' ? obj.error : obj.data.title
            }
        </div>
    )
}
