import React, { Component } from "react";
import { Badge, Rate } from "antd";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "100px" }} className="container">
        <div style={{}} className="row">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col-lg-1"
          >
            <img
              style={{ borderRadius: "100%", width: "80px", height: "80px" }}
              alt="Image placeholder"
              src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
            ></img>
          </div>
          <div className="col-lg-3">
            <h4 style={{ marginBottom: 0 }}>Ethiopian Red Cross Society</h4>
            <p style={{ color: "#159197" }} className="">
              Organization
            </p>
          </div>
          <div
            style={{
              display: "flex",
              boxShadow: "0px 40px 200px -1px rgb(0 0 0 / 10%)",
              border: " 1px solid rgba(0,0,0,.125)",
              // backgroundColor: "red",
              borderRadius: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-lg-3"
          >
            <a style={{ textDecoration: "none" }} href="">
              <div className="m-2">
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    lineHeight: 1,
                  }}
                  className="mb-1 teal mt-1 text-center"
                >
                  0
                </p>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="m-0 p-0 text-center "
                >
                  New Project
                </p>
              </div>
            </a>
            <a style={{ textDecoration: "none" }} href="">
              <div className="m-2">
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    lineHeight: 1,
                  }}
                  className="mb-1 teal mt-1 text-center"
                >
                  3
                </p>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="m-0 p-0 text-center "
                >
                  InProgress
                </p>
              </div>
            </a>
            <a style={{ textDecoration: "none" }} href="">
              <div className=" m-2">
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    lineHeight: 1,
                  }}
                  className="mb-1 teal mt-1 text-center"
                >
                  4
                </p>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="m-0 p-0 text-center "
                >
                  Completed
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div style={{}} class="col-lg-4">
            <h4 className="teal ">Essentials</h4>
            <h6 className="mt-4 mb-0 teal">Email</h6>
            <p>beshirdek@gmail.com</p>
            <h6 className="mt-4 mb-0 teal">User Name</h6>
            <p>beshir</p>

            <h6 className="mt-4 mb-0 teal">Phone Number</h6>
            <p>+251913*******</p>
          </div>
          <div style={{}} class="col-lg-4">
            <h4 className="teal">Organization Detail</h4>

            <p className="">
              I have worked and am workgin on a lot of projects in different
              areas of types of projects and scales. I have worked and am
              workgin on a lot of projects in different areas of types of
              projects and scales.
            </p>

            <h4 className="teal mt-4">Cause Areas</h4>
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
          <div style={{}} class="col-lg-4">
            <h4 className="teal">Location</h4>

            <h6 className="teal">Address</h6>
            <p className="m-0">Shegole</p>
            <p className="m-0">Addis Ababa</p>
            <p className="m-0">Ethiopia</p>

            <h6 className="teal mt-4">Time Zone</h6>
            <p className="m-0"> East African Time Zone </p>
            <p>UTC + 3:00</p>

            <h4 className=" mt-5 teal">Files</h4>
            <p className="m-0">document.pdf</p>
            <p className="m-0">Professional License.pdf</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
