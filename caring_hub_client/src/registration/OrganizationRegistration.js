import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Modal } from "antd";
import { Form, Input, Button, DatePicker, InputNumber, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Demo from "../organization/components/ImageUploadComponent";
import "../organization/components/JobPostDescription.css";
import { connect } from "react-redux";
import { registerOrg } from "../redux/ActionCreators/registrationActions";
const mapStateToProps = state => {
  return {
    Registration: state.Registration,
    Skills: state.Skills,
    Causes: state.Causes,
  }
}
const mapDispatchToProps = (dispatch) => ({
  registerOrg: (data) => dispatch(registerOrg(data)),
})
function OrganizationRegistration(props) {
  const { Option } = Select;
  const [logo, setLogo] = useState(null)
  const [legalDoc, setLegalDoc] = useState(null)
  const onFinish = (values) => {
    const org = new FormData()
    org.append('name', values.name)
    org.append('username', values.username)
    org.append('phoneNumber', values.phone)
    org.append('emailAddress', values.email)
    org.append('address', JSON.stringify({ city: values.city }))
    org.append('mission', values.mission)
    org.append('password', values.password)
    org.append('logo', logo)
    org.append('legalDoc', legalDoc)
    
    props.registerOrg(org)
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
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
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
                      Give your Organizations Basic Informations :
                    </label>


                    <Form.Item
                      label="Organization Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your nrganization name!",
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
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input username!",
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
                      Organization Location
                    </label>
                    <br></br>
                    <br></br>
                    <label>Give your Organization Location:</label>
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
                {/* opportunity description */}
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
                      Organization Mission
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                      Write a brief mission of your Organization:{" "}
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
                      name="mission"
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
                <div
                  style={{
                    border: "1px solid #E6E6E6",
                    borderRadius: "10px",
                    boxShadow: "1px 2px 6px 0 #d6d6d6",
                    width: "100%",
                  }}
                ></div>
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
                      Upload your Logo :{" "}
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
                        name="logo"
                        rules={[
                          {
                            required: true,
                            message: "Please input logo!",
                          },
                        ]}
                      >
                        <Input type='file' name='logo' onChange={(e) => setLogo(e.target.files[0])} />

                      </Form.Item>

                      <label>
                        Upload a Legal Doc :{" "}
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          *
                        </span>
                      </label>
                      <Form.Item
                        name="legalDoc"
                        rules={[
                          {
                            required: true,
                            message: "Please input your legal doc!",
                          },
                        ]}
                      >
                        <Input type='file' name='legalDoc' onChange={(e) => setLegalDoc(e.target.files[0])} />

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
//
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationRegistration)