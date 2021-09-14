import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";
import "../assets/css/swiper.css";
import clsx from "clsx";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import { useLocation } from "react-router";
import { Link, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { logoutUser } from "../redux/ActionCreators/authActions";
import { Badge, Menu, Dropdown } from "antd";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


// import User from "./components/User";

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  leftSide: {
    display: "flex",
    flexDirection: "row",
  },
  HeaderIcons: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const drawerWidth = 240;

function AppBar(props) {
  const route = useLocation().pathname;
  const classes = useStyles()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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

          {
            open === false ?
            <Link className="navbar-brand logo-text" to="/index">
              CaringHub
            </Link>
            :
            null
          }
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
                        route === "/" ? "nav-link active" : "nav-link"
                      }
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={route === `/volunteer/dashboard/${decoded._id}` ? "nav-link active" : "nav-link"}
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
                      Home
                    </Link>
                  </li>
                  <li class="nav-item ">
                    <Link
                      class={route === `/organization/dashboard/${decoded._id}` ? "nav-link active" : "nav-link"}
                      to={`/organization/dashboard/${decoded._id}`}
                    >
                      Dasboard
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
