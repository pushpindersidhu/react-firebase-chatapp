import React from "react";

const Input = (props) => {
  const { value, onChange, type, placeholder, className, onKeyDown } = props;
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      spellCheck="false"
      autoComplete="off"
      className={
        className ||
        "my-3 w-full rounded-lg bg-white py-3 px-6 text-sm text-gray-900 outline-none dark:bg-gray-800 dark:text-gray-100"
      }
    />
  );
};

export default Input;
