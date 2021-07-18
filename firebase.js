// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhY6yQmIXFUFPtCsv1flzMcNiWEss3uYc",
  authDomain: "fb-clone-f914a.firebaseapp.com",
  projectId: "fb-clone-f914a",
  storageBucket: "fb-clone-f914a.appspot.com",
  messagingSenderId: "934386197099",
  appId: "1:934386197099:web:2db4ee6b511f66c6be072e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
