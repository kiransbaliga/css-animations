import { SetStateAction, useState } from "react";
import "../styles.css";

const data = [
  "https://img.freepik.com/premium-photo/dark-empty-street-dark-blue-background_777271-2208.jpg?w=968",
  "https://img.freepik.com/free-photo/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustration_35913-2334.jpg",
  "https://img.freepik.com/free-photo/sunlight-shining-single-mountain-top-sunset-with-dark-cloudy-sky_181624-377.jpg",
  "https://img.freepik.com/free-photo/blue-smoky-art-abstract-background_53876-110800.jpg"
];


const CardsAnimation = () => {
  const [active, setActive] = useState(0);
  const handleClick = (index: SetStateAction<number>) => {
    console.log(index);
    setActive(index);
  };
  return (
    <div className="Container">
      {data.map((url, index) => (
        <div
          key={index}
          className={index === active ? "Img active" : "Img"}
          onClick={() => handleClick(index)}
        >
          <img src={url} alt="imagiaengmae" />
        </div>
      ))}
    </div>
  )
}

export default CardsAnimation