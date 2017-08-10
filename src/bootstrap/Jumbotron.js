import React, { Component } from 'react';
import { classify } from './Utils';
import Container from './Container';

export default class Jumbotron extends Component {
	render() {
		const props = Object.assign({}, this.props);
		const containerFluid = props.containerFluid;
		delete props.containerFluid;

		return (
			<div {...this.props} className={classify("jumbotron", this.props.className)}>
				<Container fluid={containerFluid}>
					{this.props.children}
				</Container>
			</div>
		);
	}
}