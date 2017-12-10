import { compose, applyMiddleware} from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [
	thunk,
	createLogger()
];

export default compose(
	applyMiddleware(...middlewares),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)