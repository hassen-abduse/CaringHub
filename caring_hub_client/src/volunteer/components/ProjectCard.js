import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const { project } = props;
  const history = useHistory();

  return (
    <div class="cards-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <img
                style={{ padding: "15px", width: "100%", height: "220px" }}
                class="img-fluid"
                src={project.image}
                alt="alternative"
              />
              <div class="card-body">
                <p
                  style={{ marginBottom: "2px", color: "#0092FF" }}
                  class="testimonial-text"
                >
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(project.createdAt))}
                </p>
                <div
                  style={{
                    minHeight: "85px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  class="testimonial-author"
                >
                  {project.name}
                </div>

                <p
                  style={{ maxHeight: "180px", overflow: "hidden" }}
                  class="testimonial-text"
                >
                  {project.description.length < 70
                    ? project.description
                    : project.description.substring(0, 70) + "..."}
                </p>

                <span
                  className="btn-solid-sm"
                  id="check-btn"
                  onClick={() => {
                    history.push(`/volunteer/jobDescription/${project._id}`);
                  }}
                >
                  Check
                </span>
              </div>

              <div class="gradient-floor blue-to-purple"></div>
            </div>

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
  );
}
