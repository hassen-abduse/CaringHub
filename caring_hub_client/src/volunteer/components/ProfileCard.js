import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate } from "antd";
import Avatar from "./Avatars";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class ProfileCard extends Component {
  state = {};
  render() {
    return (
      <Container style={{ marginTop: "100px" }}>
        <Grid
          container
          className="graybg top_60 p_30  "
          style={{ backgroundColor: "#e3e3e3", padding: "15px" }}
        >
          <Grid container item xs={6}>
            <Grid item xs={2}>
              <Avatar />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className="user-name">
                Beshir Dekebo
              </Typography>
              <Typography variant="caption" className="user-type">
                Volunteer
              </Typography>
              <Typography variant="caption" className="location">
                Addis Ababa,Ethiopia
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1} alignContent="flex-end">
            <Divider orientation="vertical" variant="fullWidth" />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body2" className="skill_description">
              Total Impact:
            </Typography>
            <Typography variant="body2" className="skill_description">
              Status: Ready To Volunteer
            </Typography>
            <Typography variant="body2" className="skill_description">
              Rating :<Rate disabled defaultValue={4} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ProfileCard;
