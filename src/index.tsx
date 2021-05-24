import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from './redux/state'
import {Provider} from "./StoreContext";

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App dispatch={store.dispatch.bind(store)} state={store.state}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


rerenderEntireTree();

store.subscriber(() => {
   let state = store.getState ();
    rerenderEntireTree()});