import DUMMY_ACTIONS from "./constants";

export const initialState = {
	stateName: "",
};
export const dummyReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case DUMMY_ACTIONS.ACTION_NAME:
			return { ...state, stateName: payload };
		default:
			return state;
	}
};
