import React from 'react';
import Post from './Post/Post';
import {ActionsTypes, ProfileType, StateType} from "../../../redux/state";
import {addPostAC, newTextChangeHandlerAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export type PropsType = ProfileType & {
    dispatch: (action: ActionsTypes) => void;
}


const MyPostsContainer = (props: PropsType) => {
    return (
        <StoreContext.Consumer>{
            (store) => {

                let addPost = () => {
                    props.dispatch(addPostAC(props.newPostText))
                };

                const newTextChangeHandler = (post: string) => {
                    props.dispatch(newTextChangeHandlerAC(post))
                };

                return <MyPosts
                    onAddPost={addPost}
                    newTextChangeHandler={newTextChangeHandler}
                    posts={props.posts}
                    newPostText={props.newPostText}/>
            }
        }
            </StoreContext.Consumer>
            )
            }
            export default MyPostsContainer;

