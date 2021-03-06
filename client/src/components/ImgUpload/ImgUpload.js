import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.cloudinary.com/v1_1/dkpdbkahw/image/upload";
const preset = "your Upload presets";

const User = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset);
    try {
      setLoading(true);
      const res = await axios.post(url, formData);
      const imageUrl = res.data.secure_url;
      const image = await axios.post("http://localhost:3000/product-listings", {
        imageUrl,
      });
      setLoading(false);
      setImage(image.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function fetchImage() {
      const image = await axios.get("http://localhost:3000/product-listings");
      setImage(image.data);
    }
    fetchImage();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h1 className="center red-text">Product Image Upload</h1>
      <div className="file-field input-field">
        <div className="btn">
          <span>Browse</span>
          <input type="file" name="image" onChange={onChange} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <div className="center">
        <button onClick={onSubmit} className="btn center">
          upload
        </button>
      </div>
    </div>
  );
};

export default User;
