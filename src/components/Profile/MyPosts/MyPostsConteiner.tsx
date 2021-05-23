import React from 'react';
import Post from './Post/Post';
import {ActionsTypes, ProfileType} from "../../../redux/state";
import {addPostAC, newTextChangeHandlerAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

export type PropsType = ProfileType & {
    dispatch: (action: ActionsTypes) => void;
}


const MyPostsContainer = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    };

    const newTextChangeHandler = (post: string) => {
        props.dispatch(newTextChangeHandlerAC(post))
    }

    return (
        <MyPosts
            onAddPost={addPost}
            newTextChangeHandler={newTextChangeHandler}
            posts={props.posts}
            newPostText={props.newPostText}/>
    )
}
export default MyPostsContainer;

