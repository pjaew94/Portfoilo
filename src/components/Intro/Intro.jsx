import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";

import './Intro.scss';

import landingSvg from "../../media/landing.svg";
import reactLogo from "../../media/reactLogo.png";
import htmlLogo from "../../media/htmlLogo.png";
import cssLogo from "../../media/cssLogo.png";
import sassLogo from "../../media/sassLogo.png";
import jsLogo from "../../media/jsLogo.png";
import mongoLogo from "../../media/mongoLogo.png";
import nodeLogo from "../../media/nodeLogo.png";

const Intro = ({ setNavbarState }) => {

  const { ref, inView } = useInView({
    threshold: 0.3
  })

  useEffect(() => {
    if(inView) {
      setNavbarState('Home')
    } else {
    }
  }, [inView, setNavbarState])

  return (

      <div ref={ref} className="introduction-container" name="Home">
        <div className="inner">
          <div className="upper">
            <div className="left">
              <div className="left-inner">
                <h1>Fearless and ambitious full stack developer</h1>
                <h3>
                  Thanks for stopping by! My name is <span>Jae Park</span>. I
                  take pride as a developer who relishes creating high-quality,
                  detailed, and high-performing web applications. If you're in
                  need of a premium products, I'm your guy!
                </h3>
                <div className="buttons-container">
                  <Scroller
                    activeClass="active"
                    to="Projects"
                    smooth={true}
                    duration={1000}
                    className="button button-1"
                    onClick={() => setNavbarState("Projects")}
                  >
                    View Work
                  </Scroller>
                  <Link to="/contact" className="button button-2">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={landingSvg} alt="landing svg " />
            </div>
          </div>
          <div className="lower">
            <img src={reactLogo} alt="react-logo" />
            <img src={htmlLogo} alt="html-logo" />
            <img src={cssLogo} alt="css-logo" />
            <img src={sassLogo} alt="sass-logo" />
            <img src={jsLogo} alt="js-logo" />
            <img src={mongoLogo} alt="mongo-logo" />
            <img src={nodeLogo} alt="node-logo" />
          </div>
        </div>
      </div>

  );
};

export default Intro;
