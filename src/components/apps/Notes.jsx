import React, { useState } from "react";
import AppIcon from "../AppIcon";
import AppPage from "../AppPage";
import { motion as m } from "framer-motion";

export default function Notes({ appID, handleClick }) {
  const [noteListOpen, setNoteListOpen] = useState(false);
  const [blueSidebarOpen, setBlueSidebarOpen] = useState(false);

  return (
    <>
      <AppIcon app="Notes" handleClick={handleClick}>
        <img src="./app-logo/notes.svg" alt="notes" />
      </AppIcon>
      <AppPage app="Notes" appID={appID}>
        <m.div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex", // Make parent a flex container
            overflow: "hidden"
          }}
        >
          {/* Blue div (sidebar that appears when Y is clicked) */}
          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: blueSidebarOpen ? "0%" : "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              width: "20vw",
              height: "100vh",
              backgroundColor: "blue",
              position: "absolute",
              top: 0,
              left: 0
            }}
          >
            <div style={{ color: "white", padding: "10px" }}>Blue Sidebar</div>
          </m.div>

          <m.div
            animate={{
                x: blueSidebarOpen ? "20vw" : "0%",
              
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              width: "100vw",
                border: "1px solid black",
              height: "100%",
              backgroundColor: "yellow",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* White div (sliding sidebar) */}
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: noteListOpen ? "0%" : "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                border: "1px solid black",
                width: "30vw",
                height: "100%",
                backgroundColor: "white",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <div style={{ padding: "10px" }}>
                <div>White Sliding Panel</div>
                <button 
                  onClick={() => setBlueSidebarOpen(!blueSidebarOpen)}
                  style={{
                    padding: "5px 10px",
                    margin: "10px 0",
                    backgroundColor: "#f0f0f0",
                    border: "1px solid black",
                    borderRadius: "4px"
                  }}
                >
                  {blueSidebarOpen ? "Hide Blue Sidebar" : "Show Blue Sidebar"}
                </button>
              </div>
            </m.div>

            {/* Green div (main content) */}
            <m.div
              layout
              animate={{
                width: noteListOpen ? "70vw" : "100%",
                right: 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                border: "1px solid black",
                height: "100%",
                backgroundColor: "green",
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <div style={{ padding: "10px" }}>
                <button 
                  onClick={() => setNoteListOpen(!noteListOpen)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#f0f0f0",
                    border: "1px solid black",
                    borderRadius: "4px"
                  }}
                >
                  {noteListOpen ? "Hide White Sidebar" : "Show White Sidebar"}
                </button>
                <div style={{ marginTop: "10px", color: "white" }}>
                  Green Content Area
                </div>
                Blue div (sidebar that appears when Y is clicked)Blue div (sidebar that appears when Y is clicked)Blue div (sidebar that appears when Y is clicked)Blue div (sidebar that appears when Y is clicked)Blue div (sidebar that appears when Y is clicked)Blue div (sidebar that appears when Y is clicked)Blue div (sidebar that appears when Y is clicked)Blue div (sidebar that appears when Y is clicked)
              </div>
            </m.div>
          </m.div>
        </m.div>
      </AppPage>
    </>
  );
}