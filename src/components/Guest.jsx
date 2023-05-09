import React from "react";

import useAuth from "../hooks/useAuth";
import { getAvatarLink } from "../utils/avatar";

import Input from "./common/Input";
import Button from "./common/Button";
import Divider from "./common/Divider";
import Avatar from "./common/Avatar";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Guest = () => {
  const { signInGuest } = useAuth();

  const seed = Math.round(Math.random() * 1000);
  const [selectedAvatar, setSelectedAvatar] = React.useState(seed);
  const [username, setUsername] = React.useState("");

  const nextAvatar = () => {
    setSelectedAvatar(selectedAvatar + 1);
  };

  const prevAvatar = () => {
    setSelectedAvatar(selectedAvatar - 1);
  };

  const joinChat = () => {
    signInGuest(username, getAvatarLink(selectedAvatar));
  };

  return (
    <div className="absolute z-10 flex h-screen w-screen items-center justify-center bg-white backdrop-blur dark:bg-black/50">
      <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-gray-900">
        <h1 className="text-md m-4 py-2 font-bold text-bunker-600 dark:text-white">
          Guest Account
        </h1>

        <div className="mb-4 flex flex-row items-center justify-center">
          <div
            onClick={prevAvatar}
            className="mx-3 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600"
          >
            <FaChevronLeft size="12" />
          </div>

          <Avatar
            onClick={prevAvatar}
            id={selectedAvatar - 1}
            className="h-12 w-12 opacity-70"
          />
          <Avatar id={selectedAvatar} className="h-16 w-16" />
          <Avatar
            onClick={nextAvatar}
            id={selectedAvatar + 1}
            className="h-12 w-12 opacity-70"
          />

          <div
            onClick={nextAvatar}
            className="mx-3 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600"
          >
            <FaChevronRight size="12" />
          </div>
        </div>

        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={joinChat} text="Join Chat" />

        <Divider />

        <div className="mt-4 text-sm text-gray-400">Don't say anything stupid.</div>
      </div>
    </div>
  );
};

export default Guest;
