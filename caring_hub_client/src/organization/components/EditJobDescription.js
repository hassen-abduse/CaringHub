import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import "./JobPostDescription.css";
import { Form, Input, Button, DatePicker, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { postProject } from "../../redux/ActionCreators/projectActions";
import { connect } from "react-redux";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, DialogTitle, Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useParams } from "react-router";
import { baseUrl } from "../../redux/shared/baseUrl";
import { useEffect } from "react";
const { RangePicker } = DatePicker;
const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};

const mapStateToProps = (state) => {
  return {
    Skills: state.Skills,
    Causes: state.Causes,
    NetRequest: state.NetRequest,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postProject: (data) => dispatch(postProject(data)),
});

const useStyles = makeStyles((theme) => ({
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

function EditJobDescription(props) {
  const { projectId } = useParams()
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [file, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [updateError, setUpdateError] = useState(null)
  const [updateDone, setUpdateDone] = useState(false)
  const [resp, setResp] = useState(null)

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(async () => {
    fetch(baseUrl + "projects/" + projectId)
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
  }, []);
  const onFinish = (values) => {
    // var project = new FormData();
    // project.append("name", values.name);
    // project.append("description", values.description);
    // project.append("startDate", values.start_end_date[0]._d);
    // project.append("endDate", values.start_end_date[1]._d);
    // project.append("location", JSON.stringify({ city: values.city }));
    // project.append("skillSets", JSON.stringify(selectedSkills));
    // project.append("causeAreas", JSON.stringify(selectedCauses));
    // project.append("projectImage", file);
    // props.postProject(project);
    // handleOpen();
    var updates = {}

    if (values.name !== project.name)
      updates.name = values.name

    if ((values.description !== project.description) && (values.description !== ""))
      updates.description = values.description

    if ((values.start_end_date[0]._d !== project.startDate))
      updates.startDate = values.start_end_date[0]._d

    if (values.start_end_date[1]._d !== project.endDate)
      updates.endDate = values.start_end_date[1]._d

    if (values.city !== project.location.city)
      updates.location = {city: values.city}

    if (values.skills !== project.skillSets.map(skill => skill._id))
      updates.skillSets = values.skills

    if (values.causes !== project.causeAreas.map(cause => cause._id))
      updates.causeAreas = values.causes
    console.log(updates)
    const bearer = 'Bearer ' + localStorage.getItem('token')

    fetch(baseUrl + "projects/" + projectId, {
      method: 'PUT',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
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
        setResp(response);
        setUpdateDone(true);
        console.log(response)
      })
      .catch((error) => {
        setUpdateError(error.message);
        setUpdateDone(true);
        console.log(error.message)
      });
    handleOpen()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <Modal
        className={classes.modal}
        open={open}
        disableBackdropClick
        disableEscapeKeyDown
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {updateDone === true ? (
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
            { updateDone === false ?(
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
            ): null}
            {updateError && (
              <Alert style={{ padding: "20px" }} severity="error">
                <AlertTitle style={{ fontWeight: "bold" }}>Error</AlertTitle>
                <strong>{updateError}</strong>
              </Alert>
            )}
            {resp && (
              <Alert style={{ padding: "20px" }} severity="success">
                <AlertTitle style={{ fontWeight: "bold" }}>Success</AlertTitle>
                <strong>Update Succesfull!</strong>
              </Alert>
            )}
          </div>
        </Fade>
      </Modal>


      {
        isLoaded === false ?
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
          : null
      }
      {
        error &&
        <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
          <div className='container'>
            <div className='row' style={{ display: 'flex', justifyContent: 'center', }}>
              <Alert style={{ margin: '50px', padding: '50px' }} severity="error">
                <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
                <strong>{props.Organizations.errMess}</strong>
              </Alert>
            </div>
          </div>

        </Container >
      }
      {
        isLoaded === true ?

          <Form
            name="basic"
            initialValues={{
              remember: true,
              name: project.name,
              description: project.description,
              city: project.location.city,
              skills: project.skillSets.map(skill => skill._id),
              causes: project.causeAreas.map(cause => cause._id)

            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    marginTop: "60px",
                  }}
                >
                  <div
                    style={{
                      padding: "3rem",
                    }}
                  >
                    <h3>Create a Project</h3>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#eee",
                      boxShadow: "1px 2px 6px 0 #d6d6d6",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "44px 38px",
                        backgroundColor: "white",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#0B697F",
                        }}
                      ></span>
                      <label
                        style={{
                          color: "#0B697F",
                          position: "relative",
                          top: " -6px",
                          left: "0",
                          padding: "15px 0px",
                          fontSize: "1em",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                        }}
                      >
                        Get Started
                      </label>
                      <br></br>
                      <label>Give your Opportunity a title: </label>

                      <Form.Item
                        style={{ marginTop: "20px" }}
                        label="Title"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Title!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      ></Form.Item>
                    </div>
                  </div>
                  <br></br>
                  {/* location div */}
                  <div
                    style={{
                      backgroundColor: "#eee",

                      boxShadow: "1px 2px 6px 0 #d6d6d6",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "54px 38px",
                        backgroundColor: "white",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#0B697F",
                        }}
                      ></span>
                      <label
                        style={{
                          color: "#0B697F",
                          position: "relative",
                          top: " -6px",
                          left: "0",
                          paddingLeft: "5px",
                          fontSize: "1em",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                        }}
                      >
                        Opportunity Location
                      </label>
                      <br></br>
                      <br></br>
                      <label>Give your opportunity Location:</label>
                      <br></br>
                      <br></br>
                      {/* <label>City</label> &nbsp; */}
                      <Form.Item
                        label="City"
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "Please input your city!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </div>
                  </div>{" "}
                  <br></br>
                  {/* date and time */}
                  <div
                    style={{
                      backgroundColor: "#eee",

                      boxShadow: "1px 2px 6px 0 #d6d6d6",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "44px 38px",
                        backgroundColor: "white",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#0B697F",
                        }}
                      ></span>
                      <label
                        style={{
                          color: "#0B697F",
                          position: "relative",
                          top: " -6px",
                          left: "0",
                          paddingLeft: "5px",
                          fontSize: "1em",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                        }}
                      >
                        Date and time
                      </label>
                      <br></br>
                      <br></br>
                      <label>Give your Opportunity Date: </label>

                      <Form.Item
                        style={{ marginTop: "20px" }}
                        name="start_end_date"
                        label="Select Start and End Date"
                        {...rangeConfig}
                      >
                        <RangePicker />
                      </Form.Item>
                      <br></br>

                      <br></br>
                    </div>
                  </div>
                  <br></br>
                  {/* opportunity description */}
                  <div
                    style={{
                      backgroundColor: "#eee",

                      boxShadow: "1px 2px 6px 0 #d6d6d6",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "44px 38px",
                        backgroundColor: "white",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#0B697F",
                        }}
                      ></span>
                      <label
                        style={{
                          color: "#0B697F",
                          position: "relative",
                          top: " -6px",
                          left: "0",
                          paddingLeft: "5px",
                          fontSize: "1em",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                        }}
                      >
                        Opportunity Description
                      </label>
                      <br></br>
                      <br></br>
                      <label>
                        Write a brief Description of your opportunity:{" "}
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <br></br>
                      <br></br>
                      <Form.Item
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: "Please input Job Description!",
                          },
                        ]}
                      >
                        <TextArea rows={4} />
                      </Form.Item>

                      <br></br>
                    </div>
                  </div>
                  <br></br>
                  {/* skills */}
                  <div
                    style={{
                      backgroundColor: "#eee",

                      boxShadow: "1px 2px 6px 0 #d6d6d6",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "44px 38px",
                        backgroundColor: "white",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#0B697F",
                        }}
                      ></span>
                      <label
                        style={{
                          color: "#0B697F",
                          position: "relative",
                          top: " -6px",
                          left: "0",
                          paddingLeft: "5px",
                          fontSize: "1em",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                        }}
                      >
                        Skills
                      </label>
                      <br></br>
                      <br></br>
                      <label style={{ padding: "5px 0px" }}>
                        What skills are you looking for in projects:{" "}
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div>
                        {/* <Multiselect options={data} displayValue="name" /> */}
                        <Form.Item
                          name="skills"
                          rules={[
                            {
                              required: true,
                              message: "Please input skill requirments!",
                            },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Inserted are removed"
                            value={selectedSkills}
                            onChange={setSelectedSkills}
                            style={{ width: "100%" }}
                          >
                            {props.Skills.skills.map((item) => (
                              <Select.Option key={item._id} value={item._id}>
                                {item.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                      <br></br>
                    </div>
                  </div>
                  <br></br>
                  {/* causes  */}
                  <div
                    style={{
                      backgroundColor: "#eee",

                      boxShadow: "1px 2px 6px 0 #d6d6d6",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "44px 38px",
                        backgroundColor: "white",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#0B697F",
                        }}
                      ></span>
                      <label
                        style={{
                          color: "#0B697F",
                          position: "relative",
                          top: " -6px",
                          left: "0",
                          paddingLeft: "5px",
                          fontSize: "1em",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                        }}
                      >
                        Cause Area
                      </label>
                      <br></br>
                      <br></br>
                      <label style={{ padding: "5px 0px" }}>
                        Give the Cause Area of the Opportunity:{" "}
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <div>
                        <Form.Item
                          name="causes"
                          rules={[
                            {
                              required: true,
                              message: "Please input cause requirments!",
                            },
                          ]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Inserted are removed"
                            value={selectedCauses}
                            onChange={setSelectedCauses}
                            style={{ width: "100%" }}
                          >
                            {props.Causes.causes.map((item) => (
                              <Select.Option key={item._id} value={item._id}>
                                {item.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </Container>
              <div
                style={{
                  display: "flex",

                  justifyContent: "flex-end",
                  marginTop: "30px",
                  marginRight: "20%",
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
          : null}
    </Container>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJobDescription);
