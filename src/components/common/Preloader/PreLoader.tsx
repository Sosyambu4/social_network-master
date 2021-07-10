import React from "react";
import preloader from "../../../assets/images/Spinner-1.8s-200px.svg";


export let Preloader = () => {
    return <div style={ {backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}