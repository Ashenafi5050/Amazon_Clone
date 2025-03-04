import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHveo0FpQtjCF1KpVI_rXIagHGYjG5vTk",
  authDomain: "clone-4d1eb.firebaseapp.com",
  projectId: "clone-4d1eb",
  storageBucket: "clone-4d1eb.firebasestorage.app",
  messagingSenderId: "711116552336",
  appId: "1:711116552336:web:717226f2f86e8bb9790015",
  measurementId: "G-RY1GVE0DFN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()