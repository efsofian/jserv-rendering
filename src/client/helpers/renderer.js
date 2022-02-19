import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import { CreateRoute } from "../Routes";

export default (req, store) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path}>
				<div>
					<CreateRoute />
				</div>
			</StaticRouter>
		</Provider>
	);
	const helmet = Helmet.renderStatic();
	return `
	<!DOCTYPE html>
	<html>
		<head>
		${helmet.title.toString()}
		${helmet.meta.toString()}
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
		</head>
		<body>
			<div id="root">${content}</div>
			<script>
				window.INITIAL_STATE = ${serialize(store.getState())}
			</script>
			<script src="bundle.js"></script>
		</body>
	</html>`;
};
