import React, {
	Component
}
from 'react';

import {
	browserHistory, Router, Route, Link
}
from 'react-router';

import {
	Mixins, Styles, Paper
}
from 'material-ui';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

let {
	Spacing, Colors
} = Styles;

export default class MenuLeftNav extends Component {
	componentWillMount() {
		this.setState({
			activeRoute: this.props.location.pathname,
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			activeRoute: nextProps.location.pathname,
		});
	}



	render() {
		const styles = {
			root: {
				boxSizing: 'border-box',
				margin: '0 auto',
				marginTop: 77,
				maxWidth: '1200px',
				minWidth: '400px',
				position: 'relative',
			},
			MenuNav: {
				marginRight: 32,
				marginBottom: 32,
				float: 'left',
				// position: 'relative',
				zIndex: 5,
			},
			content: {
				boxSizing: 'border-box',
				marginLeft: 180,
				paddingTop: 80,

				// borderLeft: 'solid 1px ' + Colors.grey300,
				minHeight: '1000px',
			},


		};
		return (
			<div style={styles.root}>              
              <Menu
                autoWidth={true}
                onItemTouchTap={(e, child) => this.props.history.pushState(null,child.props.value)}
                openDirection="bottom-right"
                style={styles.MenuNav}
                value={this.state.activeRoute}
                width={styles.MenuNav.width}
                zDepth={4}>
                {this.props.menuItems.map((item, index) => {
                  return (
                    <MenuItem
                     key={index}
                      primaryText={item.text}
                      value={item.route}
                    />
                  );
                })}
              </Menu>
              <Paper style={styles.content} zDepth={4}>
                {this.props.children} 
              </Paper>
            </div>
		);
	}
}