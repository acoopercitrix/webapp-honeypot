import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as slideActions from './actions/slides-actions';
import * as attacksActions from './actions/attack-actions';
import logo from './centre-computing-history.gif';
import redbutton from './bigredbutton.jpg'
import radar from './radar.gif'
import './App.css';
import './slick.css';
import AttacksContainer from './components/AttacksContainer';
import * as slides from './components/Slides';

// revert to attack view if the slides are left showing for this long
const SLIDE_TIMEOUT = 160000
// can't repeatedly press the button any faster than this
const BUTTON_ANTI_MASH_TIMEOUT = 1500
class App extends Component {	
	constructor(props) {
		super(props);
		this.numSlides = (Object.keys(slides)).length
		// This binding is necessary to make `this` work in the callback
		this.handleEvent = this.handleEvent.bind(this);
		// timeout to revert to attack view if the slides are left showing
		this.timeout = null;
		// cache new attack events while slides are showing
		this.attackCache = [];
	}
	componentDidMount() {
		console.log('I was triggered during componentDidMount')
		// Listen to the attacks Server Side Event Source
		//this.eventSource = new EventSource("http://10.80.5.41:3001/attacks");
		this.eventSource = new EventSource("/attacks");
		this.eventSource.addEventListener('attack', this.handleEvent);
		window.addEventListener('mousedown', this.pageClick.bind(this), false);
		this.lastMouseClick = Date.now();
	}
	handleEvent(event) {
		const attack = JSON.parse(event.data);
		if (this.props.showingSlides) {
				// cache incoming attacks to avoid re-render which breaks slideshow
				this.attackCache.push(attack);
		} else {
			this.props.attack_actions.addAttack(attack);	
		}
	}
	componentWillUnmount() {
		console.log('I was triggered during componentWillUnmount')
		this.eventSource.removeEventListener('attack', this.handleEvent);
		this.eventSource.close();
	}
	pageClick(e) {
		// as long as the button isn't being mashed, we will act
		const timeNow = Date.now();
		if (timeNow - this.lastMouseClick >= BUTTON_ANTI_MASH_TIMEOUT) {
			// move onto next slide, or start/stop showing slides, as required
			this.props.actions.nextSlide(this.numSlides);
			this.lastMouseClick = timeNow;
			if (!this.props.showingSlides) {
					this.renderCachedAttacks();
			}
		}
	}
	// Restart the demo, occurs after SLIDE_TIMEOUT
	restart() {
		this.props.actions.stopSlides();
		this.renderCachedAttacks();
	}
	renderCachedAttacks() {
			// render cached attacks
			this.attackCache.map(this.props.attack_actions.addAttack);
			this.attackCache = [];
	}
  render() {
		// make sure the timeout is always either refreshed or cancelled
		if (this.timeout != null) {
				clearTimeout(this.timeout);
				this.timeout = null;
		}
		// begin the timeout to restart the slideshow presentation
		this.timeout = setTimeout(function() {
				this.restart()
		}.bind(this), SLIDE_TIMEOUT);
		if (this.props.showingSlides) {
			  const settings = {
					dots: false,
					fade: false,
					infinite: false,
					autoplay: true,
					autoplaySpeed: 15000,
					arrows: false,
					pauseOnHover: false,
					accessibility: false,
					focusOnSelect: false,
					lazyLoad: false,
					speed: 1500,
					slidesToShow: 1,
					slidesToScroll: 1
				};
				const slideName = Object.keys(slides)[this.props.slideIndex];
				const thisSlide = slides[slideName](settings);
				return (thisSlide);
		} else {
			return (
				// Render the main attack view
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1>Monitoring for cyberattacks against the museum</h1>
						<img src={radar} className="App-radar-image" alt="radar" />
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


