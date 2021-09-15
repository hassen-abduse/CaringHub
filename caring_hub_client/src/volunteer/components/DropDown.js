import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import NavMenu from "./Menu";

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
