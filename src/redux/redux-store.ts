import {combineReducers, createStore} from "redux";
import {addPostAC, newTextChangeHandlerAC, profileReducer} from "./profile-reducer";
import {dialogsReducer, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";
import {follow,
    setCarrentPage, setToggle_is_Fetching, setTotalUsersCount, setUsers,
    unfollow,
    usersReducer
} from "./users-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof newTextChangeHandlerAC> |
    ReturnType<typeof UPDATE_NEW_MESSAGE_BODY> |
    ReturnType<typeof SEND_MESSAGE> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCarrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setToggle_is_Fetching>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers);

declare global {
    interface Window {
        store: any;
    }
}

// @ts-ignore
window.store = store;
