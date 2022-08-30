import React from "react";

import useAuth from "../../hooks/useAuth";
import { getAvatarLink } from "../../utils/avatar";

import Input from "../common/Input";
import Button from "../common/Button";
import Divider from "../common/Divider";
import TextLink from "../common/TextLink";
import Avatar from "../common/Avatar";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Guest = () => {
	const { currentUser, signInGuest, signOutGuest } = useAuth();

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
		<div className="absolute w-screen h-screen bg-black/50 z-10 flex justify-center items-center backdrop-blur">
			<div className="bg-gray-900 w-full max-w-sm p-6 flex flex-col items-center rounded-lg shadow-lg">
				<h1 className="text-md font-bold text-white m-4 py-2">Guest Account</h1>

				<div className="flex flex-row justify-center items-center mb-4">
					<div
						onClick={prevAvatar}
						className="flex justify-center items-center text-gray-600 dark:bg-gray-700 bg-green-500 rounded-full w-6 h-6 dark:text-gray-100 mx-3 cursor-pointer hover:dark:bg-gray-600 shrink-0"
					>
						<FaChevronLeft size="12" />
					</div>

					<Avatar onClick={prevAvatar} id={selectedAvatar - 1} className="w-12 h-12 opacity-90" />
					<Avatar id={selectedAvatar} className="w-16 h-16" />
					<Avatar onClick={nextAvatar} id={selectedAvatar + 1} className="w-12 h-12 opacity-90" />

					<div
						onClick={nextAvatar}
						className="flex justify-center items-center text-gray-600 dark:bg-gray-700 bg-green-500 rounded-full w-6 h-6 dark:text-gray-100 mx-3 cursor-pointer hover:dark:bg-gray-600 shrink-0"
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

				<TextLink text="Already have an account?" linkText="Sign In" />
			</div>
		</div>
	);
};

export default Guest;
