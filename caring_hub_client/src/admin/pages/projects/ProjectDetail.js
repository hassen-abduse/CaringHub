import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate, Row } from "antd";
import Avatar from "../../../volunteer/components/Avatars";
import { Badge, Col } from "antd";

import { Button } from "@material-ui/core";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class ProjectDetail extends Component {
  state = {
    value: 0,
    quality: 0,
    communication: 0,
    expertize: 0,
    proffesionalism: 0,
    hireAgain: 0,
  };

  handleRating = () => {
    const { quality, communication, expertize, proffesionalism, hireAgain } =
      this.state;
    let value =
      (quality + communication + expertize + proffesionalism + hireAgain) / 5;
    this.setState({ value });
  };
  handleQuality = (quality) => {
    this.setState({ quality });
  };
  handleCommunication = (communication) => {
    this.setState({ communication });
  };
  handleExpertize = (expertize) => {
    this.setState({ expertize });
  };
  handleProffesionalism = (proffesionalism) => {
    this.setState({ proffesionalism });
  };
  handleHireAgain = (hireAgain) => {
    this.setState({ hireAgain });
  };

  render() {
    const {
      value,
      quality,
      communication,
      expertize,
      proffesionalism,
      hireAgain,
    } = this.state;
    return (
      <div style={{ justifyContent: "center" }}>
        <Row>
          <Col span="8">
            <div>
              <div>
                <img
                  style={{
                    borderRadius: "100%",
                    width: "80px",
                    height: "80px",
                  }}
                  alt="projectImage"
                  src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
                ></img>
              </div>
              <div>
                <h4
                  style={{ marginLeft: "0rem", marginBottom: 0 }}
                  className="h2-heading"
                >
                  Project Name
                </h4>
                <p
                  style={{ marginLeft: "0rem", color: "#159197" }}
                  className=""
                >
                  Category: educational
                </p>
                <span style={{ marginTop: "0px" }}>
                  <Rate disabled={true} tooltips={desc} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
          </Col>

          <Col>
            <div>
              <div
                style={{
                  marginLeft: "3rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h4 style={{ marginLeft: "0rem", marginBottom: 0 }}>
                  About The Project
                </h4>
                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                    className=" mb-0 teal"
                  >
                    Project Topic :
                  </h6>
                  <span>
                    <Typography>
                      teachin summer course for highschool students
                    </Typography>
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className=" mb-0 teal"
                  >
                    Posted Date :
                  </h6>
                  <span>
                    <Typography>september 10</Typography>
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className="mb-0 teal"
                  >
                    Needed Skills :
                  </h6>
                  <span>
                    <Typography>programming and tech</Typography>
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className="mb-0 teal"
                  >
                    Deadline :
                  </h6>
                  <span>
                    <Typography>October 20</Typography>
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className="mb-0 teal"
                  >
                    Needeed Volunteer:
                  </h6>
                  <span>100</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    onClick={this.handleRating}
                    variant="contained"
                    color="primary"
                  >
                    see project
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="teal mt-4">Skills</h4>
            <div style={{ display: "flexStart" }}>
              <span
                style={{ margin: "0.3rem", padding: "0.8rem" }}
                className="btn-outline-sm "
              >
                Software Engineering
              </span>
              <span
                style={{ margin: "0.3rem", padding: "0.8rem" }}
                className="btn-outline-sm"
              >
                Socail Work
              </span>
              <span
                style={{ margin: "0.3rem", padding: "0.8rem" }}
                className="btn-outline-sm"
              >
                Teaching
              </span>
              <span
                style={{ margin: "0.3rem", padding: "0.8rem" }}
                className="btn-outline-sm"
              >
                Blood Donation
              </span>
              <span
                style={{ margin: "0.3rem", padding: "0.8rem" }}
                className="btn-outline-sm"
              >
                Project Manager
              </span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProjectDetail;
