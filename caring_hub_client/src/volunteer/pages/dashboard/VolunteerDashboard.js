import React from "react";

import { CircularProgress, Container } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Badge, Rate } from "antd";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { baseUrl } from "../../../redux/shared/baseUrl";

import jwtDecode from "jwt-decode";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

function VolunteerDashboard(props) {
  const decoded = props.auth.token
    ? jwtDecode(props.auth.token)
    : { role: "", _id: "" };

  const { volId } = useParams();

  const [volunteer, setVolunteer] = useState({ skillSets: [], address: {} });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(async () => {
    fetch(baseUrl + "volunteers/" + volId)
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              "Error " + response.status + ":" + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          const errorM = new Error(error.message);
          throw errorM;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        setVolunteer(response);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoaded(true);
      });
  }, []);
  if (error)
    return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Alert style={{ margin: "50px", padding: "50px" }} severity="error">
              <AlertTitle style={{ fontWeight: "bold" }}>Error</AlertTitle>
              <strong>{error}</strong>
            </Alert>
          </div>
        </div>
      </Container>
    );
  else if (!isLoaded)
    return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div class="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
                marginBottom: "75px",
              }}
            >
              <CircularProgress size={"50px"} />
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Loading...
            </p>
          </div>
        </div>
      </Container>
    );
  else
    return (
      <div style={{ marginTop: "100px" }} className="container">
        <div style={{}} className="row">
          <div className="col-lg-1 pr-2">
            <img
              style={{ borderRadius: "100%", width: "80px", height: "80px" }}
              alt="Image placeholder"
              src={
                volunteer.profilePicture
                  ? volunteer.profilePicture
                  : "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
              }
            ></img>
          </div>
          <div className="col-lg-3">
            <h4
              style={{ marginLeft: "1rem", marginBottom: 0 }}
              className="h2-heading"
            >
              {volunteer.firstName + " " + volunteer.lastName}
            </h4>
            <p style={{ marginLeft: "1rem", color: "#159197" }} className="">
              Volunteer
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
                  Completed
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
                  2
                </p>
                <p
                  style={{ fontSize: "0.7rem" }}
                  className="m-0 p-0 text-center "
                >
                  Applied
                </p>
              </div>
            </a>
          </div>

          <div style={{ paddingLeft: "3rem" }} className="col-lg-4 pl-5">
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
              <Rate style={{ paddingLeft: "10px" }} disabled defaultValue={2} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div style={{}} class="col-lg-4">
            <h4 className="teal ">Essentials</h4>
            <h6 className="mt-4 mb-0 teal">Email</h6>
            <p>{volunteer.emailAddress}</p>
            <h6 className="mt-4 mb-0 teal">User Name</h6>
            <p>{volunteer.username}</p>

            <h6 className="mt-4 mb-0 teal">Phone Number</h6>
            <p>{volunteer.phoneNumber}</p>

            <h6 className="mt-4 mb-0 teal">My Resume</h6>
            <a type="application/pdf" href={volunteer.resume}>
              My Resume
            </a>
          </div>
          <div style={{}} class="col-lg-4">
            <h4 className="teal">Background</h4>

            <p className="">
              I have worked and am workgin on a lot of projects in different
              areas of types of projects and scales. I have worked and am
              workgin on a lot of projects in different areas of types of
              projects and scales.
            </p>

            <h4 className="teal mt-4">Skills</h4>
            <div style={{ display: "flexStart" }}>
              {volunteer.skillSets.map((skill) => {
                return (
                  <span
                    style={{ margin: "0.3rem", padding: "0.8rem" }}
                    className="btn-outline-sm "
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div style={{}} class="col-lg-4">
            <h4 className="teal">Location</h4>

            <h6 className="teal">Address</h6>
            <p className="m-0">{volunteer.address.city}</p>
            <p className="m-0">Ethiopia</p>

            <h6 className="teal mt-4">Time Zone</h6>
            <p className="m-0"> East African Time Zone </p>
            <p>UTC + 3:00</p>

            <h4 className=" mt-5 teal">Languages</h4>
            <p className="m-0">English</p>
          </div>
        </div>
        {decoded._id === volId && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <Link to={`/volunteer/editProfile/${decoded._id}`}>
              <span className="text-center btn-outline-sm">Edit Profile</span>
            </Link>
          </div>
        )}
      </div>
    );
}
export default connect(mapStateToProps)(VolunteerDashboard);
