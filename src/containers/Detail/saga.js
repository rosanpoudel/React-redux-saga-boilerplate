import { call, put, takeLatest } from "redux-saga/effects";
import apiEndPoints from "../../globalConstants";
import request from "../../utils/api/request";
import DETAIL_ACTIONS from "./constants";
import { setProductDetails } from "./actions";
import TokenHandler from "../../utils/api/token";

function* getProductDetails(action) {
	const requestURL = `${apiEndPoints.FETCH_PRODUCT_DETAILS}/${action.payload}`;
	try {
		const response = yield call(request, requestURL, {
			method: "GET",
			headers: TokenHandler.headers(),
		});
		yield put(setProductDetails(response));
	} catch (error) {
		console.log("error:", error);
	}
}

export function* detailSaga() {
	yield takeLatest(DETAIL_ACTIONS.GET_PRODUCT_DETAIL, getProductDetails);
}
