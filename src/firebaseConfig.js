import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCFhpOZHDX_xoMYqyuXA28kH-OeaQmpYf4",
    authDomain: "localab2.firebaseapp.com",
    projectId: "localab2",
    databaseURL: "https://localab2-default-rtdb.firebaseio.com/",
    storageBucket: "localab2.appspot.com",
    messagingSenderId: "873144839147",
    appId: "1:873144839147:web:fc5eb5e5182bd34e2a87ae"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
