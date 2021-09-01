import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import ProjectNumberCard from "./components/ProjectNumberCard";
import VolunteerNumber from "./components/VolunteerNumber";
import ApplicantNumberCard from "./components/ApplicantNumberCard";
import PopularVolunteers from "./components/PopularVolunteers";
import PopularProjects from "./components/PopularProjects";
import CompletedProjects from "./components/CompletedProjects";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  numbers: {},
  Populars: {
    display: "flex",
    marginTop: "24px",
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.Numbers}>
        <Paper>
          <Grid container spacing={2}>
            <Grid md={6} xs={12} item>
              <ProjectNumberCard />
            </Grid>

            <Grid md={6} xs={12} item>
              <VolunteerNumber />
            </Grid>

            <Grid md={6} xs={12} item>
              <ApplicantNumberCard />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Grid container className={classes.Populars} spacing={2}>
          <Grid md={4} xs={12} item className={classes.PopularProjects}>
            <Paper>
              <PopularVolunteers />
            </Paper>
          </Grid>
          <Grid md={4} xs={12} item className={classes.PopularVolunteers}>
            <Paper>
              <PopularProjects />
            </Paper>
          </Grid>
          <Grid md={4} xs={12} item className={classes.PopularProjects}>
            <Paper>
              <CompletedProjects />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
