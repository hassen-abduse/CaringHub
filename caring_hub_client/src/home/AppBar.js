import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";
import "../assets/css/swiper.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import { useLocation } from "react-router";
import { Link, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { connect } from 'react-redux'
import { logoutUser } from "../redux/ActionCreators/authActions";
import { Badge } from "antd";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
})

function AppBar(props) {
  const route = useLocation().pathname;
  const decoded = props.auth.token ? jwtDecode(props.auth.token) : { role: '', _id: '' }

  return (
    <div>
      <nav
        id="navbarExample"
        class="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
      >
        <div class="container">
          <Link className="navbar-brand logo-text" to="/index">
            CaringHub
          </Link>

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
              {
                decoded.role === '' &&
                <li class="nav-item">
                  <Link
                    class={route === "/" ? "nav-link active" : "nav-link"}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
              }
              {
                decoded.role === 'Vol' &&
                <ul class="navbar-nav navbar-nav-scroll">
                  <li class="nav-item">
                    <Link
                      class={
                        route === "/volunteer" ? "nav-link active" : "nav-link"
                      }
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      aria-current="page"
                      to={`/volunteer/dashboard/${decoded._id}`}>
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={
                        route === "/volunteer/findProject" ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                      to="/volunteer/findProject"
                    >
                      Find Projects
                    </Link>
                  </li>
                </ul>
              }

              {decoded.role === "Org" && (
                <ul class="navbar-nav navbar-nav-scroll">
                  <li class="nav-item ">
                    <Link
                      class={
                        route === "/" ? "nav-link active" : "nav-link"
                      }
                      to="/"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      class={
                        route === "/organization/projects" ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                      to="/organization/projects"
                    >
                      My Projects
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={
                        route === "/organization/postProject" ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                      to="/organization/postProject"
                    >
                      Post Project
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      class={
                        route === "/organization/applicants" ? "nav-link active" : "nav-link"
                      }
                      aria-current="page"
                      to="/organization/applicants"
                    >
                      Applicants{" "}
                      <Badge
                        // className="site-badge-count-109"
                        count={2}
                        style={{
                          backgroundColor: "#0092FF",
                        }}
                      />
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
            {
              decoded.role == '' &&
              <span class="nav-item">
                <Link class="btn-solid-sm" to="/login">
                  Login
                </Link>
              </span>
            }
            {
              decoded.role === '' &&
              <span class="nav-item" style={{ marginLeft: "2px" }}>
                <a class="btn-outline-sm" href="/register">
                  Register
                </a>
              </span>
            }
            {decoded._id !== '' &&
              <ul class="navbar-nav navbar-nav-scroll">
                <li
                  class="nav-item"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className='nav-link disabled'>
                    <AccountCircleIcon /> {props.auth.user.username}
                  </span>
                </li>

                <li class="nav-item align-self-center">
                  <Link to='/index'>
                  <Button
                    onClick={() => {
                      props.logoutUser()
                    }}
                    class=" btn-outline-sm" aria-current="page">
                    Logout
                  </Button>
                  </Link>
                </li>
              </ul>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
