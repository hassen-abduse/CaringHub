import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";
import "../assets/css/swiper.css";
import logo from "../assets/img/logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { logoutUser } from "../redux/ActionCreators/authActions";
import { Menu, Dropdown } from "antd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
  const [open, setOpen] = React.useState(false);

  const decoded = props.auth.token
    ? jwtDecode(props.auth.token)
    : { role: "", _id: "" };
  const menu = (
    <Menu>
      <Menu.Item key="0" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Link
          className="text-decoration-none"
          to={`/volunteer/dashboard/${decoded._id}`}
        >
          <AccountCircleIcon /> Profile
        </Link>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="1" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Link
          className="text-decoration-none"
          to="/"
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
        style={{ background: "#FFFFFF" }}
        id="navbarExample"
        class="navbar navbar-expand-lg fixed-top navbar-light"
        aria-label="Main navigation"
      >
        <div class="container">
          {open === false ? (
            <Link
              style={{ padding: 0, margin: 0 }}
              className="navbar-brand "
              to="/"
            >
              {" "}
              <img style={{ width: "90px", height: "65px" }} src={logo}></img>
            </Link>
          ) : null}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            class="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
              {decoded.role === "Vol" && (
                <ul class="navbar-nav navbar-nav-scroll">
                  <li class="nav-item">
                    <Link
                      class={route === "/" ? "nav-link active" : "nav-link"}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={
                        route === `/volunteer/dashboard/${decoded._id}`
                          ? "nav-link active"
                          : "nav-link"
                      }
                      aria-current="page"
                      to={`/volunteer/dashboard/${decoded._id}`}
                    >
                      Profile
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      id="find_project"
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
                  <li class="nav-item">
                    <Link
                      id="my-applications"
                      class={
                        route === "/volunteer/myApplications"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      aria-current="page"
                      to="/volunteer/myApplications"
                    >
                      My Applications
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
                      Home
                    </Link>
                  </li>
                  <li class="nav-item ">
                    <Link
                      class={
                        route === `/organization/dashboard/${decoded._id}`
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={`/organization/dashboard/${decoded._id}`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      id="my-projects"
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

                  {/* <li class="nav-item">
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
                      /> *
                    </Link>
                  </li> */}
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
