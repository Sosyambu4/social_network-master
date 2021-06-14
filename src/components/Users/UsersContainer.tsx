import React from "react";
import {AppStoreType} from "../../redux/redux-store";
import {FindUsersPage, followAC, initialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";


type MapStatePropsType = {
    usersPage: initialStateType

}

type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;

}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
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
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
