import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css";
import "../../assets/css/swiper.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Badge } from "antd";

export default function OrganizationHeader() {
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
                  href="/organization"
                >
                  Dashboard
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="/organization/projects"
                >
                  My Projects
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="/organization/volunteers"
                >
                  Volunteers
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="/organization/applicants"
                >
                  Applicants{" "}
                  <Badge
                    // className="site-badge-count-109"
                    count={2}
                    style={{
                      backgroundColor: "#0092FF",
                    }}
                  />
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
