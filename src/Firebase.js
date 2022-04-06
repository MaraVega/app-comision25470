// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4WGpLAGjXL4rCk0gEUJ4IiHSuL_7tL-Q",
  authDomain: "comision-25470-c6adb.firebaseapp.com",
  projectId: "comision-25470-c6adb",
  storageBucket: "comision-25470-c6adb.appspot.com",
  messagingSenderId: "900494458726",
  appId: "1:900494458726:web:ae121ee31458ee1d03d2a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);