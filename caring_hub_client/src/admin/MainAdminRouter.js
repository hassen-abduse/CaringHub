import React from "react";
import { makeStyles } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Volunteers from "./pages/volunteers/Volunteer";
import Dashboard from "./pages/dashboard/Dashboard";
import Applicants from "./pages/applicants/Applicant";
import Organizations from "./pages/orgs/Organizations";
import Profile from "./pages/profile/Profile";
import Projects from "./pages/projects/Projects";
import CauseAreas from "./pages/CauseArea";
import EvaluationCriterias from "./pages/EvaluationCriterias";
import SkillSets from "./pages/SkillSet";

const useStyles = makeStyles({
  MainPage: {},
  fullList: {
    width: "auto",
  },
});
export default function MainAdminRouter() {
  const classes = useStyles;
  return (
    <Router>
      <div className={classes.MainPage}>
        <Switch>
          <Route exact path="/admin/projects">
            <Projects />
          </Route>
          <Route exact path="/admin/volunteers">
            <Volunteers />
          </Route>
          <Route exact path="/admin/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/admin/profile">
            <Profile />
          </Route>
          <Route exact path="/admin/applicants">
            <Applicants />
          </Route>
          <Route exact path="/admin/organizations">
            <Organizations />
          </Route>
          <Route exact path="/admin/causeAreas">
            <CauseAreas />
          </Route>
          <Route exact path="/admin/skillSets">
            <SkillSets />
          </Route>
          <Route exact path="/admin/evaluationCriterias">
            <EvaluationCriterias />
          </Route>
          <Route exact path="/admin">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
