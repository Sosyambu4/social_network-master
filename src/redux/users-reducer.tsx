import {v1} from "uuid";
import state, {ActionsTypes} from "./state";

export type UsersLocation = {
    city: string
    country: string
}
export type FindUsersPage = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocation
}

export type initialStateType = {
    users: Array<UserType>
}


export const followAC = (userId:number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollowAC = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsersAC = (users:Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const initialState = {
    users: [
        /*{id: v1(),followed: false , fullName: 'Wladyslaw', status:'i am a boss', location: {city:'Gdansk', country:'Poland'}},
        {id: v1(),followed: true , fullName: 'Andrew', status:'i am a boss', location: {city:'Kharkov', country:'Ukraine'}},
        {id: v1(),followed: true , fullName: 'Sasha', status:'i am a boss', location: {city:'Minsk', country:'Belarus'}},
        {id: v1(),followed: false , fullName: 'Bogdan', status:'i am a boss', location: {city:'Gdansk', country:'Poland'}},
        */]
}


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
                ...state,
                users:[...state.users, ...action.users]
            }

        default: return state;
    }
}

