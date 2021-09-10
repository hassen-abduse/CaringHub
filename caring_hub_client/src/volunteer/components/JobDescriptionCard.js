import React from "react";
import Typography from "@material-ui/core/Typography";
import Image from "../../assets/img/2.jpg";
import { CircularProgress, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid, Box } from "@material-ui/core";
import CardHolder from "./CardHolder";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { baseUrl } from "../../redux/shared/baseUrl";
import { postApplication } from "../../redux/ActionCreators/appActions";
import { connect } from "react-redux";
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function renderItem(item) {
  return (
    <p style={{ margin: "5px" }} class="btn-outline-sm" href="#">
      {item.name}
    </p>)
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    NetRequest: state.NetRequest
  }
}
const mapDispatchToProps = (dispatch) => ({
  postApplication: (data) => dispatch(postApplication(data)),
})
function DescriptionCard(props) {
  const classes = useStyles();
  const { id } = useParams()
  const [progress, setProgress] = useState(true)
  const [project, setProject] = useState({})
  const [error, setError] = useState('')
  useEffect(async () => {
    const response = await fetch(baseUrl + 'projects/' + id)
    if (response.ok) {
      setProgress(true)
      const data = await response.json()
      setProject(data)
      setProgress(false)
    }
    else {
      setProgress(false)
      setError(response.status + response.statusText)
    }
  }, [])
  // const skills = project.skillSets.map(skill => {
  //   return (
  //     renderItem(skill)
  //   )
  // })

  // const causes = project.causeAreas.map(cause => {
  //   return (
  //     renderItem(cause)
  //   )
  // })
  const decoded = props.auth.token ? jwtDecode(props.auth.token) : { role: '', _id: '' }
  console.log(decoded._id)
  console.log(project._id)
  return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      {
        progress === true ?
          <div class='container'>
            <div className='row'>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '75px' }}>
                <CircularProgress size={'50px'} />

              </div>
              <p style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Loading...</p>
            </div>
          </div>

          :

          <div className="container">
            {
              error !== '' &&
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong>{error}</strong>
                </Alert>
            }
            <div>
              <a className="btn-solid-sm" href="/volunteer/findProject">
                back to all projects
              </a>
            </div>
            <div>
              <div>
                <h2>{project.name}</h2>
                <p>
                  <span className="p-heading">
                    {project.description}
                  </span>
                </p>
              </div>
              <div class="container">
                <div class="row">
                  <div style={{ padding: 0 }} class="col-lg-6 col-xl-6">
                    <div class="image-container">
                      <img class="img-fluid" width='100%' height='100%' src={project.image} alt="alternative" />
                    </div>
                  </div>

                  <div class="col-lg-6 col-xl-6">
                    <div style={{ marginTop: "1rem" }} class="text-container">
                      <h2>Causes</h2>
                      {
                        project.causeAreas &&
                        project.causeAreas.map(cause => {
                          return (renderItem(cause))
                        })
                      }
                      <h2>Skills</h2>
                      {
                        project.skillSets &&
                        project.skillSets.map(
                          skill => {
                            return (renderItem(skill))
                          }
                        )
                      }
                      <p>Posted on: {project.createdAt}</p>
                      <p>Starts on: {project.startDate}</p>
                      <p>Ends on: {project.endDate}</p>
                      {
                        props.NetRequest.isLoading === true &&
                        //<p>Submitting Application...</p>
                        <Alert severity="info">
                          <AlertTitle>Submitting Application..</AlertTitle>
                          <CircularProgress />
                        </Alert>
                      }
                      {
                        props.NetRequest.status &&
                        // <p>{props.NetRequest.status}</p>
                        <Alert severity="success">
                          <AlertTitle>Success</AlertTitle>
                          <strong>{props.NetRequest.status}</strong>
                        </Alert>
                      }
                      {
                        props.NetRequest.errMess &&
                        // <p>{props.NetRequest.errMess}</p>
                        <Alert severity="error">
                          <AlertTitle>Error</AlertTitle>
                          <strong>{props.NetRequest.errMess}</strong>
                        </Alert>
                      }
                      {
                        decoded._id !== '' &&
                        <button
                          style={{ margin: "5px" }} class="btn-solid-reg"
                          onClick={() => {
                            props.NetRequest.errMess = null
                            props.postApplication({
                              volunteer: decoded._id,
                              project: project._id
                            })
                          }} >
                          Apply

                        </button>
                      }
                      {
                        decoded._id === '' &&
                        <a
                          style={{ margin: "5px" }} class="btn-solid-reg" href='/login'>
                          Login to Apply
                        </a>
                      }
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
                <p>
                  Education volunteers help on a range of programmes that improve
                  education practices and processes. The work undertaken by
                  education volunteers continues long after the volunteer has left,
                  improving the learning of thousands of children. As we work to
                  improve education at all levels, we need volunteers from a range
                  of education backgrounds.
                </p>
                <h2>Additional Detail</h2>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.”
                </p>
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
            
                <div>
                  <a class="btn-solid-lg" href="#contact">
                    Browse All Projects
                  </a>
                </div>
              </div>
            
            </div>
          </div>

      }
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionCard)