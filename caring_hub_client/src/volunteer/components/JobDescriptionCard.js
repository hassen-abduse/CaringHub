import React from "react";
import CardHolder from "./CardHolder";
import { CircularProgress, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { baseUrl } from "../../redux/shared/baseUrl";
import { postApplication } from "../../redux/ActionCreators/appActions";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { DialogTitle, Box } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { fetchProjects } from "../../redux/ActionCreators/projectActions";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: "50%",
    padding: theme.spacing(0, 3, 3, 3),
  },
}));
function renderItem(item) {
  return (
    <p style={{ margin: "5px" }} class="btn-outline-sm" href="#">
      {item.name}
    </p>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    NetRequest: state.NetRequest,
    Projects: state.Projects
  };
};
const mapDispatchToProps = (dispatch) => ({
  postApplication: (data) => dispatch(postApplication(data)),
  fetchProjects: () => dispatch(fetchProjects())
});
function filterProjects(projects, causes, skills) {
  if (skills.length === 0 && causes.length === 0) return projects;

  var filtered = [];
  for (const project of projects) {
    for (const causeA of project.causeAreas) {
      if (causes.indexOf(causeA._id) != -1) {
        if (filtered.indexOf(project) == -1) {
          filtered.push(project);
        }
      }
    }
  }
  for (const project of projects) {
    for (const skill of project.skillSets) {
      if (skills.indexOf(skill._id) != -1) {
        if (filtered.indexOf(project) == -1) {
          filtered.push(project);
        }
      }
    }
  }
  return filtered.filter((project) => project._id);
}

