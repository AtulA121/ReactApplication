import React, { Component } from 'react'
import Chield from './chield';

export class Parent extends Component {
    constructor(){
        super();
        this.greeting=this.greeting.bind(this);
    }

    greeting(message){
        console.log(message);
        alert("It's parent : "+message);
    }

    render() {
        return (
            <Chield greeting={this.greeting}></Chield>
        )
    }
}

export default Parent
