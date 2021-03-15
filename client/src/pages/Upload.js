import React, { useState } from "react";
import Container from "../components/Container";

export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("Error");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      });
      setFileInputState("");
      setPreviewSource("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <div>
        <h1 className="title">Upload Product</h1>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
        )}
        <br></br>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter Product Description"
          ></textarea>
        </div>
        <form className="col-md-8" onSubmit={handleSubmitFile} className="form">
          <label>Upload Image</label>
          <input
            id="imgId"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-control"
          />
          <button className="btn btn-primary" type="submit">
            Upload
          </button>
        </form>
      </div>
    </Container>
  );
}
