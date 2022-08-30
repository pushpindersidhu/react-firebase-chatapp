import React from "react";

const SideBarItem = ({ icon, tooltip, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative mx-auto my-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-50 text-accent-400 shadow-lg transition-all duration-200 ease-linear hover:rounded-xl hover:bg-accent-400 hover:text-white dark:bg-bunker-800 dark:hover:bg-accent-400"
    >
      {icon}
      <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 select-none rounded-md bg-gray-50 py-2 px-4 text-xs font-bold text-bunker-600 shadow-md transition-all group-hover:scale-100 dark:bg-bunker-800 dark:text-gray-300">
        {tooltip}
      </span>
    </div>
  );
};

export default SideBarItem;
