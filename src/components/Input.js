import React from "react";
import Img from "../img/img.png";

const Input = ({ handleSubmit, texts, setTexts, setImage }) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        value={texts}
        onChange={(e) => setTexts(e.target.value)}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Input;
