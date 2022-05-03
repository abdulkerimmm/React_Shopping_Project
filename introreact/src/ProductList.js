import React, { Component } from "react";
import {Table,Button} from "reactstrap";


export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <h2>{this.props.info.baskabisey}</h2>
        <h3> {this.props.currentcategory}</h3>

        <Table bordered >
          <thead>
            <tr>
              <th>#</th>
              <th>product Name</th>
              <th>unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead> 
          <tbody>         
          {this.props.products.map((product) => (
            <tr key={product.id} >
                <th scope="row"> {product.id}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}.td</td>
              <td>{product.unitsInstock}.td</td>
              <td> <Button  onClick={()=>this.props.addToCart(product)} color="success">add to cart</Button> </td>
            </tr>
          ))}    
          </tbody>
        </Table>
      </div>
    );
  }
}
