import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgbFDihvrz8pTf2xABJnjef8pW7aZYEgc",
  authDomain: "chatapp-cd9cd.firebaseapp.com",
  projectId: "chatapp-cd9cd",
  storageBucket: "chatapp-cd9cd.appspot.com",
  messagingSenderId: "200605944644",
  appId: "1:200605944644:web:6a7b0e759b5f1a87eb2511",
  measurementId: "G-B2HX77DFG4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
