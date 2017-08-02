import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-flags';
import './Attacks.css';

const country_codes = require('node-iso-3166')

class Attack extends Component {
	// Convert into a localised time string that can be printed
	getTime(now){
		var ampm= 'am';
		var h = now.getHours();
		var m = now.getMinutes();
		if(h>= 12){
			if(h>12) h -= 12;
			ampm= 'pm';
		}
		// insert leading zero if required
		if(m<10) m= '0'+m;
		return h + ':' + m + ' ' + ampm;
	}
	render() {
		const listClass = `list-item card grid`;
		const attack = this.props.attack;
		const time = new Date(attack.timestamp)
		const timeStr = time.toLocaleTimeString();
		const countryStr = country_codes.iso_3166_1[attack.geoip.country];
		//TODO: Check for undefined country code?
		return (

			<li className={listClass} id={attack._id}>
				<Flag name={attack.geoip.country} format="png" pngSize={64} shiny={true} alt="Canada Flag" className="flag-img"/>
				<h3>{countryStr}</h3>
				<h5>{timeStr}</h5>
				<h3>{attack.classification}</h3>
			</li>
		);
	}
}

Attack.propTypes = {
	attack: PropTypes.object.isRequired
};

export default Attack;