function DescriptionCard(props) {
  const classes = useStyles();
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [project, setProject] = useState({});
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetch(baseUrl + "projects/" + id)
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
        setProject(response);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoaded(true);
      });
    props.fetchProjects()
  }, []);

  const decoded = props.auth.token
    ? jwtDecode(props.auth.token)
    : { role: "", _id: "" };
  if (error)
    return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Alert style={{ margin: "50px", padding: "50px" }} severity="error">
              <AlertTitle style={{ fontWeight: "bold" }}>Error</AlertTitle>
              <strong>{error}</strong>
            </Alert>
          </div>
        </div>
      </Container>
    );
  else if (!isLoaded)
    return (
      <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
        <div class="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
                marginBottom: "75px",
              }}
            >
              <CircularProgress size={"50px"} />
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Loading...
            </p>
          </div>
        </div>
      </Container>
    );
  else
    return (
      <>
      <Modal
      className={classes.modal}
      open={open}
      disableBackdropClick
      keepMounted={false}
      //disableEscapeKeyDown
      onClose={handleClose}
      closeAfterTransition
      
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {props.NetRequest.isLoading === false ? (
            <DialogTitle>
              <Box display="flex" justifyContent="flex-end">
                <Box>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
            </DialogTitle>
          ) : null}
          {props.NetRequest.isLoading === true ? (
            <div
              style={{
                padding: "20px",
                paddingTop: "40px",
                paddingLeft: "40px",
              }}
            >
              <div>
                <CircularProgress />
                <br></br>
                <strong>Please wait...</strong>
              </div>
            </div>
          ) : null}
          {props.NetRequest.errMess && !props.NetRequest.isLoading &&(
            <Alert style={{ padding: "20px" }} severity="error">
              <AlertTitle style={{ fontWeight: "bold" }}>Error</AlertTitle>
              <strong>{props.NetRequest.errMess}</strong>
            </Alert>
          )}
          {props.NetRequest.success === true ? (
            <Alert style={{ padding: "20px" }} severity="success">
              <AlertTitle style={{ fontWeight: "bold" }}>Success</AlertTitle>
              <strong>Successfully Applied!</strong>
            </Alert>
          ) : null}
        </div>
      </Fade>
    </Modal>
      <Container style={{ marginTop: "100px" }}>
      
        <div className="container">
          <div>
            <a className="btn-solid-sm mt-3 mb-3" href="/volunteer/findProject">
              back to all projects
            </a>
          </div>
          <div>
            <div>
              <h2>{project.name}</h2>
              <p>
                <span className="p-heading">{project.description}</span>
              </p>
            </div>
            <div class="container">
              <div class="row">
                <div style={{ padding: 0 }} class="col-lg-6 col-xl-6">
                  <div class="image-container">
                    <img
                      class="img-fluid"
                      width="100%"
                      height="100%"
                      src={project.image}
                      alt="alternative"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-xl-6">
                  <div style={{ marginTop: "1rem" }} class="text-container">
                    <h2>Causes</h2>
                    {project.causeAreas &&
                      project.causeAreas.map((cause) => {
                        return renderItem(cause);
                      })}
                    <h2>Skills</h2>
                    {project.skillSets &&
                      project.skillSets.map((skill) => {
                        return renderItem(skill);
                      })}
                    <div className="mt-2">
                      <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
                        Posted on:{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(project.createdAt))}
                        <br></br>
                        Starts on:{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(project.startDate))}
                        <br></br>
                        Ends on:{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(project.endDate))}
                      </p>
                    </div>
                    {/* {props.NetRequest.isLoading === true && (
                      //<p>Submitting Application...</p>

                      <Alert
                        severity="info">
                        <AlertTitle>Submitting Application..</AlertTitle>
                        <CircularProgress />
                      </Alert>
                    )}
                    {props.NetRequest.success === true ? (


                      <Snackbar open={true} onClose={() => { }} autoHideDuration={6000}>
                        <Alert severity="success">
                          <AlertTitle>Success</AlertTitle>
                          <strong>
                            Thank you! {project.ownerOrg.name} will contact you
                            soon!
                          </strong>
                        </Alert>
                      </Snackbar>
                    ) : null}
                    {props.NetRequest.errMess && (
                      // <p>{props.NetRequest.errMess}</p>
                      <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        <strong>{props.NetRequest.errMess}</strong>
                      </Alert>
                    )} */}
                    {decoded._id !== "" && (
                      <button
                        style={{ margin: "5px" }}
                        class="btn-solid-reg"
                        onClick={() => {

                          props.postApplication({
                            volunteer: decoded._id,
                            project: project._id,
                          });
                          handleOpen()
                        }}
                      >
                        Apply
                      </button>
                    )}
                    {decoded._id === "" && (
                      <a
                        style={{ margin: "5px" }}
                        class="btn-solid-reg"
                        href="/login"
                      >
                        Login to Apply
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="project-detail"
              style={{
                backgroundColor: "#DCECF6",
                padding: "33px",
                marginTop: "33px",
              }}
            >
              <h2>Project Detail</h2>
              <p>Project Owner: {project.ownerOrg.name}</p>
              <p>{project.ownerOrg.mission}</p>
              <Link to={`/organization/dashboard/${project.ownerOrg._id}`}>
                More About {project.ownerOrg.name}
              </Link>
            </div>
          </div>
          <div style={{ paddingTop: "5.0rem " }} class="cards-2 bg-gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h2 class="h2-heading">Related Projects</h2>
                  <p class="p-heading">
                    We have hundreds of volunteer projects for every skill, time
                    commitment, and cause area. Find the one that excites you –
                    and complete it virtually.
                  </p>
                </div>
                {
                  props.Projects.projects &&
                  <CardHolder results={filterProjects(props.Projects.projects, project.causeAreas.map(cause => cause._id), project.skillSets.map(skill => skill._id))} />
                }
                {
                  props.Projects.errMess &&
                  <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
                    <div className='container'>
                      <div className='row' style={{ display: 'flex', justifyContent: 'center', }}>
                        <Alert style={{ margin: '50px', padding: '50px' }} severity="error">
                          <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
                          <strong>{props.Projects.errMess}</strong>
                        </Alert>
                      </div>
                    </div>

                  </Container >
                }
                {props.Projects.isLoading === true ?
                  <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
                    <div class='container'>
                      <div className='row'>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '75px' }}>
                          <CircularProgress size={'50px'} />

                        </div>
                        <p style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Loading...</p>
                      </div>
                    </div>
                  </Container>
                  : null}
              </div>
            </div>
          </div>

          {/* <CardHolder /> */}

          <div class="cards-2 bg-gray">
            <div class="container">
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
      </Container>
      </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionCard);
