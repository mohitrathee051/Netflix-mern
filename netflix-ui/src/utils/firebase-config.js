// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVEAIiTrwCgJ0NCuPbWEgYzl1OTXb_15k",
  authDomain: "react-netflix-clone-5cdb5.firebaseapp.com",
  projectId: "react-netflix-clone-5cdb5",
  storageBucket: "react-netflix-clone-5cdb5.appspot.com",
  messagingSenderId: "331945908953",
  appId: "1:331945908953:web:cce4f0d9789b8d301f3cc8",
  measurementId: "G-4Z3JGCLWJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app); // Initialize Firebase Auth and store it in firebaseAuth

export { firebaseAuth };