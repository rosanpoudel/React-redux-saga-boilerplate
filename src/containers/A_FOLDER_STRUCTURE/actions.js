import DUMMY_ACTIONS from "./constants";

export const actionName = (payload) => {
	return {
		type: DUMMY_ACTIONS.ACTION_NAME,
		payload: payload,
	};
};
