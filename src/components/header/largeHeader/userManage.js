import React from 'react';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import RaisedButton from 'material-ui/lib/raised-button';
import Styles from 'material-ui/lib/styles';
const {
  Colors, Spacing, Typography
} = Styles;

const styles = {
  popover: {
    backgroundColor: Colors.grey100,
    padding: 0,
    maxWidth: 110,
  },
  raisdeButton: {
    marginTop: 10,
    marginLeft: 10,
  }
};

export default class UserManage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };
  _onButtonTouchTapUsers() {
    this.props.history.pushState(null, '/users');
    this.handleRequestClose();

  }
  _onButtonTouchTapChange() {
    this.props.history.pushState(null, '/users/changepassword');
    this.handleRequestClose();
  }
  _onButtonTouchTapUpdate() {
    this.props.history.pushState(null, '/users/updateuser');
    this.handleRequestClose();
  }
  _onButtonTouchTapLogout() {
    this.props.logout();
    this.handleRequestClose();
  }

  render() {
    return (
      <div style={this.props.style}>
        
        <RaisedButton  
        label="用户中心" 
        primary={true} 
        backgroundColor={Colors.grey900} 
        onTouchTap={this.handleTouchTap.bind(this)}/>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
          animation={PopoverAnimationFromTop}
        >
          <div style={styles.popover}>
            <RaisedButton style={styles.raisdeButton} onTouchTap={this._onButtonTouchTapUsers.bind(this)} primary={true} backgroundColor={Colors.grey900} label="用户中心"/>
            <RaisedButton style={styles.raisdeButton} onTouchTap={this._onButtonTouchTapChange.bind(this)} primary={true} backgroundColor={Colors.grey900} label="修改密码"/>
            <RaisedButton style={styles.raisdeButton} onTouchTap={this._onButtonTouchTapUpdate.bind(this)} primary={true} backgroundColor={Colors.grey900} label="完善资料"/>
            <RaisedButton style={styles.raisdeButton} onTouchTap={this._onButtonTouchTapLogout.bind(this)} primary={true} backgroundColor={Colors.grey900} label="退出"/>
          </div>
        </Popover>
      </div>
    );
  }
}