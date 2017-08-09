import React, { Component } from 'react';

import { classify } from './Utils'

export default class Button extends Component {
	

	render() {

		const Tag = this.props.href ? 'a' : 'button';
		const className = classify('btn', this.props.className) +(this.props.disabled ? ' disabled' : '');

		return (
			<Tag {...this.props} className={className}>Discover things.</Tag>
		);
	}
}