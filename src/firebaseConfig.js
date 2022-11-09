// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT68lOSl8Sf5urKjzG6DCM3B4eofbOYqk",
  authDomain: "novolocalab.firebaseapp.com",
  projectId: "novolocalab",
  storageBucket: "novolocalab.appspot.com",
  messagingSenderId: "720341766167",
  appId: "1:720341766167:web:bb2814347efb1dd2350c52"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default firebase;
