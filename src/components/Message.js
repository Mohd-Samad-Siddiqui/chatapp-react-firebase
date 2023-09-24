import React, { useEffect, useRef } from "react";
import Moment from "react-moment";

const Message = ({ m, user1 }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [m]);
  return (
    <div className={`message ${m.from === user1 ? "owner" : ""}`}>
      <div className="messageContent">
        <p>
          {m.media && <img src={m.media} alt="" />}
          {m.texts}
          <br />
          <small>
            <Moment fromNow>{m.createdAt.toDate()}</Moment>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Message;

// const Message = ({ message }) => {
//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

//   const ref = useRef();

//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   return (
//     <div
//       ref={ref}
//       className={`message ${message.senderId === currentUser.uid && "owner"}`}
//     >
//       <div className="messageInfo">
//         <img
//           src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           }
//           alt=""
//         />
//         <span>just now</span>
//       </div>
//       <div className="messageContent">
//         <p>{message.text}</p>
//         {message.img && <img src={message.img} alt="" />}
//       </div>
//     </div>
//   );
// };

// export default Message;
