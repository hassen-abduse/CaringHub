import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

export default function SkillUpdate() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-primary"
        label="skill name"
        variant="outlined"
        color="primary"
      />
      <TextField
        id="outlined-primary"
        label="skill description"
        variant="outlined"
        color="primary"
      />
    </form>
  );
}
