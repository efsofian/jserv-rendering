import { SET_404 } from "../actions";

export default (state = false, action) => {
	switch (action.type) {
		case SET_404:
			return true;
		default:
			return state;
	}
};
