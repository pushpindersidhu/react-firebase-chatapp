import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = (props) => {
  const auth = props.auth;

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-sky-500 m-auto rounded-md text-slate-900 font-bold py-4 px-12 w-fit transition ease-in-out hover:bg-sky-400 duration-150 active:bg-sky-300"
    >
      Sign In With Google Account
    </button>
  );
};

export default SignIn;
