import React from "react";

const welcome=(props)=>{
    console.log("with JSX : ",props);
    return (
        <h1>Welcome JSX... {props.userName}</h1>
    )
}

export default welcome;