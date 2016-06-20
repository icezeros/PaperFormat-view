import React from 'react';
import MenuLeftNav from '../MenuLeftNav';


export default class Users extends React.Component {

  render() {
    let menuItems = [{
      route: '/users/changepassword',
      text: '修改密码'
    }, {
      route: '/users/updateuser',
      text: '完善资料'
    }, {
      route: '/users/login',
      text: '登录'
    }, {
      route: '/users/register',
      text: '注册'
    }, ];

    return (
      <MenuLeftNav history={this.props.history} location={this.props.location} menuItems={menuItems}>{this.props.children}</MenuLeftNav>
    );
  }

}

Users.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
};