import React from 'react';
import {addPostAC, newTextChangeHandlerAC, ProfileType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, AppStoreType} from "../../../redux/redux-store";

/*export type PropsType = ProfileType & {
    dispatch: (action: ActionsTypes) => void;
}*/

type mapStateToPropsType = ProfileType
type mapDispatchToProps = {
    addPost: () => void
    newTextChangeHandler: (post: string) => void
}
export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToProps


const mapStateToProps = (state: AppStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): mapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        newTextChangeHandler: (post: string) => {
            dispatch(newTextChangeHandlerAC(post))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


