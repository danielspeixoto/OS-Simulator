import { createStore } from "redux";
import middlewares from './middlewares'

const store = (reducers) => {
	createStore (
		reducers,
		undefined,
		middlewares
	);
}

export default store