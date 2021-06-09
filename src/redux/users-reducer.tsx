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

type initialStateType = {
    users: Array<UserType>
}


export const FOLLOW = (userId:number) => {
    return {
        type: "FOLLOW",
        userId:userId
    } as const
}
export const UNFOLLOW = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId:userId
    } as const
}

export const initialState = {
    users: [
        /*{id: v1(),followed: false , fullName: 'Wladyslaw', status:'i am a boss', location: {city:'Gdansk', country:'Poland'}},
        {id: v1(),followed: true , fullName: 'Andrew', status:'i am a boss', location: {city:'Kharkov', country:'Ukraine'}},
        {id: v1(),followed: true , fullName: 'Sasha', status:'i am a boss', location: {city:'Minsk', country:'Belarus'}},
        {id: v1(),followed: false , fullName: 'Bogdan', status:'i am a boss', location: {city:'Gdansk', country:'Poland'}},*/
        ]
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
                })};

        default: return state;
    }
}
export const followAC = (userId:number) => ({type: FOLLOW, userId});
export const unfollowAC = (userId:number) => ({type: UNFOLLOW, userId })