// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxeZbLbRMB1zZtnRoTPMRDpMoaq9VLr_4",
  authDomain: "game-zone-571ad.firebaseapp.com",
  projectId: "game-zone-571ad",
  storageBucket: "game-zone-571ad.firebasestorage.app",
  // storageBucket: "game-zone-571ad.appspot.com",
  messagingSenderId: "38216884235",
  appId: "1:38216884235:web:90d8d3f4152e67cf25a70e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);