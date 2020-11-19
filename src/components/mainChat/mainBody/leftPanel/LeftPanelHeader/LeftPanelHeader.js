import React from "react";
import "./LeftPanelHeader.scss";
import { BsPencilSquare } from "react-icons/bs";

import { useChat } from "../../../../../context/ChatContext";

const LeftPanelHeader = () => {
  const { selectChatRoom } = useChat();
  return (
    <div className="LeftPanelHeader">
      <div
        className="LeftPanelHeader__title"
        onClick={() => selectChatRoom({})}
      >
        PROJECT NOA
      </div>
      <div className="LeftPanelHeader__plus_icon">
        <BsPencilSquare />
      </div>
    </div>
  );
};

export default LeftPanelHeader;
