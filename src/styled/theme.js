import { useState } from "react";

export function getTheme(darkMode) {
	return {
		color: darkMode ? "white" : "black",
		background: darkMode ? "black" : "white"
	};
}

export default function useTheme(init) {
	const [darkMode, setDarkMode] = useState(init);

	return {
		darkMode,
		setDarkMode,
		theme: getTheme(darkMode)
	};
}
