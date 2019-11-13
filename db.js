import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDHv4DqFZ-T8jrnQdyqufda6JJlo4sWIXU",
    authDomain: "mentor-matching-8e488.firebaseapp.com",
    databaseURL: "https://mentor-matching-8e488.firebaseio.com",
    projectId: "mentor-matching-8e488",
    storageBucket: "mentor-matching-8e488.appspot.com",
    messagingSenderId: "315364453972",
    appId: "1:315364453972:web:e0f2da3c8b6844b89387c1",
    measurementId: "G-V8414DRNT9"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;