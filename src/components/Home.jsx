import React from "react";
import './Home.css'
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../store/AppActive";
import Notes from "./apps/Notes";
import Books from "./apps/Books";
import Settings from "./apps/Settings";
import Mail from "./apps/Mail";
import Calculator from "./apps/Calculator";

export default function Home() {

    const dispatch = useDispatch()
    const appID = useSelector((state) => state.app.app);

    function handleClick(appName){
        
        dispatch(appActions.addAppActive(appName))
    }

    return(
        <div
            className="homescreen"
            style={{backgroundImage: "url(./img/baby-blue-color-solid-background-1920x1080.png)"}}
        >
            <div className="app-drawer__container">
                <Notes appID={appID} handleClick={handleClick}/>
                <Books appID={appID} handleClick={handleClick}/>
                <Calculator appID={appID} handleClick={handleClick}/>
            </div>
            <div className="dock__container">
                <Mail appID={appID} handleClick={handleClick}/>
                <Settings appID={appID} handleClick={handleClick}/>
            </div>
        </div>
    )
}