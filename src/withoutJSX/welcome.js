import React from "react";

const welcome=(props)=>{
    console.log("without JSX : ",props);
    return React.createElement('div',
        {id : "a121", className : "a121"},
        React.createElement("h1",null,"Welcome without JSX... "+props.userName)
    );
}

export default welcome;