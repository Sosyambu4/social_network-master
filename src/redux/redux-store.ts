import {combineReducers, createStore} from "redux";
import {addPostAC, newTextChangeHandlerAC, profileReducer} from "./profile-reducer";
import {dialogsReducer, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof newTextChangeHandlerAC> |
    ReturnType<typeof UPDATE_NEW_MESSAGE_BODY> |
    ReturnType<typeof SEND_MESSAGE>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers);