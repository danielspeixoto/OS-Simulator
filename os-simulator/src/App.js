import React from 'react'
import Home from './pages/Home'
import Processes from './pages/Processes'
import { Provider } from "react-redux";
import store from "./stores/index";
import processes from './reducers/processes/'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = (props) => {
	return (
		<Router>
			<div>
				<Provider store={store(processes)}>
					<Route path="/processes" component={ Processes }/>
				</Provider>
				<Route exact path="/" component={ Home }/>
			</div>
		</Router>
	);
}

export default App;
