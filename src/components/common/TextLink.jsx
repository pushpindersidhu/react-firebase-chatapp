import React from "react";

const TextLink = (props) => {
	const { text, linkText, onClick } = props;

	return (
		<div className="mt-4 text-gray-400 text-sm">
			{text}{" "}
			<span
				onClick={onClick}
				className="font-bold text-green-600 dark:text-green-400 hover:text-green-700 hover:dark:text-green-500 cursor-pointer"
			>
				{linkText}
			</span>
		</div>
	);
};

export default TextLink;
