import react, { useEffect, useState, Component } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { render } from "react-dom";
import "./style.css";

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
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="main">
      <h1>Product Listing</h1>
      {userData &&
        userData.map((data, index) => {
          return (
            <div className="card col-4" key={index}>
              <img src={data.imgUrl} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <div className="card-text">
                  {data.text}
                  <br></br>${data.price}
                  <br></br>Upload By:{data.displayName}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
