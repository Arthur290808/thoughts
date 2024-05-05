// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDGLJTZV95SQpaUFLmQvdKLFhugYt1dM",
  authDomain: "peoples-thoughts.firebaseapp.com",
  projectId: "peoples-thoughts",
  storageBucket: "peoples-thoughts.appspot.com",
  messagingSenderId: "167294350773",
  appId: "1:167294350773:web:abc139a964743abe4515fc",
  measurementId: "G-HKEK2KEVR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);