import React from 'react';
import Profile from "./Profile";
import {setUsersProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";


type ProfileOwnType = MapStatePropsType & MapDispatchPropsType;

type MapDispatchPropsType = {
    setProfile:(profile:string) => void
}

type MapStatePropsType =  {
    profile: string
}

class MyProfile extends React.Component<ProfileOwnType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setProfile(response.data);

            })

    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export const ProlifeContainer = connect (mapStateToProps,{setUsersProfile}) (MyProfile);
