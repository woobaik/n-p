import React, { useRef, useEffect } from "react";
import MidPanelBlank from "../MidPanelBlank/MidPanelBlank";
import "./MidPanelBody.scss";

import { useChat } from "../../../../../context/ChatContext";
import MidPanelHeader from "../MidPanelHeader/MidPanelHeader";
import MidPanelChatBox from "./MidPanelChatBox/MidPanelChatBox";
import MidPanelMessage from "./MidPanelMessage/MidPanelMessage";

const MidPanelBody = () => {
  const messageEndRef = useRef(null);
  const { selectedChatRoom, channelMessages } = useChat([]);

  useEffect(() => {
    scrollToBottom();
  }, [channelMessages]);

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (Object.keys(selectedChatRoom).length === 0) {
    return <MidPanelBlank />;
  }

  return (
    <>
      <div className="MidPanelBody">
        <MidPanelHeader />
        {channelMessages.map((message) => {
          return <MidPanelMessage messageData={message} key={message.id} />;
        })}

        <div ref={messageEndRef} />
      </div>
      <div>
        <MidPanelChatBox />
      </div>
    </>
  );
};

export default MidPanelBody;
