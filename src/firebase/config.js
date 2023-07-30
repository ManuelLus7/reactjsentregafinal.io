// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK0vtf3YvfDBffEUlIuJPY20bD0dpGGuE",
  authDomain: "wottonshop.firebaseapp.com",
  projectId: "wottonshop",
  storageBucket: "wottonshop.appspot.com",
  messagingSenderId: "184264445712",
  appId: "1:184264445712:web:a84acc77b0bc6d9b6b1f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);