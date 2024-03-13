// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRI4JLBurRc3WHoN87iEwQ4sElzNOLEuQ",
  authDomain: "donative-20d89.firebaseapp.com",
  projectId: "donative-20d89",
  storageBucket: "donative-20d89.appspot.com",
  messagingSenderId: "20496255589",
  appId: "1:20496255589:web:c7c00d85181448b85c548c",
  measurementId: "G-ED7ZM5L8HJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);