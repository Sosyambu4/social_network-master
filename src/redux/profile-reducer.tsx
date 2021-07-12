import {v1} from "uuid";
import state, {ActionsTypes} from "./state";

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const newTextChangeHandlerAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const setUsersProfile = (profile: userProfileInfo | null ) => {
    return {
        type: 'SET_USERS_PROFILE',
        profile: profile
    } as const
}

const initialState = {
    newPostText: "",
    posts: [
        {id: v1(), message: "Hi,how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 10}],
    profile: null
}

export type userProfileInfo = {
    aboutMe: string | null;
    contacts: {vk: string},
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userId: number;
    photos: {
        small: string;
        large: string;
    }
}


export type ProfileType = {
    posts: Array<PostsType>
    newPostText: string;
    profile: userProfileInfo | null;


}
export type PostsType = {
    message: string;
    likesCount: number;
    id?: string;
}

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes):ProfileType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return    {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
            /*stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = "";*/

    }
        case 'UPDATE-NEW-POST-TEXT': {
            return  {...state,
                newPostText: action.newText
            };
    }
        case 'SET_USERS_PROFILE' : {
            return {...state, profile: action.profile}
        }
        default: return state;
    }


}