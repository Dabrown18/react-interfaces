import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		return (
			<a {...this.props}>Discover things.</a>
		);
	}
}