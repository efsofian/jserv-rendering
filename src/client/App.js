import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = (props) => {
	console.log(props);
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

function loadData({ dispatch }) {
	return dispatch(fetchCurrentUser());
}

export default {
	element: <App />,
	loadData,
};
