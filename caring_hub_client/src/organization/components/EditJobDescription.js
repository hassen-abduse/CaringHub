import React, { useState } from "react";
import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField";

import "./JobPostDescription.css";
import Demo from "./ImageUploadComponent";
import { Form, Input, Button, DatePicker, InputNumber, Select } from "antd";
// import { InfoCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

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
const OPTIONS = ["Teacher", "Event Organizing", "Development", "Health care"];

export default function EditJobDescription() {
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
  return (
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
            }}
          >
            <div>
              <h3>
                Create a volunteer opportunity so volunteers can find you in the
                search results Your Profile and Opportunity will be visible once
                your organization has been approved.{" "}
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
                <label>Give your Opportunity a title and contact:</label>

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
                  label="Title"
                  name="title"
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
                  label="Contact Address"
                  name="contact_address"
                  rules={[
                    {
                      required: true,
                      message: "Please input your contact adress!",
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
                <label>Give your Opportunity Date and Time:</label>
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
                  name="start_end_date"
                  label="Select Start and End Date"
                  {...rangeConfig}
                >
                  <RangePicker />
                </Form.Item>
                <br></br>
                <div style={{ marginTop: "10px" }}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input number of volunteers!",
                      },
                    ]}
                    name="num_of_volunteers"
                    label="Number of volunteers"
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                </div>

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
            <br></br>
            {/* media */}
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
                  Media
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
          <Button type="primary" htmlType="submit">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit"></Button>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </div>
    </Form>
  );
}
