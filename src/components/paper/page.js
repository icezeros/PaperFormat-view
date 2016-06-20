import React, {
	Component
}
from 'react';
import Paper from 'material-ui/lib/paper';
import Mp from './mp';


export default class Page extends Component {



	render() {



		var items = [];

		this.props.paragras.map((paragra, index) => {
				items.push( < Mp {...paragra
					}

					key = {
						index
					}/>);
				});


			return (

				<Paper zDepth = {5} style={this.props.pageStyle}>
				{this._getHeader()}
		{
			items
		}
				{this._getFooter()}
		    </Paper>


			)
		}


		_getHeader() {
			return (
				<div className={this.props.pageHeader.calssname} style={this.props.pageHeader.style}>{this.props.pageHeader.content}</div>

			);
		}

		_getFooter() {
			return (
				<div className={this.props.pageFooter.calssname} style={this.props.pageFooter.style}>{this.props.pageFooter.content}</div>

			);
		}



	}



	// <p style={this.props.paragrastyle}>asdfs</p> 
	// 			<p style={this.props.paragrastyle}>asdfs</p> 
	// 			<p style={this.props.paragrastyle}>asdfs</p> 
	// 			<p style={this.props.paragrastyle}>asdfs</p> 
	// 			<p style={this.props.paragrastyle}>asdfs</p> 
	// 			<p style={this.props.paragrastyle}>asdfs</p>