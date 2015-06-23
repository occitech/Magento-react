import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    console.error(this.props.product.price_html);
    return (
      <li className="item">
        <a href={this.props.product.request_path}>
          {this.props.product.name}
          <img src={this.props.product.image} />
          <div dangerouslySetInnerHTML={{__html: this.props.product.price_html}} />
        </a>
      </li>
    );
  }
}
