import React from "react";
import {v1} from "uuid";

import {addPostAC, newTextChangeHandlerAC, profileReducer} from "./profile-reducer";
import {dialogsReducer, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";
import {followAC, SetCarrentAC, setUsersAC, TOGGLE_IS_FETCHINGAC, TotalUsersCountAC, unfollowAC} from "./users-reducer";

export type DialogItemType = {
    id: string;
    name: string;
}
export type StateType = {
    profilePage: ProfileType;
    messagesPage: DialogsPageType;

}
export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageBody: string
}
export type DialogType = {
    name: string;
    id: string;

}
export type MessageType = {
    message: string;
    id?: string;


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
export type StoreType = {
    state: StateType;
    getState: () => StateType;
    subscriber: (observer: () => void) => void;
    callSubscriber: () => void;
    dispatch: (action: ActionsTypes) => void;

}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof newTextChangeHandlerAC> |
    ReturnType<typeof UPDATE_NEW_MESSAGE_BODY> |
    ReturnType<typeof SEND_MESSAGE> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof SetCarrentAC> |
    ReturnType<typeof TotalUsersCountAC> |
    ReturnType<typeof TOGGLE_IS_FETCHINGAC>






export const store: StoreType = {
    state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: v1(), message: "Hi,how are you?", likesCount: 12},
                {id: v1(), message: "It's my first post", likesCount: 10}],
        },
        messagesPage: {
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-kamasutra'},
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Yo'}],
            dialogs: [
                {id: v1(), name: 'Tomek'},
                {id: v1(), name: 'Kamila'},
                {id: v1(), name: 'Pzemek'},
                {id: v1(), name: 'Pawel'},
                {id: v1(), name: 'Karolina'},
                {id: v1(), name: 'Wladyslaw'}
            ],
             newMessageBody: "",
        }
    },
    callSubscriber() {
        console.log('Test')
    },
    subscriber(observer) {
        this.callSubscriber = observer
    },
    getState() {
        return this.state
    },
    dispatch(action) { //type: 'ADD-POST'}
debugger
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.messagesPage = dialogsReducer(this.state.messagesPage, action)
        this.callSubscriber();

    }
}


export default store;