import React, {
	Component
}
from 'react';
import {
	AppBar, AppCanvas, Paper, Styles, RaisedButton, Tabs, Tab, FlatButton, DropDownMenu, MenuItem
}
from 'material-ui';
import {
	browserHistory, Router, Route, Link
}
from 'react-router';

import UserManage from './userManage';


const {
	Colors, Spacing, Typography
} = Styles;


export default class LargeHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tabIndex: this._getSelectedIndex(),
		};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			tabIndex: this._getSelectedIndex(),

		});
	}

	render() {


		let styles = {
			root: {
				backgroundColor: Colors.green600,
				position: 'fixed',
				height: 64,
				top: 0,
				right: 0,
				zIndex: 1101,
				width: '100%',
			},
			leftcontainer: {

				position: 'absolute',
				left: (Spacing.desktopGutter / 2) + (document.body.clientWidth * 0.30),
				bottom: 0,
			},
			rightcontainer: {
				padding: 13,
				position: 'absolute',
				right: (Spacing.desktopGutter / 2) + (document.body.clientWidth * 0.15),
				bottom: 0,
			},
			span: {
				color: Colors.white,
				fontWeight: Typography.fontWeightLight,
				left: 45,
				top: 22,
				position: 'absolute',
				left: (Spacing.desktopGutter / 2) + (document.body.clientWidth * 0.15),

				fontSize: 26,
			},
			svgLogoContainer: {
				position: 'fixed',
				width: 300,
				left: Spacing.desktopGutter,
			},
			svgLogo: {
				width: 65,
				backgroundColor: Colors.white,
				position: 'absolute',
				left: (document.body.clientWidth * 0.15) - 35,
				top: 20,
			},
			tabs: {
				width: 300,
				bottom: 0,
			},
			tab: {
				backgroundColor: Colors.green600,
				color: Colors.grey900,
				height: 64,
			},
			raisebutton: {
				marginTop: 500,
				marginLeft: 40,

			}
		};

		const {
			lrdialogUI, leftnavUI, auth, authActions, globalUIActions, history
		} = this.props;

		return (
			<div>
		      <Paper 
		        zDepth={3}
		        rounded={false}
		        style={styles.root}>

		        <div style={styles.leftcontainer}>
		           <Tabs
		           style={styles.tabs}
		           value={this.state.tabIndex}
		           onChange={this._handleTabChange.bind(this)}>

		           <Tab
		             value="1"
		             label="简介"
		             style={styles.tab}
		             
		             route="/book" />
		           <Tab
		             value="2"
		             label="教程"
		             style={styles.tab}
		             
		             route="/home"/>
		           <Tab
		             value="3"
		             label="论文格式化"
		             style={styles.tab}
		             route="users"/>
		           </Tabs>
		        </div>

		        {(this.props.auth.token&&this.props.auth.user)
		        	?		        	
		        	<div style={styles.rightcontainer} >
                       <UserManage logout={authActions.logout} history={history} />		        	  
		        	</div>
		        	:
		            <div style={styles.rightcontainer}>
		              <RaisedButton style={styles.raisebutton} label="注册" primary={true} backgroundColor={Colors.grey900} onTouchTap={this._onButtonTouchTapReg.bind(this)}/>
		              <RaisedButton style={styles.raisebutton} label="登录" primary={true} backgroundColor={Colors.grey900} onTouchTap={this._onButtonTouchTapLogin.bind(this)}/>             
		            </div> 
		            
		        	

		        }

		      </Paper>
			</div>
		);
	}
	_routToBook() {
		this.props.history.pushState(null, '/book');

	}
	_routToHome() {
		this.props.history.pushState(null, '/home');

	}
	_getSelectedIndex() {
		return this.props.history.isActive('/book') ? '1' :
			this.props.history.isActive('/home') ? '2' :
			this.props.history.isActive('/users') ? '3' : '0';
	}

	_handleTabChange(value, e, tab) {
		this.props.history.pushState(null, tab.props.route);
		this.setState({
			tabIndex: this._getSelectedIndex()
		});

	}

	_onButtonTouchTapReg() {
		// let {
		// 	lrActions
		// } = this.props;
		// if (e.target.innerText === '登录') {
		// 	// actions.openLRDialog(0);
		// 	lrActions.LRDialog(true, 0);
		// } else {
		// 	// actions.openLRDialog(1);
		this.props.lrdialogSwitch(true, 1);
		// }
	}

	_onButtonTouchTapLogin() {
		this.props.lrdialogSwitch(true, 0);

	}



}