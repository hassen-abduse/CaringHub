import React, { Component } from "react";
import SearchPanel from "./SearchPanel";
class SearchProject extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{
            //   marginTop: "65px",
            content: "",
            position: "relative",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            width: "100%",
            backgroundImage: `url("https://det2iec3jodwn.cloudfront.net/frontend/img/volunteer_hero3X.8cfd6ca.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat no-repeat",
          }}
        >
          <div>
            <div
              style={{
                paddingTop: "56px",
                paddingBottom: "20px",
                background: "#0e1630",
                opacity: ".7",
              }}
            >
              <p
                className="AtkinsonHyperlegible"
                style={{
                  marginTop: "48px",
                  marginBottom: 0,
                  color: "white",
                  fontSize: "3rem",
                  textAlign: "center",
                  fontWeight: "500",
                  lineHeight: "1.2",
                }}
              >
                Volunteer Your Skill With CaringHub
              </p>

              <p
                style={{
                  color: "white",
                  fontWeight: "500",
                  lineHeight: "21.6px",
                  fontSize: "1rem",
                  textAlign: "center",
                  margin: 0,
                  padding: "4px 0 16px",
                }}
              >
                All nonprofits have been affected by COVID-19. Help lift up
                critical, at-risk missions below.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchProject;
