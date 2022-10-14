import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
import Navigation from "../../components/Navigation";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";
import Footer from "../../components/Footer";

function Portfolio() {
  return (
    <div>
      <Navigation />

      <div className="ArticlesContentsStyle">
        <div className="ArticlesTextContentsStyle">
          <p>Anasayfa</p>
          <p>&nbsp;/&nbsp;</p>
          <p>Portfolyo</p>
        </div>
      </div>
      <div className="PortfolioBody">
        <div>
          <h1>Neler Yaptık</h1>
          <p>
            Portfolyomuzda görüdğünüz işlerin detayları için lütfen bizimle
            iletişime geçin
          </p>
        </div>
        <div className="PortfolioCardsStyle">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <div className="PortfolioCardsStyle">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <div className="PortfolioCardsStyle">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
