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
    photos: {small: string | null, large: string | null}
    followed: boolean
    name: string
    status: string
    location: UsersLocation
}

export type initialStateType = {
    users: Array<UserType>
}


export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const initialState: initialStateType = {
    users: [/*
        {id: 1,followed: false , fullName: 'Wladyslaw', status:'i am a boss', location: {city:'Gdansk', country:'Poland'}},
        {id: 2,followed: true , fullName: 'Andrew', status:'i am a boss', location: {city:'Kharkov', country:'Ukraine'}},
        {id: 3,followed: true , fullName: 'Sasha', status:'i am a boss', location: {city:'Minsk', country:'Belarus'}},
        {id: 4,followed: false , fullName: 'Bogdan', status:'i am a boss', location: {city:'Gdansk', country:'Poland'}},*/
    ]
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
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

