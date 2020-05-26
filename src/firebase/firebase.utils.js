import firebase from 'firebase/app';
// For the Google Firestore database
import 'firebase/firestore';
// For Google Firebase Oauth
import 'firebase/auth';

// PLEASE NOTE: This apiKey is my public key from Firebase
// It is meant to be public and is safe for source control
const config = {
    apiKey: "AIzaSyD89pFfFIHrGwC_Ki8lpDfX0Ay4OsFFg5E",
    authDomain: "multithreaded-8f0b8.firebaseapp.com",
    databaseURL: "https://multithreaded-8f0b8.firebaseio.com",
    projectId: "multithreaded-8f0b8",
    storageBucket: "multithreaded-8f0b8.appspot.com",
    messagingSenderId: "365017307963",
    appId: "1:365017307963:web:e8f79b1f62526156bbb51e",
    measurementId: "G-T3SPNRML0B"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

// setup Google auth provider
const provider = new firebase.auth.GoogleAuthProvider();

// Pass params to provider to always trigger the Google auth provider pop-up
provider.setCustomParameters({ prompt: 'select_account' });
// TODO: Create providers for Twitter and Facebook
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// Just in case we want the whole library
export default firebase;