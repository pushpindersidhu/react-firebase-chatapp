import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./components/SignIn";
import ChatMessages from "./components/Chat";

const firebaseConfig = {
  apiKey: "AIzaSyCH4Q8dnYN9xnT8drnKykwmpf5Lk2neltA",
  authDomain: "sidhu-84f67.firebaseapp.com",
  projectId: "sidhu-84f67",
  storageBucket: "sidhu-84f67.appspot.com",
  messagingSenderId: "97082508866",
  appId: "1:97082508866:web:39f1f5541fb25041c98fdb",
  measurementId: "G-X33BPJS28Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col justify-center items-center bg-sky-50 w-full h-screen">
      <div className="container-2xl m-2 rounded-md p-2 bg-white h-full max-w-2xl w-full mx-auto flex flex-col justify-center items-center">
        {user ? (
          <ChatMessages user={user} db={db} auth={auth} />
        ) : (
          <SignIn auth={auth} />
        )}
      </div>
    </div>
  );
}

export default App;
