import React from "react";
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { HiAtSymbol } from "react-icons/hi";

import useDarkMode from "../../hooks/useDarkMode";

import HeaderIcon from "./HeaderIcon";

import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, signOutGuest } = useAuth();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useDarkMode();

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <div className="z-10 flex h-16 w-full shrink-0 flex-row items-center justify-between bg-gray-100 px-4 shadow-sm dark:bg-bunker-1000">
      <span className="flex items-center px-2 text-sm font-bold text-gray-700 dark:text-gray-400">
        <HiAtSymbol size="20" />
        <span className="p-1">{user && user.displayName}</span>
      </span>
      <div className="flex flex-row items-center">
        <HeaderIcon
          onClick={toggleDarkMode}
          icon={isDarkModeEnabled ? <FaSun size="20" /> : <FaMoon size="20" />}
          tooltip={
            isDarkModeEnabled ? "Switch to Light Theme" : "Switch to Dark Theme"
          }
        />

        <HeaderIcon
          onClick={signOutGuest}
          icon={<GoSignOut size="20" />}
          tooltip={"Sign Out"}
          color="hover:text-red-500 dark:hover:text-red-500"
        />
      </div>
    </div>
  );
};

export default Header;
