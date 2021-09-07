import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Modal } from "antd";
import { Form, Input, Button, DatePicker, InputNumber, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Demo from "../organization/components/ImageUploadComponent";
import "../organization/components/JobPostDescription.css";
import VolunteerFileUpload from "./VolunteerFileUpload";

const mapStateToProps = state => {
  return {
    Registration: state.Registration,
    Skills: state.Skills,
    Causes: state.Causes,
  }
}
const mapDispatchToProps = (dispatch) => ({
  registerVolunteer: (data) => dispatch(registerVolunteer(data)),
})

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
const OPTIONS = ["Teaching", "Event Organizing", "Developing", "Marketing"];

<<<<<<< HEAD
export default function VolunteerRegistration() {
  const [visible, setVisible] = useState(false);
=======
function VolunteerRegistration(props) {
>>>>>>> 02fa639af8ed9f761dc258a1ce78c687507cbdcc
  const { Option } = Select;
  const [selectedItems, setSelectedItems] = useState([]);
  const handleChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };
  const onFinish = (values) => {
    props.registerVolunteer({
      firstName:values.firstName,
      lastName: values.lastName,
      username: values.username,
      phoneNumber: values.prefix + values.phone,
      emailAddress: values.email,
      skillSets: [],
      causeAreas: [],
      password: values.password,
      address: {
        city: values.city
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const options = [
    { id: "1", name: "web development" },
    { id: "2", name: "graphics designer" },
    { id: "3", name: "social work" },
    { id: "4", name: "Teaching" },
    { id: "5", name: "Marketing" },
    { id: "6", name: "Event Hosting" },
  ];
  const [data, setDate] = useState(options);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

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
        <Modal
          title="Upload Files"
          centered
          visible={visible}
          // mask={false}
          maskStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          }}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={700}
          footer={[
            <Button
              key="back"
              size="large"
              color="primary"
              onClick={() => setVisible(false)}
            >
              Done
            </Button>,
          ]}
        >
          <VolunteerFileUpload />
        </Modal>
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
                          value={selectedItems}
                          onChange={handleChange}
                          style={{ width: "100%" }}
                        >
                          {filteredOptions.map((item) => (
                            <Select.Option key={item} value={item}>
                              {item}
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
                          value={selectedItems}
                          onChange={handleChange}
                          style={{ width: "100%" }}
                        >
                          {filteredOptions.map((item) => (
                            <Select.Option key={item} value={item}>
                              {item}
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
              {/* <Button
            variant="contained"
            style={{ backgroundColor: "#FFDB15" }}
            href="/volunteer/reviewApplication"
          >
            Post
          </Button> */}
              <Button
                style={{ marginBottom: "2rem" }}
                type="primary"
                htmlType="submit"
                className="btn-solid-reg"
                onClick={() => setVisible(true)}
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

export default connect(mapStateToProps, mapDispatchToProps) (VolunteerRegistration)