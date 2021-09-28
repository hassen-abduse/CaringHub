import React from "react";
import Container from "@material-ui/core/Container";
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";

export default function CardHolder({ results }) {
  return (
    <Container className="container">
      <Grid
        container
        spacing={3}
        style={{ justifyContent: "center", margin: 0 }}
      >
        {results.map((item) => (
          <ProjectCard key={item._id} project={item} />
        ))}
      </Grid>
    </Container>
  );
}
