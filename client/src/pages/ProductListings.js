import React, { Component } from "react";
import Container from "./../components/Container";
// import axios from "axios";

class ProductListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    return (
      <Container>
        <h1>This is the Product Listings / Items for sale Page</h1>

        <input type="file" onChange={this.handleChange} />
        <img src={this.state.file} />
      </Container>
    );
  }
}

export default ProductListings;
