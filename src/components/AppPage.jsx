import React from "react";
import './AppPage.css'
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../store/AppActive";

export default function AppPage({children, app}) {

    const dispatch = useDispatch()
    const appID = useSelector((state) => state.app.app);

    function handleDragEnd() {
        dispatch(appActions.deleteAppActive(app))
        console.log('drag')
    }

    return(
        <>
            {
                appID.includes(app) && (
                    <div
                        className="page-container"
                    >
                        {children}
                        <div
                            className="white-bar__container"
                            onClick={() => handleDragEnd()}
                        >
                            <div className="white-bar"></div>
                        </div>
                    </div>
                )
            }
        </>
    )
}