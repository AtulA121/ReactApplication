import React, { useContext } from 'react'
import CC from './C'
import { UserContext, NestedUserContext } from '../App';

export default function BB() {
    const userName=useContext(UserContext);
    const userFullName=useContext(NestedUserContext);

    return (
        <div>
            {userName} , {userFullName}
            <CC />
        </div>
    )
}
