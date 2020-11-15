import React, { useState } from "react";
import "./LeftPanelCategory.scss";

import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";

const LeftPanelCategory = ({ title }) => {
  const [expand, setExpand] = useState(false);

  const selectCategoryHandler = () => {
    console.log("select category");
    setExpand(!expand);
  };

  const addHandler = (e) => {
    e.stopPropagation();
    console.log("add handler");
  };

  const selectedChatroomHandler = () => {
    console.log("selected chatroom");
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
        <li onClick={selectedChatroomHandler} className="active">
          Javacript
        </li>
        <li>React</li>
        <li>Vue.js</li>
        <li>Python</li>
        <li>Kotlin</li>
        <li>Ruby</li>
        <li>dev_resources</li>
      </div>
    </div>
  );
};

export default LeftPanelCategory;
