import React from 'react'
import { Provider } from "react-redux";
import store from "../stores/store";
import reducers from '../reducers/home'
import WelcomeTitle from '../components/WelcomeTitle'
import PlayButton from '../components/PlayButton'
import './Home.js'

const Home = (props) => {

	const centeredStyle = {
		position: "relative",
		transform: "translateY(50%)"
	}

	const buttonStyle = {
		margin: "auto",
		display: "block"
	}
  
	return (
		<Provider 
			store={store(reducers)}>
			<div className="home-container">
				<WelcomeTitle />
				<div style={centeredStyle}>
					<PlayButton style={buttonStyle}/>
				</div>
			</div>
		</Provider>
	);
  
}

export default Home;
