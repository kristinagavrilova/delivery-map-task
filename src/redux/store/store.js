import {configureStore} from "@reduxjs/toolkit";
import contentReducer from "../reducer/contentReducer";
import createSagaMiddleware from "redux-saga";
import {sagaWatcher} from "../saga/saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        main: contentReducer
    },
    middleware
})

sagaMiddleware.run(sagaWatcher);
export default store;


