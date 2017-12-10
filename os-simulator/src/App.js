import React from 'react'
import {
	BrowserRouter,
	Route,
	Switch
  } from 'react-router-dom'
import Home from './pages/Home'
import Processes from './pages/Processes'
import { Provider } from "react-redux";
import store from "./stores/store";
import reducers from './reducers/processes/'

const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ Home }/>
				<Provider 
					store={store(reducers)}>
					<Route path="/processes" component={ Processes }/>
				</Provider>
			</Switch>
		</BrowserRouter>
	);
  
}

export default App;
