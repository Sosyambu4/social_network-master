import React from "react";
import userPhoto from "../../assets/images/users1.png";
import user from "./User.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";



export class Users extends React.Component<UsersPropsType> {

    constructor(props:UsersPropsType) {
        super(props);

    if (this.props.usersPage.users.length === 0) {
        alert("запрос начался")
         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    this.props.setUsers(response.data.items)
         alert("конец")}
)}
    }

    render () {
        return <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {this.props.usersPage.users.map(u => {
                        console.log(u.photos)
                        return  <div key={u.id}>
                <span>
                    <div>
                        <img src ={u.photos.small ?  u.photos.small: userPhoto} className={user.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                        </div>
                    }

                )}
        </div>
    }
}