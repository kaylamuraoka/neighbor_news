import React, { useEffect, useState } from "react";
import API from "./../../utils/API";

const Gallery = () => {
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
    <div className="cool">
      <h1>Product Listing</h1>

      {userData &&
        userData.map((data, index) => {
          return (
            <div className="card col-4 m-2" key={index}>
              <a target="_blank" rel="noreferrer" href={data.imgUrl}>
                <img src={data.imgUrl} className="card-img-top" alt="product" />
              </a>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <div className="card-text">
                  {data.text}
                  <br></br>${data.price}
                  <br></br>Uploaded By:{data.displayName}
                </div>
                <button
                  id={data._id}
                  className="btn btn-default btn-primary"
                  onClick={deleteProduct}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
