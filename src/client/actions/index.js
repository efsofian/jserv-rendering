export const FETCH_USERS = "FETCH_USERS";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const SET_404 = "SET_404";
export const FETCH_ADMINS = "FETCH_ADMINS";

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
	const { data } = await axiosInstance.get("/userslist");
	dispatch({
		type: FETCH_USERS,
		payload: data,
	});
};

export const fetchCurrentUser =
	() => async (dispatch, getState, axiosInstance) => {
		const { data } = await axiosInstance.get("/current_user");
		dispatch({
			type: FETCH_CURRENT_USER,
			payload: data,
		});
	};

export const set404 = () => async (dispatch, getState) => {
	dispatch({
		type: SET_404,
	});
};

export const fetchAdmins = () => async (dispatch, getState, axiosInstance) => {
	const { data } = await axiosInstance.get("/adminslist");
	dispatch({
		type: FETCH_ADMINS,
		payload: data,
	});
};
