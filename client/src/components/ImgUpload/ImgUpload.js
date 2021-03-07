import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";

const User = () => {
  const [imgState, setImgState] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imgState);
    formData.append("upload_preset", "trjyngfq");

    axios
      .post("https://api.cloudinary.com/v1_1/dkpdbkahw/image/upload", formData)
      .then((res) => console.log(res));
  };

  return (
    <div className="container">
      <h1 className="center red-text">Product Image Upload</h1>
      <div className="file-field input-field">
        <div className="btn">
          <span>Browse</span>
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setImgState(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <div className="center">
        <button onClick={uploadImage} className="btn center">
          upload
        </button>
        {/* <Image cloudName="dkpdbkahw" publicId={} /> */}
      </div>
    </div>
  );
};

export default User;
