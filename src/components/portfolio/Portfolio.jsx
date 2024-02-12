import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfoliolist/PortfolioList";
import {
  featuredDestinations,
  mostVisitedDestinations,
  beachesDestinations,
  mountainDestinations,
  spiritualDestinations,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("beaches");
  const [data, setData] = useState([]);

  const list = [
    // { id: "featured", title: "All Seasons" },
    // { id: "mostVisited", title: "Most Visited" },
    { id: "beaches", title: "Winter" },
    { id: "mountains", title: "Monsoon" },
    { id: "spiritual", title: "Summer" },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredDestinations);
        break;
      case "mostVisited":
        setData(mostVisitedDestinations);
        break;
      case "beaches":
        setData(beachesDestinations);
        break;
      case "mountains":
        setData(mountainDestinations);
        break;
      case "spiritual":
        setData(spiritualDestinations);
        break;

      default:
        setData(featuredDestinations);
        break;
    }
    return () => {};
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>For All Seasons</h1>
      <ul>
        {/* <PortfolioList/> */}
        {/* <PortfolioList/> */}
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
        {/* {list.map((item)=>{
          <PortfolioList title={item.title}/>
        })} */}
      </ul>
      <div className="container">
        {data.map((d)=>(
                  <div className="item">
          <img
            src={d.img}
            alt=""
          />
          <h3>{d.title}</h3>
        </div>
        ))}

      </div>
    </div>
  );
}
