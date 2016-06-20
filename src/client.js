import ReactDom from 'react-dom';
import React from 'react';
import App from './app';
// import Index from './index';
// import LoginDialog from './components/index/loginDialog';
// import Mypaper from './components/paper/mypaper';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Demo from './demo';

// import Page from './components/paper/page';
// import Book from './components/paper/book';



injectTapEventPlugin();


ReactDom.render(
	<App/>,
	document.getElementById('root')
)