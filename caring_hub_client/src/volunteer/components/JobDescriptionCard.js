import React from "react";
import Typography from "@material-ui/core/Typography";
import Image from "../../assets/img/2.jpg";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid, Box } from "@material-ui/core";
import { ProjectCard } from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const DescriptionCard = () => {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: "100px" }}>
      <div>
        <div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFDB15" }}
            href="/volunteer/findProject"
          >
            back to all projects
          </Button>
        </div>
        <Container>
          <div>
            <h3>
              AdisKetema Primary school needs a free volunteer service to teach
              and support students
            </h3>
            <h4>
              <span>
                AdisKetema primary school needs to teach children aged between
                6-14 years. Typical subjects taught include English
                (Conversational and Written), Maths, Geography, and General
                Knowledge.
              </span>
            </h4>
          </div>
          <div className="description" style={{ display: "flex" }}>
            <div style={{ width: "40%", height: "40%" }}>
              <div>
                <img src={Image} width="100%" height="40%" />
              </div>
            </div>
            <div
              style={{
                marginLeft: "20px",
                paddingLeft: "20px",
              }}
            >
              <h1>Causes</h1>
              <Button variant="contained" color="primary" size="small">
                Education
              </Button>
              <h1>Skills</h1>
              <Button variant="contained" color="primary" size="small">
                social work
              </Button>{" "}
              &nbsp;
              <Button variant="contained" color="primary" size="small">
                teaching
              </Button>
              <h1>Posted : May 21 2020</h1>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFDB15" }}
                href="/volunteer/reviewApplication"
              >
                Apply
              </Button>
            </div>
          </div>
          <div
            className="project-detail"
            style={{
              backgroundColor: "#DCECF6",
              padding: "33px",
              marginTop: "33px",
            }}
          >
            <h2>Project Detail</h2>
            <p>
              Education volunteers help on a range of programmes that improve
              education practices and processes. The work undertaken by
              education volunteers continues long after the volunteer has left,
              improving the learning of thousands of children. As we work to
              improve education at all levels, we need volunteers from a range
              of education backgrounds.
            </p>
            <h2>Additional Detail</h2>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
          </div>
        </Container>
        <div
          className="other-jobs-card"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Container>
  );
};
