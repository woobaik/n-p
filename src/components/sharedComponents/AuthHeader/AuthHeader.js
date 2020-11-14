import React from "react";
import "./AuthHeader.scss";
import logo from "../../../assets/images/slack_logo-ebd02d1.svg";
function AuthHeader() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="slack-header-logo" />
    </header>
  );
}

export default AuthHeader;

// ref::   https://slack.com/signin#/signin
