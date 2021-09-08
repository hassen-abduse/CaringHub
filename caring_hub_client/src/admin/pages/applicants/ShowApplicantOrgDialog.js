import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate } from "antd";
import Avatar from "../../../volunteer/components/Avatars";
import { Badge } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class ShowApplicantOrgDialog extends Component {
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
              src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
            ></img>
          </div>
          <div className="col-lg-3">
            <h4
              style={{ marginLeft: "0rem", marginBottom: 0 }}
              className="h2-heading"
            >
              Ethiopian Red Cross Society
            </h4>
            <p style={{ marginLeft: "0rem", color: "#159197" }} className="">
              Organization
            </p>
          </div>
          <h4 className="teal mt-4">Cause Area</h4>
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
        </div>

        <div>
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
                <p>beshirdek@gmail.com</p>
              </div>
              <div style={{ display: "flex" }}>
                <h6
                  style={{
                    marginTop: "3px",
                    marginRight: "10px",
                  }}
                  className=" mb-0 teal"
                >
                  User Name :
                </h6>
                <p>beshir</p>
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
                <p>+251913*******</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowApplicantOrgDialog;
