// File: components/GreenContent.jsx
import React from "react";
import { motion as m } from "framer-motion";

const GreenContent = ({ isWhiteSidebarOpen, toggleWhiteSidebar }) => {
  return (
    <m.div
      animate={{
        width: isWhiteSidebarOpen ? "70vw" : "100%",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        border: "1px solid black",
        height: "100%",
        backgroundColor: "green",
        position: "absolute",
        top: 0,
        right: 0,
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      <div style={{ padding: "10px" }}>
        <button
          onClick={toggleWhiteSidebar}
          style={{
            padding: "5px 10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid black",
            borderRadius: "4px",
          }}
        >
          {isWhiteSidebarOpen ? "Hide White Sidebar" : "Show White Sidebar"}
        </button>
        <div style={{ marginTop: "10px", color: "white" }}>
          Green Content Area
        </div>
        <div
          style={{
            marginTop: "10px",
            color: "white",
            wordBreak: "break-word",
          }}
        >
          Blue div (sidebar that appears when Y is clicked)Blue div
          (sidebar that appears when Y is clicked)Blue div (sidebar that
          appears when Y is clicked)Blue div (sidebar that appears when
          Y is clicked)Blue div (sidebar that appears when Y is clicked)
        </div>
      </div>
    </m.div>
  );
};

export default GreenContent;