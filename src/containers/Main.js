import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
// import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import Service from "./service/Services";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <WorkExperience />
        <Service />
        {/* <Projects /> */}
        {/* <StartupProject /> */}
        {/* <Achievement /> */}
        {/* <Twitter /> */}
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
