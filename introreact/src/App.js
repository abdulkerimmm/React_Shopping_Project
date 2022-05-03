import React, { Component } from "react";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
export default class App extends Component {
  state = { currentcategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentcategory: category.categoryName });
    this.getProducts(category.id);
  };

  // componentDidMount() {
  //   this.getProducts();
  // }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addItem = newCart.find((c) => c.product.id === product.id);
    if (addItem) {
      addItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });

    alertify.success(product.productName + " added to cart!");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed to cart!");
  };

  render() {
    let productinfo = {
      title: "production icin baslik",
      baskabisey: "urunlerimiz",
    };
    let categoryinfo = { title: "category icin baslik" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentcategory={this.state.currentcategory}
                changeCategory={this.changeCategory}
                info={categoryinfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentcategory={this.state.currentcategory}
                      info={productinfo}
                    />
                  )}
                />
                <Route exact path="/cart" render={props => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )} />
                  <Route exact path="/form1" component={FormDemo1}/>
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
