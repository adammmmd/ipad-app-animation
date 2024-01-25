import React from "react";
import './AppIcon.css'

export default function AppIcon({children, app, drawer = true,  handleClick}) {


    return(
        <div className="app-icon">
            <div
                className="app-drawer__icon"
                onClick={() => handleClick(app)}
            >
                {children}
            </div>
            {
                drawer && (
                    <p className="grid text-dark fs-200">{app}</p>
                )
            }
        </div>
    )
}