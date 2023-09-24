import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import AllUsers from "./AllUsers";

const Sidebar = ({ setSelectedUser }) => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search setSelectedUser={setSelectedUser} />
      <AllUsers setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default Sidebar;
