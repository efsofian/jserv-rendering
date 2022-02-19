import React from "react";
import { set404 } from "../actions";

const NotFoundPage = () => {
	return <h1>Oops..! page not found :[-</h1>;
};

function loadData(store) {
	return store.dispatch(set404());
}

export default {
	element: <NotFoundPage />,
	loadData,
};
