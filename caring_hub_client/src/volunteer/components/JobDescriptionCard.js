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
import CardHolder from "./CardHolder";

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
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div className="container">
        <div>
          <a className="btn-solid-sm" href="/volunteer/findProject">
            back to all projects
          </a>
        </div>
        <div>
          <div>
            <h2>AdisKetema Primary school</h2>
            <p>
              <span className="p-heading">
                AdisKetema primary school needs to teach children aged between
                6-14 years. Typical subjects taught include English
                (Conversational and Written), Maths, Geography, and General
                Knowledge. AdisKetema primary school needs to teach children
                aged between 6-14 years. Typical subjects taught include English
                (Conversational and Written), Maths, Geography, and General
                Knowledge.
              </span>
            </p>
          </div>
          <div class="container">
            <div class="row">
              <div style={{ padding: 0 }} class="col-lg-6 col-xl-6">
                <div class="image-container">
                  <img class="img-fluid" src={Image} alt="alternative" />
                </div>
              </div>

              <div class="col-lg-6 col-xl-6">
                <div style={{ marginTop: "1rem" }} class="text-container">
                  <h2>Causes</h2>

                  <a style={{ margin: "5px" }} class="btn-outline-sm" href="#">
                    education
                  </a>
                  <h2>Skills</h2>
                  <a style={{ margin: "5px" }} class="btn-outline-sm" href="#">
                    social work
                  </a>
                  <a style={{ margin: "5px" }} class="btn-outline-sm" href="#">
                    teaching
                  </a>
                  <p>Posted : May 21 2021</p>
                  <a style={{ margin: "5px" }} class="btn-solid-reg" href="#">
                    Apply
                  </a>
                </div>
              </div>
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
        </div>
        <div style={{ paddingTop: "5.0rem " }} class="cards-2 bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="h2-heading">Related Projects</h2>
                <p class="p-heading">
                  We have hundreds of volunteer projects for every skill, time
                  commitment, and cause area. Find the one that excites you –
                  and complete it virtually.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CardHolder />

        <div class="cards-2 bg-gray">
          <div class="container">
            {/* <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Susane Blake</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
                <div class="gradient-floor purple-to-green"></div>
              </div> */}
            <div>
              <a class="btn-solid-lg" href="#contact">
                Browse All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
