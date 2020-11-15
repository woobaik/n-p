import React from "react";
import "./LeftPanelHeader.scss";
import { BsPencilSquare } from "react-icons/bs";

const LeftPanelHeader = () => {
  return (
    <div className="LeftPanelHeader">
      <div className="LeftPanelHeader__title">Nomad Coders</div>
      <div className="LeftPanelHeader__plus_icon">
        <BsPencilSquare />
      </div>
    </div>
  );
};

export default LeftPanelHeader;
