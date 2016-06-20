import React from 'react';
import {
  bindActionCreators
}
from 'redux';
import {
  connect
}
from 'react-redux';
import {
  Dialog, FlatButton, RaisedButton, TextField, Tabs, Tab, Paper, Snackbar
}
from 'material-ui';
import * as Actions from '../../redux/actions/auth';

import SwipeableViews from 'react-swipeable-views';

// import FlatButton from 'material-ui/lib/flat-button';
// import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

export default class LRDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.lrdialog.open,
      tabindex: this.props.lrdialog.index,
      errMsg: this.props.auth.errMsg,
    };
  }

  handleOpen() {
    this.props.lrActions.LRDialog(true);
  }

  handleClose() {
    this.props.lrActions.LRDialog(false, 0);
    this.props.authActions.auth_errmsg_clear();

  }

  handleChange(value) {
    this.props.lrActions.LRDialog(true, value);
    // this.setState({
    //   tabindex: value,
    // });
  }

  changeCaptcha(e) {
    e.preventDefault()
    const {
      authActions
    } = this.props
    authActions.getCaptchaUrl()
  }

  handleSubmit(e) {
    e.preventDefault()
    const {
      authActions
    } = this.props
    if (this.state.tabindex === 0) {
      const {
        email, password, captcha
      } = this.refs;

      authActions.localLogin({
        email: email.getValue(),
        password: password.getValue(),
        captcha: captcha.getValue()
      })
    } else {
      const {
        email, password, repeatpassword
      } = this.refs;
      authActions.register({
        email: email.getValue(),
        password: password.getValue(),
        repeatpassword: repeatpassword.getValue()
      })

    }


  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.lrdialog.open,
      tabindex: nextProps.lrdialog.index,
      errMsg: nextProps.auth.errMsg
    });

  }
  _getLogin() {

    const {
      lrActions, captchaUrl, authActions
    } = this.props


    let styles = {
      root: {
        width: 'auto',
        maxWidth: 450
      },
      actionsContainerStyle: {
        backgroundColor: Colors.red500,
        // paddingLeft: 80,
        textAlign: 'center'

      },
      body: {
        margin: 0,
        padding: 50,
        width: '80%',
        maxWidth: 300
      },
      textInput: {
        paddingLeft: 20,
      },
      raisebutton: {
        width: 250,
      },
      aptchaText: {
        paddingLeft: 20,
        width: '45%',
      },

    };



    const actions = [

      <RaisedButton
        label="登&nbsp;&nbsp;&nbsp;&nbsp;录"
        primary={true}
        keyboardFocused={false}
        backgroundColor={Colors.green700}
        secondary={true}
        style={styles.raisebutton}
        onTouchTap={this.handleSubmit.bind(this)} />,
    ];

    return (
      <Dialog          
          actions={actions}
          actionsContainerStyle={styles.actionsContainerStyle}
          bodyStyle={styles.body}
          contentStyle={styles.root}    
          modal={false}          
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}>

          <div>
           <h2>登  录</h2>

          </div>


      <from method="post">
            <TextField 
              style={styles.textInput} 
              hintText="用户名/邮箱" 
              fullWidth="true" 
              ref="email"              
              />

            <TextField 
              style={styles.textInput}
              type="password" 
              hintText="密码" 
              fullWidth="true"
              ref="password"
               />
            <TextField 
              style={styles.aptchaText} 
              type="text" 
              hintText="验证码"
              ref="captcha" />
            <div className="col-xs-6 captcha-img">
                    <a href="#" onClick={this.changeCaptcha.bind(this)}>
                      <img src={this.props.captchaUrl} />
                    </a>
            </div>
      </from>

      
          
      
      </Dialog>

    );

  }

  _getRegister() {

    const {
      lrActions, captchaUrl, authActions
    } = this.props


    let styles = {
      root: {
        // backgroundColor: Colors.green700,
        // position: 'fixed',
        // height: 64,
        // top: 0,
        // right: 0,
        // zIndex: 1101,
        width: 'auto',
        maxWidth: 450
      },
      actionsContainerStyle: {
        backgroundColor: Colors.red500,
        // paddingLeft: 80,
        textAlign: 'center'

      },
      body: {
        margin: 0,
        padding: 50,
        width: '80%',
        maxWidth: 300
      },
      textInput: {
        paddingLeft: 20,
      },
      raisebutton: {
        width: 250,
      },
      aptchaText: {
        paddingLeft: 20,
        width: '45%',
      },
    };



    const actions = [

      <RaisedButton
        label="注&nbsp;&nbsp;&nbsp;&nbsp;册"
        primary={true}
        keyboardFocused={false}
        backgroundColor={Colors.green700}
        secondary={true}
        style={styles.raisebutton}
        onTouchTap={this.handleSubmit.bind(this)} />,
    ];

    return (
      <Dialog          
          actions={actions}
          actionsContainerStyle={styles.actionsContainerStyle}
          bodyStyle={styles.body}
          contentStyle={styles.root}    
          modal={false}          
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}>

          <div>
           <h2>注  册</h2>

          </div>


      <from method="post">
            <TextField 
              style={styles.textInput} 
              hintText="用户名/邮箱" 
              fullWidth="true" 
              ref="email"
              />

            <TextField 
              style={styles.textInput}
              type="password" 
              hintText="密码" 
              fullWidth="true"
              ref="password"
               />
            <TextField 
              style={styles.textInput}
              type="password" 
              hintText="重复密码" 
              fullWidth="true"
              ref="repeatpassword"
               />
      </from>

      
          
      
      </Dialog>

    );

  }


  render() {
    return (
      <div>
      {(this.state.tabindex > 0) ? this._getRegister() : this._getLogin()}
      <Snackbar open={(this.state.errMsg !==null)} message={this.state.errMsg} action="undo" autoHideDuration={3000} />
          
      
      </div>

    )

  }
}