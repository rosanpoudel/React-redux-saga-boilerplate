import { createSelector } from "reselect";
import { initialState } from "./reducers";

const selectDetailDomain = (state) => state.detailPage || initialState;

const makeSelectDetailPage = (key) => () =>
	createSelector(selectDetailDomain, (substate) => substate[key]);

export const makeSelectProductDetails = makeSelectDetailPage("productDetails");
