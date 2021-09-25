import React from "react";
import { Box } from "@material-ui/core";
import landingImg from "../../assets/img/landingImg.svg";

import LandingCardHolder from "./LandingCardHolder";
import { Link } from "react-router-dom";

export default function LandingHeroBox() {
  return (
    <Box>
      <div style={{ position: "relative" }}>
        <div
          id="features"
          class="accordion-hero"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            backgroundColor: "#0F5ACA",
          }}
        ></div>

        <div
          class="container"
          style={{
            position: "absolute",
            top: "30%",
            left: "5%",
            color: "white",
          }}
        >
          <div
            class="row"
            style={{
              display: "block",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div class="col-xl-12" style={{ justifyContent: "center" }}>
              <h2 class="h2-heading" style={{ color: "white" }}>
                {" "}
                Volunteering your skills is an excellent way to directly support
                nonprofits and the communities they serve.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="basic-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-5">
              <div class="image-container">
                <img
                  style={{
                    maxWidth: "",
                    maxHeight: "450px",
                    paddingRight: "20px",
                  }}
                  class="img-fluid"
                  src={landingImg}
                  alt="alternative"
                />
              </div>
            </div>

            <div class="col-lg-6 col-xl-7">
              <div style={{ marginTop: "1rem" }} class="text-container">
                <div class="section-title">Discover Projects</div>
                <h2>Find organizations that need your help</h2>
                <p>
                  There are many ways to volunteer, so we're glad you chose us!
                  Welcome to your home base for skills-based, volunteer
                  opportunities. We believe nonprofit staff are in the best
                  position to decide what support their organization needs.
                  Volunteering in your local community is important, and we
                  always encourage community service! That said, there are
                  nonprofits all over the Ethiopia and beyond that are great
                  places to volunteer and could use your volunteer hours.
                </p>
                <Link class="btn-outline-reg" to="/volunteer/findProject">
                  See available projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="features" class="accordion-1">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <h2 class="h2-heading"> Did You Know?</h2>
              <p class="p-heading">
                Volunteering your skills is an excellent way to directly support
                nonprofits and the communities they serve.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-5">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <div class="accordion-icon blue">
                    <span class="fas fa-graduation-cap"></span>
                  </div>
                  <div class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Range of Skills and Experience
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Our volunteers represent a wide range of backgrounds and
                      experience – from college students to retired
                      professionals, and everything in between. There is a
                      project here for you.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-icon blue">
                    <span class="fas fa-handshake"></span>
                  </div>
                  <div class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Lasting Connections
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Many volunteers stay in contact with nonprofits after
                      projects are completed as trusted advisors, advocates, and
                      even board members. We love hearing about these
                      long-lasting relationships!
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-icon purple">
                    <span class="fas fa-chart-line"></span>
                  </div>
                  <div class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Skill Building
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Volunteering is one of the best ways to develop your
                      skills, expand your experience, and get references to help
                      you advance to the next level in your career. There is so
                      much to gain when you give.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <div class="accordion-icon blue">
                    <span class="fas fa-graduation-cap"></span>
                  </div>
                  <div class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Range of Skills and Experience
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Our volunteers represent a wide range of backgrounds and
                      experience – from college students to retired
                      professionals, and everything in between. There is a
                      project here for you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="assets/images/need-you.svg"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          backgroundColor: "#fcfafb",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div class="row">
          <div class="col-lg-12">
            <h2 style={{ marginTop: 30 }} class="h2-heading">
              Volunteer the way you want{" "}
            </h2>
            <p class="p-heading">
              We have hundreds of volunteer projects for every skill, time
              commitment, and cause area. Find the one that excites you – and
              complete it virtually.
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            paddingBottom: 50,
          }}
        >
          <LandingCardHolder />
        </div>
      </div>
    </Box>
  );
}
