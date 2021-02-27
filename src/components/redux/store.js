import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // handle mutiple middle ware

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
