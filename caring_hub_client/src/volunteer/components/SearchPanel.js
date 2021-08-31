import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box, Grid, ListItem, List, Link } from "@material-ui/core";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& li": {
      display: "inline",
    },
    "@media (min-width=600px)": {},
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  lists: {
    padding: 16,
    borderLeft: "solid 1px #e3e3e3",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 !important",
            minHeight: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "20px!important",
              margin: "0 !important",
            }}
          >
            <List>
              <ListItem>Discover</ListItem>
              <ListItem className={classes.lists}>Find Project</ListItem>
              <ListItem className={classes.lists}>My Dashboard</ListItem>
              <ListItem className={classes.lists}>My Dashboard</ListItem>
              <ListItem className={classes.lists}>My Dashboard</ListItem>
            </List>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
