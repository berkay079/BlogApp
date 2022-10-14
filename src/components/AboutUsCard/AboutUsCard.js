import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUsCard.css";
import javascript from "../../assets/img/javascript.png";
function AboutUsCard() {
  return (
    <div className="AboutUsCard">
      <div className="CardTop">
        <img src={javascript} class="img-fluid" alt="görsel burada olacak" />
      </div>

      <div className="AboutUsCardBody">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse maxime
          et hic ut harum ipsum debitis, repellat dolorum, a quo saepe aut fugit
          nulla nostrum sequi dolorem veritatis cupiditate illo! Odio
          praesentium aliquid eius corrupti, explicabo, officia rerum inventore
          omnis aperiam dolor doloribus debitis quam fugit aspernatur illo.
          Totam, alias. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Esse maxime et hic ut harum ipsum debitis, repellat dolorum, a
          quo saepe aut fugit nulla nostrum sequi dolorem veritatis cupiditate
          illo! Odio praesentium aliquid eius corrupti, explicabo, officia rerum
          inventore omnis aperiam dolor doloribus debitis quam fugit aspernatur
          illo. Totam, alias. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Esse maxime et hic ut harum ipsum debitis, repellat
          dolorum, a quo saepe aut fugit nulla nostrum sequi dolorem veritatis
          cupiditate illo! Odio praesentium aliquid eius corrupti, explicabo,
          officia rerum inventore omnis aperiam dolor doloribus debitis quam
          fugit aspernatur illo. Totam, alias.
        </p>
      </div>
    </div>
  );
}

export default AboutUsCard;
