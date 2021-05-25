import React from "react";
import {DialogsPageType, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {ActionsTypes, AppStoreType} from "../../redux/redux-store";

/*export type DialogsPropsType = {
    stateMessagesPage: DialogsPageType;
    dispatch: (action: ActionsTypes) => void;
    onChange: string;

};*/

type mapStateToPropsType = DialogsPageType
type mapDispatchToProps = {
    onNewMessageChange: (message: string) => void
    addMessage: () => void
}
export type DialogPagePropsType = mapStateToPropsType & mapDispatchToProps

let mapStateToProps = (state: AppStoreType): mapStateToPropsType => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageBody: state.dialogsPage.newMessageBody
    }
};
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): mapDispatchToProps => {
    return {
        onNewMessageChange: (message: string) => {
            dispatch(UPDATE_NEW_MESSAGE_BODY(message))
        },
        addMessage: () => {
            dispatch(SEND_MESSAGE())
        }
    }
};


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


