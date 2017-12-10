import React from 'react'
import {
	BrowserRouter,
	Route,
	Switch
  } from 'react-router-dom'
import Home from './pages/home'
import Processes from './pages/processes'

const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ Home }/>
				<Route path="/processes" component={ Processes }/>
			</Switch>
		</BrowserRouter>
	);
  
}

export default App;
