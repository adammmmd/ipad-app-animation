import React, { useEffect } from "react";
import './AppPage.css'
import { AnimatePresence, motion as m, useDragControls, useMotionValue, useTransform } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../store/AppActive";

export default function AppPage({children, app}) {

    const dispatch = useDispatch()
    const appID = useSelector((state) => state.app.app);
    const y = useSelector((state) => state.app.y)
    const dragControls = useDragControls();
    const dragY = useMotionValue(y);
    const scale = useTransform(dragY, [0, 200], [1, 0.8]);
    const borderRadius = useTransform(dragY, [0, 200], [0, 100])

    useEffect(() => {
        dragY.set(y)
    }, [y])

    function handleDragEnd() {
        dispatch(appActions.deleteAppActive(app))
    }

    function handleDrag(_, info) {
        dispatch(appActions.onDragY(Math.abs(info.offset.y)))
    }

    return(
        <AnimatePresence
            mode="wait"
            initial={false}
        >
            {
                appID.includes(app) && (
                    <m.div
                        className="page-container"
                        drag
                        layout
                        layoutId={app}
                        style={{scale: scale, borderRadius: borderRadius}}
                        dragControls={dragControls}
                        dragListener={false}
                        dragMomentum={false}
                        onDragEnd={() => handleDragEnd()}
                        onDrag={handleDrag}
                        dragConstraints={{top: 50, left: 50, right: 50}}
                    >
                        {children}
                        <m.div
                            className="white-bar__container"
                            onPointerDown={(e) => dragControls.start(e)}
                        >
                            <div className="white-bar"></div>
                        </m.div>
                    </m.div>
                )
            }
        </AnimatePresence>
    )
}