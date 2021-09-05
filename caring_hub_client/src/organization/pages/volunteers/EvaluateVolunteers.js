import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate, Row } from "antd";
import Avatar from "../../../volunteer/components/Avatars";
import { Badge, Col } from "antd";

import { Button } from "@material-ui/core";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class EvalueateVolunteers extends Component {
  state = {
    value: 0,
    quality: 0,
    communication: 0,
    expertize: 0,
    proffesionalism: 0,
    hireAgain: 0,
  };

  handleRating = () => {
    const {
      quality,
      communication,
      expertize,
      proffesionalism,
      hireAgain,
    } = this.state;
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
                  alt="Image placeholder"
                  src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
                ></img>
              </div>
              <div>
                <h4
                  style={{ marginLeft: "0rem", marginBottom: 0 }}
                  className="h2-heading"
                >
                  Jonathan Peter
                </h4>
                <p
                  style={{ marginLeft: "0rem", color: "#159197" }}
                  className=""
                >
                  Volunteer
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
                  Rate the Volunteer
                </h4>
                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                    className=" mb-0 teal"
                  >
                    Quality :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleQuality}
                      value={quality}
                    />
                    {value ? (
                      <span className="ant-rate-text">{desc[quality - 1]}</span>
                    ) : (
                      ""
                    )}
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
                    Communication :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleCommunication}
                      value={communication}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[communication - 1]}
                      </span>
                    ) : (
                      ""
                    )}
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
                    Expertize :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleExpertize}
                      value={expertize}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[expertize - 1]}
                      </span>
                    ) : (
                      ""
                    )}
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
                    Proffesionalism :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleProffesionalism}
                      value={proffesionalism}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[proffesionalism - 1]}
                      </span>
                    ) : (
                      ""
                    )}
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
                    Hire Again ? :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleHireAgain}
                      value={hireAgain}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[hireAgain - 1]}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
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
                    Rate
                  </Button>
                </div>
              </div>

              {/* <div>
            <div
              style={{
                marginLeft: "3rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 style={{ marginLeft: "0rem", marginBottom: 0 }}>
                Rate the Volunteer
              </h4>
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
            </div>
          </div>
         */}
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

export default EvalueateVolunteers;
