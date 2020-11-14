import React from "react";
import AuthHeader from "../sharedComponents/AuthHeader/AuthHeader"; // We can always make an index file to reduce file path :)
import FormContainer from "./AuthFormContainer/FormContainer";
import "./Register.scss";

const Register = () => {
  return (
    <div className="Register">
      <AuthHeader />
      <FormContainer
        type="signup"
        title="Sign up to Slack"
        description="Continue with the Google account or sign up with email address."
      />
    </div>
  );
};

export default Register;

// ref::   https://slack.com/signin#/signin
