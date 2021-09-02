import React from "react";

export default function HowItWorks() {
  return (
    <div id="services" class="cards-1 bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2
              style={{ maxWidth: "25rem", marginBottom: "1.5rem" }}
              className="h2-heading"
            >
              How It Works
            </h2>
            <p
              style={{ maxWidth: "40rem", marginBottom: "30px" }}
              className="p-heading"
            >
              Matching with nonprofits has never been easier. Submit a two-step
              application and complete a brief phone interview so that you both
              know it's a good fit.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div>
                <img
                  class="img-fluid"
                  src="assets/images/caringHubPic.svg"
                  alt="alternative"
                  style={{
                    marginBottom: "25px",
                  }}
                />
                {/* <span class="fas fa-headphones-alt"></span> */}
              </div>
              <div class="card-body">
                <h5 class="card-title">Post a project</h5>
                <p>
                  Nonprofits post questions and short-term project needs on our
                  marketplace.
                </p>
                <a class="read-more no-line" href="#">
                  Learn more <span class="fas fa-long-arrow-alt-right"></span>
                </a>
              </div>
            </div>

            <div class="card">
              <div>
                <img
                  class="img-fluid"
                  src="assets/images/browse-opportunities.svg"
                  alt="alternative"
                  style={{
                    marginBottom: "25px",
                  }}
                />
                {/* <span class="far fa-clipboard"></span> */}
              </div>
              <div class="card-body">
                <h5 class="card-title">Volunteers browse opportunities</h5>
                <p>
                  Volunteers browse opportunities based on skills, cause area,
                  and time commitment.
                </p>
                <a class="read-more no-line" href="#">
                  Learn more <span class="fas fa-long-arrow-alt-right"></span>
                </a>
              </div>
            </div>

            <div class="card">
              <div>
                <img
                  class="img-fluid"
                  src="assets/images/submit-applications.svg"
                  alt="alternative"
                  style={{
                    marginBottom: "25px",
                  }}
                />
                {/* <span class="far fa-comments"></span> */}
              </div>
              <div class="card-body">
                <h5 class="card-title">Volunteers send application</h5>
                <p>
                  Volunteers submit applications, and if both parties opt in,
                  it's a match!
                </p>
                <a class="read-more no-line" href="#">
                  Learn more <span class="fas fa-long-arrow-alt-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
