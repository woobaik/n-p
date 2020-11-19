import React from "react";
import "./MidPanelMessage.scss";
import { useChat } from "../../../../../../context/ChatContext";
import moment from "moment";

const MidPanelMessage = ({ messageData, type }) => {
  const { selectMessage } = useChat();

  if (!messageData.sendUser) {
    return <div></div>;
  }
  const { userEmail, userAvatar } = messageData.sendUser;
  const { seconds, nanoseconds } = messageData.createdAt;

  const handleMsgClick = () => {
    if (type === "right") {
      return;
    }
    selectMessage(messageData);
  };

  const serverTime = new Date(seconds * 1000 + nanoseconds / 1000);
  const time = moment(serverTime).fromNow();
  return (
    <div className="MidPanelMessage" onClick={handleMsgClick}>
      <div className="MidPanelMessage_picture">
        <img src={userAvatar} alt={""} />
      </div>

      <div className="MidPanelMessage_body">
        <div className="MidPanelMessage_body_title">
          {userEmail} <span className="MidPanelMessage_body_time">{time}</span>
        </div>
        <div className="MidPanelMessage_body_text">{messageData.message}</div>
      </div>
    </div>
  );
};

export default MidPanelMessage;
