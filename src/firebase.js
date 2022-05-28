// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from 'firebase/database'
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuNn_3c4aaBXF4O_V3qtaxzDZKEH2OISU",
  authDomain: "shopping-list-6ca23.firebaseapp.com",
  databaseURL: "https://shopping-list-6ca23-default-rtdb.firebaseio.com",
  projectId: "shopping-list-6ca23",
  storageBucket: "shopping-list-6ca23.appspot.com",
  messagingSenderId: "535437915945",
  appId: "1:535437915945:web:719fdbdcc7673db6b2e938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };