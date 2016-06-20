import React, {
	Component
}
from 'react';


export default class Demo extends Component {

	render() {
		let styles = {
			height: '100%',
			backgroundColor: 'red',
			direction: 'ltr',
		};

		let newChildren = React.Children.map(this.props.children, (currentChild) => {
			if (!currentChild) { // If undefined, skip it
				return null;
			}
			return currentChild;
		}, this);

		return (
			<div style={this.styles}>
			<p>sdfsadfasdfasdfasf</p>
			        {newChildren}
	        </div>

		);
	}
}