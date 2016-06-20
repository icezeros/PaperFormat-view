import React, {
  Component
}
from 'react';
import {
  FlatButton, RaisedButton, TextField, Tabs, Tab, Paper, Snackbar, Styles
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

import * as authActions from '../../redux/actions/auth';
import * as globalUIActions from '../../redux/actions/globalUI';


const {
  Colors, Spacing, Typography
} = Styles;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mobile: this.props.mobile
      errMsg: this.props.auth.errMsg,
      success: this.props.auth.success
    };
  }


  componentDidMount() {
    // const {
    //  authActions, auth
    // } = this.props
    // if (auth.token && !auth.user) {
    //  authActions.getUserInfo(auth.token)
    // }
  }

  componentWillMount() {
    // let setTabsState = function() {
    //  this.setState({
    //    mobile: (document.body.clientWidth <= 647),

    //  })
    // }.bind(this);
    // setTabsState();
    // window.onresize = setTabsState;
  }
  componentWillReceiveProps() {
    // this.setState({
    //  mobile: nextProps.mobile
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

    this.props.globalUIActions.getCaptchaUrl()
  }

  handleSubmit(e) {
    e.preventDefault()
    const {
      authActions
    } = this.props

    const {
      email, password, repeatpassword
    } = this.refs;
    authActions.register({
      email: email.getValue(),
      password: password.getValue(),
      repeatpassword: repeatpassword.getValue()
    })



  }



  render() {
    const styles = {
      root: {
        padding: 200
      },
      paperFrom: {
        margin: '0 auto',
        marginTop: 50,
        padding: 30,
        width: 'auto',
        maxWidth: '500px',
        minWidth: '400px',
        position: 'relative',
        // margin: '0 auto',
        // // marginTop: 200,
        // paddingTop: 50,

        // width: 'auto',
        // maxWidth: 450

      },
      buttonContainStyle: {
        marginTop: 30,
        paddingTop: 10,
        height: 45,
        backgroundColor: Colors.red500,
        // paddingLeft: 80,
        textAlign: 'center',

      },

      textInput: {
        marginLeft: 0
      }
    }



    return (
      <div>       
      <Paper zDepth={3} style={styles.paperFrom} >

          <from method="post">
              <TextField
                style={styles.textInput}                        
                      floatingLabelText="用户名/邮箱"
                      fullWidth="true" 
                      ref="email"
                      id="email"
                      errorText={this.state.errMsg.email? this.state.errMsg.email:""}
                      onChange={this.updateErr.bind(this)}
                    />
                    <TextField 
                      style={styles.textInput}
                      type="password"                       
                      floatingLabelText="密码"
                      fullWidth="true"
                      ref="password"
                      id="email"
                      errorText={this.state.errMsg.password? this.state.errMsg.password:""}
                    />
                    <TextField 
                      style={styles.textInput}
                      type="password"                       
                      floatingLabelText="重复密码"
                      fullWidth="true"
                      ref="repeatpassword"
                      id="repeatpassword"
                      errorText={this.state.errMsg.repeatpassword? this.state.errMsg.repeatpassword:""}              
                      />
                </from>
                <div style={styles.buttonContainStyle}>
                <RaisedButton
                   label="登&nbsp;&nbsp;&nbsp;&nbsp;录"
                   primary={true}
                   keyboardFocused={false}
                   backgroundColor={Colors.green700}
                   secondary={true}
                   onTouchTap={this.handleSubmit.bind(this)}
               /> 
               </div>      
            </Paper>

               
            </div>



    )
  }


}


function mapStateToProps(state) {
  return {
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
  mapDispatchToProps)(Register);