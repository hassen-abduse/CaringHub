import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import illustration from "../assets/images/20944629.jpg";
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

function Header(props) {
  const decoded = props.auth.token
    ? jwtDecode(props.auth.token)
    : { role: "", _id: "" };
  return (
    <header style={{ background: "#FFFFFF" }} id="header" class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xl-5">
            <div class="text-container">
              <h1 class="h1-large">
                Volunteer the way you want and make a difference
              </h1>
              <p class="p-large">Volunteer projects that fit your schedule </p>
              {decoded.role === "Vol" && (
                <div>
                  <Link class="btn-solid-lg" to="/volunteer/findProject">
                    Find Projects
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div class="col-lg-6 col-xl-6">
            <div class="image-container">
              <img
                style={{ left: "0px" }}
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
export default connect(mapStateToProps)(Header);
