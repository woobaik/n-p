import React from "react";
import "./AuthButton.scss";

const AuthButton = ({ title, loading }) => {
  return (
    <>
      <button className="AuthButton" disabled={loading}>
        {title}
      </button>
    </>
  );
};

export default AuthButton;
