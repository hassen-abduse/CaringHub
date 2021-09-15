import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
  return (
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
            <div class="card">
              <img
                style={{ width: "100%", height: "300px" }}
                class="img-fluid"
                src={project.image}
                alt="alternative"
              />
              <div class="card-body">
                <p style={{ color: "#0092FF" }} class="testimonial-text">
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(project.createdAt))}
                </p>
                <div  style={{minHeight:"110px",display:"flex",alignItems:"center"}} class="testimonial-author">{project.name}</div>

                <p
                  style={{ maxHeight: "180px", overflow: "hidden" }}
                  class="testimonial-text"
                >
                  {project.description.length < 90 ? project.description : (project.description.substring(0,90) + "..." )}
                </p>
                <div>
                  <span class="nav-item">
                    <Link
                      class="btn-solid-sm"
                      to={`/volunteer/jobDescription/${project._id}`}
                    >
                      Check
                    </Link>
                  </span>
                </div>
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
