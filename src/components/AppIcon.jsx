import React from "react";
import './AppIcon.css'
import { motion as m } from "framer-motion";

export default function AppIcon({children, app, drawer = true,  handleClick}) {


    return(
        <div className="app-icon">
            <m.div
                className="app-drawer__icon"
                layoutId={app}
                onClick={() => handleClick(app)}
            >
                {children}
            </m.div>
            {
                drawer && (
                    <p className="grid text-dark fs-200">{app}</p>
                )
            }
        </div>
    )
}