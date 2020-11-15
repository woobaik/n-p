import React, { useEffect } from "react";
import "./Mainheader.scss";
import { useAuth } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

const Mainheader = () => {
  const { currentUser, signOut } = useAuth();
  const history = useHistory();
  const signOutHandler = () => {
    console.log("hello sign out");
    signOut();
  };

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [history, currentUser]);
  return (
    <div className="Mainheader">
      <div>{currentUser && currentUser.email}</div>
      <button onClick={signOutHandler}>LOGOUT</button>
    </div>
  );
};

export default Mainheader;
