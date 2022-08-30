import React from "react";

const Input = (props) => {
	const { value, onChange, type, placeholder, className } = props;
	return (
		<input
			className={
				className ||
				"py-3 px-6 w-full my-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none text-sm"
			}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
