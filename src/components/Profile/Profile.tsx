import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsConteiner";


export type ProfilePropsType =  {
   /* dispatch: (action: ActionsTypes) => void;
    stateProfilePage: ProfileType*/
}

const Profile = (props: ProfilePropsType) => {
    debugger

    return (
        <div className={s.profile}>
            <ProfileInfo/>
           {/* <MyPostsConteiner
                posts={props.stateProfilePage.posts}
                newPostText={props.stateProfilePage.newPostText}
                dispatch={props.dispatch}
            />*/}
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;