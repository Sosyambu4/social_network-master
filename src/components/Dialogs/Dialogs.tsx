import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";
import {
    ActionsTypes,
    DialogsPageType,


} from "../../redux/state";
import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "../../redux/dialogs-reducer";

export type DialogsPropsType = {
    stateMessagesPage: DialogsPageType;
    dispatch: (action: ActionsTypes) => void;
    onChange: string;
    onNewMessageChange: (message: string) => void
    addMessage: () => void
};



const Dialogs = (props: DialogsPropsType) => {

    let state = props.stateMessagesPage

    let messagesElements = props.stateMessagesPage.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.stateMessagesPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let newMessageBody = props.stateMessagesPage.newMessageBody;

    const addMessage = () => props.addMessage();

   /* const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch((UPDATE_NEW_MESSAGE_BODY)(e.currentTarget.value))
    }*/
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.onNewMessageChange(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody}
                    onChange ={onNewMessageChange}>
                </textarea></div>
             <div>
                <button onClick={addMessage}>+</button>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;