import React from "react";
import "./MidPanelBlank.scss";
import ChatImage from "../../../../../assets/images/3288524.jpg";
import MidPanelHeader from "../MidPanelHeader/MidPanelHeader";

const MidPanelBlank = () => {
  return (
    <>
      <MidPanelHeader />
      <div
        className="MidPanelBlank"
        style={{
          backgroundImage: `url(${ChatImage})`,
        }}
      >
        <div className="MidPanelBlank__title">
          Welcome to Joungwoo Baik's Chat app!
        </div>
        <div className="MidPanelBlank__body">
          Please Create or Select a Channel
        </div>
      </div>
    </>
  );
};

export default MidPanelBlank;
