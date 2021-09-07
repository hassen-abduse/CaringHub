import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
export const ProjectCard = () => {
  return (
    <div class="cards-2 bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              style={{
                width: "540px",
              }}
              class="card"
            >
              <img
                style={{ width: "80%", height: "70%", marginTop: "20px" }}
                class="img-fluid"
                src="../../assets/images/childrens.jpg"
                alt="alternative"
              />

              <div class="card-body">
                <Button
                  right="0"
                  size="small"
                  color="primary"
                  href="/volunteer/jobDescription"
                >
                  In progress
                </Button>
                <p style={{ color: "#0092FF" }} class="testimonial-text">
                  Project | 6-7 days
                </p>
                <div class="testimonial-author">Environment</div>

                <p class="testimonial-text">
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>

                <div>
                  <span class="nav-item m-2">
                    <a class="btn-solid-sm" href="#contact">
                      Applicants
                    </a>
                  </span>
                  <span class="nav-item m-2">
                    <a class="btn-solid-sm" href="#contact">
                      Volunteers
                    </a>
                  </span>

                  <span class="nav-item m-2">
                    <Button
                      variant="outlined"
                      color="Primary"
                      //   className={classes.button}
                      startIcon={<EditIcon fontSize="small" />}
                    ></Button>
                  </span>
                  <span class="nav-item m-2">
                    <Button
                      variant="outlined"
                      color="secondary"
                      //   className={classes.button}
                      startIcon={<DeleteIcon />}
                    ></Button>
                  </span>
                </div>
              </div>

              <div class="gradient-floor blue-to-purple"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
