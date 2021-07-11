import {v1} from "uuid";
import state, {ActionsTypes} from "./state";
import preloader from "../assets/images/Spinner-1.8s-200px.svg";
import React from "react";

export type UsersLocation = {
    city: string
    country: string
}
export type FindUsersPage = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    photos: { small: string | null, large: string | null }
    followed: boolean
    name: string
    status: string
    location: UsersLocation
}

export type initialStateType = {
    users: Array<UserType>,
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean


}


export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET_TOTAL-USERS",
        count:totalCount
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export const setToggle_is_Fetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}

export let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true

};


export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE":
            console.log(action.currentPage)
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET_TOTAL-USERS":
            return {
                ...state, totalCount: action.count
            }
            case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

