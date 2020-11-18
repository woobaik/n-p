import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import firebase from "firebase/app";
import { db } from "../firebase/firebase";

export const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [channelList, setChannelList] = useState([]);
  const [selectedChatRoom, setSelectedChatroom] = useState("");

  useEffect(() => {
    const data = getChatChannel();
    setChannelList(data);
  }, []);

  const selectChatRoom = (id) => {
    setSelectedChatroom(id);
    console.log("SELECT CHAT ROOM FROM CHAT CONTEXT IS HERE");
    console.log(selectedChatRoom);
  };

  const addChannel = (channelName, channelDescription) => {
    //if no current photoURL, take default.
    const userAvatar =
      currentUser.photoURL ||
      `https://ui-avatars.com/api/?background=random&name=${currentUser.email}`;

    const tempChannelInfo = {
      description: channelDescription,
      name: channelName,
      //server time
      createdAt: firebase.firestore.Timestamp.now(),
      userEmail: currentUser.email,
      userUid: currentUser.uid,
      userAvatar: userAvatar,
    };

    let channelId;

    db.collection("rooms")
      .add(tempChannelInfo)
      .then(function (docRef) {
        channelId = docRef.id;
        console.log("insie", channelId);
        const channelInfo = {
          ...tempChannelInfo,
          id: channelId,
        };
        const newChannelList = [...channelList, channelInfo];
        setChannelList(newChannelList);
        setSelectedChatroom(channelId);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const getChatChannel = () => {
    const tempChannelList = [];
    db.collection("rooms")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const newChannel = {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            userAvatar: doc.data().userAvatar,
            userEmail: doc.data().userEmail,
            userUid: doc.data().userUid,
            createdAt: doc.data().createdAt,
          };
          tempChannelList.push(newChannel);
        });
      });

    return tempChannelList;
  };

  const value = {
    addChannel,
    getChatChannel,
    channelList,
    selectChatRoom,
    selectedChatRoom,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContext;
