import React from "react";
import img from "../assets/img/404/2634442.jpg";
export default function FouroFour() {
  console.log("called");
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
        }}
      >
        <img
          style={{
            maxWidth: "700px",
            height: "100%",
          }}
          src={img}
        ></img>
      </div>
    </div>
  );
}
