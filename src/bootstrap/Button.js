import React, { Component } from 'react';

export default class Button extends Component {
	render() {

		const Tag = this.props.href ? 'a' : 'button';

		return (
			<Tag {...this.props}>Discover things.</Tag>
		);
	}
}