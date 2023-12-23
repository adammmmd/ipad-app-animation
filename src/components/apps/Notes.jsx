import React from "react";
import AppIcon from "../AppIcon";
import AppPage from "../AppPage";

export default function Notes({appID, handleClick}) {

    return(
        <>
            <AppIcon app='Notes' handleClick={handleClick}>
                <img src="./app-logo/notes.svg" alt="notes" />
            </AppIcon>
            <AppPage app='Notes' appID={appID}>
            </AppPage>
        </>
    )
}
