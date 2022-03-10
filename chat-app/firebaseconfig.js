// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAg2_bCsMPY2tfk6c3VN5gZvLSXxu0reN4",
	authDomain: "webmechat.firebaseapp.com",
	projectId: "webmechat",
	storageBucket: "webmechat.appspot.com",
	messagingSenderId: "1057621883125",
	appId: "1:1057621883125:web:9031c5b22e3333649c2dbc",
	measurementId: "G-9TJ3R46W4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }