import React from "react";

const Button = (props) => {
	const { text, onClick, className } = props;

	return (
		<button
			onClick={onClick}
			className={
				className ||
				"py-3 px-6 w-full my-6 rounded-lg bg-white dark:bg-green-600 hover:dark:bg-green-700 text-gray-900 dark:text-gray-100 outline-none text-sm cursor-pointer"
			}
		>
			{text}
		</button>
	);
};

export default Button;
