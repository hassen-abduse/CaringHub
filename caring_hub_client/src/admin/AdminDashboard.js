import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, ListItem } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Badge from "@material-ui/core/Badge";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

import MainAdminRouter from "./MainAdminRouter";
import User from "./components/User";
import AccountMenu from "./components/AccountMenu";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // logoutUser: () => dispatch(logoutUser()),
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  leftSide: {
    display: "flex",
    flexDirection: "row",
  },
  HeaderIcons: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  decoration: {
    textDecoration: "none",
  },
}));

function AdminDashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="white"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Grid container className={classes.root}>
            <Grid item className={classes.leftSide} style={{}}>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item style={{ display: "flex" }}>
                <Typography
                  style={{
                    fontFamily: "Great Vibes",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="h4"
                  wrap
                >
                  CaringHub
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
            <Grid item style={{ padding: 0, margin: 0 }}>
              <List className={classes.HeaderIcons}>
                {/* <ListItem>
                  <Badge badgeContent={4} color="primary">
                    <MessageRounded />
                  </Badge>
                </ListItem> */}
                <ListItem>
                  <Link to="/admin/applicants">
                    <Badge badgeContent={6} color="secondary">
                      <NotificationImportant />
                    </Badge>
                  </Link>
                </ListItem>
                <ListItem>
                  <AccountMenu />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div>
            <User />
            <Typography>{props.auth.user.username}</Typography>
          </div>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.decoration} to="/admin/dashboard">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.decoration} to="/admin/organizations">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Organizations</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.decoration} to="/admin/projects">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.decoration} to="/admin/applicants">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Applicants</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.decoration} to="/admin/volunteers">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Volunteers</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link className={classes.decoration} to="/admin/skillSets">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Skill sets</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.decoration} to="/admin/evaluationCriterias">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Evaluation criaterias</ListItemText>
            </ListItem>
          </Link>
          <Link className={classes.decoration} to="/admin/causeAreas">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>cause areas</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}>Heefwretrhrewgey</div>
        <MainAdminRouter />
      </main>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
