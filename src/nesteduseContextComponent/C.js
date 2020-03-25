import React from 'react'
import { UserContext, NestedUserContext } from '../App'

export default function CC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (userName)=>{
                        return (
                            <NestedUserContext.Consumer>
                                {
                                    (userFullName)=>{
                                        return (
                                            <div>
                                                userName : {userName} , {userFullName}
                                            </div>
                                        )
                                    }
                                }
                            </NestedUserContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
