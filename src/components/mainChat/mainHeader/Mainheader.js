import React, { useEffect } from "react";
import "./Mainheader.scss";
import { useAuth } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

import { FaBars } from "react-icons/fa";

import { BsPower } from "react-icons/bs";
const Mainheader = ({ clickMenu, isOpen }) => {
  const { currentUser, signOut } = useAuth();
  const history = useHistory();
  const signOutHandler = () => {
    signOut();
  };

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [history, currentUser]);

  const handleMenuClick = () => {
    clickMenu(!isOpen);
  };

  return (
    <div className="Mainheader">
      <div className="MainHeader__menu" onClick={handleMenuClick}>
        <FaBars />
      </div>
      <div className="Mainheader__userinfo">
        <div className="Mainheader__username">
          {currentUser && currentUser.email}
        </div>
        <button onClick={signOutHandler} className="Mainheader__button">
          <BsPower />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Mainheader;
