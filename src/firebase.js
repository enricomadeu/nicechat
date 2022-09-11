// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFOmYtQFwBnX9bJqP35ZozsUVnpR_QYQ",
  authDomain: "superchat-db403.firebaseapp.com",
  projectId: "superchat-db403",
  storageBucket: "superchat-db403.appspot.com",
  messagingSenderId: "81389599786",
  appId: "1:81389599786:web:4fbcfd1d6ac7f7f8d49753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
