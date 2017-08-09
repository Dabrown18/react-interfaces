import React, { Component } from 'react';

export default class Button extends Component {
	render() {

		const Tag = this.props.href ? 'a' : 'button';
		const className = 'btn ' + this.props.className;

		return (
			<Tag {...this.props} className={className}>Discover things.</Tag>
		);
	}
}