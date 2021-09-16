import React, { useState } from "react";
import SearchProject from "./SearchProject";

import SearchPanel from "./SearchPanel";
import { fetchProjects } from "../../redux/ActionCreators/projectActions";
import CardHolder from "./CardHolder";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

const mapStateToProps = (state) => {
  return {
    Projects: state.Projects,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

function HeroBox(props) {
  const [query, setQuery] = useState("");
  const filteredProjects = props.Projects.projects.filter((pro) =>
    pro.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box>
      <div
        class="bg-image p-5 text-center shadow-1-strong rounded text-white"
        style={{
          marginBottom: 0,
          minHeight: "250px",
          // backgroundImage: `url(${Imge})`,
          backgroundColor: "#191E31",
        }}
      >
        <h1 style={{ color: "white", paddingTop: "60px" }} class="mb-3 h2">
          CaringHub
        </h1>

        <p style={{ color: "white" }} className="p-heading">
          Hi, Interested in giving back? Looking for a meaningful ways to
          support causes and communities you care about ? Want to build your
          skills ?
        </p>
        <p style={{ color: "white" }} className="p-heading">
          You’re in the right place !{" "}
        </p>
      </div>
      <SearchProject />

      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Your Personalized Recommendations</h2>
          <p className="text-center">
            We think this projects could be a great suit for you{" "}
          </p>
        </div>
        {/* <SearchPanel onSearch={onSearch} /> */}
        <SearchPanel value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <CardHolder results={filteredProjects} />
    </Box>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroBox);
