import React from 'react';
import {ProfileOwnType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/PreLoader";
import {userProfileInfo} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    setUsersProfile:(profile:string) => void;
    profile: string | null
    photos: string
}

const ProfileInfo = (props:ProfileOwnType  ) => {
    if (!props.profile) {
        return <Preloader/>
    }
    console.log(props.profile)
    return (
        <div>
            <div className="image">
                <img
                    src='https://wallpaperscave.ru/images/thumbs/wp-preview/800x500/18/02-20/artistic-landscape-19528.jpg'/>
            </div>
            <div className="description-block">
               <img src={props.profile.photos.large}/>

            </div>
        </div>
    )
}

export default ProfileInfo;