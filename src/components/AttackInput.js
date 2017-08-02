import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AttackInput extends Component {
	constructor(props) {
		super(props);
		this.id = 1;
		this.onAddAttackClick = this.onAddAttackClick.bind(this);
	}

	onAddAttackClick() {
		this.props.addAttack({
		  _id: this.id ,
		    classification: 'DATABASE_THEFT',
		    destination_ip: '172.30.0.167',
		    destination_port: 3306,
		    geoip: 
		     { range: [ 2067447808, 2067529727 ],
		       country: 'CN',
		       region: '22',
		       city: 'Beijing',
		       ll: [ 39.9289, 116.3883 ],
		       metro: 0,
		       zip: 0 },
		    honeypot: 'snort',
		    identifier: '77e05b62-58df-11e7-b1b0-0afef73cf8dc',
		    protocol: 'TCP',
		    sensor: '77e05b62-58df-11e7-b1b0-0afef73cf8dc',
		    snort: 
		     { priority: 2,
		       header: '1:2010937:2',
		       classification: 3,
		       signature: 'ET POLICY Suspicious inbound to mySQL port 3306' },
		    source_ip: '123.59.60.110',
		    source_port: 39528,
		    timestamp: new Date()
		});
		this.id += 1;
	}

	componentDidMount() {
		document.getElementById('redbutton').focus();
	}

	render() {
		return (
			<div>
				<button id="redbutton" onClick={this.onAddAttackClick}>Add Attack</button>
			</div>
		);
	}
}

AttackInput.propTypes = {
	addAttack: PropTypes.func.isRequired
};

export default AttackInput;