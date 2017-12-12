import React from 'react'
import { connect } from "react-redux";
import WelcomeTitle from '../components/WelcomeTitle'
import PlayButton from '../components/PlayButton'
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

export default connect(
	state => ({
		processes: state.processes
	}),
	{

	}
) (Home)

