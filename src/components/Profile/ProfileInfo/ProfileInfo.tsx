import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className="image">
                <img
                    src='https://wallpaperscave.ru/images/thumbs/wp-preview/800x500/18/02-20/artistic-landscape-19528.jpg'/>
            </div>
            <div className="description-block">
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;