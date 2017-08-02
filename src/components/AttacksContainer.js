import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as attacksActions from '../actions/attack-actions';
import AttacksList from './AttacksList';
import './Attacks.css';

class AttacksContainer extends Component {
	render() {
		const {attacks} = this.props;
		return (
			<div>
				<div className="attackSummary">
					<h2>{this.props.attacks.length} attacks today</h2>
				</div>
				<div>
					<AttacksList attacks={attacks} />
				</div>
			</div>
		);
	}
}

AttacksContainer.propTypes = {
	attacks: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
	return {
		attacks: state.attacks
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(attacksActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AttacksContainer);