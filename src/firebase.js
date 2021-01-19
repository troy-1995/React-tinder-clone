import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVLOCe2N8BpOO7nv2jC0IsLHfIayi8pH4",
    authDomain: "tinder-clone-ea912.firebaseapp.com",
    projectId: "tinder-clone-ea912",
    storageBucket: "tinder-clone-ea912.appspot.com",
    messagingSenderId: "533659668764",
    appId: "1:533659668764:web:a6ce7cf1b64742b22d2ad9",
    measurementId: "G-12WCQMW16R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;