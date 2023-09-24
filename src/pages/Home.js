import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import NoConversation from "../components/NoConversation";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const sidebarRef = useRef();
  const showSidebar = () => {
    sidebarRef.current.classList.toggle("responsive_sidebar");
  };

  return (
    <div className="homeClass">
      <div className="containerClass">
        <div className="toggle_sidebar" ref={sidebarRef}>
          <Sidebar setSelectedUser={setSelectedUser} />
          <button
            className="sidebar-btn sidebar-close-btn"
            onClick={showSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <div className="logo_sidebar sidebar-btn">Connect</div>
        <button className="sidebar-btn timesbar" onClick={showSidebar}>
          <FaBars />
        </button>

        {selectedUser ? (
          <Chat selectedUser={selectedUser} />
        ) : (
          <NoConversation />
        )}
      </div>
    </div>
  );
};
export default Home;
