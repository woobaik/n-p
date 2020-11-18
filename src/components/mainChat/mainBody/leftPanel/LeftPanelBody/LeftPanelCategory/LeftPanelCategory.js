import React, { useState, useEffect } from "react";
import "./LeftPanelCategory.scss";
//input box from auth, took it from there, might need to change name
import AuthInput from "../../../../../Auth/AuthInput/AuthInput";
import { Modal } from "react-responsive-modal";
import { db } from "../../../../../../firebase/firebase";

import { useAuth } from "../../../../../../context/AuthContext";
import { useChat } from "../../../../../../context/ChatContext";

import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai"; //icons
import { CgMathPlus } from "react-icons/cg"; // icons
import { HiOutlineHashtag } from "react-icons/hi"; // so many icons

const LeftPanelCategory = ({ title }) => {
  const [expand, setExpand] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const { currentUser } = useAuth();
  const {
    addChannel,
    getChatChannel,
    channelList,
    selectChatRoom,
    selectedChatRoom,
  } = useChat();

  const [chatroomList, setChatroomList] = useState([]);

  const selectCategoryHandler = () => {
    setExpand(!expand);
  };

  // prevent event bubbling, when user add chat or dm room.
  const addHandler = (e) => {
    e.stopPropagation();
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  // Modal form input change handler.
  const onChangeHandler = (e) => {
    if (e.target.name === "name") {
      setChannelName(e.target.value);
    } else {
      setChannelDescription(e.target.value);
    }
  };

  // Modal form submit
  const onSubmit = (e) => {
    e.preventDefault();
    setChannelName("");
    setChannelDescription("");
    setModalIsOpen(false);
    setExpand(true);
    addChannel(channelName, channelDescription);
  };

  const channelModal = () => {
    return (
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <h1 className="channel__modal">Create a channel</h1>
        <h4>
          Channels are where your team communicates. They’re best when organized
          around a topic — #marketing, for example.
        </h4>
        <form onSubmit={onSubmit}>
          <div>
            <AuthInput
              name="name"
              inputType="text"
              placeholder="Name(Required)"
              changeHandler={onChangeHandler}
            />
          </div>
          <div>
            <AuthInput
              name="description"
              inputType="text"
              placeholder="Description (Optional)"
              changeHandler={onChangeHandler}
            />
          </div>
          <div className="submitBtn-container">
            <button
              disabled={channelName === ""}
              className={`${channelName === "" ? "" : "active"} submitBtn`}
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  const DmModal = () => {
    return <div></div>;
  };

  return (
    <div className="LeftPanelCategory">
      <div className="LeftPanelCategory__title" onClick={selectCategoryHandler}>
        {expand ? <AiFillCaretDown /> : <AiFillCaretRight />}
        <div className="LeftPanelCategory__title-text">{title}</div>
        <div className="LeftPanelCategory__title-plus" onClick={addHandler}>
          <CgMathPlus />
        </div>
      </div>
      <div className="LeftPanelCategory__list">
        <ul>
          {expand
            ? channelList.map(({ name, id }) => {
                return (
                  <>
                    <li
                      className={selectedChatRoom === id ? "active" : ""}
                      onClick={() => selectChatRoom(id)}
                      key={id}
                    >
                      <HiOutlineHashtag />
                      {"   "}
                      {name}
                    </li>
                  </>
                );
              })
            : ""}
        </ul>
      </div>
      {title === "Channels" ? channelModal() : DmModal()}
    </div>
  );
};

export default LeftPanelCategory;
