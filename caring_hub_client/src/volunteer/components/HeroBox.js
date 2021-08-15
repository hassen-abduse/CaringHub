import React from "react";
import { Box } from "@material-ui/core";
import Imge from "../../assets/img/1.jpg";

export default function HeroBox() {
  return (
    <Box mb={3} mt={5}>
      <div>
        <div style={{ position: "relative" }}>
          <img
            src={Imge}
            width="100%"
            height="400px"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "35%",
              width: "500px",
            }}
          >
            <h4>
              Hi, Interested in giving back? Looking for a meaningful ways to
              support causes and communities you care about ? Want to build your
              skills ?
            </h4>
            You’re in the right place !
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Your Personalized Recommendations</h1>
          <h4>We think this projects could be a great suit for you </h4>
        </div>
      </div>
    </Box>
  );
}
