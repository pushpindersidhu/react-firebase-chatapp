import React from "react";

const HeaderIcon = ({ icon, tooltip, onClick, color }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative mx-2 flex h-10 w-10 cursor-pointer items-center justify-center text-gray-600 transition-all duration-200 ease-linear  hover:text-accent-400 dark:text-gray-400 dark:hover:text-accent-400 ${color}`}
    >
      {icon}
      <span className="absolute top-8 m-2 w-auto min-w-max scale-0 select-none rounded-md bg-gray-50 py-2 px-4 text-xs font-bold text-bunker-600 shadow-md transition-all group-hover:scale-100 dark:bg-bunker-800 dark:text-gray-300">
        {tooltip}
      </span>
    </div>
  );
};

export default HeaderIcon;
