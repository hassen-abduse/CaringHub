import React from "react";

import { OrgProjectCard } from "../../components/OrgProjectCard";
import Container from "@material-ui/core/Container";

import WorkWithTalent from "./components/WorkWithTalent";

export default function Project() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h1>My Job Posts</h1>
        </div>
        <div style={{ display: "flex" }}>
          <OrgProjectCard />
          <OrgProjectCard />
        </div>

        <div className="container">
          <WorkWithTalent />
        </div>
      </div>

      {/* how to post a project */}
    </div>
  );
}
