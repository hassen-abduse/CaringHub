import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";
import "../assets/css/swiper.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import { useLocation } from "react-router";
import { Link, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { logoutUser } from "../redux/ActionCreators/authActions";
import { Badge, Menu, Dropdown } from "antd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

function AppBar(props) {
  const route = useLocation().pathname;
  const decoded = props.auth.token
    ? jwtDecode(props.auth.token)
    : { role: "", _id: "" };
  const menu = (
    <Menu>
      <Menu.Item key="0" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Link className="text-decoration-none">
          <AccountCircleIcon /> Profile
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item style={{ paddingLeft: "20px", paddingRight: "20px" }} key="3">
        <SettingsIcon /> Settings
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="1" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Link
          className="text-decoration-none"
          to="/index"
          onClick={() => {
            props.logoutUser();
          }}
        >
          <ExitToAppIcon /> Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
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
              {/* {decoded.role === "" && (
                <li class="nav-item">
                  <Link
                    class={route === "/" ? "nav-link active" : "nav-link"}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
              )} */}
              {decoded.role === "Vol" && (
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
                      to={`/volunteer/dashboard/${decoded._id}`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={
                        route === "/volunteer/findProject"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      aria-current="page"
                      to="/volunteer/findProject"
                    >
                      Find Projects
                    </Link>
                  </li>
                </ul>
              )}

              {decoded.role === "Org" && (
                <ul class="navbar-nav navbar-nav-scroll">
                  <li class="nav-item ">
                    <Link
                      class={route === "/" ? "nav-link active" : "nav-link"}
                      to="/"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link
                      class={
                        route === "/organization/projects"
                          ? "nav-link active"
                          : "nav-link"
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
                        route === "/organization/postProject"
                          ? "nav-link active"
                          : "nav-link"
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
                        route === "/organization/applicants"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      aria-current="page"
                      to="/organization/applicants"
                    >
                      Applicants{" "}
                      {/* <Badge
                        // className="site-badge-count-109"
                        count={2}
                        style={{
                          backgroundColor: "#0092FF",
                        }}
                      /> */}
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
            {decoded.role == "" && (
              <span class="nav-item">
                <Link class="btn-solid-sm " to="/login">
                  Login
                </Link>
              </span>
            )}
            {decoded.role === "" && (
              <span class="nav-item" style={{ marginLeft: "10px" }}>
                <Link class="btn-outline-sm" to="/register">
                  Register
                </Link>
              </span>
            )}
            {decoded._id !== "" && (
              <ul class="navbar-nav navbar-nav-scroll">
                <li
                  class="nav-item"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <span className="nav-link">
                      <AccountCircleIcon /> {props.auth.user.username}
                    </span>
                  </Dropdown>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
