import React, { useState } from "react";
import "./RightPanel.scss";
import { FaSlackHash } from "react-icons/fa";
import MidPannelMessage from "../midPanel/MidPanelBody/MidPanelMessage/MidPanelMessage";
import RightPanelThreads from "./RightPanelThreads/RightPanelThreads";

import { useChat } from "../../../../context/ChatContext";

const RightPanel = () => {
  const { selectedChatRoom, selectedMessage, addReplyToChat } = useChat();
  const [replyMessage, setReplyMessage] = useState("");

  if (Object.keys(selectedChatRoom).length === 0) {
    return <div className="RightPanel"></div>;
  }

  const replySubmitHandler = (e) => {
    e.preventDefault();
    if (replyMessage !== "") {
      addReplyToChat(replyMessage);
      setReplyMessage("");
    }
  };

  const changeHandler = (e) => {
    setReplyMessage(e.target.value);
  };

  const { seconds, nanoseconds } = selectedChatRoom.createdAt;
  const time = new Date(
    seconds * 1000 + nanoseconds / 1000
  ).toLocaleDateString();

  return (
    <div className="RightPanel">
      <div className="RightPanel__title__container">
        <div className="RightPanel__title">
          <FaSlackHash />
          {selectedChatRoom.name}
        </div>
        <div className="RightPanel__picture">
          <img
            src={selectedChatRoom.userAvatar}
            alt={`${selectedChatRoom.userEmail}`}
          />
        </div>
        <div className="RightPanel__created">
          Created by {selectedChatRoom.userEmail}
        </div>
        <div className="RightPanel__time">created on {time}</div>
        <div className="RightPanel__description">
          {selectedChatRoom.description ? selectedChatRoom.description : ""}
        </div>
      </div>

      <div className="RightPanel__thread">
        <div className="RightPanel__original_msg">
          <MidPannelMessage messageData={selectedMessage} type="right" />
        </div>
        {Object.keys(selectedMessage).length !== 0 ? (
          <>
            <RightPanelThreads />
            <div className="RightPanel__form_container">
              <form className="RightPanel__form" onSubmit={replySubmitHandler}>
                <input onChange={changeHandler} value={replyMessage} />
                <button>Reply</button>
              </form>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RightPanel;
