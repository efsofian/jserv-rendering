import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchUsers } from "../actions";
import { head } from "lodash";

const UserList = () => {
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const renderUsers = (users) => {
		return users.map((user) => {
			return <li key={user.id}>{user.name}</li>;
		});
	};

	const head = () => {
		return (
			<Helmet>
				<title>{`${users.length} Users Loaded`}</title>
				<meta property="og:title" content="Users App" />
			</Helmet>
		);
	};
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	if (users.length === 0) {
		return <h1>Loading</h1>;
	}
	return (
		<div>
			{head()}
			list of users:
			<ul>{renderUsers(users)}</ul>
		</div>
	);
};

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export default {
	element: <UserList />,
	loadData,
};
