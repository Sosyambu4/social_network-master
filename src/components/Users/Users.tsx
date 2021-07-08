import React from "react";
import userPhoto from "../../assets/images/users1.png";
import user from "./User.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";



export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        console.log(this.props.currentPage)
            /*if (this.props.usersPage.users.length === 0)*/ {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                    .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    }
                )}
        }
     onPageChanged = (currentPage: number) => {
    this.props.setCurrentPage(currentPage)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items);
         });

}
    render () {

        let pagesCount = Math.ceil( this.props.totalCount / this.props.pageSize)
        const pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                { pages.map( p => {
                   return <span key={p} className={this.props.currentPage === p ? user.selectedPage : ''}
                                onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                })}

            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {this.props.users.map(u => {
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