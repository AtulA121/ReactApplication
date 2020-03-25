import React, { Component } from 'react'
import ReuseComp from './reuse';
import conn from "../service/service"

export class TableComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 1,
             data : conn.getData(),
             dispatch : this.dispatch
        }
    }
    
    dispatch = (id)=>{
        console.log("dispatch from others... : ",id,this.state);
    }

    render() {
        return (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ReuseComp data={this.state.data} dispatch={this.dispatch}/>
                        {/* <ReuseComp data={this.state.data} dispatch={this.state.dispatch}/> */}
                    </tbody>
                </table>
        )
    }
}

export default TableComp
