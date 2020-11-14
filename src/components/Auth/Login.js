import React from "react";
import AuthHeader from "../sharedComponents/AuthHeader/AuthHeader"; // We can always make an index file to reduce file path :)
import FormContainer from "./AuthFormContainer/FormContainer";
import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <AuthHeader />
      <FormContainer
        type="login"
        title="Sign in to Slack"
        description="Continue with the Google account or email address you use to sign in."
      />
    </div>
  );
};

export default Login;

// ref::   https://slack.com/signin#/signin
