import { combineReducers } from "redux";
import usersReducers from "./users.reducers";
import authReducers from "./auth.reducers";
import notfoundReducers from "./404.reducers";
import adminReducers from "./admins.reducers";

export default combineReducers({
	users: usersReducers,
	auth: authReducers,
	nf: notfoundReducers,
	admins: adminReducers,
});
