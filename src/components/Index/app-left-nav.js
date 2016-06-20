import React from 'react';
import {
	LeftNav,
	Mixins,
	Styles,
	MenuItem,
}
from 'material-ui';

import Colors from 'material-ui/lib/styles/colors';



export default class AppLeftNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	handleToggle() {
		this.setState({
			open: !this.state.open
		});
	}

	handleClose() {
		this.setState({
			open: false
		});
	}

	render() {

		let styles = {
			tabs: {
				width: 300,
				bottom: 0,
			},
			tab: {
				backgroundColor: Colors.green600,
				color: Colors.grey900,
				height: 64,
			}

		};

		return (
			<LeftNav
			   docked={false}
			   width={200}
			   open={this.state.open}
			   onRequestChange={open => this.setState({open})}>
			  <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
			  <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
			</LeftNav>
		);
	}
}