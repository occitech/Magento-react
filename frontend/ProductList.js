import React, { Component } from 'react';
import Product from './Product'

export default class ProductList extends Component {
  render() {
    const list = this.props.products.map((product) => {
      return (
        <Product product={product} key={product.entity_id} />
      );
    });
    return (
      <div className="category-products">
        <ul className="products-grid products-grid--max-4-col">
          {list}
        </ul>
      </div>
    );
  }
}
