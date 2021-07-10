import {combineReducers, createStore} from "redux";
import {addPostAC, newTextChangeHandlerAC, profileReducer} from "./profile-reducer";
import {dialogsReducer, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";
import {
    followAC,
    SetCarrentAC,
    setUsersAC,
    TOGGLE_IS_FETCHINGAC,
    TotalUsersCountAC,
    unfollowAC,
    usersReducer
} from "./users-reducer";

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






let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers);

declare global {
    interface Window {
        store:any;
    }
}

// @ts-ignore
window.store = store;
