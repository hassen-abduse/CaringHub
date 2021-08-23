import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter, Router } from 'react-router-dom'
//material ui imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SignUp from "../Roles/common/SignUp";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../volunteer/pages/dashboard/Dashboard";
import FindProject from "../volunteer/pages/find-project/FindProject";
import ReviewApplication from "../volunteer/pages/review-application/ReviewApplication";
import { DescriptionCard } from "../volunteer/components/JobDescriptionCard";
import Landing from "../volunteer/pages/landing/Landing";
import { fetchApplications } from '../redux/ActionCreators/appActions'
import { loginUser, logoutUser } from '../redux/ActionCreators/authActions'
import { fetchCauses } from '../redux/ActionCreators/causeActions'
import { fetchHelps } from '../redux/ActionCreators/helpActions'
import { fetchOrgs } from '../redux/ActionCreators/orgActions'
import { fetchProjects } from '../redux/ActionCreators/projectActions'
import { fetchSkills } from '../redux/ActionCreators/skillActions'
import { fetchUsers } from '../redux/ActionCreators/userActions'
import { fetchVolunteers } from '../redux/ActionCreators/volActions'


const mapStateToProps = state => {
    return {
        auth: state.auth,
        Organizations: state.Organizations,
        Volunteers: state.Volunteers,
        Applications: state.Applications,
        HelpRequests: state.HelpRequests,
        Users: state.Users,
        Skills: state.Skills,
        Causes: state.Causes,
        Projects: state.Projects
    }
}

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
    fetchHelps: () => dispatch(fetchHelps())

})

class Main extends Component {
    componentDidMount() {
        this.props.fetchApplications()
        this.props.fetchCauses()
        this.props.fetchOrgs()
        this.props.fetchHelps()
        this.props.fetchSkills()
        this.props.fetchUsers()
        this.props.fetchVolunteers()
        this.props.fetchProjects()
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />

                {/* <Landing maxWidth="sm">
              <Typography
                component="div"
                style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
              />
            </Landing>  */}
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
                <Footer />
            </React.Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
