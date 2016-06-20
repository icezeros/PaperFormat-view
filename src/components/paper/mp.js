import React, {
	Component
}
from 'react';

export default class Mp extends Component {

	render() {
		switch (this.props.ptype) {
			case "p":
				return (
					<p className={this.props.pclassname} style={this.props.pstyle}>{this.props.content}</p>
				);
				break;
			case "image":
				return (
					<p>image</p>
				);
				break;
			case "table":
				return (
					<p>table</p>
				);
				break;
			default:
				return (<p>default</p>);
				break;
		}
	}
}