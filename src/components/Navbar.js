import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const handleSignOut = async () => {
    // console.log(currentUser.uid);

    await updateDoc(doc(db, "users", currentUser.uid), {
      isOnline: false,
    });

    await signOut(auth);
  };

  return (
    <div className="navbar">
      <span className="logo">Connect</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleSignOut}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
