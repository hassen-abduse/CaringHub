import React, { useEffect } from "react";
import Header from "./Header";
import ContactUs from "./ContactUs";
import HowItWorks from "./HowItWorks";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { fetchProjects } from "../redux/ActionCreators/projectActions";
import { Alert, AlertTitle } from "@material-ui/lab";
import { CircularProgress, Container, Portal } from "@material-ui/core";
const mapStateToProps = (state) => {
  return {
    auth: state.auth,

    Projects: state.Projects,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

function Home(props) {
  useEffect(() => {
    props.fetchProjects();
  }, []);
  const decoded = props.auth.token
    ? jwtDecode(props.auth.token)
    : { role: "", _id: "" };
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
        <div
          style={{
            margin: "30px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="text-center">Some Of Projects That Need Volunteers</h2>
          <p className="text-center">
            We think this projects could be a great starter for volunteers{" "}
          </p>
        </div>

        <div class="container">
          <div class="row">
            {props.Projects.isLoading === true ? (
              <Container
                style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}
              >
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
            ) : null}
            {props.Projects.errMess && (
              <Container style={{ backgroundColor: "#FCFAFB" }}>
                <div className="container">
                  <div
                    className="row"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Alert
                      style={{ margin: "50px", padding: "50px" }}
                      severity="error"
                    >
                      <AlertTitle style={{ fontWeight: "bold" }}>
                        Error
                      </AlertTitle>
                      <strong>{props.Projects.errMess}</strong>
                    </Alert>
                  </div>
                </div>
              </Container>
            )}
            {props.Projects.projects && (
              <div class="col-lg-12">
                {props.Projects.projects.map((project) => {
                  return (
                    <div class="card">
                      <img
                        style={{
                          padding: "15px",
                          width: "100%",
                          height: "220px",
                        }}
                        class="img-fluid"
                        src={project.image}
                        alt="alternative"
                      />
                      <div class="card-body">
                        <p
                          style={{ marginBottom: "2px", color: "#0092FF" }}
                          class="testimonial-text"
                        >
                          {new Date(project.startDate).toDateString()}
                        </p>
                        <div
                          style={{
                            height: "84px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          class="testimonial-author"
                        >
                          {project.name}
                        </div>

                        <p class="testimonial-text">
                          {project.description.substring(0, 65) + "..."}
                        </p>
                        <div>
                          <span class="nav-item">
                            <Link
                              to={`volunteer/jobDescription/${project._id}`}
                              class="btn-solid-sm"
                            >
                              Check
                            </Link>
                          </span>
                        </div>
                      </div>
                      <div class="gradient-floor blue-to-purple"></div>
                    </div>
                  );
                })}
                {decoded.role !== "Vol" && (
                  <div style={{ paddingBottom: "20px" }}>
                    <Link class="btn-outline-sm" to="/login">
                      Login as Volunteer to Browse All Projects
                    </Link>
                  </div>
                )}
                {decoded.role === "Vol" && (
                  <div>
                    <Link class="btn-solid-lg" to="/volunteer/findProject">
                      Browse All Projects
                    </Link>
                  </div>
                )}
              </div>
            )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
