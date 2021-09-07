import React, { useState } from "react";
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
import { Grid, ListItem, Link } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Badge from "@material-ui/core/Badge";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MessageRounded from "@material-ui/icons/MessageRounded";
import NotificationImportant from "@material-ui/icons/NotificationImportant";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";
import Admin from "./components/Admin";
import { blue } from "@material-ui/core/colors";
import Multiselect from "multiselect-react-dropdown";
import MainAdminRouter from "./MainAdminRouter";
import User from "./components/User";
import AccountMenu from "./components/AccountMenu";

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
    justifyContent: "flex-end",
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
}));

export default function AdminDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
        color="default"
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
              <Grid item>
                <Typography variant="h3" wrap>
                  CaringHub
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
            <Grid item style={{ padding: 0, margin: 0 }}>
              <List className={classes.HeaderIcons}>
                <ListItem>
                  <Badge badgeContent={4} color="primary">
                    <MessageRounded />
                  </Badge>
                </ListItem>
                <ListItem>
                  <Link href="/org/applicants">
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
            <Typography>Admin Dashboard</Typography>
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
          <Link href="/admin/dashboard">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
          </Link>
          <Link href="/admin/organizations">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Organizations</ListItemText>
            </ListItem>
          </Link>
          <Link href="/admin/projects">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItem>
          </Link>
          <Link href="/admin/applicants">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Applicants</ListItemText>
            </ListItem>
          </Link>
          <Link href="/admin/volunteers">
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
          <Link href="/admin/skillSets">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Skill sets</ListItemText>
            </ListItem>
          </Link>
          <Link href="/admin/evaluationCriterias">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Evaluation criaterias</ListItemText>
            </ListItem>
          </Link>
          <Link href="/admin/causeAreas">
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
        <div className={classes.drawerHeader}>Hey</div>
        <MainAdminRouter />
      </main>
    </div>
  );
}