import React from "react";
import "./LeftPanel.scss";
import LeftPanelBody from "./LeftPanelBody/LeftPanelBody";
import LeftPanelHeader from "./LeftPanelHeader/LeftPanelHeader";

const LeftPanel = () => {
  return (
    <div className="LeftPanel">
      <LeftPanelHeader />
      <LeftPanelBody />
    </div>
  );
};

export default LeftPanel;
