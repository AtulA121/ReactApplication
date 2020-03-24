import React, { Component } from 'react'
import C from './c'
import userContext from './context'

export class B extends Component {
    static contextType=userContext;
    render() {
        return (
            <div>
                {this.context.age}
              <C />  
            </div>
        )
    }
}

// B.contextType=userContext;

export default B
