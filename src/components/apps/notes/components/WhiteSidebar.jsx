// File: components/WhiteSidebar.jsx
import React from "react";
import { motion as m } from "framer-motion";

const WhiteSidebar = ({ isOpen, toggleBlueSidebar, isBlueSidebarOpen }) => {
  return (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        border: "1px solid black",
        width: "30vw",
        height: "100%",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      <div style={{ padding: "10px" }}>
        <div>White Sliding Panel</div>
        <button
          onClick={toggleBlueSidebar}
          style={{
            padding: "5px 10px",
            margin: "10px 0",
            backgroundColor: "#f0f0f0",
            border: "1px solid black",
            borderRadius: "4px",
          }}
        >
          {isBlueSidebarOpen ? "Hide Blue Sidebar" : "Show Blue Sidebar"}
        </button>
      </div>
    </m.div>
  );
};

export default WhiteSidebar;