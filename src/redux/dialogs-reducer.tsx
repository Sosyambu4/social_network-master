import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./state";

export const UPDATE_NEW_MESSAGE_BODY = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const SEND_MESSAGE = () => {
    return {
        type:"SEND_MESSAGE"
    } as const
}

const initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: v1(), message: body});
            return state;
        default: return state;
    }

    return state;
}