import React, { useState } from "react";
import "./MidPanelChatBox.scss";

import { useChat } from "../../../../../../context/ChatContext";

const MidPanelChatBox = () => {
  const [message, setMessage] = useState("");
  const { selectedChatRoom, sendMessage } = useChat();

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="MidPanelChatBox">
      <form onSubmit={sendMessage}>
        <input
          placeholder={`Send message to ${selectedChatRoom.name}`}
          className="MidPanelChatBox__input"
          onChange={(e) => onChangeHandler(e)}
          value={message}
          autoFocus
        />

        <button onClick={submitHandler}>submit</button>
      </form>
    </div>
  );
};

export default MidPanelChatBox;
