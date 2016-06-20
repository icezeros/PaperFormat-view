import React from 'react';
import {
  Dialog, FlatButton, RaisedButton, TextField
}
from 'material-ui';
// import FlatButton from 'material-ui/lib/flat-button';
// import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

export default class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="取消"
        secondary={true}
        onTouchTap={this.handleClose.bind(this)} />,
      <FlatButton
        label="确定"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)} />,
    ];

    return (
      <div style={this.props.style}>
        <RaisedButton label="登录" onTouchTap={this.handleOpen.bind(this)} primary={true} backgroundColor={Colors.grey900}  />

        <Dialog
          
          actions={actions}
          actionsContainerStyle={{backgroundColor: Colors.green500,}}
    // bodyStyle={{backgroundColor: Colors.green500,}}
          modal={false}          
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}>
          <from method="post">
            <TextField hintText="用户名" fullWidth="true" style={{display:'block'}}/>

            <TextField type="password" hintText="密码" fullWidth="true" style={{display:'block'}}/>
          </from>
          
        </Dialog>
      </div>
    );
  }
}