import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate } from "antd";
import Avatar from "../../../volunteer/components/Avatars";
import { Badge } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class ShowVolunteersDialog extends Component {
  state = {
    value: 3,
  };

  handleChange = (value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "450px" }}>
          <div className="col-lg-1 pr-2">
            <img
              style={{ borderRadius: "100%", width: "80px", height: "80px" }}
              alt="Image placeholder"
              src={this.props.applicant.profilePicture ? this.props.applicant.profilePicture : "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"}
            ></img>
          </div>
          <div className="col-lg-3">
            <h4
              style={{ marginLeft: "0rem", marginBottom: 0 }}
              className="h2-heading"
            >
              {this.props.applicant.firstName + ' ' + this.props.applicant.lastName}
            </h4>
            <p style={{ marginLeft: "0rem", color: "#159197" }} className="">
              Volunteer
            </p>
          </div>
          <h4 className="teal mt-4">Skills</h4>
          <div style={{ display: "flexStart" }}>
            {

              this.props.applicant.skillSets.map(skill => {
                return <span
                  style={{ margin: "0.3rem", padding: "0.8rem" }}
                  className="btn-outline-sm "
                >
                  {skill.name}
                </span>
              })
          
           }
           </div>
        </div>

        <div>
          <div>
            <div style={{ paddingLeft: "3rem" }} className="">
              <div style={{ display: "flex" }}>
                <p className="m-0">Accomplishments : </p>

                <Badge
                  // className="site-badge-count-109"
                  count={2}
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "#159197",
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <p className="m-0">Status : </p>
                <p className="teal m-0" style={{ paddingLeft: "5px" }}>
                  Ready To Volunteer
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="m-0">Rating : </p>
                <Rate
                  style={{ paddingLeft: "10px" }}
                  disabled
                  defaultValue={2}
                />
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                marginLeft: "3rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 style={{ marginTop: "3rem" }} className="teal ">
                Contact Address
              </h4>
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
                <p>{this.props.applicant.emailAddress}</p>
              </div>
              <div style={{ display: "flex" }}>
                <h6
                  style={{
                    marginTop: "3px",
                    marginRight: "10px",
                  }}
                  className="mb-0 teal"
                >
                  Phone Number :
                </h6>
                <p>{this.props.applicant.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowVolunteersDialog;
