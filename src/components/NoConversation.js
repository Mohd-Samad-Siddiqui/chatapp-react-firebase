import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const NoConversation = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(currentUser);

  // Use useEffect to update userData when currentUser changes
  useEffect(() => {
    setUserData(currentUser);
  }, [currentUser]);

  return (
    <div className="no_convo">
      {userData && (
        <>
          <img src={userData.photoURL} alt="" />
          <h1>
            Hey <span>{userData.displayName}</span>! <br />
            Select a user to start a conversation...
          </h1>
        </>
      )}
    </div>
  );
};

export default NoConversation;

/*
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NoConversation = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="no_convo">
      <img src={currentUser.photoURL} alt="" />

      <h1>
        Hey! {<span>{currentUser.displayName}</span>} select a user to start a
        conversation...
      </h1>
    </div>
  );
};

export default NoConversation;
*/
