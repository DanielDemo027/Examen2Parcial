// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTwiFJjSLkyzqfImA9tTHf6tE7KQBWPLw",
  authDomain: "examen-segundo-parcial-ef0a6.firebaseapp.com",
  projectId: "examen-segundo-parcial-ef0a6",
  storageBucket: "examen-segundo-parcial-ef0a6.appspot.com",
  messagingSenderId: "169775594050",
  appId: "1:169775594050:web:a414e5f318af7891c9cbdb",
  measurementId: "G-Q0Z6M7WTKB"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const BD = getFirestore(FirebaseApp);