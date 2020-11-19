import React from "react";
import "./MidPanelHeader.scss";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useChat } from "../../../../../context/ChatContext";
import { FaSlackHash } from "react-icons/fa";

const MidPanelHeader = () => {
  const { selectedChatRoom } = useChat();

  const midPanelHeaderTitle = selectedChatRoom.name
    ? selectedChatRoom.name.toUpperCase()
    : "WELCOME TO MY PORTFOLIO CHAT APP";

  const descriptionPlaceholder = selectedChatRoom.description
    ? selectedChatRoom.description
    : `Let's talk about ${
        selectedChatRoom.name ? selectedChatRoom.name : "Everything"
      }!`;

  const midPanelHeaderDescription = selectedChatRoom.description
    ? selectedChatRoom.description
    : descriptionPlaceholder;

  return (
    <div className="MidPanelHeader">
      <div className="MidPanelHeader__description">
        <div className="title">
          <FaSlackHash /> {midPanelHeaderTitle}
        </div>
        <div className="description">{midPanelHeaderDescription}</div>
      </div>

      <div className="MidPanelHeader__detail">
        {selectedChatRoom.name ? <AiOutlineExclamationCircle /> : ""}
      </div>
    </div>
  );
};

export default MidPanelHeader;
