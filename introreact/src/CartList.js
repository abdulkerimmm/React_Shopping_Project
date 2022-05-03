import React, { Component } from "react";
import {Button, Table} from "reactstrap"

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>product id</th>
            <th>product Name</th>
            <th>unit Price</th>
            <th>Unit In Stock</th>
            <th>Quantity </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
          this.props.cart.map(cartItem=> (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInstock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>
                     Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
