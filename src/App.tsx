import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {News} from './components/New/New';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsConteiner";
import {UsersContainer} from "./components/Users/UsersContainer";
import {Users} from "./components/Users/Users";


export type AppType = {
    /*state: StateType;
    dispatch: (action: ActionsTypes) => void;*/
}

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile'
                           render={() => <Profile/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>


                    <Route path='/news' render={() => <News/>}/>

                    <Route path='/music' render={() => <Music/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
