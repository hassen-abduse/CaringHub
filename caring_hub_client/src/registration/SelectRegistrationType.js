import React from "react";
import { ProjectCard } from "../volunteer/components/ProjectCard";
import volunteerIllustration from "../assets/img/illustration-volunteer.svg";
import organizationIllustration from "../assets/img/illustration-organization.svg";

export default function SelectRegistrationType() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row p-5">
          <div className="col-xl-12">
            <h2 className="text-center h2-heading">Create an Account</h2>
            <p className="text-center p-heading ">
              Join a community of people who care as much as you do
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <div class="cards-2 bg-gray">
          <div class="container">
            {/* <div class="row">
            <div class="col-lg-12">
              <h2 style={{ marginBottom: 20 }} class="h2-heading">
                Volunteer the way you want{" "}
              </h2>
              <p class="p-heading">
                We have hundreds of volunteer projects for every skill, time
                commitment, and cause area. Find the one that excites you – and
                complete it virtually.
              </p>
            </div>
          </div> */}
            <div class="row">
              <div class="col-lg-12">
                <h4 className="text-center  p-5 ">
                  Which type of account would you like?
                </h4>
                <a className="m-2" href="/volunteerRegistration">
                  <div class="card">
                    <div>
                      <img
                        // style={{ width: "100%", height: "100%" }}
                        style={{ paddingTop: "2rem" }}
                        class="img-fluid"
                        src={volunteerIllustration}
                        alt="alternative"
                      />
                    </div>
                    <div
                      style={{ padding: "1.5rem 2rem 3.125rem 2rem" }}
                      class="card-body"
                    >
                      <div class="testimonial-author">Volunteer</div>

                      <p class="testimonial-text">
                        I'm a Professional Looking to Volunteers
                      </p>
                    </div>

                    <div class="gradient-floor blue-to-purple"></div>
                  </div>
                </a>
                <a className="m-2" href="/organizationRegistration">
                  <div class="card">
                    <div>
                      <img
                        // style={{ width: "100%", height: "100%" }}
                        style={{ paddingTop: "2rem" }}
                        class="img-fluid"
                        src={organizationIllustration}
                        alt="alternative"
                      />
                    </div>
                    <div
                      style={{ padding: "1.5rem 2rem 2.125rem 2rem" }}
                      class="card-body"
                    >
                      <div class="testimonial-author">Organization</div>

                      <p class="testimonial-text">
                        My Organization is Looking for Volunteers
                      </p>
                    </div>

                    <div class="gradient-floor blue-to-purple"></div>
                  </div>
                </a>
                {/* <div class="card">
                <img
                  class="quotes"
                  src="assets/images/quotes.svg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div class="testimonial-author">Susane Blake</div>
                  <div class="occupation">General Manager, Presentop</div>
                </div>
                <div class="gradient-floor purple-to-green"></div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
