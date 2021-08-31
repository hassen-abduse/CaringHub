import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";
import "../assets/css/swiper.css";

export default function AppBar() {
  return (
    <div>
      <nav
        id="navbarExample"
        class="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
      >
        <div class="container">
          <a class="navbar-brand logo-text" href="/">
            CaringHub
          </a>

          <button
            class="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Volunteers
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  <li>
                    <a class="dropdown-item" href="/volunteer">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/volunteer/findProject">
                      Find Project
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="volunteer/dashboard">
                      Browse Organizations
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown02"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Organization
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  <li>
                    <a class="dropdown-item" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Post Project
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Discover Volunteers
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <span class="nav-item">
              <a class="btn-solid-sm" href="/login">
                Login
              </a>
            </span>

            <span class="nav-item" style={{ marginLeft: "2px" }}>
              <a class="btn-outline-sm" href="/register">
                Register
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
