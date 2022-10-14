import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Nav.css";

function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            BlogApp
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  AnaSayfa
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="/aboutus">
                  Hakkımızda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/articles">
                  Makaleler
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/home">
                  Eğitimler
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/portfolio">
                  Portfolyo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/contact">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
