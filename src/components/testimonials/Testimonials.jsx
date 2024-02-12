import React from "react";
import "./testimonials.scss";
import { reviews } from "../../data";

const data = reviews;

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="top">
              <img
                src="https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?size=626&ext=jpg&ga=GA1.1.365311069.1650423742&semt=ais"
                alt=""
                className="user"
              />
            </div>
            <div className="center">
              Lorem ipsum dolor sit amet consectetur, at. Facere libero dolorum
              eos atque! Lorem ipsum dolor sit amet.
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
