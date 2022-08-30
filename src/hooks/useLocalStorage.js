import React from "react";

const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = React.useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : defaultValue;
		} catch (error) {
			console.log(error);
			return defaultValue;
		}
	});

	React.useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	}, [value]);

	return [value, setValue];
}

export default useLocalStorage;
