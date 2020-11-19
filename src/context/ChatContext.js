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
  const [selectedChatRoom, setSelectedChatroom] = useState({});
  const [channelMessages, setChannelMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState({});
  const [threadList, setThreadList] = useState([]);

  useEffect(() => {
    getChatChannels();
  }, []);
  useEffect(() => {
    if (selectedChatRoom.id) {
      getMessages();
    }
    // eslint-disable-next-line
  }, [selectedChatRoom]);

  useEffect(() => {
    getReplies();
    // eslint-disable-next-line
  }, [selectedMessage]);

  const selectChatRoom = (doc) => {
    setSelectedChatroom(doc);
  };

  const addChannel = (channelName, channelDescription) => {
    //if no current photoURL, take default.
    const userAvatar = createOrFetchUserAvatar();
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

        const channelInfo = {
          ...tempChannelInfo,
          id: channelId,
        };
        const newChannelList = [...channelList, channelInfo];
        setChannelList(newChannelList);
        setSelectedChatroom(channelInfo);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const getChatChannels = () => {
    db.collection("rooms")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        setChannelList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            userAvatar: doc.data().userAvatar,
            userEmail: doc.data().userEmail,
            userUid: doc.data().userUid,
            createdAt: doc.data().createdAt,
          }))
        );
      });
  };

  // BAD CODE
  // const getChatChannels = () => {
  //   const tempChannelList = [];
  //   db.collection("rooms")
  //     .get()
  //     .then((querySnapShot) => {
  //       querySnapShot.forEach((doc) => {
  //         const newChannel = {
  //           id: doc.id,
  // name: doc.data().name,
  // description: doc.data().description,
  // userAvatar: doc.data().userAvatar,
  // userEmail: doc.data().userEmail,
  // userUid: doc.data().userUid,
  // createdAt: doc.data().createdAt,
  //         };
  //         tempChannelList.push(newChannel);
  //       });
  //     });

  //   return tempChannelList;
  // };

  const sendMessage = (message) => {
    const userAvatar = createOrFetchUserAvatar();
    const tempMessageInfo = {
      createdAt: firebase.firestore.Timestamp.now(),
      message: message,
      sendUser: {
        userEmail: currentUser.email,
        userUid: currentUser.uid,
        userAvatar: userAvatar,
      },
    };

    db.collection("rooms")
      .doc(selectedChatRoom.id)
      .collection("messages")
      .add(tempMessageInfo)
      .then(() => {
        console.log("Message has been successfully added");
        getMessages();
      })
      .catch((err) => console.log("===ERROR===", err));
  };

  const selectMessage = (obj) => {
    setSelectedMessage(obj);
  };

  const getMessages = () => {
    if (Object.keys(selectedChatRoom).length === 0) {
      return;
    }

    db.collection("rooms")
      .doc(selectedChatRoom.id)
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        setChannelMessages(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              createdAt: doc.data().createdAt,
              message: doc.data().message,
              sendUser: {
                userAvatar: doc.data().sendUser.userAvatar,
                userEmail: doc.data().sendUser.userEmail,
                userUid: doc.data().sendUser.userUid,
              },
            };
          })
        );
      });
  };

  // BAD CODE
  // const getMessages = () => {
  //   if (Object.keys(selectedChatRoom).length === 0) {
  //     return;
  //   }

  //   const messagesArray = [];
  //   db.collection("rooms")
  //     .doc(selectedChatRoom.id)
  //     .collection("messages")
  //     .orderBy("createdAt", "asc")
  //     .get()
  //     .then((querySnapShot) => {
  //       querySnapShot.docs.forEach((doc) => {
  //         const id = doc.id;
  //         messagesArray.push({ ...doc.data(), id });
  //       });
  //     })
  //     .then((res) => setChannelMessages(messagesArray));
  // };

  const createOrFetchUserAvatar = () => {
    const userAvatar =
      currentUser.photoURL ||
      `https://ui-avatars.com/api/?background=random&name=${currentUser.email}`;

    return userAvatar;
  };

  const addReplyToChat = (message) => {
    const userAvatar = createOrFetchUserAvatar();
    const tempMessageInfo = {
      createdAt: firebase.firestore.Timestamp.now(),
      message: message,
      sendUser: {
        userEmail: currentUser.email,
        userUid: currentUser.uid,
        userAvatar: userAvatar,
      },
    };

    db.collection("rooms")
      .doc(selectedChatRoom.id)
      .collection("messages")
      .doc(selectedMessage.id)
      .collection("thread")
      .add(tempMessageInfo)
      .then(() => {
        console.log("Message has been successfully added");
      })
      .catch((err) => console.log("===ERROR===", err));
  };

  const getReplies = () => {
    if (Object.keys(selectedChatRoom).length === 0) {
      return;
    }

    db.collection("rooms")
      .doc(selectedChatRoom.id)
      .collection("messages")
      .doc(selectedMessage.id)
      .collection("thread")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        setThreadList(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              createdAt: doc.data().createdAt,
              message: doc.data().message,
              sendUser: {
                userEmail: doc.data().sendUser.email,
                userUid: doc.data().sendUser.uid,
                userAvatar: doc.data().sendUser.userAvatar,
              },
            };
          })
        );
      });
  };

  //BAD CODE
  // const getReplies = () => {
  //   if (Object.keys(selectedChatRoom).length === 0) {
  //     return;
  //   }
  //   const threadsArray = [];

  //   db.collection("rooms")
  //     .doc(selectedChatRoom.id)
  //     .collection("messages")
  //     .doc(selectedMessage.id)
  //     .collection("thread")
  //     .orderBy("createdAt", "asc")
  //     .get()
  //     .then((querySnapShot) => {
  //       querySnapShot.forEach((doc) => {
  //         const id = doc.id;
  //         threadsArray.push({ ...doc.data(), id });
  //       });
  //     })
  //     .then((promise) => {
  //       setThreadList(threadsArray);
  //     });
  // };

  const value = {
    addChannel,
    getChatChannels,
    channelList,
    selectChatRoom,
    selectedChatRoom,
    sendMessage,
    getMessages,
    channelMessages,
    selectMessage,
    selectedMessage,
    addReplyToChat,
    getReplies,
    threadList,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContext;
