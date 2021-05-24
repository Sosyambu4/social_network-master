import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";
import store, {
    ActionsTypes,
    DialogsPageType,


} from "../../redux/state";
import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "../../redux/dialogs-reducer";
import {newTextChangeHandlerAC} from "../../redux/profile-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export type DialogsPropsType = {
    stateMessagesPage: DialogsPageType;
    dispatch: (action: ActionsTypes) => void;
    onChange: string;

};


const DialogsConteiner = (props: DialogsPropsType) => {

    return (
    <StoreContext.Consumer>
        {
        (store) => {

        const addMessage = () => props.dispatch(SEND_MESSAGE());

        const onNewMessageChange = (message: string) => {
            props.dispatch(UPDATE_NEW_MESSAGE_BODY(message))
        };


        return <Dialogs
            onNewMessageChange={onNewMessageChange}
            addMessage={addMessage}
            dispatch={props.dispatch}
            onChange={props.onChange}
            stateMessagesPage={props.stateMessagesPage}/>
    }
    }
    </StoreContext.Consumer> )}




export default DialogsConteiner;