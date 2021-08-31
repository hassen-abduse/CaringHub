import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { MultiSelect } from "multiselect-react-dropdown";
//material ui imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import Landing from "./Landing/Landing";
//import SignIn from "./Roles/common/SignIn";
import SignUp from "./Roles/common/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./volunteer/pages/dashboard/Dashboard";
import FindProject from "./volunteer/pages/find-project/FindProject";
import ReviewApplication from "./volunteer/pages/review-application/ReviewApplication";
import { DescriptionCard } from "./volunteer/components/JobDescriptionCard";
import Landing from "./volunteer/pages/landing/Landing";
import Demo from "./organization/components/ImageUploadComponent";
import PostProject from "./organization/pages/post-project/PostProject";

import EditJobPost from "./organization/pages/post-project/EditJobPost";
// import Demo from "./organization/components/ImageUploadComponent";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      {/* <Landing maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      />
    </Landing>  */}
      {/* <PostProject /> */}
      <EditJobPost />
      {/* <CompanyProfile /> */}
      {/* <Router>
      <Header />
        
      <div>
        <Switch>
          <Route exact path="/volunteer">
            <Landing />
          </Route>
          <Route exact path="/volunteer/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/volunteer/findProject">
            <FindProject />
          </Route>
          <Route exact path="/volunteer/reviewApplication">
            <ReviewApplication />
          </Route>
          <Route exact path="/volunteer/jobDescription">
            <DescriptionCard />
          </Route>
        </Switch>
      </div>
    </Router>

    <Footer /> */}
    </React.Fragment>
  );
}

export default App;
