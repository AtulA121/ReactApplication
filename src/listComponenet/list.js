import React, { Component } from 'react'
import conn from "../service/service";
import Student from './student';

export class List extends Component {

    render() {
        let list=conn.getData().map(obj=>{
            return (
                <Student person={obj} key={obj.id}></Student>
            )
        });
        return <div>{list}</div>;
    }
}

export default List;
