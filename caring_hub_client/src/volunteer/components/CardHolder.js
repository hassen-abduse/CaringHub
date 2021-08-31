import React from "react";
import Container from "@material-ui/core/Container";
import { ProjectCard } from "./ProjectCard";
import { Grid, Box } from "@material-ui/core";

export default function CardHolder() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
      </Grid>
    </Container>
  );
}
