import React from "react";
import { Box } from "@material-ui/core";
import Imge from "../../assets/img/landing3.png";
import landingImg from "../../assets/img/landingImg.svg";
import freqAskedPic from "../../assets/img/bcg.jpg";
import Button from "@material-ui/core/Button";
import LandingCardHolder from "./LandingCardHolder";

export default function HeroBox() {
  return (
    <Box mb={3} mt={5}>
      <div style={{ position: "relative", display: "flex" }}>
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
          <h2
            style={{
              color: "white",
            }}
          >
            Volunteer your skills and make a difference
          </h2>
          {/* <Button
              size="small"
              color="primary"
              href="/volunteer/jobDescription"
            >
              Find project
            </Button> */}
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
          >
            <Button variant="contained" style={{ backgroundColor: "#FFDB15" }}>
              Find a Project
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              paddingRight: "30px",
            }}
          >
            <img
              src={landingImg}
              width="400%"
              height="400px"

              // style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "center",
              marginLeft: "30%",
              paddingLeft: "30px",
              paddingBottom: "200px",
            }}
          >
            <div>
              <h1>Facilitating meaningful volunteer opportunities</h1>
            </div>

            <div>
              <h3>
                Volunteering your skills is an impactful way to give back – the
                average volunteer project on Catchafire is worth $5,200 in
                professional services. Connect directly with nonprofits and make
                a difference.
              </h3>
            </div>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFDB15" }}
                href="/volunteer/findProject"
              >
                See available projects
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#E0E4F0",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              marginLeft: "40%",
            }}
          >
            <h1>Volunteer the way you want</h1>
          </div>
          <div
            style={{
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <h2>
              We have hundreds of volunteer projects for every skill, time
              commitment, and cause area. Find the one that excites you – and
              complete it virtually.
            </h2>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            paddingBottom: 50,
          }}
        >
          <LandingCardHolder />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          // // backgroundImage: { freqAskedPic },
          width: "100%",
          height: "400px",
          backgroundColor: "#0c1630",
        }}
      >
        <div
          style={{
            color: "black",
            position: "absolute",
            top: "20%",
            left: "35%",
            width: "500px",
          }}
        >
          <h2 style={{ marginLeft: "60px", color: "white" }}>
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
            }}
          >
            <ul
              style={{
                color: "white",
                fontSize: "1rem",
                lineHeight: "2",
              }}
            >
              <li>
                Sed velit lectus, porttitor eu convallis sit amet, semper eget
                mauris. Integer in pulvinar mauris. Donec facilisis.
              </li>
              <li>
                Sed velit lectus, porttitor eu convallis sit amet, semper eget
                mauris. Integer in pulvinar mauris. Donec facilisis.
              </li>
              <li>
                Sed velit lectus, porttitor eu convallis sit amet, semper eget
                mauris. Integer in pulvinar mauris. Donec facilisis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
}
