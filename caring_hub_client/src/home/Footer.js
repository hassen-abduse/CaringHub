import React from "react";

export default function Footer() {
  return (
    <div>
      {/* <div class="footer bg-gray">
        <img
          class="decoration-circles"
          src="assets/images/decoration-circles.png"
          alt="alternative"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h4>
                Sign up for alerts on projects that fit your skills and passions
                then follow us on
              </h4>
              <div class="social-container">
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-pinterest-p fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-youtube fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="copyright bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <ul class="list-unstyled li-space-lg p-small">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <p class="p-small statement">
                {/* Copyright ©  */}
                <a href="#">CaringHub</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button id="myBtn">
        <img src="assets/images/up-arrow.png" alt="alternative" />
      </button>
    </div>
  );
}
