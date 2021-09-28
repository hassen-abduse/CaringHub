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
    backgroundColor: " #045de9",

    backgroundImage: "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)",

    padding: "12px",
    borderRadius: "10px",
    boxShadow: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "white",
  },
  numbers: {
    fontSize: "3em",
    color: "white",
    fontWeight: "bolder",
  },
  pos: {
    // marginBottom: 12,
    color: "white",
    marginTop: 10,

    fontWeight: "bold",
  },
});

export default function VolunteerNumber() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h1" className={classes.numbers}>
          10
        </Typography>

        <Typography variant="h4" className={classes.pos} color="textSecondary">
          volunteers
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={"/admin/volunteers"}
          size="small"
          style={{ color: "white", fontSize: "1em" }}
        >
          explore Volunteers
        </Button>
      </CardActions>
    </Card>
  );
}
