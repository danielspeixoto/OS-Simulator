import React from 'react'
import { Provider } from "react-redux";
import store from "../stores/store";
import reducers from '../reducers/processes'
import NavBar from '../components/NavBar'
import '../style/pages/processes.scss'

const Processes = (props) => {

	const centeredStyle = {
		position: "relative",
		transform: "translateY(50%)"
	}

	const buttonStyle = {
		margin: "auto",
		display: "block"
	}
	
	const titleStyle = {
	
	}
  
	return (
		<Provider 
			store={store(reducers)}>
			<div className="processes-container">
				<NavBar></NavBar>
			</div>
		</Provider>
	);
  
}

export default Processes;
