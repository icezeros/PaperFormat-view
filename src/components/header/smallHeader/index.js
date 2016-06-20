import React, {
	Component
}
from 'react';
import {
	AppBar, Paper, Styles, RaisedButton
}
from 'material-ui';

import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

import AppLeftNav from './app-left-nav';


const {
	Colors, Spacing, Typography
} = Styles;


class SmallHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// open: this.props.lrdialog.open,
		};
	}


	// componentDidMount() {
	// 	const {
	// 		authActions, auth
	// 	} = this.props
	// 	if (auth.token && !auth.user) {
	// 		authActions.getUserInfo(auth.token)
	// 	}
	// }

	// componentWillMount() {
	// 	// let setTabsState = function() {
	// 	// 	this.setState({
	// 	// 		renderTabs: !(document.body.clientWidth <= 647),

	// 	// 	})
	// 	// }.bind(this);
	// 	// setTabsState();
	// 	// window.onresize = setTabsState;
	// }

	render() {

		const {
			auth, leftnavSwitch, leftnavUI, history
		} = this.props;
		return (
			<div>
			<AppBar
              title="论文格式化"
              zDepth={3}
              onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
              style={{width: '100%',position: 'fixed', left:0,top: 0,backgroundColor: Colors.green600}}
              iconElementRight={
                <IconMenu
                   iconButtonElement={
                     <IconButton><MoreVertIcon /></IconButton>
                   }
                   targetOrigin={{horizontal: 'right', vertical: 'top'}}
                   anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >

                 {(auth.token&&auth.user)?
                 	<div>
                 	   <MenuItem primaryText="用户中心" />
                 	   <MenuItem primaryText="退 出" onTouchTap={this._onButtonTouchTapOut.bind(this)} />
                 	</div>
                 	:
                 	<div>
                       <MenuItem primaryText="注册" onTouchTap={this._onButtonTouchTapReg.bind(this)} />
                       <MenuItem primaryText="登录" onTouchTap={this._onButtonTouchTapLogin.bind(this)}/>

                     </div>
                 }
                </IconMenu>
                }
            />

            <AppLeftNav  history={history} leftnavSwitch={leftnavSwitch} leftnavUI={leftnavUI} />

            </div>
		)

	}
	_onButtonTouchTapOut() {
		this.props.authActions.logout();
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

	_onLeftIconButtonTouchTap() {
		this.props.leftnavSwitch(true);
	}

}

export default SmallHeader;


// <div>
//   <AppBar
//     title="论文格式化"

//     zDepth={3}
//     style={{width: '100%',position: 'fixed', left:0,top: 0,backgroundColor: Colors.green600}}
//     iconElementRight={
//        <IconMenu
//           iconButtonElement={
//             <IconButton><MoreVertIcon /></IconButton>
//           }
//           targetOrigin={{horizontal: 'right', vertical: 'top'}}
//           anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//        >

//         {(auth.token&&auth.user)?
//         	<div>
//         	  <MenuItem primaryText="Sign out" />
//         	</div>
//         	:
//         	<div>
//               <MenuItem primaryText="注册" onTouchTap={this._onButtonTouchTapReg.bind(this)} />
//               <MenuItem primaryText="登录" onTouchTap={this._onButtonTouchTapLogin.bind(this)}/>

//             </div>
//         }
//        </IconMenu>
//        }/>
// </div>