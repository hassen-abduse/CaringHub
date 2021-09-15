import React from "react";
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <header id="header" class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xl-5">
            <div class="text-container">
              <h1 class="h1-large">
                Volunteer the way you want and make a difference
              </h1>
              <p class="p-large">Volunteer projects that fit your schedule</p>
              <Link class="btn-solid-lg" to="/volunteer/findProject">
                Find Projects
              </Link>
            </div>
          </div>
          <div class="col-lg-6 col-xl-7">
            <div class="image-container">
              <img
                class="img-fluid"
                src="assets/images/donation-box.jpg"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
