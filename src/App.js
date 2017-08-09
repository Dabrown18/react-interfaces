import React, { Component } from 'react';

import Button from './bootstrap/Button';

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fulid text-xs-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)',color:'white'}}>
        <div className="container">
          <h1>Building React.js User Interfaces</h1>
          <p>with Bootstrap and SASS.</p>
          <p>
            <Button className="-primary" href="http://02geek.com/" target="_blank" />
            <Button className="-danger-outline -sm" />
          </p>
          <Button className="-primary-outline -lg -block" />
        </div>
      </div>
    );
  }
}
