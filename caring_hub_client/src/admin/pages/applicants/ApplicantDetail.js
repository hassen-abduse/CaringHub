import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import {  Row } from "antd";
import { Col } from "antd";
import { Button } from "@material-ui/core";
import { approveOrg } from "../../../redux/ActionCreators/orgActions";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    Organizations: state.Organizations,
  }
}
const mapDispatchToProps = (dispatch) => ({
  approveOrg: (org) => dispatch(approveOrg(org)),
})
class OrgDetail extends Component {
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
                  src={this.props.org.logo}
                ></img>
              </div>
              <div>
                <h3
                  style={{ marginLeft: "0rem", marginBottom: 0 }}
                  className="h2-heading"
                >
                  {this.props.org.name}
                </h3>
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
                  About The Organization
                </h4>
                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                    className=" mb-0 teal"
                  >
                    Org Mission :
                  </h6>
                  <span>
                    <Typography style={{marginTop:"10px"}}>
                      {this.props.org.mission.substring(0, 50) + '...'}
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
                    Email :
                  </h6>
                  <span>
                    <Typography style={{marginTop: "3px"}}>{this.props.org.emailAddress}</Typography>
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
                    <Typography style={{marginTop: "3px"}}>{this.props.org.phoneNumber}</Typography>
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
                    <Typography style={{marginTop:'3px'}}>{this.props.org.address.city}</Typography>
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
                    Legal Document:
                  </h6>
                  <span>
                    <Typography style={{marginTop:'3px'}}><a href={this.props.org.legalDoc}>Legal Document</a></Typography>
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
                    variant="contained"
                    color="primary"
                    style={{marginRight:'10px'}}
                  >
                    <a style={{textDecoration:'none'}} href={`/organization/dashboard/${this.props.org._id}`}>More Details</a>
                  </Button>
                  <Button
                    onClick={()=> this.props.approveOrg({orgId: this.props.org._id})}
                    variant="contained"
                    color="green"
                    style={{backgroundColor:"green"}}
                  >
                    APPROVE
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgDetail);

