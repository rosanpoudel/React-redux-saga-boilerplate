import { call, put, takeLatest } from "redux-saga/effects";
import LocalDb from "../../localStorage";
import HOME_ACTIONS from "./constants";
import { setProducts, setProductDetails } from "./actions";
import apiEndPoints from "../../globalConstants";
import request from "../../utils/api/request";
import TokenHandler from "../../utils/api/token";

export function* getProducts() {
	const requestURL = apiEndPoints.FETCH_PRODUCTS;

	try {
		const response = yield call(request, requestURL, {
			method: "GET",
			headers: TokenHandler.headers(),
		});
		yield put(setProducts(response));
	} catch (error) {
		console.log("error:", error);
	}
}

export function* homeSaga() {
	yield takeLatest(HOME_ACTIONS.GET_PRODUCTS, getProducts);
}
