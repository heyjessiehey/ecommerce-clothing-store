import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // handle mutiple middle ware

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store); // persist version of our store

export { store, persistor };
