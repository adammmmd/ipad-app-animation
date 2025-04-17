// File: components/BlueSidebar.jsx
import React from "react";
import { motion as m } from "framer-motion";

const BlueSidebar = ({ isOpen }) => {
  return (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        width: "20vw",
        height: "100vh",
        backgroundColor: "blue",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      <div style={{ color: "white", padding: "10px" }}>Blue Sidebar</div>
    </m.div>
  );
};

export default BlueSidebar;