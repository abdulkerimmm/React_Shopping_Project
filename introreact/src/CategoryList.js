import React, { Component } from "react";
import { ListGroup, ListGroupItem,Button } from "reactstrap";


export default class CategoryList extends Component {
  state = {
    categories: [],
    counter: "1",
    isim: "katalog",
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <h3>
          {this.state.counter} {this.state.isim}
        </h3>

        <ListGroup>
          {this.state?.categories?.map((category) => (
            <ListGroupItem
           
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              <div>
                <Button color="info"    active={category.categoryName === this.props.currentcategory? true: false}> {category.categoryName}  </Button>
             
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>

        {/* <h4>{this.props.currentcategory}</h4> */}
      </div>
    );
  }
}
