import React, { Component } from 'react'

export class Chield extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.greeting("hii parent...")}>Greet Parent</button>
            </div>
        )
    }
}

export default Chield
