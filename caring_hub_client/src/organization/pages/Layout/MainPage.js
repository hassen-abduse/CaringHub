import React from "react";
import { makeStyles } from "@material-ui/core";
import Project from "../projects/Project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Volunteers from "../volunteers/Volunteers";
import PostProject from "../projects/PostProject";

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
          <Route exact path="/org/projects">
            <Project />
          </Route>
          <Route exact path="/org/postProject">
            <PostProject />
          </Route>

          <Route exact path="/org/Dashboard">
            <HomePage />
          </Route>
          <Route exact path="/org/Profile">
            <Project />
          </Route>
          <Route exact path="/org/volunteers">
            <Volunteers />
          </Route>
          <Route exact path="/org">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
