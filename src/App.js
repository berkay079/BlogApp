import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/home/Home";
import Articles from "./pages/articles/Articles";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<Home />} path="/home" />
          <Route element={<Articles />} path="/articles" />
          <Route element={<Portfolio />} path="/portfolio" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
