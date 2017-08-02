import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as slideActions from './actions/slides-actions';
import * as attacksActions from './actions/attack-actions';
import logo from './centre-computing-history.gif';
import redbutton from './bigredbutton.jpg'
import './App.css';
import AttacksContainer from './components/AttacksContainer';
import * as slides from './components/Slides';

// revert to attack view if the slides are left showing for this long
const SLIDE_TIMEOUT = 60000

class App extends Component {	
	constructor(props) {
		super(props);
		this.numSlides = (Object.keys(slides)).length
		// This binding is necessary to make `this` work in the callback
		this.handleEvent = this.handleEvent.bind(this);
		// timeout to revert to attack view if the slides are left showing
		this.timeout = null;
	}
	componentDidMount() {
		console.log('I was triggered during componentDidMount')
		// Listen to the attacks Server Side Event Source
		this.eventSource = new EventSource("http://10.80.5.41:3001/attacks");
		//this.eventSource = new EventSource("http://localhost:3000/attacks");
		this.eventSource.addEventListener('attack', this.handleEvent);
		window.addEventListener('mousedown', this.pageClick.bind(this), false);
	}
	handleEvent(event) {
		const attack = JSON.parse(event.data);
		this.props.attack_actions.addAttack(attack);	
	}
	componentWillUnmount() {
		console.log('I was triggered during componentWillUnmount')
		this.eventSource.removeEventListener('attack', this.handleEvent);
		this.eventSource.close();
	}
	pageClick(e) {
		// move onto next slide, or start/stop showing slides, as required
		this.props.actions.nextSlide(this.numSlides);
	}
  render() {
		// make sure the timeout is always either refreshed or cancelled
		if (this.timeout != null) {
				clearTimeout(this.timeout);
				this.timeout = null;
		}
		if (this.props.showingSlides) {
				const slideName = Object.keys(slides)[this.props.slideIndex];
				const thisSlide = slides[slideName]();
				// restart the timeout for the new slide
				this.timeout = setTimeout(function() {
						this.props.actions.stopSlides()
				}.bind(this), SLIDE_TIMEOUT);
				return (thisSlide);
		} else {
			return (
				// Render the main attack view
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
							<h2>Monitoring for hacking attacks against the museum</h2>
					</div>
					<div className="App-main">
							<AttacksContainer/>
					</div>
					<div className="App-footer">
						<div className="App-footer-content">
							<img height="80px" className="redbutton" src={redbutton} alt="Red button"/>
							<h2>Press red button for more information</h2>
						</div>
					</div>
				</div>
			);
		}
  }
}

App.propTypes = {
	attacks: PropTypes.array.isRequired,
	showingSlides: PropTypes.bool.isRequired,
	slideIndex: PropTypes.number.isRequired
}
function mapStateToProps(state, props) {
	return {
		showingSlides: state.slides.showingSlides,
		slideIndex: state.slides.slideIndex,
		attacks: state.attacks
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(slideActions, dispatch),
		attack_actions: bindActionCreators(attacksActions, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


