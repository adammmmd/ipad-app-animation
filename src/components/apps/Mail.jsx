import React from "react";
import AppIcon from "../AppIcon";
import AppPage from "../AppPage";

export default function Mail({appID, handleClick}) {

    return(
        <>
            <AppIcon app='Mail' handleClick={handleClick} drawer={false}>
                <img src="./app-logo/mail.svg" alt="mail" />
            </AppIcon>
            <AppPage app='Mail' appID={appID}>
            </AppPage>
        </>
    )
}
