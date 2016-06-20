import React, {
	Component
}
from 'react';

import {
	bindActionCreators
}
from 'redux';

import {
	connect
}
from 'react-redux';


import {
	AppCanvas
}
from 'material-ui';

import Header from '../components/header';
import LRDialog from '../components/header/LRDialog';

// import Home from '../components/index/home';
import * as authActions from '../redux/actions/auth';
import * as globalUIActions from '../redux/actions/globalUI';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile: !(document.body.clientWidth <= 647)
		};
	}



	componentDidMount() {
		const {
			authActions, auth
		} = this.props
		if (auth.token && !auth.user) {
			authActions.getUserInfo(auth.token)
		}
	}

	componentWillMount() {
		let setTabsState = function() {
			this.setState({
				mobile: (document.body.clientWidth <= 647),

			})
		}.bind(this);
		setTabsState();
		window.onresize = setTabsState;
	}

	render() {
		const {
			lrdialogUI, leftnavUI, auth, authActions, globalUIActions
		} = this.props;

		return (
			<AppCanvas>			
			<Header mobile={this.state.mobile} {...this.props} />
			{this.props.children}	



			<LRDialog   lrdialogUI={lrdialogUI} auth={auth}  lrdialogSwitch={globalUIActions.lrdialogSwitch} getCaptchaUrl={globalUIActions.getCaptchaUrl}  authActions={authActions} />
					
			</AppCanvas>



		)
	}
}

function mapStateToProps(state) {
	return {
		lrdialogUI: state.globalUI.lrdialogUI.toJS(),
		leftnavUI: state.globalUI.leftnavUI.toJS(),
		auth: state.auth.toJS(),
	}
}

function mapDispatchToProps(dispatch) {
	return {

		authActions: bindActionCreators(authActions, dispatch),
		globalUIActions: bindActionCreators(globalUIActions, dispatch)
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps)(App);