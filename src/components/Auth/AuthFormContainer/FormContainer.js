import React, { useState, useEffect } from "react";
import "./FormContainer.scss";
import { useAuth } from "../../../context/AuthContext";

import googleSVG from "../../../assets/images/Google__G__Logo.svg";
import Divider from "../../sharedComponents/AuthHeader/Divider";
import AuthInput from "../AuthInput/AuthInput";
import AuthButton from "../AuthButton/AuthButton";
import { Link, useHistory } from "react-router-dom";

const FormContainer = ({ title, description, type }) => {
  const { signUp, login, currentUser, errorFromAuth, googleSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfrimation] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // For scalablity, I used exception catch at Auth context component.
  // So, any backend API can be integrated easily.
  useEffect(() => {
    if (errorFromAuth) {
      setErrors(errorFromAuth);
    }
  }, [errorFromAuth]);

  // when user switch login to singup after failing, clean up the error message.
  //because login, register share the error message
  useEffect(() => {
    setErrors("");
  }, [type]);

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const googleBtnClick = () => {
    googleSignIn();
  };

  // BAD CODE, I think I should just seperate login and register page.
  // Kinda hard to read the code.
  const handleSubmit = (e) => {
    setLoading(true);
    setErrors("");
    e.preventDefault();
    if (errorFromAuth) {
      setErrors(errorFromAuth);
    }
    if (type === "login") {
      login(email, password);
    } else if (type === "signup") {
      if (password !== passwordConfirmation) {
        setErrors("passwords do not match.");
      } else {
        signUp(email, password);
      }
    } else {
      // I'm not sure about its vulnerability of rendering signup or signin page by prop
      // so, I just used else clause, that might not be necessary.

      return;
    }
    setLoading(false);
  };

  // reusable function for each input type.

  const changeHandler = (e) => {
    const type = e.target.name;
    switch (type) {
      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      case "passwordConfirmation":
        setPasswordConfrimation(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className="Form-container">
      <h1>{title}</h1>
      <h3>{description}</h3>
      {/* google Auth BTN */}
      <button className="google-oauth-btn" onClick={googleBtnClick}>
        <img src={googleSVG} alt="google-oAuth Logo" />
        <span>Continue with Google</span>
      </button>
      <div className="or-divider">
        <Divider />
        <div className="divider-text">OR</div>
        <Divider />
      </div>
      {errors && <div className="error">{errors}</div>}
      <form onSubmit={handleSubmit}>
        <AuthInput
          changeHandler={changeHandler}
          inputType="email"
          placeholder="name@work-email.com"
          name="email"
        />
        <AuthInput
          inputType="password"
          placeholder="Password"
          name="password"
          changeHandler={changeHandler}
        />
        {type === "signup" ? (
          <AuthInput
            inputType="password"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            changeHandler={changeHandler}
          />
        ) : (
          ""
        )}
        {type === "login" ? (
          <>
            <AuthButton title="Sign In with Email" loading={loading} />
            <Link to="/register">
              <div className="signup-link">Don't have account yet?</div>
            </Link>
          </>
        ) : (
          <>
            <AuthButton title="Sign up with Email" loading={loading} />
            <Link to="/login" className="signin-link">
              Already have account? Login
            </Link>
          </>
        )}
      </form>
    </div>
  );
};

export default FormContainer;
