import React from "react";
import "./index.css";
import Avatar from "../../components/Avatars";
import img from "../../../assets/img/image.jpg";
import ProfessionalExperienceCard from "../../components/ProfessionalExperienceCard";
export default function ReviewApplication() {
  return (
    <div className="container">
      <div style={{ justifyContent: "center" }} className="row">
        <div
          style={{
            display: "flex",
            marginTop: "100px",
            borderBottom: "1px solid rgba(0,0,0,.1)",
          }}
          className="col-lg-8"
        >
          <div style={{}} className="col-lg-4">
            <p
              style={{
                fontFamily: " museo-slab,Helvetica,Arial,sans-serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                lineHeight: "1.2",
              }}
            >
              Project Requirements
            </p>
          </div>

          <div style={{}} className="col-lg-10">
            <p>
              This project has the following recommended skills and experience
            </p>
            <p>
              <ul style={{ paddingLeft: "1rem" }}>
                <li>
                  Experience working in graphic design in a professional
                  capacity
                </li>
                <li>
                  Experience working in graphic design in a professional
                  capacity
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "50px",
            paddingBottom: "50px",

            borderBottom: "1px solid rgba(0,0,0,.1)",
          }}
          className="col-lg-8"
        >
          <div style={{}} className="col-lg-4">
            <p
              style={{
                fontFamily: " museo-slab,Helvetica,Arial,sans-serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                lineHeight: "1.2",
              }}
            >
              Your Profile
            </p>
          </div>

          <div
            style={{
              display: "flex",
            }}
            className="col-lg-8"
          >
            <div style={{}}>
              <img
                style={{ borderRadius: "100%", width: "80px", height: "80px" }}
                alt="Image placeholder"
                src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
              ></img>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ marginBottom: 0 }}>Beshir Dekebo </p>
              <p>Software Engineer </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "50px",
            borderBottom: "1px solid rgba(0,0,0,.1)",
            display: "flex",
            paddingBottom: "1rem",
            marginBottom: "50px",
          }}
          className="col-lg-8"
        >
          <div style={{}} className="col-lg-4">
            <p
              style={{
                fontFamily: " museo-slab,Helvetica,Arial,sans-serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                lineHeight: "1.2",
              }}
            >
              Experience
            </p>
          </div>

          <div style={{}} className="col-lg-8">
            <p>Professional Experience</p>
            <p>
              <ul style={{ paddingLeft: "1rem" }}>
                <li
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#0e1630",
                  }}
                >
                  Database Analyst
                </li>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Febraury 20 - March 21
                </p>
              </ul>
            </p>
            <a
              style={{ paddingRight: "2rem", paddingLeft: "2rem" }}
              className="btn-outline-sm"
            >
              Edit
            </a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a style={{ marginRight: "10px" }} className="btn-outline-sm">
            Edit Your Profile
          </a>
          <a className="btn-solid-sm">Submit Application</a>
        </div>
      </div>
    </div>
  );
}
