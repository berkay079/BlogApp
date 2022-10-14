import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Navigation from "../../components/Navigation";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Carousel />
      </div>
      <div className="CardStyle">
        <Card className="Card1" />
        <Card className="Card1" />
        <Card className="Card1" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
