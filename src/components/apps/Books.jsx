import React from "react";
import AppIcon from "../AppIcon";
import AppPage from "../AppPage";

export default function Books({appID, handleClick}) {

    return(
        <>
            <AppIcon app='Books' handleClick={handleClick}>
                <img src="./app-logo/books.svg" alt="Books" />
            </AppIcon>
            <AppPage app='Books' appID={appID}>
            </AppPage>
        </>
    )
}
