import { createStore, compose, applyMiddleware} from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers";

const middlewares = [
	thunk,
	createLogger()
  ];

export default createStore(
    reducers,
    undefined,
	compose(
	  applyMiddleware(...middlewares),
	  window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);