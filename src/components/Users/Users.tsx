import React from "react";
import user from "./User.module.css";
import userPhoto from "./../../assets/images/users1.png"
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";


type UsersOwnType =  {
    onPageChanged:(currentPage: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount:(totalCount: number) => void;
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
}


export const Users = (props: UsersOwnType ) => {


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
        {props.users.map(u => {
            console.log(u.photos)
            return  <div key={u.id}>
            <span>
                <div>
                <NavLink  to={'/profile/' + u.id}>
            <img src ={u.photos.small ?  u.photos.small: userPhoto} className={user.userPhoto} />
            </NavLink>
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
