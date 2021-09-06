import React, { useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Imge from "../../assets/img/1.jpg";
import SearchProject from "./SearchProject";

import SearchPanel from "./SearchPanel";
import { ProjectCard } from "./ProjectCard";
import CardHolder from "./CardHolder";
import MovieSource from "./MovieSource";

function HeroBox() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "821d565d" },
    });

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };
  return (
    <Box>
      <div
        class="bg-image p-5 text-center shadow-1-strong rounded text-white"
        style={{
          marginBottom: 0,
          minHeight: "400px",
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
        <SearchPanel onSearch={onSearch} />
      </div>
      <CardHolder results={state.results} />
    </Box>
  );
}
export default HeroBox;
