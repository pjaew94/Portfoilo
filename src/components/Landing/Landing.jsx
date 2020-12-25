import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import "./Landing.scss"; 

import Intro from './../Intro/Intro';
import { Projects } from './../Projects/Projects';
import { About } from './../About/About';

const Landing = () => {
  const [navbarState, setNavbarState] = useState("Home");




  return (
    <>
      <Navbar navbarState={navbarState} setNavbarState={setNavbarState} />
      <Intro setNavbarState={setNavbarState}  />
      <Projects setNavbarState={setNavbarState} />
      <About setNavbarState={setNavbarState} />
    </>
  );
};

export default Landing;
