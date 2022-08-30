import React from "react";

import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
	const [enabled, setEnabled] = useLocalStorage("dark-theme", false);

	React.useEffect(() => {
		const darkClass = "dark";
		const bodyClassList = window.document.body.classList;

		if (enabled) bodyClassList.add(darkClass);
		else bodyClassList.remove(darkClass);
	}, [enabled]);

	return [enabled, setEnabled];
};

export default useDarkMode;
