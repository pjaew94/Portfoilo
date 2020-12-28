import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import "./Projects.scss";

import pizzaAppOne from "../../media/pizzaAppOne.png";
import pizzaAppTwo from "../../media/pizzaAppTwo.png";
import jlcAppOne from "../../media/jlcAppOne.png";
import nbaAppOne from "../../media/nbaAppOne.png";

export const Projects = ({ setNavbarState }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setNavbarState("Projects");
    } else {
    }
  }, [inView, setNavbarState]);

  return (
    <>
      <div ref={ref} className="projects-container" name="Projects">
        <div className="inner">
          <div className="message">
            <h1>Projects</h1>
            <p>
              The following applications are built with great attention to
              detail and the latest technologies including React, Redux, Sass,
              MongoDB and Express.{" "}
            </p>
          </div>

          <div className="project-container">
            <div className="project pizza-project">
              <div className="left">
                <img
                  className="img-1"
                  src={pizzaAppTwo}
                  alt="pizza app img 2"
                />
                <img
                  className="img-2"
                  src={pizzaAppOne}
                  alt="pizza app img 1"
                />
              </div>
              <div className="right">
                <div className="text">
                  <h2>Food Delivery App</h2>
                  <p>
                    The following product is a mobile concept application. Users
                    are able to input their delivery location or choose pick up
                    if desired. Payments are process through PayPal or with
                    credit/debit card.
                  </p>
                  <p>
                    Technologies used to create this application include React
                    coupled with Scss for styling, Express.js for backend, Redux
                    for global state management, and MongoDB for storing string
                    related data paired with Amazon S3 to store images.
                  </p>
                </div>
                <div className="a-link-container">
                  <a
                    href="https://jaespizzeria.herokuapp.com/menu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="project jlc-project">
              <div className="left">
                <div className="text">
                  <h2>JLC Studies</h2>
                  <p>
                    <span className="underline">JLC Studies</span> is a platform
                    where our Jesus Love Church Saturday School teachers can
                    post homework assignments and comments based on their field.
                    Students are able to see the posts and comment any questions
                    they may have during the week. The application also suggests
                    helpful tools for students' use.
                  </p>
                  <p>
                    <span className="astrix">*</span> To use, login with
                    Admin@gmail.com | admin123
                  </p>
                  <p>
                    Technologies used to create this application include React
                    coupled with Scss for styling, Express.js for backend, Redux
                    for global state management, and MongoDB for storing all
                    data required for this application.
                  </p>
                </div>
                <div className="a-link-container">
                  <a
                    href="https://powerful-chamber-64660.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="right">
                <img className="img-2" src={jlcAppOne} alt="jlc app img 2" />
              </div>
            </div>
            <div className="project nba-project">
              <div className="left">
                <img className="img-2" src={nbaAppOne} alt="pizza app img 1" />
              </div>
              <div className="right">
                <div className="text">
                  <h2>NumbersBA</h2>
                  <p>
                    <span>NumbersBA</span> is an analytical application that is
                    built around NBA players statistics. The product provides
                    player-to-player comparisons for all those passionate fans
                    who likes comparing NBA players all the time.
                  </p>
                  <p>
                    The following application utilizes React coupled with Scss
                    for functionality and styling respectively. It uses a third
                    party API provided by{" "}
                    <a
                      href="https://www.mysportsfeeds.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      MySportsFeeds
                    </a>{" "}
                    for the data .
                  </p>
                </div>
                <div className="a-link-container">
                  <div className="disabled-button">In Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hr-container">
        <div className="horizontal-line" />
      </div>
    </>
  );
};
