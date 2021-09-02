import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  Box,
  Grid,
  ListItem,
  List,
  Link,
  Icon,
  Drawer,
} from "@material-ui/core";
import Searchbar from "../../components/SearchBar";

// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& li": {
      display: "inline",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Grid container>
            <Grid item>
              <Grid item xs={2}>
                <Typography></Typography>
                <Typography variant="h6" className={classes.title}>
                  CaringHub
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Searchbar />
              </Grid>
            </Grid>

            <Grid item xs></Grid>
            <Grid item>
              <List align="right" display="flex" flexDirection="row">
                <ListItem>
                  <Link
                    style={{ textDecoration: "none", color: "#3c3c3c" }}
                    href="/volunteer"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Notification
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    style={{ textDecoration: "none", color: "#3c3c3c" }}
                    href="/volunteer/findProject"
                    // onClick={(e) => e.preventDefault()}
                  >
                    message
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    style={{ textDecoration: "none", color: "#3c3c3c" }}
                    href="/volunteer/dashboard"
                    // onClick={(e) => e.preventDefault()}
                  >
                    user
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
