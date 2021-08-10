import React from "react";
import "./index.css";
import Avatar from "../../components/Avatars";
import img from "../../../assets/img/image.jpg";
import ProfessionalExperienceCard from "../../components/ProfessionalExperienceCard";
export default function ReviewApplication() {
  return (
    <>
      <div className="project-application">
        <div className="container-fluid application-flow">
          <div className="container">
            <div className="text-center">
              <h4 className="application-title">Your Application For </h4>
              <h5 className="application-subtitle">
                Flexible Human Resources Support with JewishCare NSW
              </h5>
            </div>
          </div>
        </div>
        <div className="light-bg">
          <div className="application-desc-container">
            <div className="project-application-desc">
              <div className="application-desc">
                <div
                  style={{
                    width: "33%",
                    display: "flex",
                    paddingLeft: "10px",
                  }}
                >
                  <div>
                    <h4 className="app-desc-about-text">About You</h4>
                  </div>
                </div>
                <div
                  style={{
                    width: "67%",
                  }}
                ></div>
              </div>
              <div className="application-desc">
                <div
                  style={{
                    width: "33%",
                    display: "flex",

                    padding: "10px",
                  }}
                >
                  <div>
                    <h5> Project Requirement</h5>
                  </div>
                </div>
                <div style={{ width: "67%", padding: "20px" }}>
                  <p>
                    This project has the following recommended skills and
                    experience:
                  </p>
                  <p>
                    <ul>
                      <li>
                        Experience working in Human Resources in a professional
                        capacity
                      </li>
                      <li>
                        Experience working in Human Resources in a professional
                        capacity
                      </li>
                      <li>
                        Experience working in Human Resources in a professional
                        capacity
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <hr className="caf-my-10"></hr>

              <div className="application-desc">
                <div
                  style={{
                    width: "33%",
                    display: "flex",

                    padding: "10px",
                  }}
                >
                  <div>
                    <h5> Your Profile and Professional Experience</h5>
                  </div>
                </div>

                <div
                  style={{
                    width: "67%",
                    padding: "20px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "25%",
                    }}
                  >
                    <div>
                      <img
                        src={img}
                        style={{
                          borderRadius: "100%",
                          width: "100%",
                          height: "40%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <div
                      style={{
                        lineHeight: "0.25em",
                        fontFamily: "proxima-nova,Helvetica,Arial,sans-serif",
                        fontWeight: "400",
                        color: "#0e1630",
                      }}
                    >
                      <h5>beshir dekebo</h5>
                      <p>Ethiopia, Addis Ababa</p>
                      <hr className="caf-my-10"></hr>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "40px",
                }}
              >
                <div>
                  <ProfessionalExperienceCard />
                </div>
              </div>

              <hr className="caf-my-10"></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
