import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import "./About.scss";

import bookSvg from "../../media/bookSvg.svg";
import bioSvg from "../../media/bioSvg.svg";
import heartSvg from "../../media/heartSvg.svg";

export const About = ({ setNavbarState }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setNavbarState("About");
    } else {
    }
  }, [inView, setNavbarState]);

  const aboutMap = [
    {
      svg: bookSvg,
      title: "Education",
      text1:
        "Graduating from Temple University as a Biochemistry major has been one of the most eye-opening and self-fortifying experience of my life.",
      text2:
        "My time there has engraved the deepest understanding of self-discipline and resilience. More importantly, the strenuous and demanding field of study has helped me find my love for critical thinking and problem solving."
  
    },
    {
      svg: bioSvg,
      title: "Experience",
      text1:
        "As an individual who had always been intrigued by the health field, I've had a handful of work experiences in many different positions.",
      text2:
        "I was fortunate enough to work along side by side with some of the most wonderful pharmacists, doctors, researchers, and teachers. Through my experiences of working as a pharmacist tech, medical assistant, biomanufacturing associate, and a teacher, I've come to realize that detail-orientation, patience, and teamwork are the traits that propels businesses toward success."
 
    },
    {
      svg: heartSvg,
      title: "Passion",
      text1: "One of the strongest qualities I hold is my competitiveness and I firmly believe it is this quality that shaped who I am.",
      text2: "Whether it be playing basketball, drums, teaching, working out, or programming, I always hold myself to high standards. To me, embodying competitiveness doesn't mean to always try to be better than someone else. Rather, it's to fight the tendency to stay mediocre. It is to becoming a better person everyday regardless of the task at hand."

    },
  ];

  return (
    <div ref={ref} className="about-container" name="About">
      <div className="inner">
        <div className="text">
          <h2>About</h2>
        </div>
        <div className="content-container">
            {aboutMap.map((item, index) => {
                return <div className='about-card' key={index}>
                    <div className='img-container'><img src={item.svg} alt={item.title} /></div>
                    <div className='text-container'>
                        <h2>{item.title}</h2>
                        <p>{item.text1}</p>
                        <p>{item.text2}</p>
                    </div>
                </div>
            })}
        </div>
      </div>
    </div>
  );
};
