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

// import SwipeableViews from 'react-swipeable-views';

// import FlatButton from 'material-ui/lib/flat-button';
// import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

export default class LRDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.lrdialogUI.open,
      tabindex: this.props.lrdialogUI.index,
      errMsg: this.props.auth.errMsg,
      success: this.props.auth.success
    };
  }

  handleOpen() {
    this.props.lrdialogSwitch(true);
  }

  handleClose() {

    this.props.lrdialogSwitch(false, 0);
    this.props.authActions.auth_errmsg_clear();

  }

  handleChange(value) {
    this.props.lrdialogSwitch(true, value);
    // this.setState({
    //   tabindex: value,
    // });
  }

  updateErr(e) {
    e.preventDefault()
    const idname = e.target.id;
    const {
      auth_errmsg_update
    } = this.props.authActions;
    switch (idname) {
      case "email":
        this.state.errMsg.email = null;
        break;
      case "password":
        this.state.errMsg.password = null;
        break;
      case "repeatpassword":
        this.state.errMsg.repeatpassword = null;
        break;
    }
    auth_errmsg_update(this.state.errMsg);


  }



  //更换验证码
  changeCaptcha(e) {
    e.preventDefault()

    this.props.getCaptchaUrl()
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
      if (this.state.success) {
        this.props.lrdialogSwitch(true, 0)
      }

    }


  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.lrdialogUI.open,
      tabindex: nextProps.lrdialogUI.index,
      errMsg: nextProps.auth.errMsg,
      success: nextProps.auth.success
    });

  }
  _getLogin() {

    const {
      authActions
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
      h2: {
        textAlign: 'center',
      }

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

          
          <h2  >登    录</h2>

         


      <from method="post">
            <TextField 
              style={styles.textInput} 
              hintText="用户名/邮箱" 
              fullWidth="true" 
              id="email"
              ref="email"              
              />

            <TextField 
              style={styles.textInput}
              type="password" 
              hintText="密码" 
              fullWidth="true"
              id="password"
              ref="password"
               />
            <TextField 
              style={styles.aptchaText} 
              type="text" 
              hintText="验证码"
              id="captcha"
              ref="captcha" />
            <div className="col-xs-6 captcha-img">
                    <a href="#" onClick={this.changeCaptcha.bind(this)}>
                      <img src={this.props.lrdialogUI.captchaUrl} />
                    </a>
            </div>
      </from>

      
          
      
      </Dialog>

    );

  }

  _getRegister() {

    const {
      authActions
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
      h2: {
        textAlign: 'center',
      }
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

          
           <h2 >注     册</h2>

         


      <from method="post">

            
            <TextField 
              style={styles.textInput} 
              hintText="用户名/邮箱"  
              fullWidth="true" 
              ref="email"
              id="email"
              errorText={this.state.errMsg.email? this.state.errMsg.email:""}
              onChange={this.updateErr.bind(this)}
              />
           

            <TextField 
              style={styles.textInput}
              type="password" 
              hintText="密码" 
              fullWidth="true"
              ref="password"
              id="email"
              errorText={this.state.errMsg.password? this.state.errMsg.password:""}
              
              />
            <TextField 
              style={styles.textInput}
              type="password" 
              hintText="重复密码" 
              fullWidth="true"
              ref="repeatpassword"
              id="repeatpassword"
              errorText={this.state.errMsg.repeatpassword? this.state.errMsg.repeatpassword:""}
              
              />
      </from>

      
          
      
      </Dialog>

    );

  }


  render() {
    return (
      <div>
      {(this.state.tabindex > 0) ? this._getRegister() : this._getLogin()}
      <Snackbar open={(this.state.errMsg.result !==null)} message={this.state.errMsg.result} action="错误" autoHideDuration={3000} />
      <Snackbar open={(this.state.success !==null)} message={this.state.success} action="错误" autoHideDuration={3000} />
          
      
      </div>

    )

  }
}