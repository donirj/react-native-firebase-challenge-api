// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6x_bnggsfdYBQiSXSIZmH05pHjYy6vhU",
  authDomain: "fir-auth-40028.firebaseapp.com",
  projectId: "fir-auth-40028",
  storageBucket: "fir-auth-40028.appspot.com",
  messagingSenderId: "1041540008863",
  appId: "1:1041540008863:web:571af89fe01e44bb690baa"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)