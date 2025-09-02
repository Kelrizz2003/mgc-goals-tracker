// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD7ntpNom6QvDy0cPkrRsUt7Yd4xKF3RS8",
  authDomain: "mgc-goal-tracker.firebaseapp.com",
  projectId: "mgc-goal-tracker",
  storageBucket: "mgc-goal-tracker.firebasestorage.app",
  messagingSenderId: "445234825437",
  appId: "1:445234825437:web:93c54858768205354f3334"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)