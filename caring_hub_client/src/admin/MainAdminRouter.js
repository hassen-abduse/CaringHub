import React from "react";
import { makeStyles } from "@material-ui/core";
import Project from "../projects/Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Volunteers from "../volunteers/Volunteers";
import PostProject from "../projects/PostProject";
import Applicants from "../applicants/Applicant";

const useStyles = makeStyles({
  MainPage: {},
  fullList: {
    width: "auto",
  },
});
export default function MainPage() {
  const classes = useStyles;
  return (
    <Router>
      <div className={classes.MainPage}>
        <Switch>
          <Route exact path="/admin/projects">
            <Project />
          </Route>
          <Route exact path="/admin/volunteers">
            <PostProject />
          </Route>

          <Route exact path="/admin/Dashboard">
            <HomePage />
          </Route>
          <Route exact path="/admin/profile">
            <Project />
          </Route>
          <Route exact path="/admin/applicants">
            <Applicants />
          </Route>
          <Route exact path="/admin/organiztion">
            <Volunteers />
          </Route>
          <Route exact path="/admin">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
