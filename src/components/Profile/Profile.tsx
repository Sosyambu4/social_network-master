import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsConteiner";
import {ProfileOwnType} from "./ProfileContainer";


export type ProfilePropsType =  {
   /* dispatch: (action: ActionsTypes) => void;
    stateProfilePage: ProfileType*/
}

const Profile = (props:ProfileOwnType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} setUsersProfile={props.setUsersProfile} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;