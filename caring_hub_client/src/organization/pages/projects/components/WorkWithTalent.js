import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Img from "../../../../assets/images/icon1.png";
import Icon3 from "../../../../assets/images/icon3.png";
import Icon4 from "../../../../assets/images/icon4.png";
import Icon5 from "../../../../assets/images/icon5.png";
import Icon6 from "../../../../assets/images/icon6.png";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    // backgroundColor:"#e3e3e3"
    paddingLeft: "15px",
    marginTop: "7%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function WorkWithTalent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="How to work with Volunteers"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Connect with a Volunteer community fast and at no cost on CaringHub.
        </Typography>
      </CardContent>

      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
      <div className="container">
        <hr></hr>
        <div className="row">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col-lg-2"
          >
            <img src={Img}></img>
          </div>

          <div className="col-lg-6">
            <p style={{ fontWeight: "500", fontStyle: "bold" }}>
              1. Post a Project
            </p>
            <p>
              What would you like to get done? Make sure you provide enough
              detail for volunteers to identify if it's right for them.
            </p>
          </div>
        </div>

        <hr></hr>
        <div className="row">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col-lg-2"
          >
            <img src={Icon6}></img>
          </div>

          <div className="col-lg-6">
            <p style={{ fontWeight: "500", fontStyle: "bold" }}>
              2. Applicants will apply on your project
            </p>
            <p>
              With a strong Project post, you should receive offers within
              hours. You can always edit your post, Not getting a volunteer? Try
              editing your post.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col-lg-2"
          >
            <img src={Icon3}></img>
          </div>

          <div className="col-lg-6">
            <p style={{ fontWeight: "500", fontStyle: "bold" }}>
              3. Review Applicant Profile
            </p>
            <p>
              Here's your chance to ask questions about Applicant's work
              experience, set expectations for what you need, and discuss terms
              of the engagement.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col-lg-2"
          >
            <img src={Icon4}></img>
          </div>

          <div className="col-lg-6">
            <p style={{ fontWeight: "500", fontStyle: "bold" }}>
              4. Start Working on your Project and Rate Volunteers.
            </p>
            <p>
              Once you both are interested in the offers, you can start working
              on your projects and then rate a volunteer.
            </p>
          </div>
        </div>
      </div>
      {/* </Collapse> */}
    </Card>
  );
}
