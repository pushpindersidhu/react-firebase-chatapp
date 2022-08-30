import React from "react";
import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsSunFill,
  BsMoonFill,
  BsChatDotsFill,
  BsChatLeftDotsFill,
  BsCodeSlash,
  BsMusicNote,
} from "react-icons/bs";
import { FaFire, FaReadme, FaReact } from "react-icons/fa";
import { GiReactor } from "react-icons/gi";
import { AiFillRead } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdMovie } from "react-icons/md";

import useAuth from "../../hooks/useAuth";

import SideBarItem from "./SideBarItem";
import Divider from "../common/Divider";

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
