import {v1} from "uuid";
import {ActionsTypes} from "./state";

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

const initialState = {
    newPostText: "",
    posts: [
        {id: v1(), message: "Hi,how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 10}]
}

export type ProfileType = {
    posts: Array<PostsType>
    newPostText: string;
}
export type PostsType = {
    message: string;
    likesCount: number;
    id?: string;
}

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default: return state;
    }


}