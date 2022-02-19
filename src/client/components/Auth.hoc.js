import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default (ChildComponent) => {
	const Auth = (props) => {
		const auth = useSelector((state) => state.auth);
		switch (auth) {
			case false:
				return <Navigate to="/" />;
			case null:
				return <div>Loading</div>;
			default:
				return <ChildComponent {...props} />;
		}
	};
	return Auth;
};
