import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ProfileCard from "../../components/ProfileCard";
import SentApplicationCard from "../../components/SentApplicationCard";
import Img from "../../../assets/img/bg2.jpg";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <ProfileCard />
        <Container>
          <div
            style={{
              height: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: `url(${Img})`,
              backgroundSize: "cover",
            }}
          >
            <Button
              style={{
                backgroundColor: "yellow",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              Find Project
            </Button>
            <Button
              style={{
                backgroundColor: "#e3e3e3",
                marginLeft: "30px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              {" "}
              Discover
            </Button>
          </div>
          <br />
          <Typography style={{ marginTop: "20px", marginBottom: "5px" }}>
            Application sent{" "}
            <span style={{ backgroundColor: "#e3e3e3", padding: "0 5px" }}>
              3
            </span>
          </Typography>
          {/* <Container
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#e3e3e3",
              marginTop: "0px",
              padding:"20px"
            }}
          >
            <div > 
            <Typography style={{backgroundColor:'yellow',width:"160px",padding:"2px 6px"}} align="center" variant="caption" >
            application sent 
            </Typography>

            </div>
            <div>
            <Typography variant="caption" color="error">
            Applied on May 12/2021
            </Typography>
            </div>
            <div>
              <Typography>
                ABC Blood Donation Club.
              </Typography>
            </div>
          
          &nbsp;
          &nbsp;
          
            <div> 
              <Typography>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Ac feugiat sed lectus vestibulum mattis. Aliquet nibh praesent tristique magna sit. Amet consectetur adipiscing elit ut. Pellentesque id nibh tortor id. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus.
               </Typography>
            </div>
           
          </Container> */}
          <SentApplicationCard />
          <br />
          <SentApplicationCard />
          <br />
          <SentApplicationCard />
        </Container>
      </div>
    );
  }
}

export default Dashboard;
