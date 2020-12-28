import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroller } from "react-scroll";
import "./Navigator.scss";

import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";

export const Navigator = ({
  showNavigator,
  setShowNavigator,
  navbarState,
  setNavbarState,
}) => {
  const map = [
    {
      direct: "Home",
    },
    {
      direct: "Projects",
    },
    {
      direct: "About",
    },
  ];
  return (
    <div
      className={`navigator-container l ${showNavigator && "show-navigator"}`}
    >
      <div className="inner">
        {map.map((link, index) => {
          return (
            <Scroller
              key={index}
              activeClass="active"
              to={link.direct}
              smooth={true}
              duration={1000}
              className={`link ${navbarState === link.direct && "highlighted"}`}
              onClick={() => setShowNavigator(false)}
            >
              {link.direct}
            </Scroller>
          );
        })}
        <Link className="link" to="/contact">
          Contact Me
        </Link>

        <div className="icon-container" onClick={() => setShowNavigator(false)} >
        <IconContext.Provider
          value={{ className: "icon" }}
        >
          <IoIosClose />
        </IconContext.Provider>
      </div>
      </div>
    </div>
  );
};
