import React from "react";
import AppIcon from "../AppIcon";
import AppPage from "../AppPage";

export default function Calculator({appID, handleClick}) {

    return(
        <>
            <AppIcon app='Calculator' handleClick={handleClick}>
                <img src="./app-logo/calculator.svg" alt="Calculator" />
            </AppIcon>
            <AppPage app='Calculator' appID={appID}>
            </AppPage>
        </>
    )
}
