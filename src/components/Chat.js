import React, { useContext, useState } from "react";
import { storage } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
// import Cam from "../img/cam.png";
// import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = ({ selectedUser }) => {
  const { currentUser } = useContext(AuthContext);
  const [texts, setTexts] = useState([]);
  const [image, setImage] = useState([]);
  const user1 = currentUser.uid;
  const user2 = selectedUser.uid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const combinedID = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (image) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${image.name}`
      );
      const snap = await uploadBytes(imgRef, image);
      const downloadURL = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = downloadURL;
    }
    await addDoc(collection(db, "messages", combinedID, "chat"), {
      texts,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });
    setTexts("");
  };
  console.log(texts);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="icon_name">
          <img src={selectedUser.photoURL} alt="" />
          <span>{selectedUser.displayName}</span>
        </div>
        {/* <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={More} alt="" />
        </div> */}
      </div>

      <Messages selectedUser={selectedUser} />
      {/* <Messages /> */}

      <Input
        handleSubmit={handleSubmit}
        texts={texts}
        setTexts={setTexts}
        setImage={setImage}
      />
    </div>
  );
};

export default Chat;
