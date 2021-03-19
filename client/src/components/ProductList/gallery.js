import react, { useEffect, useState, Component } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { render } from "react-dom";

const Gallery = () => {
  const [imageIds, setImageIds] = useState([]);

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

  return (
    <div>
      <div className="main">
        <h1>Product Listing</h1>
        <div className="gallery">
          <CloudinaryContext cloudName="cloud_name">
            {imageIds &&
              imageIds.map((imageId, index) => {
                return (
                  <div className="col-4" key={index}>
                    <div className="img">
                      <a
                        target="_blank"
                        href={`https://res.cloudinary.com/dkpdbkahw/image/upload/v1616008786/${imageId}.jpg`}
                      >
                        <Image
                          key={index}
                          cloudName="dkpdbkahw"
                          publicId={imageId}
                        >
                          <Transformation
                            crop="scale"
                            width="300"
                            height="200"
                            dpr="auto"
                            responsive_placeholder="blank"
                          />
                        </Image>
                      </a>
                      <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure fugiat iusto reprehenderit esse, repellat libero,
                        cupiditate voluptate laborum explicabo quod saepe, at
                        architecto. Commodi eveniet voluptatem exercitationem
                        velit fugiat. Esse.
                      </div>
                    </div>
                  </div>
                );
              })}
          </CloudinaryContext>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
