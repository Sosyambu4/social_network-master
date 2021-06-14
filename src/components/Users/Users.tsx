import React from "react";
import {UsersPropsType} from "./UsersContainer";


export const Users = (props:UsersPropsType) => {
    if (props.usersPage.users.length === 0)
    {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUIseBsvJgFgOBzFthISFzE6gkHosm-DszQ&usqp=CAU',
                followed: true,
                fullName: 'Wladysalaw',
                status: 'I am a programmer',
                location: {city: 'Gdansk', country: 'Poland'}
            },
            {
                id: 2,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUIseBsvJgFgOBzFthISFzE6gkHosm-DszQ&usqp=CAU',
                followed: true,
                fullName: 'Artem',
                status: 'I am a boss',
                location: {city: 'Kharkov', country: 'Ukraine'}
            },
            {
                id: 3,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUIseBsvJgFgOBzFthISFzE6gkHosm-DszQ&usqp=CAU',
                followed: true,
                fullName: 'Kamila',
                status: 'I am a superstar',
                location: {city: 'Moskow', country: 'Russia'}
            }
            ]
        )
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL}/>
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
    </div>
            )}
    </div>

}