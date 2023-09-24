import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import Message from "./Message";

const Messages = ({ selectedUser }) => {
  const [message, setMessage] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const user1 = currentUser.uid;
  const user2 = selectedUser.uid;

  const combinedID = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
  const msgRef = collection(db, "messages", combinedID, "chat");
  const q = query(msgRef, orderBy("createdAt", "asc"));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessage(msgs);
    });

    return () => unsubscribe();
  }, [q]);
  // console.log(message);

  return (
    <div className="messages">
      {message.length
        ? message.map((m, i) => <Message m={m} user1={user1} />)
        : null}
    </div>
  );
};

export default Messages;
