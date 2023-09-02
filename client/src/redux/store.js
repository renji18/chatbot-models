import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from "./reducers";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware, logger],
});

sagaMiddleware.run(mySaga)

export default store;