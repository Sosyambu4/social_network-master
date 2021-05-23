import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/state";


function Post(props: PostsType) {
  return (
    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg' />
      {props.message}
      <div>
        <span>like </span> 
        {props.likesCount}
      </div>
    </div>
  )

}

export default Post;