import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("root")
);
