import React, { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase";
import firebase from "firebase/app";
export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState();
  const [errorFromAuth, setErrorFromAuth] = useState("");

  // eslint-disable-next-line
  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setErrorFromAuth(error.message);
    });
  };
  // eslint-disable-next-line
  const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      setErrorFromAuth(error.message);
    });
  };

  const signOut = () => {
    auth.signOut();
  };

  const googleSignIn = () => {
    // we can always declare the provider in firebase ('../firebase/firebase.js)
    // however, I added in Auth Context,
    // if we add other auth provider like facebook, github, twitter etc
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      })
      .catch(function (error) {
        console.log(error);
        setErrorFromAuth(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    signUp,
    errorFromAuth,
    login,
    googleSignIn,
    currentUser,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
