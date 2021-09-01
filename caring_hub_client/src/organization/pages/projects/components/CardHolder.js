import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ProjectCard } from "./ProjectCard";
import { Grid, Button, Paper, Divider } from "@material-ui/core";
import {
  createTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import { green, purple } from "@material-ui/core/colors";
import { ProgressProject } from "./ProgressProject";
import { NewProject } from "./NewProject";

const useStyles = makeStyles({
  Header: {
    display: "flex",
  },
});
export default function CardHolder() {
  const classes = useStyles();
  return (
    <Grid Container className={classes.root}>
      <Grid item className={classes.Header}>
        <Grid container>
          <Grid item>
            <h1>Our Projects</h1>
          </Grid>
          <Grid item xs></Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              create project
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid item className={classes.Projects} spacing={2}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <ProgressProject />
          </Grid>
          <Grid item xs={12} md={3}>
            <ProgressProject />
          </Grid>
          <Grid item xs={12} md={3}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <NewProject />
          </Grid>
          <Grid item xs={12} md={3}>
            <NewProject />
          </Grid>
          <Grid item xs={12} md={3}>
            <ProjectCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
