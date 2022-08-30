import React from "react";

const Divider = ({ className }) => {
  return (
    <div
      className={
        className ||
        "my-2 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-800"
      }
    />
  );
};

export default Divider;
