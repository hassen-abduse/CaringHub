import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../assets/img/2.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const ProjectCard = () => {
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    alt="landing"
                    image={Image}
                    title="Contemplative Reptile"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                        Project |  6-7 days
          </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Environment
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Contribute planting trees organized by green legacy Ethiopia
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    check
        </Button>
                <Button size="small" color="primary">
                    Apply
        </Button>
            </CardActions>
        </Card>
    );
}
