import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH4Q8dnYN9xnT8drnKykwmpf5Lk2neltA",
  authDomain: "sidhu-84f67.firebaseapp.com",
  projectId: "sidhu-84f67",
  storageBucket: "sidhu-84f67.appspot.com",
  messagingSenderId: "97082508866",
  appId: "1:97082508866:web:39f1f5541fb25041c98fdb",
  measurementId: "G-X33BPJS28Z",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
