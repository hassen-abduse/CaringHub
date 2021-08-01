import "./App.css";
import React from "react";
//material ui imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Landing from "./Landing/Landing";
//import SignIn from "./Roles/common/SignIn";
import SignUp from "./Roles/common/SignUp";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Landing maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Landing>
    </React.Fragment>
  );
}

export default App;
