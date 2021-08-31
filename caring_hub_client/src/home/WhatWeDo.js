import React from "react";

export default function WhatWeDo() {
  return (
    <div id="details" class="basic-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xl-7">
            <div class="image-container">
              <img
                class="img-fluid"
                src="assets/images/volunteer-illustration.jpg"
                alt="alternative"
              />
            </div>
          </div>
          <div class="col-lg-6 col-xl-5">
            <div class="text-container">
              <div class="section-title">WHAT WE DO</div>
              <h2>Creating equitable access to talent for nonprofits</h2>
              <p>
                Nonprofits provide critical support to their communities, but
                limited budgets can block them from hiring the expert talent
                they need to operate most effectively. Skills-based volunteering
                can bridge that gap.
              </p>
              <a class="section-title no-line" href="#">
                EXPLORE THE PROJECT MENU
                <span class="fas fa-long-arrow-alt-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
