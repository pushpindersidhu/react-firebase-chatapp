import React from "react";

const SignOut = (props) => {
  const auth = props.auth;

  const signOut = () => {
    auth.signOut();
  };

  return (
    <button
      onClick={signOut}
      className="rounded-md text-black font-bold py-2 px-4 w-fit transition ease-in-out hover:bg-rose-50 duration-150 active:bg-rose-100 border border-black hover:border-rose-500"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
