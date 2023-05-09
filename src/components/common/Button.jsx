import React from "react";

const Button = (props) => {
  const { text, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={
        className ||
        "my-6 w-full cursor-pointer rounded-lg bg-green-400 py-3 px-6 text-sm text-gray-900 outline-none hover:bg-green-500 dark:bg-green-600 dark:text-gray-100 hover:dark:bg-green-700"
      }
    >
      {text}
    </button>
  );
};

export default Button;
