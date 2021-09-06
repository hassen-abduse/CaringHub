import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";
import "../assets/css/swiper.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function AppBar() {
  const route = useLocation().pathname;
  const user = localStorage.getItem("userId");
  const role = localStorage.getItem("Role");
  return (
    <div>
      <nav
        id="navbarExample"
        class="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
      >
        <div class="container">
          <a className="navbar-brand logo-text" href="/">
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
                <Link
                  class={route === "/" ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class={
                    route === "/volunteer" ? "nav-link active" : "nav-link"
                  }
                  to="/volunteer"
                >
                  Volunteer
                </Link>
              </li>

              {user && role === "organization" && (
                <li class="nav-item ">
                  <Link
                    class={
                      route === "/organization" ? "nav-link active" : "nav-link"
                    }
                    to="/organization"
                  >
                    Organization
                  </Link>
                </li>
              )}
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
