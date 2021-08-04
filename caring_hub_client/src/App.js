import "./App.css";
import React from "react";
//material ui imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Landing from "./Landing/Landing";
//import SignIn from "./Roles/common/SignIn";
import SignUp from "./Roles/common/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./volunteer/pages/dashboard/Dashboard";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Landing maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Landing> */}

      <Router>
        <Header />

        <div>
          <Switch>
            <Route path="/volunteer/dashboard">
              <Dashboard />
            </Route>

            {/* <Route path="/volunteer/findProject">
              <FindProject />
            </Route> */}
          </Switch>
        </div>
      </Router>

      <Footer />
    </React.Fragment>
  );
}

export default App;
