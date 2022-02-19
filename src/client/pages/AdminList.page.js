import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthHoc from "../components/Auth.hoc";
import { fetchAdmins } from "../actions";

const AdminListPage = () => {
	const admins = useSelector((state) => state.admins);
	const dispatch = useDispatch();

	const renderAdmins = () => {
		return admins.map((admin) => {
			return <li key={admin.id}>{admin.name}</li>;
		});
	};
	useEffect(() => {
		dispatch(fetchAdmins());
	}, []);
	return (
		<div>
			<h3>Protected list of admins:</h3>
			<ul>{renderAdmins()}</ul>
		</div>
	);
};

function loadData(store) {
	return store.dispatch(fetchAdmins());
}

const EXP = AuthHoc(AdminListPage);
export default {
	element: <EXP />,
	loadData,
};
