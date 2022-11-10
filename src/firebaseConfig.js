import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCT68lOSl8Sf5urKjzG6DCM3B4eofbOYqk",
    authDomain: "novolocalab.firebaseapp.com",
    databaseURL: "https://novolocalab-default-rtdb.firebaseio.com/",
    projectId: "novolocalab",
    storageBucket: "novolocalab.appspot.com",
    messagingSenderId: "720341766167",
    appId: "1:720341766167:web:bb2814347efb1dd2350c52",
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
