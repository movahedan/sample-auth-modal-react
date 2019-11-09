import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import AppContainer from "styled/containers/App";
import CustomButton from "styled/components/Button";
import useTheme from "styled/theme";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const { theme, darkMode, setDarkMode } = useTheme(false);
  const store = useSelector(state => state);
  
	useEffect(() => {
		console.log("redux store", store);
	}, [store]);

	return (
		<ThemeProvider theme={theme}>
			<AppContainer className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<CustomButton onClick={() => setDarkMode(mode => !mode)}>
						{darkMode ? "White mode" : "Dark mode"}
					</CustomButton>
				</header>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
