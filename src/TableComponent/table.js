import React, { Component } from 'react'

export class CreateTable extends Component {
    constructor(){
        super();
        this.table=[{
            id : 1,
            name : "a121",
            email : "atulpisal.ap@gmail.com"
        }];
    }
    render() {
        return (
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>RollNo</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            this.table.map(entry=>{
                                return (
                                    <tr key={entry.id}>
                                        <td>{entry.id}</td>
                                        <td>{entry.name}</td>
                                        <td>{entry.email}</td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        )
    }
}

export default CreateTable
