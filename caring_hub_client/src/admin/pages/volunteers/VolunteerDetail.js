import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate, Row } from "antd";
import Avatar from "../../../volunteer/components/Avatars";
import { Badge, Col } from "antd";
import { Button } from "@material-ui/core";
import { connect } from 'react-redux'
import { deleteVolunteer } from "../../../redux/ActionCreators/volActions";
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { Slide } from '@material-ui/core';

const mapStateToProps = (state) => {
  return {
    Projects: state.Projects,
  }
}
const mapDispatchToProps = (dispatch) => ({
  deleteVolunteer: (volId) => dispatch(deleteVolunteer(volId)),
})

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class VolunteerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open:false
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    return (
      <div style={{ justifyContent: "center" }}>
        <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        //keepMounted
        onClose={this.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Remove Item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you really want to remove this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>CANCEL</Button>
          <Button onClick={()=> {
              this.props.deleteVolunteer(this.props.vol._id)
              this.handleClose()
            }
            }>REMOVE</Button>
        </DialogActions>
      </Dialog>
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
                  display: "flex",
                  flexDirection: "column",
                }}
              >

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
                <a style={{ textDecoration: 'none' }} href={`/volunteer/dashboard/${this.props.vol._id}`}>More Details</a>
              </Button>
              <Button
                //onClick={()=> this.props.deleteVolunteer(this.props.vol._id)}
                onClick={this.handleClickOpen}
                
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

