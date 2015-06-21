import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    console.error(this.props.product);
    return (
      <li className="item">
        <a href={this.props.product.request_path}>
          {this.props.product.name}
        </a>
      </li>
    );
  }
}