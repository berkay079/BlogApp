import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ArticlesCard.css";
import original from "../../assets/img/original.png";

function ArticlesCard() {
  //   var recordDate = theArticle.RecordDate.toLocaleDateString();
  //   var daysPassed = 3;
  //   var daysPassed = new Date() - theArticle.RecordDate;
  //   daysPassed /= 24 * 3600 * 1000;
  //   daysPassed = Math.round(daysPassed);
  return (
    <div className="ArticlesCard">
      <div className="ArticlesCardTop">
        <p>React Component Kullanımı</p>
      </div>

      <div className="ArticlesCardBody">
        <div>
          <img className="ArticlesCardBodyImage" src={original}></img>
        </div>
        <div className="ArticlesCardBodyText">
          <p className="ArticleInfoParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            modi! Facere nesciunt rem at aliquid sapiente dignissimos sint
            dicta, maiores, fugiat, porro accusamus natus necessitatibus cumque
          </p>
        </div>
      </div>
      <hr />
      <div className="ArticlesCardBottom">
        <div className="ArticlesCardBottomDiv1">
          <div>
            <img className="ArticlesCardBodyImage1" src={original}></img>
          </div>
          <div className="ArticlesCardBottomText">
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            </p>
          </div>
        </div>

        <div className="ArticlesCardBottomDiv2">
          <div>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            </p>
          </div>
          <div>
            <button>Devamını -{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesCard;
