import React, { useState } from "react";

import "./works.scss";
import {
popularTreks
} from "../../data";

const data = popularTreks;

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1)
      // : setCurrentSlide(currentSlide < 5 ? currentSlide + 1 : 0);
      : setCurrentSlide(currentSlide < data.length - 1  ? currentSlide + 1 : 0);
      console.log("Clicked");
  };
  // setInterval(() => {
  //   handleClick();
  // }, 3000);
  return (
    <div className="work" id="works">
      <h1>Popular Treks</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <h4>Duration: <span>{d.duration}</span></h4>
                  <h4>Difficulty level: <span>{d.difficultyLevel}</span></h4>
                  <h4>Region: <span>{d.region}</span></h4>
                  <h4>Best time to do the Trek: <span>{d.time}</span></h4>
                  <a href="/#contact" className="bookNow">Book Now</a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={()=>handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={()=>handleClick("")}
      />
    </div>
  );
}
