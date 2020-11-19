import React, { useEffect, useRef } from "react";
import "./RightPanelThreads.scss";
import MidPanelMessage from "../../midPanel/MidPanelBody/MidPanelMessage/MidPanelMessage";
import { useChat } from "../../../../../context/ChatContext";

const RightPanelThreads = () => {
  const { selectedMessage, threadList } = useChat();
  const ThreadEndRef = useRef(null);

  useEffect(() => {}, [selectedMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [threadList]);

  const scrollToBottom = () => {
    if (ThreadEndRef.current) {
      ThreadEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="RightPanelThreads">
      <div className="RightPanelThreads__threads">
        {threadList.map((thread) => {
          return <MidPanelMessage messageData={thread} type="right" />;
        })}
      </div>
      <div ref={ThreadEndRef} />
    </div>
  );
};

export default RightPanelThreads;
