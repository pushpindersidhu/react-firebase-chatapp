import React from "react";
import { BsGearFill, BsChatDotsFill } from "react-icons/bs";
import { GiReactor } from "react-icons/gi";

import useAuth from "../hooks/useAuth";

import SideBarItem from "./common/SideBarItem";

const SideBar = () => {
  const { user } = useAuth();

  return (
    <div className="z-20 flex h-full w-16 shrink-0 flex-col bg-gray-100 dark:bg-bunker-1100">
      {user ? (
        <SideBarItem
          icon={
            <img
              src={user.photoURL}
              alt=""
              className="h-full w-full rounded-full"
            />
          }
          tooltip={user.displayName}
        />
      ) : (
        <SideBarItem icon={<GiReactor size="20" />} tooltip="Sidhu" />
      )}

      <SideBarItem icon={<BsChatDotsFill size="20" />} tooltip="Chat" />

      <SideBarItem icon={<BsGearFill size="22" />} tooltip="Settings" />
    </div>
  );
};

export default SideBar;
