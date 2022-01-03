import { createSelector } from "reselect";
import { initialState } from "./reducers";

const selectHomeDomain = (state) => state.homePage || initialState;

const makeSelectHomePage = (key) => () =>
	createSelector(selectHomeDomain, (substate) => substate[key]);

export const makeSelectProductsList = makeSelectHomePage("productsList");
