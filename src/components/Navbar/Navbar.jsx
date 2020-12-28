import React, { useState } from "react";
import "./Navbar.scss";
import { InView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { Link as Scroller } from "react-scroll";
import jpLogo from "../../media/jpLogo.svg";


const Navbar = ({ navbarState, setNavbarState, inContact }) => {



  const [showNav, setShowNav] = useState(false)

  const navLinks = [
    {
      value: "Home",
    },
    {
      value: "Projects",
    },
    {
      value: "About",
    },
  ];
  return (
    <InView threshold={0.2} onChange={(inView) => setShowNav(inView)}>
    <div className="navbar-container">
      <div className={`inner ${showNav && 'show-nav'}`}>
        <div className="left-container">
          <img src={jpLogo} alt="logo" />
        </div>

        <div className="right-container">
          <div className="nav-links-container">
            {!inContact && navLinks.map((nav) => {
              return (
                <Scroller
                  key={nav.value}
                  activeClass="active"
                  to={nav.value}
                  smooth={true}
                  duration={1000}
                  className={`nav ${navbarState === nav.value && "highlight"}`}
                  onClick={() => setNavbarState(nav.value)}
                >
                  {nav.value}
                  <span className={navbarState === nav.value && "expand-border"}></span>
                </Scroller>
              );
            })}
            {inContact && navLinks.map((nav) => {
              return (
                <Link
                  key={nav.value}
                  to='/'
                  className='nav'
                >
                  {nav.value}
                  <span className={navbarState === nav.value && "expand-border"}></span>
                </Link>
              );
            })}
          </div>
            <Link to='/contact' className='contact-link'>
                Get in touch
            </Link>
        </div>
      </div>
    </div>
    </InView>
  );
};

export default Navbar;
