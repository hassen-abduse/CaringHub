import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.boxShadow,
  },
  inline: {
    display: "inline",
  },
  my: {
    display: "flex",
    justifyContent: "center",
    padding: "0.75rem",
  },
}));

export default function PopularVolunteers() {
  const classes = useStyles();

  return (
    <Grid>
      <Typography className={classes.my} variant="h5">
        Volunteers
      </Typography>
      <Divider />
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Mehammed Teshome "
            secondary={
              <React.Fragment>
                {
                  "a summar education volunter activiteis for highschool students…"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </Grid>
  );
}
