import React from 'react';
import {
	Route,
	Redirect,
	IndexRoute,
}
from 'react-router';

import App from './app';
import Home from '../components/home';
import Book from '../components/paper/book';
import Users from '../components/users';
import Login from '../components/users/login';
import Register from '../components/users/register';
import UpdateUser from '../components/users/updateUser';
import ChangePassword from '../components/users/changePassword';
// import Mydialog from '../demo/mydialog';
// import Index from '../index';


const AppRoutes = (
	<Route path="/" component ={App}>
	  <IndexRoute component={Home} />
	  <Route path="home" component={Home} />
	  <Redirect from="home" to="/"/>
	  <Route path="book" component={Book} />
	  <Route path="users" component={Users}>
	    <Route path="login" component={Login} />
	    <Route path="register" component={Register} />
	    <Route path="updateuser" component={UpdateUser} />
	    <Route path="changepassword" component={ChangePassword} />
	  </Route>

	</Route>
)

export default AppRoutes;