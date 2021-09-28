import { Grid, Container, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import { Rate, Row } from "antd";
import Avatar from "../../../volunteer/components/Avatars";
import { Badge, Col } from "antd";
import { Button } from "@material-ui/core";
import { CircularProgress, } from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import { fetchEvals } from "../../../redux/ActionCreators/evalActions";
import { connect } from "react-redux";
import { baseUrl } from '../../../redux/shared/baseUrl'
const desc = ["Terrible", "Bad", "Normal", "Good", "Wonderful"];
const mapStateToProps = (state) => {
  return {
    Evals: state.Evals
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEvals: () => dispatch(fetchEvals()),
})
class EvalueateVolunteers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      criterias: [],
      error: null,
      isLoading: false,
      response: null
    };
    this.addNewItem = this.addNewItem.bind(this)
    this.postRating = this.postRating.bind(this)
  }

  handleRating = () => {
    const criterias = this.state.criterias
    let value
    if (criterias.length >= 1) {
      value = parseInt(this.state.criterias.map(criteria => criteria.input).reduce((a, b) => a + b) / 5)
      this.setState({ value });
    }

    const rating = {
      volId: this.props.app.volunteer._id,
      projectId: this.props.app.project._id,
      rating: value
    }

    this.postRating(rating)

  }

  postRating = async (rating) => {
    this.setState({ isLoading: true, response: null })
    const bearer = 'Bearer ' + localStorage.getItem('token')
    fetch(baseUrl + "rateVolunteer/", {
      method: 'PUT',
      body: JSON.stringify(rating),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': bearer
      }
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              "Error " + response.status + ":" + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          const errorM = new Error(error.message);
          throw errorM;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ response: response, isLoading: false })
      })
      .catch((error) => {
        this.setState({ error: error.message, isLoading: false })
      });
  };

  addNewItem = (criteria, input) => {
    let { criterias } = this.state
    const evaluation = { criteria, input }
    var index = criterias.findIndex(x => x.criteria === evaluation.criteria)
    if (index === -1) {
      criterias.push(evaluation)
    }
    else {
      criterias[index].input = input
    }
  }

  componentDidMount() {
    this.props.fetchEvals()
    this.setState({error:null, response:null, isLoading:false})
  }
  
  render() {
    const {
      value,
    } = this.state;
    return (
      <div style={{ justifyContent: "center" }}>
        <Row>
          <Col span="8">
            <div>
              <div>
                <img
                  style={{
                    borderRadius: "100%",
                    width: "80px",
                    height: "80px",
                  }}
                  alt="Image placeholder"
                  src={this.props.app.volunteer.profilePicture}
                ></img>
              </div>
              <div>
                <h4
                  style={{ marginLeft: "0rem", marginBottom: 0 }}
                  className="h2-heading"
                >
                  {this.props.app.volunteer.firstName + ' ' + this.props.app.volunteer.lastName}
                </h4>
                <p
                  style={{ marginLeft: "0rem", color: "#159197" }}
                  className=""
                >
                  Volunteer
                </p>
                <span style={{ marginTop: "0px" }}>
                  <Rate disabled={true} tooltips={desc} value={value} />
                  {value ? (
                    <span className="ant-rate-text">{desc[value - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
          </Col>

          <Col style={{ alignContent: 'center' }}>
            <div style={{ display: 'flex', alignSelf: 'center' }}>
              {

                this.props.Evals.isLoading === true ?
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'center', }}>
                      <CircularProgress size='40px' />
                    </div>
                    <div>
                      <h5 style={{ textAlign: 'center' }}>Loading Criterias...</h5>
                    </div>
                  </div>
                  :
                  <div >
                    <h5 style={{ textAlign: 'center', color: "red" }}>{this.props.Evals.errMess}</h5>
                  </div>
              }
              {
                this.props.Evals.evals.length >= 1 &&
                <div
                  style={{
                    marginLeft: "3rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h4 style={{ marginLeft: "0rem", marginBottom: 0 }}>
                    Rate the Volunteer
                  </h4>
                  {
                    this.props.Evals.evals.map((criteria, i) => {
                      return <div style={{ display: "flex" }}>
                        <h6
                          style={{
                            marginTop: "10px",
                            marginRight: "10px",
                          }}
                          className=" mb-0 teal"
                        >
                          {criteria.name}
                        </h6>
                        <span>
                          <Rate
                            tooltips={desc}
                            onChange={(e) => {
                              this.setState({ input: e })
                              this.addNewItem(criteria.name, e)
                            }
                            }

                          //value={criterias[i]}
                          />
                          {/* <span className="ant-rate-text">{desc[this.state.criterias.length]}</span> */}

                        </span>
                      </div>
                    })
                  }
                  {/*   
                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className=" mb-0 teal"
                  >
                    Communication :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleCommunication}
                      value={communication}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[communication - 1]}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className="mb-0 teal"
                  >
                    Expertize :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleExpertize}
                      value={expertize}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[expertize - 1]}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className="mb-0 teal"
                  >
                    Proffesionalism :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleProffesionalism}
                      value={proffesionalism}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[proffesionalism - 1]}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <h6
                    style={{
                      marginTop: "3px",
                      marginRight: "10px",
                    }}
                    className="mb-0 teal"
                  >
                    Hire Again ? :
                  </h6>
                  <span>
                    <Rate
                      tooltips={desc}
                      onChange={this.handleHireAgain}
                      value={hireAgain}
                    />
                    {value ? (
                      <span className="ant-rate-text">
                        {desc[hireAgain - 1]}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                    </div>*/}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      onClick={this.handleRating}
                      variant="contained"
                      color="primary"

                    >RATE
                    </Button>

                  </div>
                  {
                    this.state.isLoading === true ?
                      <div className='row' style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <Alert severity="info">
                          <AlertTitle style={{ fontWeight: 'bold' }}>Please Wait</AlertTitle>
                          <CircularProgress />
                          {/* <strong>{this.state.error}</strong> */}
                        </Alert>
                      </div>
                      : null
                  }
                  {this.state.response &&
                    <div className='row' style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      <Alert severity="info">
                        <AlertTitle style={{ fontWeight: 'bold' }}>Complete</AlertTitle>
                        {/* <CircularProgress /> */}
                        <strong>{this.state.response.message}</strong>
                      </Alert>
                    </div>

                  }
                  {this.state.error &&
                    <div className='row' style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      <Alert severity="error">
                        <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
                        <strong>{this.state.error}</strong>
                      </Alert>
                    </div>
                  }


                </div>
              }

              {/* <div>
            <div
              style={{
                marginLeft: "3rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 style={{ marginLeft: "0rem", marginBottom: 0 }}>
                Rate the Volunteer
              </h4>
              <span>
                <Rate
                  tooltips={desc}
                  onChange={this.handleChange}
                  value={value}
                />
                {value ? (
                  <span className="ant-rate-text">{desc[value - 1]}</span>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>
         */}

            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="teal mt-4">Skills</h4>
            <div style={{ display: "flexStart" }}>
              {
                this.props.app.volunteer.skillSets.map(skill => {
                  return <span
                    style={{ margin: "0.3rem", padding: "0.8rem" }}
                    className="btn-outline-sm "
                  >
                    {skill.name}
                  </span>
                })
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EvalueateVolunteers)
