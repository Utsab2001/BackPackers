import React from "react";
import "./services.scss";
import {
  choosing
} from "../../data";
const data = choosing;

export default function Services() {
  return (
    <div className="services" id="services">
      <h1>Why Choosing Us?</h1>
      <div className="container">{
        data.map((d)=>(
                  <div className="serviceItems">
          <img src={d.img} alt="" />
          <h4>{d.name}</h4>
          <p>{d.description}</p>
        </div>
        ))
      }
      </div>
    </div>
  );
}
//https://assets-global.website-files.com/60211f81b64667d24f09c34c/60d347750c242c1ac9c07191_Cost-04.jpg
//https://img.freepik.com/free-vector/adventure-background_23-2149048248.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1701302400&semt=ais
//https://cdni.iconscout.com/illustration/premium/thumb/friends-on-adventure-tour-5065184-4221201.png?f=webp
//https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg