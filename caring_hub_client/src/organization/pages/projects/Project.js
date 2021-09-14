import React from "react";

import OrgProjectCard from "../../components/OrgProjectCard";
import Container from "@material-ui/core/Container";

import WorkWithTalent from "./components/WorkWithTalent";

export default function Project() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginTop: "10%" }}>
            <h5>My Job Posts</h5>
          </div>
          <div>
            <OrgProjectCard />
          </div>
        </div>

        <div className="container">
          <WorkWithTalent />
        </div>
      </div>

      {/* how to post a project */}
    </div>
  );
}
