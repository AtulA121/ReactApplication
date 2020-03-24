import React, { Component } from 'react'

export class AccessDomeElement extends Component {
    constructor(){
        super();
        
        //first approch
        this.inputRef=React.createRef();

        //second approch
        this.cbRef=null;
        this.setCallback=(element)=>{
            this.cbRef=element;
        }
    }

    componentDidMount(){
        //first approch
        this.inputRef.current.focus();

        //second approch
        if(this.cbRef){
            this.cbRef.focus();
        }
    }

    handleSubmit=($event)=>{
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                {/* first approch */}
                <input type="text" ref={this.inputRef}></input>

                {/* second approch */}
                <input type="text" ref={this.setCallback}></input>

                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default AccessDomeElement