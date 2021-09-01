import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "../../../../assets/img/1.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const NewProject = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ButtonBase href="/volunteer/jobDescription">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            alt="landing"
            image={Image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
            >
              Project | 6-7 days
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              Environment
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Contribute planting trees organized by green legacy Ethiopia
            </Typography>
          </CardContent>
        </CardActionArea>
      </ButtonBase>
      <CardActions>
        <Grid container>
          <Grid item>
            <Button
              size="small"
              color="primary"
              href="/volunteer/jobDescription"
            >
              New
            </Button>
            <Button
              size="small"
              color="primary"
              href="/volunteer/jobDescription"
            >
              Share
            </Button>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="Primary"
              className={classes.button}
              startIcon={<EditIcon fontSize="small" />}
            >
              Edit
            </Button>
            <IconButton
              edge="end"
              aria-label="delete"
              // onClick={handleClickOpen()}
            >
              <DeleteIcon />
            </IconButton>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
