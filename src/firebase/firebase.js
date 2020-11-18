import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const auth = app.auth();
export const db = app.firestore();
export const storage = firebase.storage();
export default app;
