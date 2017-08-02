import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Attack from './Attack';
import FlipMove from 'react-flip-move';
import './Attacks.css';

class AttacksList extends Component {
	render() {
		return (
		  <div>
			<div className="grid">
				<FlipMove typeName="ul" staggerDurationBy="30" enterAnimation="accordianVertical" duration={500} easing="ease-out">
					{this.props.attacks.slice(-20).map(attack => (
						<Attack key={attack._id} attack={attack}/>
					))}
				</FlipMove>
			</div>
		  </div>
		);
	}
};

AttacksList.propTypes = {
	attacks: PropTypes.array.isRequired
};

export default AttacksList;