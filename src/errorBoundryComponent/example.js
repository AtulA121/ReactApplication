import React, { Component } from 'react'

export class ExampleComponent extends Component {
    render() {
        if(this.props.userName === "a121"){
            throw Error();
        }
        return (
            <div>
                ExampleComponent
            </div>
        )
    }
}

export default ExampleComponent
