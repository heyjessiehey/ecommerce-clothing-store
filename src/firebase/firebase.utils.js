import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBs-iH6PPLA0HCx8H0lUTQVhX25ZALkBbY",
  authDomain: "crwn-db-b7e95.firebaseapp.com",
  projectId: "crwn-db-b7e95",
  storageBucket: "crwn-db-b7e95.appspot.com",
  messagingSenderId: "613203070958",
  appId: "1:613203070958:web:497d0db53266507b1808ff",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentification Properties
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // always trigger google pop up whenever use google auth provider for authentification or singin
export const signInWithGoogle = () => auth.signInWithPopup(provider); // there are multiple popup, we use google provider

export default firebase;
