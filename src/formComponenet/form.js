import React, { Component } from 'react'
import UserFormName from "./userFormName";

export class UserForm extends Component {
    constructor(){
        super();
        this.state={
            userName : '',
            email : '',
            degree : ''
        };

        this.userNames=UserFormName.getUserNames();
        // this.handleInputs=this.handleInputs.bind(this);
    }

    // handleInputs($event){
    //     console.log($event.target.value," , ",this);
    //     this.setState({
    //         userName : $event.target.value
    //     });
    // }

    handleInputs = ($event)=>{
        switch($event.target.name){
            case this.userNames[0] : 
                console.log("input is : ",this.userNames[0]);
                this.setObjectState({
                    'userName' : $event.target.value
                });
                break;
            case this.userNames[1] : 
                console.log(this.userNames[1]);
                this.setObjectState({
                    'email' : $event.target.value
                });
                break;
            case this.userNames[2] : 
                console.log(this.userNames[2]);
                this.setObjectState({
                    'degree' : $event.target.value
                });
                break;
            default : 
                break;
        }
    }

    setObjectState(obj){
        this.setState(obj);
    }

    handleSubmit = ($event)=>{
        console.log($event);
        $event.preventDefault();
    }

    render() {
        //disstructuring the object.
        const {userName, email, degree}=this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="userName" id="userName" value={userName} onChange={this.handleInputs}></input>
                    </div>
                    <div>
                        <input type="text" name="email" id="email" value={email} onChange={this.handleInputs}></input>
                    </div>
                    <div>
                        <select name="degree" value={degree} onChange={this.handleInputs}>
                            <option value="">Select degree</option>
                            <option value="bcs">BCS</option>
                            <option value="mcs">MCS</option>
                            <option value="phd">PHD</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm
