import { Upload, Button } from "antd";
import { UploadOutlined, StarOutlined } from "@ant-design/icons";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [],
  showUploadList: {
    showDownloadIcon: true,
    downloadIcon: "download ",
    showRemoveIcon: true,
    removeIcon: (
      <StarOutlined
        onClick={(e) => console.log(e, "custom removeIcon event")}
      />
    ),
  },
};

export default function VolunteerFileUpload() {
  return (
    <div
      style={{
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
          Profile Picture
        </label>
        <br></br>

        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload an Image</Button>
        </Upload>
      </div>

      <div
        style={{
          padding: "24px 38px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
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
          Upload your CV
        </label>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload Your CV</Button>
        </Upload>
      </div>
    </div>
  );
}
