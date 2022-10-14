import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Articles.css";
import NavBar from "../../components/Navigation";
import Footer from "../../components/Footer";
import ArticlesCard from "../../components/articlesCard/ArticlesCard";
import Categories from "../../components/categories/Categories";

function Articles() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="ArticlesContentsStyle">
        <div className="ArticlesTextContentsStyle">
          <p>Anasayfa</p>
          <p>&nbsp;/&nbsp;</p>
          <p>Makaleler</p>
        </div>
      </div>

      <div className="ArticlesInnerContentsStyle1">
        <div className="ArticleContainer">
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
        <Categories />
        <div className="CategoryContainer"></div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Articles;
