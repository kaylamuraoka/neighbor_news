import React, { useEffect, useState } from "react";
import API from "./../../utils/API";
import { BsTrashFill, BsPlusCircleFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Jumbotron, Container, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Gallery = () => {
  const history = useHistory();
  const [imageIds, setImageIds] = useState([]);
  const [userData, setUserData] = useState([]);

  const loadImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const getInfo = async () => {
    try {
      const res = await fetch("/blog/");
      const data = await res.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (e) => {
    e.preventDefault();
    try {
      const id = e.target.id;
      await API.deletePost(id);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Container fluid>
      <Jumbotron className="text-center">
        <h1>Product Listings</h1>
        <p>Check out all the products listed for sale in your neighborhood</p>
        <hr />
        <p>
          <Button
            variant="primary"
            onClick={() => {
              history.push("/upload");
            }}
          >
            List a product
            <BsPlusCircleFill
              style={{ marginLeft: "8px", marginBottom: "3px" }}
            />
          </Button>
        </p>
      </Jumbotron>

      {userData &&
        userData.map((data, index) => {
          return (
            <div className="card col-4 m-2" key={index}>
              <a target="_blank" rel="noreferrer" href={data.imgUrl}>
                <img src={data.imgUrl} className="card-img-top" alt="product" />
              </a>
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ textTransform: "capitalize" }}
                >
                  {data.title}
                </h5>
                <div className="card-text">
                  <strong>Description: </strong>
                  {data.text}
                  <br></br>
                  <strong>Price:</strong> ${data.price}
                  <br></br>
                  <p style={{ textTransform: "capitalize" }}>
                    <strong>Seller:</strong> {data.displayName}
                  </p>
                </div>
                <div className="ml-auto">
                  <Button
                    variant="danger"
                    size="sm"
                    id={data._id}
                    onClick={deleteProduct}
                    className="mr-1"
                  >
                    {" "}
                    Delete{" "}
                    <BsTrashFill
                      style={{ marginLeft: "3px", marginBottom: "3px" }}
                    />
                  </Button>
                  <Button variant="info" size="sm">
                    View{" "}
                    <AiFillEye
                      style={{ marginLeft: "3px", marginBottom: "3px" }}
                    />{" "}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </Container>
  );
};

export default Gallery;
