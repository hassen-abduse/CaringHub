import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const { movie } = props;
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
                style={{ width: "100%", maxHeight: "330px" }}
                class="img-fluid"
                src={movie.Poster}
                alt="alternative"
              />
              <div class="card-body">
                <p style={{ color: "#0092FF" }} class="testimonial-text">
                  {movie.Year}
                </p>
                <div class="testimonial-author">{movie.Title}</div>

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
