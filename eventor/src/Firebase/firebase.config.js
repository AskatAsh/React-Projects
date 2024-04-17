// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5aS2Z9G5NpAzvVxuOq18P_9yrN2ELyY",
  authDomain: "eventor-d60ed.firebaseapp.com",
  projectId: "eventor-d60ed",
  storageBucket: "eventor-d60ed.appspot.com",
  messagingSenderId: "8400534834",
  appId: "1:8400534834:web:097df99ab81665e878ab2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;