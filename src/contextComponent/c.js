import React, { Component } from 'react'
import { UserConsumer } from './context'

export class C extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (obj)=>{
                    return <div>Hello -{obj.id} , {obj.name}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default C
