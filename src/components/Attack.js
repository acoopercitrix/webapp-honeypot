import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-flags';
import './Attacks.css';

const country_codes = require('node-iso-3166')

class Attack extends Component {
	render() {
		const listClass = `list-item card grid`;
		const attack = this.props.attack;
		// Adjust timezone - this is a bit of a hack, I am pulling the 
		// wrong timezone events out of the database
		//const time = new Date(attack.timestamp + ( this.timeZoneOffset * 60000 ))
		const time = new Date(attack.timestamp);
		const timeStr = time.toLocaleTimeString('en-GB');
		var countryStr = "Unknown";
		if (country_codes.iso_3166_1[attack.geoip.country] !== undefined) {
			countryStr = country_codes.iso_3166_1[attack.geoip.country].name;
		}
		const classificationStr = attack.classification.replace('_', ' ');
		//TODO: Check for undefined country code?
		//				
		return (

			<li className={listClass} id={attack._id}>
				<Flag name={attack.geoip.country} format="png" pngSize={64} shiny={true} alt="Canada Flag" className="flag-img"/>
				<h5>{timeStr}</h5>
				<h5>{countryStr}</h5>
				<h3>{classificationStr}</h3>
			</li>
		);
	}
}

Attack.propTypes = {
	attack: PropTypes.object.isRequired
};

export default Attack;