import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(
  applyMiddleware(sagaMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store
const store = createStore(rootReducers, enhancers);

// saga run
sagaMiddleware.run(rootSaga);

export default store;
