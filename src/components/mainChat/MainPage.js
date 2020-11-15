import React from "react";
import LeftPanel from "./mainBody/leftPanel/LeftPanel";
import MidPanel from "./mainBody/midPanel/MidPanel";
import RightPanel from "./mainBody/rightPanel/RightPanel";
import Mainheader from "./mainHeader/Mainheader";
import "./MainPage.scss";
const MainPage = () => {
  return (
    <div className="MainPage">
      <Mainheader />
      <div className="MainPage-body">
        <div className="left-container">
          <LeftPanel />
        </div>
        <div className="mid-container">
          <MidPanel />
        </div>
        <div className="right-container">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
