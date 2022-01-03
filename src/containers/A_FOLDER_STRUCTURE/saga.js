import { call, put, takeLatest } from "redux-saga/effects";
import apiEndPoints from "../../globalConstants";
import request from "../../utils/request";
import TokenHandler from "../../utils/api/token";

// actions
import DUMMY_ACTIONS from "./constants";
import { actionName } from "./actions";

function* functionName() {
	const requestURL = "";
	try {
		const response = yield call(request, requestURL, {
			method: "GET",
			headers: TokenHandler.headers(),
		});
		yield put(actionName(response));
	} catch (error) {
		console.log("error:", error);
	}
}

export function* homeSaga() {
	yield takeLatest(DUMMY_ACTIONS.ACTION_NAME, functionName);
}
