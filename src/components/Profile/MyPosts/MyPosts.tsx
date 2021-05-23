import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfileType} from "../../../redux/state";

export type PropsType = ProfileType & {
    onAddPost: () => void
    newTextChangeHandler: (post: string) => void
}


const MyPosts = (props:PropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let onAddPost = () => {
        props.onAddPost()
    };

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let post = e.currentTarget.value
        props.newTextChangeHandler(post)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}
                              value={props.newPostText}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>)
}

export default MyPosts;