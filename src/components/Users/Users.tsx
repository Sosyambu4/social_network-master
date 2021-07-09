import React from "react";
import {UsersPropsType} from "./UsersContainer";
import user from "./User.module.css";
import userPhoto from "./../../assets/images/users1.png"


export const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? user.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        <button onClick={this.getUser}>Get Users</button>
        {props.users.map(u => {
            console.log(u.photos)
            return  <div key={u.id}>
            <span>
            <div>
            <img src ={u.photos.small ?  u.photos.small: userPhoto} className={user.userPhoto} />
            </div>
            <div>
        {u.followed
            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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
