import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import Intro from './../Intro/Intro';
import { Projects } from './../Projects/Projects';
import { About } from './../About/About';

import { useMediaQuery } from 'react-responsive'
import { Hamburger } from "../Hamburger/Hamburger";
import { Navigator } from './../Navigator/Navigator';

const Landing = () => {
  const [navbarState, setNavbarState] = useState("Home");
  const [showNavigator, setShowNavigator] = useState(false);

  const isPhone = useMediaQuery({
    query: '(max-device-width: 825px)'
  })


  return (
    <>
    {isPhone && <Hamburger setShowNavigator={setShowNavigator} showNavigator={showNavigator} navbarState={navbarState} />}
    {isPhone && <Navigator setShowNavigator={setShowNavigator} showNavigator={showNavigator} navbarState={navbarState} setNavbarState={setNavbarState} />}
      {!isPhone && <Navbar navbarState={navbarState} setNavbarState={setNavbarState} />}
      <Intro setNavbarState={setNavbarState}  />
      <Projects setNavbarState={setNavbarState} />
      <About setNavbarState={setNavbarState} />
    </>
  );
};

export default Landing;
