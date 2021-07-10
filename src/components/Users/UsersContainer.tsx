import React from 'react';
import {AppStoreType} from '../../redux/redux-store';
import {
    follow, setCarrentPage,
    setToggle_is_Fetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import axios from 'axios';
import {Users} from './Users'
import preloader from '../../assets/images/Spinner-1.8s-200px.svg'
import { Preloader } from '../common/Preloader/PreLoader';


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean

}

type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount:(totalCount: number) => void;
    setToggle_is_Fetching: (isFetching: boolean) => void;
}


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export class UserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setToggle_is_Fetching(true)
        /*if (this.props.usersPage.users.length === 0)*/ {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setToggle_is_Fetching(false)
                        this.props.setUsers(response.data.items);
                        this.props.setTotalUsersCount(response.data.totalCount);
                    }
                )}
    }
    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setToggle_is_Fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setToggle_is_Fetching(false)
        });

    }
    render () {


        return <> {this.props.isFetching ? <Preloader/> : null }
            <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            onPageChanged= {this.onPageChanged}


        />
        </>
            }
                }

const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}


export const UsersContainer =  connect(mapStateToProps, {follow, unfollow, setUsers, setCarrentPage, setTotalUsersCount, setToggle_is_Fetching})(UserContainer);

