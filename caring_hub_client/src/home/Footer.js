import React from "react";

export default function Footer() {
  return (
    <div>
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
