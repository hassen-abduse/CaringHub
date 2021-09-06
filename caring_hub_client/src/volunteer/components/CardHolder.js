import React from "react";
import Container from "@material-ui/core/Container";
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";

export default function CardHolder({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);
  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((item) => (
          <ProjectCard key={item.imdbID} movie={item} />
        ))}
      </Grid>
    </Container>
  );
}
