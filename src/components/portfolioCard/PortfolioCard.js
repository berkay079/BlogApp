import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import original from "../../assets/img/original.png";

import "./PortfolioCard.css";

function PortfolioCard() {
  return (
    <div className="PortfolioCard">
      <div className="PortfolioCardTop">
        <p>baslık</p>
      </div>
      <div className="PortfolioCardBody">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        </p>
      </div>
      <div className="PortfolioCardBottom">
        <div className="PortfolioCardBodyImage">
          <img className="PortfolioImgStyle" src={original}></img>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
