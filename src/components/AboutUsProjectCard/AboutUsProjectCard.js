import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUsProjectCard.css";
import original from "../../assets/img/original.png";

function AboutUsProjectCard() {
  return (
    /*
        <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
        */
    <div className="projectCard">
      <div className="CardImg">
        <img
          className="AboutUsProjectCardImgStyle"
          src={original}
          alt="görsel burada olacak"
        />
      </div>

      <div className="cardTitle">
        <h5>Card title</h5>
      </div>

      <div className="cardBody">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse maxime
          et hic ut harum ipsum debitis, repellat dolorum,
        </p>
      </div>
    </div>
  );
}

export default AboutUsProjectCard;
