import React from "react";
import "./LeftPanelBody.scss";
import LeftPanelCategory from "./LeftPanelCategory/LeftPanelCategory";

const LeftPanelBody = () => {
  return (
    <div className="LeftPanelBody">
      <div className="LeftPanelBody__Body">
        <LeftPanelCategory title="Channels" />
        <LeftPanelCategory title="Direct messages" />
      </div>
    </div>
  );
};

export default LeftPanelBody;
