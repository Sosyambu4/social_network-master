import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType, store, StoreType} from "./redux/state";
import {News} from './components/New/New';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Setting";
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";

export type AppType =  {
    state: StateType;
    dispatch: (action: ActionsTypes) => void;
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsConteiner
                               stateMessagesPage={props.state.messagesPage}
                               dispatch={props.dispatch}
                               onChange={props.state.messagesPage.newMessageBody}

                           />}/>
                    <Route path='/profile'
                           render={() => <Profile stateProfilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}

                           />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
