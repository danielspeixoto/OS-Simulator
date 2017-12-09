import React from 'react'
import WelcomeTitle from './components/WelcomeTitle'
import PlayButton from './components/PlayButton'
import './style/pages/home.scss'

const App = (props) => {

	const centeredStyle = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	}

	const buttonStyle = {
		margin: "auto",
		display: "block"
	}
	
	const titleStyle = {
	
	}
  
	return (
		<div className="home-container">
			<WelcomeTitle style={titleStyle}></WelcomeTitle>
			<div style={centeredStyle}>
				<PlayButton style={buttonStyle}></PlayButton>
			</div>
		</div>
	);
  
}

export default App;
