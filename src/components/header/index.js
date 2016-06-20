import React, {
	Component
}
from 'react';
import {
	AppBar, AppCanvas, Paper, Styles, RaisedButton, Tabs, Tab, FlatButton
}
from 'material-ui';

import LargeHeader from './largeHeader';
import SmallHeader from './smallHeader';

const {
	Colors, Spacing, Typography
} = Styles;


export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// mobile: this.props.mobile
		};
	}


	componentDidMount() {
		// const {
		// 	authActions, auth
		// } = this.props
		// if (auth.token && !auth.user) {
		// 	authActions.getUserInfo(auth.token)
		// }
	}

	componentWillMount() {
		// let setTabsState = function() {
		// 	this.setState({
		// 		mobile: (document.body.clientWidth <= 647),

		// 	})
		// }.bind(this);
		// setTabsState();
		// window.onresize = setTabsState;
	}
	componentWillReceiveProps() {
		// this.setState({
		// 	mobile: nextProps.mobile
		// });

	}



	render() {


		const {
			lrdialogUI, leftnavUI, auth, authActions, globalUIActions, history
		} = this.props;



		return (
			<div>
			{this.props.mobile ?
			<SmallHeader 
			   auth={auth} 
			   authActions={authActions}
			   lrdialogSwitch={globalUIActions.lrdialogSwitch} 
			   leftnavSwitch={globalUIActions.leftnavSwitch}
			   leftnavUI={leftnavUI}
			   history={history}

			/>
			: 
			<LargeHeader 
			   auth={auth}
			   history={history}
			   authActions={authActions}
			   
			   lrdialogSwitch={globalUIActions.lrdialogSwitch} 

			  
			/>}
			</div>



		)
	}


}