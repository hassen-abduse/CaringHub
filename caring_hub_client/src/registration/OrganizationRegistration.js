import React, { useState } from "react";
import Container from "@material-ui/core/Container";

import { Form, Input, Button, DatePicker, InputNumber, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Demo from "../organization/components/ImageUploadComponent";
import "../organization/components/JobPostDescription.css";
import FileUpload from "./FileUpload";

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

export default function OrganizationRegistration() {
  const { Option } = Select;
  const [selectedItems, setSelectedItems] = useState([]);
  const handleChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
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
                      Organization Description
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                      Write a brief Description about your Organization:{" "}
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
                {/* media */}
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
                      Legal Documentations
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                      Provide Some Legal Documentation of Organization:
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <Form.Item
                      name="upload"
                      label="Upload"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: "Please select an image!",
                      //   },
                      // ]}
                    >
                      <FileUpload />
                    </Form.Item>

                    <br></br>
                  </div>
                </div>
                <br></br>
                {/* logo */}
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
                      Image or Logo
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                      Insert Media file:{" "}
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <Form.Item
                      name="upload"
                      label="Upload"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: "Please select an image!",
                      //   },
                      // ]}
                    >
                      <Demo />
                    </Form.Item>

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
                      Give a Cause Area of your Organization:{" "}
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
