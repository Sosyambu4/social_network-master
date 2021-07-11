import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsConteiner";


export type ProfilePropsType =  {
   /* dispatch: (action: ActionsTypes) => void;
    stateProfilePage: ProfileType*/
}

const Profile = () => {
    debugger

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;