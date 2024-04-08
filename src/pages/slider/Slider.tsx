import React, { useState } from "react";
import "./slider.css";
const imageData = [
  {
    url: "https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg",
    title: "Majestic Lion",
    description:
      "The king of the jungle. The lion is a symbol of strength and courage. lions are the only cats that live in groups, which are called prides. Prides are family units that may include up to three.",
  },
  {
    url: "https://images.pexels.com/photos/7387608/pexels-photo-7387608.jpeg",
    title: "Pretty Owl",
    description:
      "The owl is a bird of the night. It is known for its large eyes and its ability to turn its head 180 degrees. The owl is a bird of prey and is known for its hunting ability.",
  },
  {
    url: "https://images.pexels.com/photos/15466191/pexels-photo-15466191/free-photo-of-black-snake-on-the-ground.jpeg",
    title: "Black Snake",
    description:
      "The black snake is a symbol of mystery and power. It is a creature of the night and is known for its ability to move quickly and quietly. The black snake is a symbol of transformation and change.",
  },
  {
    url: "https://images.pexels.com/photos/7723959/pexels-photo-7723959.jpeg",
    title: "Rhinosaurus",
    description:
      "The rhinoceros is a symbol of strength and power. It is a creature of the earth and is known for its ability to charge and attack. The rhinoceros is a symbol of protection and defense.",
  },
];

const Slider = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="Elevate glass slider">

      <div className="line-bar" key={selectedImage}></div>
      <div className="parent">
        <div className="filter"></div>
        <img
          className="slider-images"
          src={imageData[selectedImage].url}
          alt={imageData[selectedImage].title}
        />
        <div className="slider-content">
          <h1 className="slider-heading">{imageData[selectedImage].title}</h1>
          <p className="slider-desc">{imageData[selectedImage].description}</p>
        </div>
      </div>
      <div className="slider-controls">
        {
          imageData.map((data, index) => (
            <div className="slider-img" key={index} onClick={() => setSelectedImage(index)}>
              <img src={data.url} alt={data.title} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Slider;
