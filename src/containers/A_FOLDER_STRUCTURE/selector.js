import { createSelector } from "reselect";
import { initialState } from "./reducers";

const selectDataDomain = (state) => state.homePage || initialState;

// selector
const makeSelectData = (key) => () =>
	createSelector(selectDataDomain, (substate) => substate[key]);

// individual state
export const makeSelectStateName = makeSelectData("stateName");
