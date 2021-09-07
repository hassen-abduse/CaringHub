import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

export default function CauseAreaAdd() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-primary"
        label="Cause name"
        variant="outlined"
        color="primary"
      />
      <TextField
        id="outlined-primary"
        label="Cause description"
        variant="outlined"
        color="primary"
      />
    </form>
  );
}
