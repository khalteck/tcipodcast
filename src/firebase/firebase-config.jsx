// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq-ut09_8qozzcxr3-orzCyWRDKNaY-kA",
  authDomain: "tcipod-e0ba7.firebaseapp.com",
  projectId: "tcipod-e0ba7",
  storageBucket: "tcipod-e0ba7.appspot.com",
  messagingSenderId: "960862013330",
  appId: "1:960862013330:web:bda0b70d0c644d1e72a34b",
  measurementId: "G-KZS4SH5PCN",
};

//to initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
