import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { useLocation } from "react-router";
import Header from "./Header";
import jwtDecode from "jwt-decode";
import Footer from "../home/Footer";
import Dashboard from "../volunteer/pages/dashboard/Dashboard";
import FindProject from "../volunteer/pages/find-project/FindProject";
import ReviewApplication from "../volunteer/pages/review-application/ReviewApplication";
import DescriptionCard from "../volunteer/components/JobDescriptionCard";
import Home from "../home/Home";
import Landing from "../volunteer/pages/landing/Landing";
import { fetchApplications } from "../redux/ActionCreators/appActions";
import { loginUser, logoutUser } from "../redux/ActionCreators/authActions";
import { fetchCauses } from "../redux/ActionCreators/causeActions";
import { fetchHelps } from "../redux/ActionCreators/helpActions";
import { fetchOrgs } from "../redux/ActionCreators/orgActions";
import { fetchProjects } from "../redux/ActionCreators/projectActions";
import { fetchSkills } from "../redux/ActionCreators/skillActions";
import { fetchUsers } from "../redux/ActionCreators/userActions";
import { fetchVolunteers } from "../redux/ActionCreators/volActions";

import SelectRegistrationType from "../registration/SelectRegistrationType";
import Login from "./Login";
import PostProject from "../organization/pages/post-project/PostProject";
import VolunteerRegistration from "../registration/VolunteerRegistration";
import OrganizationRegistration from "../registration/OrganizationRegistration";

import Profile from "../organization/pages/profile/Profile";
import OrganizationHeader from "../organization/components/OrganizationHeader";
import Volunteers from "../organization/pages/volunteers/Volunteers";
import Project from "../organization/pages/projects/Project";
import Applicants from "../organization/pages/applicants/Applicant";
import VolunteerHeader from "../volunteer/components/VolunteerHeader";
import AppBar from "../home/AppBar";
import FouroFour from "./FouroFour";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    Organizations: state.Organizations,
    Volunteers: state.Volunteers,
    Applications: state.Applications,
    HelpRequests: state.HelpRequests,
    Users: state.Users,
    Skills: state.Skills,
    Causes: state.Causes,
    Projects: state.Projects,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchApplications: () => dispatch(fetchApplications()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchCauses: () => dispatch(fetchCauses()),
  fetchSkills: () => dispatch(fetchSkills()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchOrgs: () => dispatch(fetchOrgs()),
  fetchVolunteers: () => dispatch(fetchVolunteers()),
  fetchHelps: () => dispatch(fetchHelps()),
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchApplications();
    this.props.fetchCauses();
    this.props.fetchOrgs();
    this.props.fetchHelps();
    this.props.fetchSkills();
    this.props.fetchUsers();
    this.props.fetchVolunteers();
    this.props.fetchProjects();
  }

  render() {
    const route = window.location.pathname;
    const decoded = this.props.auth.token
      ? jwtDecode(this.props.auth.token)
      : { role: "" };
    return (
      <React.Fragment>
        {route !== "/login" && <AppBar />}
        <div>
          <Switch>
            <Route exact path="/index">
              <Home />
            </Route>

            <Route exact path="/register">
              <SelectRegistrationType />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/volunteerRegistration">
              <VolunteerRegistration />
            </Route>

            <Route exact path="/organizationRegistration">
              <OrganizationRegistration />
            </Route>

            <Route exact path="/organization/dashboard/:orgId">
              <Profile />
            </Route>
            <Route exact path="/volunteer/dashboard/:volId">
              <Dashboard />
            </Route>

            {decoded.role === "Vol" && (
              <>
                <Route exact path="/">
                  <Landing />
                </Route>
                <Route exact path="/volunteer/findProject">
                  <FindProject />
                </Route>
                <Route exact path="/volunteer/reviewApplication">
                  <ReviewApplication />
                </Route>
                <Route exact path="/volunteer/jobDescription/:id">
                  <DescriptionCard />
                </Route>
              </>
            )}

            {decoded.role === "Org" && (
              <>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/organization/postProject">
                  <PostProject />
                </Route>
                <Route exact path="/organization/volunteers">
                  <Volunteers />
                </Route>
                <Route exact path="/organization/projects">
                  <Project />
                </Route>
                <Route exact path="/organization/applicants">
                  <Applicants />
                </Route>
              </>
            )}

            <Route path="*">
              <FouroFour />
            </Route>
            <Redirect to="/index" />
          </Switch>
        </div>
        {route !== "/login" && <Footer />}
      </React.Fragment>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
