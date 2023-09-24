/*
import React, { useEffect, useState, useContext } from "react";
import { db, auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
// import { collection, query, where, onSnapshot } from "firebase/firestore";
import EachUser from "./EachUser";

const AllChats = () => {
  const [users, setUsers] = useState([]);
  const [user1, setUser1] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser1(currentUser);
      } else {
        console.log("currentUser not found");
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    //Retrieve a list of all registered users from the firestore
    const usersRef = db.collection("users");
    // Listen for changes in the user list
    const usersListener = usersRef.onSnapshot((snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        const user = doc.data();
        if (user.uid !== currentUser?.uid) {
          // Exclude the current user
          usersData.push(user);
        }
      });
      setUsers(usersData);
    });

    return () => {
      // Unsubscribe from the user list when the component unmounts
      usersListener();
    };
  }, [currentUser]);

  // Render the list of users' names and profile images
  return (
    <div className="users_wrapper">
      <div className="users_container">
        {users.map((user) => (
          <EachUser key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllChats;
*/
