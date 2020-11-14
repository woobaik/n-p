import React from "react";
import "./AuthInput.scss";
const AuthInput = ({
  name,
  inputType,
  inputValue,
  placeholder,
  changeHandler,
}) => {
  return (
    <>
      <input
        name={name}
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        className="AuthInput"
        onChange={changeHandler}
      />
    </>
  );
};

export default AuthInput;
