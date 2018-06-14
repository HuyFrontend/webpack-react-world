import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Name = ({ onChange }) => <input onChange={e => onChange(e.target.value)} />
class StateHoisting extends Component {
	constructor(props) {
		super(props);
		this.state = {name: ""}
	}
	render() {
		// return <Name onChange={(newName) => alert(newName)} />
		return <Name onChange={newName => this.setState({name: newName})} />
	}
}
StateHoisting.propTypes = {
};
Name.propTypes = {
	onChange: PropTypes.func
}
StateHoisting.defaultProps = {
};

export default StateHoisting;
