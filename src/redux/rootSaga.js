import { spawn } from "redux-saga/effects";
import { homeSaga } from "../containers/Home/saga";
import { detailSaga } from "../containers/Detail/saga";

export function* rootSaga() {
	yield spawn(homeSaga);
	yield spawn(detailSaga);
}
