'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        {this.props.welcome}
        <img src={this.props.logoSrc} alt={this.props.logoAlt} />
      </div>
    );
  }
}