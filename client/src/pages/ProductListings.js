import React, { Component } from "react";
import Container from "./../components/Container";
// import axios from "axios";

class ProductListings extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    console.log(e.target.files[0]);
    reader.onloadend = function () {
      this.setState({ selectedFile: e.target.files[0] });
    }.bind(this);
  };

  // fileUploadHandler = () => {
  //   axios.post('http://acs.amazonaws.com/groups/global/AllUsers')
  // };

  render() {
    return (
      <Container>
        <h1>This is the Product Listings / Items for sale Page</h1>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
        <img src={this.state.selectedFile} alt="img" />
      </Container>
    );
  }
}

export default ProductListings;
