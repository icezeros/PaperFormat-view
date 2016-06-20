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
			open: this.props.leftnavUI.open
		};
	}

	handleToggle() {
		this.props.leftnavSwitch(!this.state.open)
			// this.setState({
			// 	open: !this.state.open
			// });
	}

	handleClose() {
		this.props.leftnavSwitch(false)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.leftnavUI.open,

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
			   onRequestChange={this.handleToggle.bind(this)}>
			  <MenuItem onTouchTap={this._routeToHome.bind(this)}>简介</MenuItem>
			  <MenuItem onTouchTap={this._routeToBook.bind(this)}>教程</MenuItem>
			  <MenuItem onTouchTap={this.handleClose.bind(this)}>论文格式化</MenuItem>

			</LeftNav>
		);
	}

	_routeToBook() {
		this.props.history.pushState(null, '/book');
		this.props.leftnavSwitch(false)
	}
	_routeToHome() {
		this.props.history.pushState(null, '/home');
		this.props.leftnavSwitch(false)
	}


}


// function mapStateToProps(state) {
// 	return {
// 		leftnavUI: state.globalUI.leftnavUI.toJS(),


// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		globalUIActions: bindActionCreators(globalUIActions, dispatch)
// 	}
// }



// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps)(Header);