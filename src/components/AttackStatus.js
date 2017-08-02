import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AttackStatus extends Component {
	render() {
		return (
			<div className="Attack-status">
				<ul>
					<li>Attacks today: { this.props.attacks.length }</li>
					<li>Last attack: x mins ago</li>
				</ul>
			</div>
		);
	}
}

AttackStatus.propTypes = {
	num_attacks: PropTypes.number.isRequired
};

export default connect()(AttacksStatus);