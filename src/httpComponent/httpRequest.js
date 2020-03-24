import React, { Component } from 'react'
import axios from 'axios';

export class HttpRequestComp extends Component {
    constructor(props){
        super(props);
        this.state={
            array : [],
            errMsg : false
        }
        this.url="https://jsonplaceholder.typicode.com/posts";
    }

    componentDidMount(){
        axios.get(this.url).then(res=>{
            this.setState({
                array : res.data
            });
        }).catch(err=>{
            this.setState({
                errMsg : true
            });
        });

        axios.post(this.url,{
            id : 100,
            userId : 1,
            title : "a121",
            body : "football player..."
        }).then(res=>{
            console.log("post request response : ",res);
        }).catch(err=>{
            console.log("post request error : ",err);
        });

    }

    render() {
        const {array, errMsg} = this.state;
        return (
            <div>
                {
                    array ? array.map(obj=>{
                        return (
                            <div key={obj.id}>
                                {obj.title}
                            </div>
                        );
                    }) : null
                }
                {
                    errMsg ? <div>Something went wrong...</div> : null
                }
            </div>
        )
    }
}

export default HttpRequestComp
