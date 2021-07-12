import React from 'react';
import Profile from "./Profile";
import {setUsersProfile, userProfileInfo} from "../../redux/profile-reducer";
import axios from "axios";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";


type OwnPropsType = {}

export type ProfileOwnType = MapStatePropsType & MapDispatchPropsType

;

type MapDispatchPropsType = {
    setUsersProfile:(profile:userProfileInfo | null) => void
}

type MapStatePropsType =  {
   profile: userProfileInfo | null

}

class MyProfile extends React.Component<ProfileOwnType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setUsersProfile(response.data);

            })

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
        // photos: state.profilePage.profile.photos

    }
}
export const ProlifeContainer = connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStoreType
    > (mapStateToProps,{setUsersProfile}) (MyProfile);
