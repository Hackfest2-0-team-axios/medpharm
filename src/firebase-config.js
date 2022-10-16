 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDUVzGASOd42BDDpLlM8GaTbpb7PcWtuVw",
  authDomain: "medpharm-299e7.firebaseapp.com",
  projectId: "medpharm-299e7",
  storageBucket: "medpharm-299e7.appspot.com",
  messagingSenderId: "981507211611",
  appId: "1:981507211611:web:59a59d114b6d6b9c385a7e",
  measurementId: "G-RFNDJJFX2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
