import React from "react";
import VolunteerApplicationTable from "../../components/VolunteerApplicationTable";

export default function MyApplication() {
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
            <h5>My Applications</h5>
          </div>
          <div>
            <VolunteerApplicationTable />
          </div>
        </div>

        {/* <div className="container">
          <WorkWithTalent />
        </div> */}
      </div>

      {/* how to post a project */}
    </div>
  );
}
