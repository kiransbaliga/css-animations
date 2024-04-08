import "./rickAndMorty.css";
import eye from "./eye.png";
import { useState } from "react";
const RickAndMorty = () => {
  //mouse move listener
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const eyeElem = document.querySelectorAll(".eye");
  const img = document.querySelector(".hero") as HTMLElement;
  document.addEventListener("mousemove", (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    const angle = Math.atan2(mouseY - 450, mouseX - 600);
    eyeElem.forEach((elem) => {
      (elem as HTMLElement).style.transform = `rotate(${angle}rad)`;
      img.style.filter = `hue-rotate(${angle}rad)`;
    });
  });
  return (
    <div className="Elevate glass">
      <img
        className="hero"
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-monsters-transparent-png-stickpng-2.png"
        alt="rick and morty"
      />
      <img src={eye} alt="eye" className="eye MR" />
      <img src={eye} alt="eye" className="eye ML" />
      <img src={eye} alt="eye" className="eye RR" />
      <img src={eye} alt="eye" className="eye RL" />
    </div>
  );
};

export default RickAndMorty;
