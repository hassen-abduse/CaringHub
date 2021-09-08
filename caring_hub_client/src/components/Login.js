import React from "react";
import "./login.css";
import { connect } from "react-redux";
import { loginUser } from "../redux/ActionCreators/authActions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.login = this.login.bind(this);
  }
  async login() {
    await this.props.loginUser({
      username: this.state.username,
      password: this.state.password,
    });
  }
  render() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div
          style={{ maxWidth: "550px", marginTop: "60px" }}
          class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
        >
          <div
            class="card card0 border-0"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <div class="row d-flex">
              <div class="col">
                <div class="card2 card border-0 px-4 py-5">
                  <div class="row px-3 mb-4">
                    <h3
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ExitToAppIcon fontSize="large" />
                    </h3>
                    <p class=" text-center">Log in to your account</p>
                  </div>
                  <div class="row px-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>{" "}
                    <input
                      class="mb-4"
                      type="text"
                      name="email"
                      value={this.state.username}
                      placeholder="Enter a valid email address"
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />{" "}
                  </div>
                  <div class="row px-3 mb-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Password</h6>
                    </label>{" "}
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      placeholder="Enter password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />{" "}
                  </div>

                  <div class="row mb-3 px-3">
                    {" "}
                    <button
                      style={{ width: "100%" }}
                      onClick={this.login}
                      type="submit"
                      class="btn btn-primary text-center"
                    >
                      Login
                    </button>{" "}
                  </div>
                  <div class="row mb-4 px-3">
                    {" "}
                    <small class="font-weight-bold">
                      Don't have an account?{" "}
                      <a class="text-danger ">Register</a>
                    </small>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
