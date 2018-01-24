import { combineReducers } from 'redux'
import setupReducer from './setup'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	processes : setupReducer,
	form: formReducer
})
