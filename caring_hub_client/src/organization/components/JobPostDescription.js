import React, { useState } from "react";
import Container from "@material-ui/core/Container";

import "./JobPostDescription.css";
import Demo from "./ImageUploadComponent";
import { Form, Input, Button, DatePicker, InputNumber, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import UploadMedia from "../components/UploadMedia";
import { postProject } from "../../redux/ActionCreators/projectActions";
import { connect } from 'react-redux'
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, DialogTitle, Box } from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import { Redirect } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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
    NetRequest: state.NetRequest
  }
}
const mapDispatchToProps = (dispatch) => ({
  postProject: (data) => dispatch(postProject(data)),
})

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width: '50%',
    padding: theme.spacing(0, 3, 3, 3),
  },
}));


function JobPostDescription(props) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [file, setSelectedFile] = useState(null)
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    props.NetRequest.errMess = null
    props.NetRequest.success = false
    var project = new FormData()
    project.append("name", values.name)
    project.append('description', values.description)
    project.append('startDate', values.start_end_date[0]._d)
    project.append('endDate', values.start_end_date[1]._d)
    project.append('location', JSON.stringify({ city: values.city }))
    project.append('skillSets', JSON.stringify(selectedSkills))
    project.append('causeAreas', JSON.stringify(selectedCauses))
    project.append('projectImage', file)
    props.postProject(project)
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
            {props.NetRequest.isLoading === false ?
              <DialogTitle>
                <Box display="flex" justifyContent='flex-end'>
                  <Box>
                    <IconButton onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Box>
              </DialogTitle>
              : null
            }
            {
              props.NetRequest.isLoading === true ?
                <div style={{ padding: '20px', paddingTop: '40px', paddingLeft: '40px' }}>
                  <div>
                    <CircularProgress />
                    <br></br>
                    <strong>Please wait...</strong>
                  </div>


                </div>
                : null
            }
            {
              props.NetRequest.errMess &&

              <Alert style={{ padding: '20px' }} severity="error">
                <AlertTitle style={{ fontWeight: 'bold' }}>Error</AlertTitle>
                <strong>{props.NetRequest.errMess}</strong>
              </Alert>
            }
            {
              props.NetRequest.success === true ?
                <Alert style={{ padding: '20px' }} severity="success">
                  <AlertTitle style={{ fontWeight: 'bold' }}>Success</AlertTitle>
                  <strong>Successfully Posted!</strong>
                </Alert>
                : null
            }
          </div>
        </Fade>
      </Modal>
      <Form
        name="basic"
        initialValues={{
          remember: true,
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
                <h3>
                  Create a volunteer opportunity so volunteers can find you in
                  the search results Your Profile and Opportunity will be
                  visible once your organization has been approved.{" "}
                </h3>
              </div>
              <div
                style={{
                  backgroundColor: "#eee",
                  padding: "30px 25px",
                  border: "1px solid #E6E6E6",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px 0 #d6d6d6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "24px 38px",
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
                    Get Started
                  </label>
                  <br></br>
                  <br></br>
                  <label>Give your Opportunity a title: </label>

                  {/* <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginTop: "10px" }}>
                    <label>Title</label> &nbsp;
                    <input type="text" className="inputs" />
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <label>Contact</label>
                    <input type="text" className="inputs" />
                  </div>
                </div> */}

                  <Form.Item
                    style={{ marginTop: '20px' }}
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

                  <br></br>

                  <br></br>
                </div>
              </div>
              <br></br>
              {/* location div */}
              <div
                style={{
                  backgroundColor: "#eee",
                  padding: "30px 25px",
                  border: "1px solid #E6E6E6",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px 0 #d6d6d6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "24px 38px",
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
                  padding: "30px 25px",
                  border: "1px solid #E6E6E6",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px 0 #d6d6d6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "24px 38px",
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
                  {/* 
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ marginRight: "20%", marginTop: "10px" }}>
                    <label>Start Date</label> &nbsp;
                    <input type="text" />
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <label>End Date</label> &nbsp;
                    <input type="text" />
                  </div>
                </div>
             
              */}
                  <Form.Item
                    style={{ marginTop: '20px' }}
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
                  padding: "30px 25px",
                  border: "1px solid #E6E6E6",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px 0 #d6d6d6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "24px 38px",
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
                  padding: "30px 25px",
                  border: "1px solid #E6E6E6",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px 0 #d6d6d6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "24px 38px",
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
                  <label>
                    What skills are you looking for in volunteers:{" "}
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
                  padding: "30px 25px",
                  border: "1px solid #E6E6E6",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px 0 #d6d6d6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "24px 38px",
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
                  <label>
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
              <br></br>
              <div
                style={{
                  backgroundColor: "#eee",
                  padding: "30px 25px",
                  border: "1px solid #E6E6E6",
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px 0 #d6d6d6",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "24px 38px",
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
                    MEDIA
                  </label>
                  <br></br>
                  <br></br>
                  <label>
                    Upload an image :{" "}
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
                      label="Project Image"
                      name="projectImage"
                      rules={[
                        {
                          required: true,
                          message: "Please input your city!",
                        },
                      ]}
                    >
                      <Input type='file' name='uploadImage' onChange={(e) => setSelectedFile(e.target.files[0])} />

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
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Container >
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPostDescription)
