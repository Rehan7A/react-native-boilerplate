import React from "react";
import AppEntry from "./src/AppEntry";
import { Provider } from "react-redux";
import { store } from "@redux/store";

const App = () => {
	return (
		<Provider store={store}>
			<AppEntry />
		</Provider>
	);
};

export default App;
