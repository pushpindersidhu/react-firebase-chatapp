import React from "react";

const Input = ({ onSubmit, onChange, value }) => {
  return (
    <input
      className="h-full w-full cursor-text bg-transparent px-4 text-sm font-normal text-bunker-800 placeholder-bunker-500 outline-none selection:bg-gray-300 dark:text-gray-100 dark:placeholder-gray-500 dark:selection:bg-bunker-700"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onSubmit();
        }
      }}
      onChange={onChange}
      value={value}
      placeholder="Type a message..."
      autoComplete="off"
      spellCheck="false"
    />
  );
};

export default Input;
