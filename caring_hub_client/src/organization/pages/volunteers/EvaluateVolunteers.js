import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate } from "antd";
import Avatar from "../../../volunteer/components/Avatars";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class EvalueateVolunteers extends Component {
  state = {
    value: 3,
  };

  handleChange = (value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
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
                Mehammed
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
              Rating :
              <span>
                <Rate
                  tooltips={desc}
                  onChange={this.handleChange}
                  value={value}
                />
                {value ? (
                  <span className="ant-rate-text">{desc[value - 1]}</span>
                ) : (
                  ""
                )}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default EvalueateVolunteers;
