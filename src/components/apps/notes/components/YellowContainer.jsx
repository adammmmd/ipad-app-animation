// File: components/YellowContainer.jsx
import React from "react";
import { motion as m } from "framer-motion";

const YellowContainer = ({ children, isBlueSidebarOpen }) => {
  return (
    <m.div
      animate={{
        x: isBlueSidebarOpen ? "20vw" : "0vw",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        width: "100vw",
        border: "1px solid black",
        height: "100%",
        backgroundColor: "yellow",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {children}
    </m.div>
  );
};

export default YellowContainer;