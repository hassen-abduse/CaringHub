import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#6C11E7",
    padding: "12px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  numbers: {
    fontSize: "3em",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProjectNumberCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          projects
        </Typography>
        <Typography variant="h1" className={classes.numbers}>
          100
        </Typography>

        <Typography variant="h4" className={classes.pos} color="textSecondary">
          Projects
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">explore projects</Button>
      </CardActions>
    </Card>
  );
}
