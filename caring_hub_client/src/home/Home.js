import React from "react";
import AppBar from "./AppBar";
import Header from "./Header";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import HowItWorks from "./HowItWorks";
import { ProjectCard } from "../volunteer/components/ProjectCard";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <Header />
      <HowItWorks />
      <div class="basic-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <div style={{ marginTop: "1rem" }} class="text-container">
                <div class="section-title">ABOUT US</div>
                <h2>
                  We believe nonprofit staff are in the best position to decide
                  what support their organization needs.
                </h2>
                <p>
                  We believe nonprofit staff are in the best position to decide
                  what support their organization needs.
                </p>
                <a class="btn-outline-reg" href="#">
                  Details
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src="assets/images/non-profit-centric.svg"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cards-2 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <img
                  style={{ width: "100%", height: "100%" }}
                  class="img-fluid"
                  src="assets/images/childrens.jpg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p style={{ color: "#0092FF" }} class="testimonial-text">
                    Project | 6-7 days
                  </p>
                  <div class="testimonial-author">Environment</div>

                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div>
                    <span class="nav-item">
                      <a class="btn-solid-sm" href="#contact">
                        Check
                      </a>
                    </span>
                  </div>
                </div>
                <div class="gradient-floor blue-to-purple"></div>
              </div>

              <div class="card">
                <img
                  style={{ width: "100%", height: "100%" }}
                  class="img-fluid"
                  src="assets/images/childrens.jpg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p style={{ color: "#0092FF" }} class="testimonial-text">
                    Project | 6-7 days
                  </p>
                  <div class="testimonial-author">Environment</div>

                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div>
                    <span class="nav-item">
                      <a class="btn-solid-sm" href="#contact">
                        Check
                      </a>
                    </span>
                  </div>
                </div>
                <div class="gradient-floor blue-to-purple"></div>
              </div>

              <div class="card">
                <img
                  style={{ width: "100%", height: "100%" }}
                  class="img-fluid"
                  src="assets/images/childrens.jpg"
                  alt="alternative"
                />
                <div class="card-body">
                  <p style={{ color: "#0092FF" }} class="testimonial-text">
                    Project | 6-7 days
                  </p>
                  <div class="testimonial-author">Environment</div>

                  <p class="testimonial-text">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <div>
                    <span class="nav-item">
                      <a class="btn-solid-sm" href="#contact">
                        Check
                      </a>
                    </span>
                  </div>
                </div>
                <div class="gradient-floor blue-to-purple"></div>
              </div>

              <div>
                <Link class="btn-solid-lg" to="/volunteer/findProjects">
                  Browse All Projects
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
              <h2 class="h2-heading"> Frequently Asked Questions</h2>
              <p class="p-heading">
                Volunteering your skills is an excellent way to directly support
                nonprofits and the communities they serve.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12">
              <div class="accordion-item">
                <div class="accordion-icon blue">
                  <span class="fas fa-question-circle"></span>
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
                    What kinds of nonprofits can I volunteer with?
                  </button>
                </div>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Our nonprofits are primarily in the Ethiopia, from Addis
                    Ababa, to all cities throughout Ethiopia and . There are a
                    range of organizations in our community, including
                    immigration nonprofits, cancer research nonprofits,
                    environmental nonprofits, education nonprofits, community
                    building nonprofits, and more. We also have a small set of
                    NGOs throughout Ethiopia.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <div class="accordion-icon blue">
                  <span class="fas fa-question-circle"></span>
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
                    What kind of skills are nonprofits looking for?
                  </button>
                </div>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Nonprofits need the same talent and skills as any other
                    business. They're looking for marketing volunteers, finance
                    volunteers, operations volunteers, business strategy
                    volunteers, management volunteers, technology volunteers,
                    design & media volunteers, and more.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <div class="accordion-icon blue">
                  <span class="fas fa-question-circle"></span>
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
                    What are the benefits of volunteering my skills?
                  </button>
                </div>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Having pro bono consulting on your resumé is a great way to
                    stand out from the crowd – it shows that you're motivated,
                    talented, and generous. Volunteering is also a major
                    portfolio builder, since you can usually feature your
                    projects on your website as samples of work. Nonprofits
                    might even leave you testimonials on LinkedIn on how great
                    it was to work with you! As we always say: you can volunteer
                    your way to the career you want.
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
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Range of Skills and Experience
                  </button>
                </div>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Our volunteers represent a wide range of backgrounds and
                    experience – from college students to retired professionals,
                    and everything in between. There is a project here for you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
export default Home;
