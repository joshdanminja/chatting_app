import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
        apiKey: "AIzaSyCqUReHRAJT7UR5Kl3vqq9Xd-Hq_leVakg",
        authDomain: "react-firebase-chatting-app.firebaseapp.com",
        databaseURL: "https://react-firebase-chatting-app.firebaseio.com",
        projectId: "react-firebase-chatting-app",
        storageBucket: "react-firebase-chatting-app.appspot.com",
        messagingSenderId: "731362782029",
        appId: "1:731362782029:web:49be5ad784252a4483e504"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();