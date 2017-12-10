import { combineReducers } from 'redux'
import processesReducer from './processes'

export default combineReducers({
	processes : processesReducer
})
