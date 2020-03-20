import React, { Component } from 'react'

export class Student extends Component {
    constructor(props){
        super();
        console.log(props);
    }

    render() {
        return (
            <div>{this.props.person.name} , {this.props.person.age} , {this.props.person.game}</div>
        )
    }
}

export default Student
