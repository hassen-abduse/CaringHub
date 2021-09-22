import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate, Row } from "antd";
import Avatar from "../../../volunteer/components/Avatars";
import { Badge, Col } from "antd";
import { Button } from "@material-ui/core";
import { connect } from 'react-redux'
import { deleteProject } from "../../../redux/ActionCreators/projectActions";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const mapStateToProps = (state) => {
  return {
    Projects: state.Projects,
  }
}
const mapDispatchToProps = (dispatch) => ({
  deleteProject: (projectId) => dispatch(deleteProject(projectId)),
})
class VolunteerDetail extends Component {
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
    // 
    return (
      <div style={{ justifyContent: "center" }}>
        <Row>
          <Col>
            <div>
              <div>
                <img
                  style={{
                    borderRadius: "100%",
                    width: "80px",
                    height: "80px",
                  }}
                  alt="projectImage"
                  src={this.props.vol.profilePicture}
                ></img>
              </div>
              <div>
                <h3
                  style={{ marginLeft: "0rem", marginBottom: 0 }}
                  className="h2-heading"
                >
                  {this.props.vol.firstName + ' ' + this.props.vol.lastName}
                </h3>
              </div>
            </div>
          </Col>

          <Col>
            <div>
              <div
                style={{
                  //marginLeft: "3rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* <h4 style={{ marginLeft: "0rem", marginBottom: 0 }}>
                  About The Project
                </h4> */}
                {/* <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                    className=" mb-0 teal"
                  >
                    Project Description :
                  </h6>
                  <span>
                    <Typography style={{ marginTop: "10px" }}>
                      {this.props.project.description.substring(0, 50) + '...'}
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
                    Owner Organization :
                  </h6>
                  <span>
                    <Typography style={{ marginTop: "3px" }}>{this.props.project.ownerOrg.name}</Typography>
                  </span>
                </div> */}
                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className=" mb-0 teal"
                  >
                    Email :
                  </h6>
                  <span>
                    <Typography style={{ marginTop: "3px" }}>{this.props.vol.emailAddress}</Typography>
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
                    Phone :
                  </h6>
                  <span>
                    <Typography style={{ marginTop: "3px" }}>{this.props.vol.phoneNumber}</Typography>
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
                    Location:
                  </h6>
                  <span>
                    <Typography style={{ marginTop: '3px' }}>{this.props.vol.address.city}</Typography>
                  </span>
                </div>

              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="teal">Skills</h4>
            <div style={{ display: "flexStart" }}>
              {this.props.vol.skillSets.map(skill => {
                return (
                  <span
                    style={{ margin: "0.3rem", padding: "0.8rem" }}
                    className="btn-outline-sm "
                  >
                    {skill.name}
                  </span>
                )
              })

              }
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="teal">Causes</h4>
            <div style={{ display: "flexStart" }}>
              {this.props.vol.causeAreas.map(cause => {
                return (
                  <span
                    style={{ margin: "0.3rem", padding: "0.8rem" }}
                    className="btn-outline-sm "
                  >
                    {cause.name}
                  </span>
                )
              })

              }
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                display: "flexEnd",
                //justifyContent: "flex-end",
                //alignSelf:'flex-end',
                marginTop: "10px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: '10px' }}
              >
                {/* <a style={{textDecoration:'none'}} href={`/volunteer/jobDescription/${this.props.project._id}`}>More Details</a> */}
              </Button>
              <Button
                //onClick={()=> this.props.deleteProject(this.props.project._id)}
                variant="contained"
                color="secondary"
              >
                remove
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerDetail);

