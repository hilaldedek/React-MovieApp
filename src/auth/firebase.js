// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1yTQQIM-EUEhkCkbsfUWoEpLYDtDPgh4",
  authDomain: "movieapp-fabac.firebaseapp.com",
  projectId: "movieapp-fabac",
  storageBucket: "movieapp-fabac.appspot.com",
  messagingSenderId: "463058818026",
  appId: "1:463058818026:web:296f645094dd95944b5893",
  measurementId: "G-N6QY7MXFWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
