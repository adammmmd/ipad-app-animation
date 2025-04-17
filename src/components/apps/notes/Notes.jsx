// File: Notes.jsx
import React, { useState } from "react";
import AppIcon from "../../AppIcon";
import AppPage from "../../AppPage";
import BlueSidebar from "./components/BlueSidebar";
import WhiteSidebar from "./components/WhiteSidebar";
import GreenContent from "./components/GreenContent";
import YellowContainer from "./components/YellowContainer";
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
            overflow: "hidden",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        >
          <BlueSidebar isOpen={blueSidebarOpen} />
          
          <YellowContainer isBlueSidebarOpen={blueSidebarOpen}>
            <WhiteSidebar 
              isOpen={noteListOpen} 
              toggleBlueSidebar={() => setBlueSidebarOpen(!blueSidebarOpen)}
              isBlueSidebarOpen={blueSidebarOpen}
            />
            
            <GreenContent 
              isWhiteSidebarOpen={noteListOpen}
              toggleWhiteSidebar={() => setNoteListOpen(!noteListOpen)}
            />
          </YellowContainer>
        </m.div>
      </AppPage>
    </>
  );
}