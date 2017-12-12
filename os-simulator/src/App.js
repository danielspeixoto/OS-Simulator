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
import processes from './reducers/processes/'

const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Provider 
					store={store(processes)}>
					<Route exact path="/" component={ Home }/>
				</Provider>
				<Provider 
					store={store(processes)}>
					<Route path="/processes" component={ Processes }/>
				</Provider>
			</Switch>
		</BrowserRouter>
	);
  
}

export default App;
