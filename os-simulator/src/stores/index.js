import { createStore } from "redux";
import middlewares from './middlewares'

const store = (reducers) => {
	return createStore (
		reducers,
		undefined,
		middlewares
	);
}

export default store