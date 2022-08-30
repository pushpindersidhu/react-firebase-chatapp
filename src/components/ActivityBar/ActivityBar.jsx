import React from "react";
import { BsPersonFill } from "react-icons/bs";

const ActivityBar = () => {
	const [activeUsers, setActiveUsers] = React.useState([
		{
			displayName: "Test User 1",
			photoURL: "",
		},
		{
			displayName: "Test User 2",
			photoURL: "",
		},
		{
			displayName: "Test User 3",
			photoURL: "",
		},
	]);

	return (
		<div className="w-48 md:w-64 h-full bg-sky-50 dark:bg-gray-700 flex flex-col p-4 shrink-0">
			<h2 className="text-md font-bold text-gray-900 my-2 dark:text-gray-200">
				Online - {activeUsers.length}
			</h2>
			{activeUsers.map((activeUser) => (
				<div className="w-full flex flex-row items-center my-2">
					<div className="w-10 h-10 rounded-full bg-gray-200 shadow-lg flex items-center justify-center text-green-500 dark:text-green-500 dark:bg-gray-700">
						{activeUser.photoURL ? <img src={activeUser.photoURL} alt="" /> : (
							<BsPersonFill size="20"/>
						)}
					</div>
					<span className="px-4 font-bold text-sm text-gray-900 dark:text-gray-100">
						{activeUser.displayName}
					</span>
				</div>
			))}
		</div>
	);
};

export default ActivityBar;
