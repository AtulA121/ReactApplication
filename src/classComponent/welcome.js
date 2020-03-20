import React from "react";

export default class WelcomeClass extends React.Component{
    constructor(props){
        super();
        console.log("class componenet : ",props);
    }

    render(){
        return(
            <h1>Welcome to classCompoenent... {this.props.userName} </h1>
        )
    }
}