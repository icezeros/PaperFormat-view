import React, {
	Component
}
from 'react';
import {
	AppBar, AppCanvas, Paper, Styles, RaisedButton, Tabs, Tab, FlatButton
}
from 'material-ui';

import {
	bindActionCreators
}
from 'redux';
import {
	connect
}
from 'react-redux';
import * as LRDialogAction from './redux/actions/LRDialog';
import * as authActions from './redux/actions/auth';

import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';


import Mypaper from './components/paper/mypaper';
import Book from './components/paper/book'; // <Book paperstyle={tpstyle} paragrastyle={pstyle}/>
import LRDialog from './components/index/LRDialog';
import Home from './components/index/home';
import AppLeftNav from './components/Index/app-left-nav';



const {
	Colors, Spacing, Typography
} = Styles;



class Index extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		open: this.props.lrdialog.open,
	// 	};
	// }


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
				renderTabs: !(document.body.clientWidth <= 647),

			})
		}.bind(this);
		setTabsState();
		window.onresize = setTabsState;
	}

	getTabs() {
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
		           onChange={this._handleTabChange}>
		           <Tab
		             value="1"
		             label="简介"
		             style={styles.tab}
		             route="/get-started" />
		           <Tab
		             value="2"
		             label="教程"
		             style={styles.tab}
		             route="/customization"/>
		           <Tab
		             value="3"
		             label="论文查重"
		             style={styles.tab}
		             route="/components"/>
		           </Tabs>
		        </div>

		        {(this.props.auth.token&&this.props.auth.user)?<div></div>:
		        <div style={styles.rightcontainer}>
		          <RaisedButton style={styles.raisebutton} label="注册" primary={true} backgroundColor={Colors.grey900} onTouchTap={this._onButtonTouchTapReg.bind(this)}/>
		          <RaisedButton style={styles.raisebutton} label="登录" primary={true} backgroundColor={Colors.grey900} onTouchTap={this._onButtonTouchTapLogin.bind(this)}/>             
		        </div> 
		        }

		      </Paper>
			</div>
		);
	}



	_getAppBar() {
		return (
			<div>
			  <AppBar
			  title="论文格式化"
			  onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
			  zDepth={3}
			  style={{width: '100%',position: 'fixed', left:0,top: 0,backgroundColor: Colors.green600}}
			  iconElementRight={
			        <IconMenu
			          iconButtonElement={
			            <IconButton><MoreVertIcon /></IconButton>
			          }
			          targetOrigin={{horizontal: 'right', vertical: 'top'}}
			          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			        >

			        {(this.props.auth.token&&this.props.auth.user)?
			        	<div>
			        	  <MenuItem primaryText="Sign out" />
			        	</div>
			        	:
			        	<div>
			              <MenuItem primaryText="注册" onTouchTap={this._onButtonTouchTapReg.bind(this)} />
			              <MenuItem primaryText="登录" onTouchTap={this._onButtonTouchTapLogin.bind(this)}/>
			          
			            </div>
			        }
			          </IconMenu>
			       }/>
			</div>


		);
	}

	render() {
		var tpstyle = {
			minHeight: 1200,
			width: 900,
			hight: 1200,
			paddingTop: 40,
			paddingLeft: 30,
			marginLeft: (document.body.clientWidth / 2) - 450 < 0 ? 20 : (document.body.clientWidth / 2) - 450,
			marginTop: 50
		};
		var pstyle = {
			fontSize: 50,
			width: 900,
			hight: 800,
			padding: 0,
			margin: 0
		};

		const {
			lrdialog, captchaUrl, auth, lrActions, authActions
		} = this.props;



		return (
			<AppCanvas>			
			{this.state.renderTabs ? this.getTabs() : this._getAppBar()}
			{this.props.children}	

			<AppLeftNav ref="leftNav" />
			<LRDialog  lrdialog={lrdialog} captchaUrl={captchaUrl} auth={auth} authActions={authActions} lrActions={lrActions} />
			<Home />	
			
			</AppCanvas>



		)
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
		this.props.lrActions.LRDialog(true, 1);
		// }
	}

	_onButtonTouchTapLogin() {
		this.props.lrActions.LRDialog(true, 0);

	}

	_onLeftIconButtonTouchTap() {
		this.refs.leftNav.handleToggle();
	}
}

function mapStateToProps(state) {
	return {
		lrdialog: state.lrdialog.toJS(),
		captchaUrl: state.globalVal.toJS().captchaUrl,
		auth: state.auth.toJS(),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		lrActions: bindActionCreators(LRDialogAction, dispatch),
		authActions: bindActionCreators(authActions, dispatch)
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps)(Index);