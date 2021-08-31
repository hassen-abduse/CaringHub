import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "../../assets/img/2.jpg";
import { DescriptionCard } from "./JobDescriptionCard";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ProjectCard = () => {
  const classes = useStyles();

  return (
    // <Card className={classes.root}>
    //   <ButtonBase href="/volunteer/jobDescription">
    //     <CardActionArea>
    //       <CardMedia
    //         className={classes.media}
    //         alt="landing"
    //         image={Image}
    //         title="Contemplative Reptile"
    //       />
    //       <CardContent>
    //         <Typography
    //           gutterBottom
    //           variant="h5"
    //           component="h2"
    //           color="primary"
    //         >
    //           Project | 6-7 days
    //         </Typography>
    //         <Typography gutterBottom variant="h6" component="h2">
    //           Environment
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //           Contribute planting trees organized by green legacy Ethiopia
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </ButtonBase>
    //   <CardActions>
    //     {/* <Button size="small" color="primary">
    //       check
    //     </Button> */}
    //     <Button size="small" color="primary" href="/volunteer/jobDescription">
    //       Check
    //     </Button>
    //   </CardActions>
    // </Card>

    <div class="cards-2 bg-gray">
      <div class="container">
        {/* <div class="row">
            <div class="col-lg-12">
              <h2 style={{ marginBottom: 20 }} class="h2-heading">
                Volunteer the way you want{" "}
              </h2>
              <p class="p-heading">
                We have hundreds of volunteer projects for every skill, time
                commitment, and cause area. Find the one that excites you – and
                complete it virtually.
              </p>
            </div>
          </div> */}
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <img
                style={{ width: "100%", height: "100%" }}
                class="img-fluid"
                src="../../assets/images/childrens.jpg"
                alt="alternative"
              />
              <div class="card-body">
                <p style={{ color: "#0092FF" }} class="testimonial-text">
                  Project | 6-7 days
                </p>
                <div class="testimonial-author">Environment</div>

                <p class="testimonial-text">
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>
                <div>
                  <span class="nav-item">
                    <a class="btn-solid-sm" href="#contact">
                      Check
                    </a>
                  </span>
                </div>
              </div>

              <div class="gradient-floor blue-to-purple"></div>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};
