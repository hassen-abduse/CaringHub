import React from "react";
import Faq from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HowItWork from "./HotItWork";
import Samples from "./Samples";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <HowItWork />
        <Samples />
        <Faq />
        <Footer />
      </div>
    );
  }
}
export default Landing;
