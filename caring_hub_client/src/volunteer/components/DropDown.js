import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  MenuIcon,
  Typography,
} from "@material-ui/core";
import NavMenu from "./Menu";

// import { DownOutlined, UserOutlined } from "@ant-design/icons";

export default function DropDown() {
  return (
    <AppBar
      style={{
        alignItems: "center",
        marginTop: "100px",
        backgroundColor: "lightgrey",
      }}
      position="static"
    >
      <Toolbar variant="dense">
        <NavMenu />
      </Toolbar>
    </AppBar>
  );
}
