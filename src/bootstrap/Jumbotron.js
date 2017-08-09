import React, { Component } from 'react';
import { classify } from './Utils';

export default class Jumbotron extends Component {
	render() {
		return (
			<div {...this.props} className={classify("jumbotron", this.props.className)}>
				{this.props.children}
			</div>
		);
	}
}