import React from "react";
import {UserType} from "../../redux/users-reducer";

export const Users = (props:UserType) => {
    if (props.usersPage.users.length === 0)
    {}
    return <div>
        USERS WILL BE HERE
    </div>
}