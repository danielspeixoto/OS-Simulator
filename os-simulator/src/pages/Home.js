import React from 'react'
import WelcomeTitle from '../components/WelcomeTitle'
import PlayButton from '../components/buttons/PlayButton'
import '../style/pages/home.scss'

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
		<div className="home-container">
			<WelcomeTitle />
			<div style={centeredStyle}>
				<PlayButton style={buttonStyle}/>
			</div>
		</div>
	);
  
}

export default Home