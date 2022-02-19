import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { CreateRoute } from "./Routes";
import reducers from "./reducers/root.reducers";

const axiosInstance = axios.create({
	baseURL: "/api",
});
const store = createStore(
	reducers,
	window.INITIAL_STATE,
	applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<CreateRoute />
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
