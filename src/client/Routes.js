import React from "react";
import { useRoutes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.page";
import UserList from "./pages/UsersList.page";
import NotFoundPage from "./pages/404.page";
import AdminListPage from "./pages/AdminList.page";

export const routes = [
	{
		...App,
		children: [
			{
				...Home,
				path: "/",
			},
			{
				...AdminListPage,
				path: "/admins",
			},
			{
				...UserList,
				path: "/users",
			},
			{
				...NotFoundPage,
				path: "*",
			},
		],
	},
];

export const CreateRoute = () => {
	return useRoutes(routes);
};
