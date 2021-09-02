import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css";
import "../../assets/css/swiper.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Divider from "@material-ui/core/Divider";
export default function VolunteerHeader() {
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
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/volunteer"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="/volunteer/dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="/volunteer/findProject"
                >
                  Find Projects
                </a>
              </li>

              <hr class="line-vertical" />

              <li
                class="nav-item"
                style={{ display: "flex", alignItems: "center" }}
              >
                <AccountCircleIcon />
                <a class="nav-link" aria-current="page" href="/">
                  Beshir
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
