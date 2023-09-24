import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import EachUser from "./EachUser";

const AllUsers = ({ setSelectedUser }) => {
  // const user1 = auth.currentUser.uid;
  const [users, setUsers] = useState([]);
  const [currentUserUid, setCurrentUserUid] = useState(null);
  console.log("currentUser : " + currentUserUid);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserUid(user.uid);

        // Create the query once the user is authenticated
        const usersRef = collection(db, "users");
        const q = query(
          usersRef,
          where("uid", "not-in", [auth.currentUser.uid])
        );

        const unsub = onSnapshot(q, (querySnapshot) => {
          let users = [];
          querySnapshot.forEach((doc) => {
            users.push(doc.data());
          });
          setUsers(users);
        });

        return () => unsub(); // Unsubscribe from the query when the component unmounts
      } else {
        setCurrentUserUid(null);
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the authentication state listener when the component unmounts
    };
  }, []);

  const selectUser = (user) => {
    setSelectedUser(user);
    console.log(user);
  };

  return (
    <>
      <div className="home_container">
        <div className="users_container">
          {users.map((user) => (
            <EachUser key={user.uid} user={user} selectUser={selectUser} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllUsers;
