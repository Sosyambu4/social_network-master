import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {
    followAC,
    initialStateType,
    SetCarrentAC,
    setUsersAC,
    TotalUsersCountAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number

}

type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount:(totalCount: number) => void;

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export class UserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        console.log(this.props.currentPage)
        /*if (this.props.usersPage.users.length === 0)*/ {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                        this.props.setUsers(response.data.items)
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


        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}/>
            }
                }

const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCarrentAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(TotalUsersCountAC(totalCount))
        },
    }
}

export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(UserContainer);
