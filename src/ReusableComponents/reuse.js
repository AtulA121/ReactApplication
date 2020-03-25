import React, { Component } from 'react'

export class ReuseComp extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                this.props.data.map(obj=>{
                    return (
                        <tr key={obj.id} onClick={()=>this.props.dispatch(obj.id)}>
                            <td>{obj.id}</td>
                            <td>{obj.title}</td>
                        </tr>
                    )
                })
        )
    }

}

export default ReuseComp
