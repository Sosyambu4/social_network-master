import {v1} from "uuid";
import {ActionsTypes} from "./state";

export const UPDATE_NEW_MESSAGE_BODY = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
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
type DialogType = {
    name: string;
    id: string;
}
type MessageType = {
    message: string;
    id?: string;
}
export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageBody: string
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {

    let stateCopy ;
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            stateCopy = {...state,
                newMessageBody: action.body
            };
            return stateCopy;
        case "SEND_MESSAGE":
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: "",
                messages:[...state.messages, {id: v1(), message: body}]
            };
            /*stateCopy.newMessageBody = "";
            stateCopy.messages.push({id: v1(), message: body});*/
            return stateCopy;
        default: return state;
    }

    return state;
}