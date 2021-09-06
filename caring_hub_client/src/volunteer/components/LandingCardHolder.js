import React from "react";
import Container from "@material-ui/core/Container";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "../../redux/ActionCreators/projectActions";
import { Grid, Box } from "@material-ui/core";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    Projects: state.Projects
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects())
})
function LandingCardHolder(props) {
  return (
    <Container>
      <Grid container spacing={2}>
        {props.Projects.projects.map((item) => (
          <Grid item md={4}>
            <ProjectCard key={item._id} project={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingCardHolder)
