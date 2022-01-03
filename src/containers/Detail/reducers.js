import DETAIL_ACTIONS from "./constants";

export const initialState = {
	productDetails: {},
};
export const productDetailReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case DETAIL_ACTIONS.SET_PRODUCT_DETAIL:
			return { ...state, productDetails: payload };
		case DETAIL_ACTIONS.CLEANUP_DETAIL_DATA:
			return { ...state, productDetails: {} };

		default:
			return state;
	}
};
