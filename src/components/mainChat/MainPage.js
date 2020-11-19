import React, { useState } from "react";
import LeftPanel from "./mainBody/leftPanel/LeftPanel";
import MidPanel from "./mainBody/midPanel/MidPanel";
import RightPanel from "./mainBody/rightPanel/RightPanel";
import Mainheader from "./mainHeader/Mainheader";
import "./MainPage.scss";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  console.log(isSidebarOpen);
  return (
    <div className="MainPage">
      <Mainheader clickMenu={setIsSidebarOpen} isOpen={isSidebarOpen} />
      <div className="MainPage-body">
        <div
          className={`left-container ${isSidebarOpen ? "opened" : "closed"}`}
        >
          <LeftPanel isOpen={isSidebarOpen} />
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
