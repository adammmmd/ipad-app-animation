import React from "react";
import AppIcon from "../AppIcon";
import AppPage from "../AppPage";

export default function Settings({appID, handleClick}) {

    return(
        <>
            <AppIcon app='Settings' handleClick={handleClick} drawer={false}>
                <img src="./app-logo/settings.svg" alt="Settings" />
            </AppIcon>
            <AppPage app='Settings' appID={appID}>
            </AppPage>
        </>
    )
}
