import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Form, Input, Button, Select } from "antd";
import { registerVolunteer } from "../redux/ActionCreators/registrationActions";
import TextArea from "antd/lib/input/TextArea";
import "../organization/components/JobPostDescription.css";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, DialogTitle, Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { Redirect } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const mapStateToProps = (state) => {
  return {
    Registration: state.Registration,
    Skills: state.Skills,
    Causes: state.Causes,
  };
};
const mapDispatchToProps = (dispatch) => ({
  registerVolunteer: (data) => dispatch(registerVolunteer(data)),
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

function VolunteerRegistration(props) {
  const { Option } = Select;
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [profile, setProfile] = useState(null);
  const [resume, setResume] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    props.Registration.errMess = null;
    const volunteer = new FormData();
    volunteer.append("firstName", values.firstName);
    volunteer.append("lastName", values.lastName);
    volunteer.append("username", values.username);
    volunteer.append("phoneNumber", values.prefix + values.phone);
    volunteer.append("emailAddress", values.email);
    volunteer.append("skillSets", JSON.stringify(selectedSkills));
    volunteer.append("causeAreas", JSON.stringify(selectedCauses));
    volunteer.append("password", values.password);
    volunteer.append('aboutMe', values.background)
    volunteer.append("address", JSON.stringify({ city: values.city }));
    volunteer.append("VolPP", profile);
    volunteer.append("doc", resume);
    props.registerVolunteer(volunteer);
    handleOpen();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="+251">+251</Option>
        <Option value="09">09</Option>
      </Select>
    </Form.Item>
  );

  if (props.Registration.success === true) {
    return <Redirect to="/login" />;
  }

  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
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
            {props.Registration.isLoading === false ? (
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
            {props.Registration.isLoading === true ? (
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
            {props.Registration.errMess && (
              <Alert style={{ padding: "20px" }} severity="error">
                <AlertTitle style={{ fontWeight: "bold" }}>Error</AlertTitle>
                <strong>{props.Registration.errMess}</strong>
              </Alert>
            )}
            {props.Registration.success === true ? (
              <Alert style={{ padding: "20px" }} severity="success">
                <AlertTitle style={{ fontWeight: "bold" }}>Success</AlertTitle>
                <strong>Registration Succesfull!</strong>
              </Alert>
            ) : null}
          </div>
        </Fade>
      </Modal>

      <Container style={{ backgroundColor: "#EEEEEE" }}>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
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
                    // backgroundColor: "#eee",
                    // padding: "30px 25px",
                    border: "1px solid #E6E6E6",
                    borderRadius: "15px",
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

                    <label style={{ margin: "2rem" }}>
                      Give your Basic Informations :
                    </label>

                    <Form.Item
                      label="First Name"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your your last name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="User Name"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your user name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input
                        addonBefore={prefixSelector}
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }

                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
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
                    // backgroundColor: "#eee",
                    // padding: "30px 25px",
                    border: "1px solid #E6E6E6",
                    borderRadius: "15px",
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
                      Location
                    </label>
                    <br></br>
                    <br></br>
                    <label>Give your Location:</label>
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
                {/* skills */}
                <div
                  style={{
                    // backgroundColor: "#eee",
                    // padding: "30px 25px",
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
                      What are your skills
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
                      <br></br>
                      <label>
                        Write a brief Description about your Skills:
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
                        name="background"
                        rules={[
                          {
                            required: true,
                            message: "Please input description about your skills!",
                          },
                        ]}
                      >
                        <TextArea rows={4} />
                      </Form.Item>
                    </div>
                    <br></br>

                    <br></br>
                  </div>
                </div>
                <br></br>
                {/* causes  */}
                <div
                  style={{
                    // backgroundColor: "#eee",
                    // padding: "30px 25px",
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
                      Give a Cause Area of your Interest:{" "}
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
                  <br></br>
                  <div
                    style={{
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
                        Upload your Profile Picture :{" "}
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
                          name="volPP"
                          rules={[
                            {
                              required: true,
                              message: "Please input profile picture!",
                            },
                          ]}
                        >
                          <Input
                            type="file"
                            name="volPP"
                            onChange={(e) => setProfile(e.target.files[0])}
                          />
                        </Form.Item>

                        <label>
                          Upload your Resume :{" "}
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <Form.Item
                          name="volResume"
                          rules={[
                            {
                              required: true,
                              message: "Please input your resume!",
                            },
                          ]}
                        >
                          <Input
                            type="file"
                            name="volResume"
                            onChange={(e) => setResume(e.target.files[0])}
                          />
                        </Form.Item>
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
                marginRight: "17%",
              }}
            >
              <Button
                style={{ marginBottom: "2rem" }}
                type="primary"
                htmlType="submit"
                className="btn-solid-reg"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolunteerRegistration);
