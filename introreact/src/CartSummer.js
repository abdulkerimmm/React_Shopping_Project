import React, { Component } from "react";
import {Link} from "react-router-dom"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSummer extends Component {
  renderSummary(){
      return( <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          your Cart={this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
            {
                this.props.cart.map(cartItem =>(
                  <DropdownItem key={cartItem.product.id}> 
                  <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)} >X</Badge>
                  {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
               
                  </DropdownItem>
                ))}
    
  
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>)
  }

  renderEmptyCart(){
      return(
          <NavItem>
              <NavLink>Empty Cart</NavLink>
          </NavItem>
      )
  }

  render() {
    return (
      <div>
       {this.props.cart.length>0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    );
  }
}
