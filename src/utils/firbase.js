// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrmNFtfTxcw-hzPRmdz-HEGUrkhb_JxME",
  authDomain: "novaflixgpt.firebaseapp.com",
  projectId: "novaflixgpt",
  storageBucket: "novaflixgpt.appspot.com",
  messagingSenderId: "469134074925",
  appId: "1:469134074925:web:0c12ec207c0023018bc4a4",
  measurementId: "G-TBV6KQKNZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();