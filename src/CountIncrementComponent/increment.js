import React, { Component } from 'react'

export class Increment extends Component {

    constructor(){
        super();
        this.state={
            count : 0
        };
    }

    incrementCount = ()=>{
        this.setState(prevState=>{
            return {count : prevState.count+1}
        });
    }

    render() {
        return (
            <div>
                <button onClick={ ()=> this.incrementCount() }>increment {this.state.count}</button>
            </div>
        )
    }
}

export default Increment
