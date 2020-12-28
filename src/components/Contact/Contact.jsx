import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.scss";
import { init, sendForm } from "emailjs-com";

import contactSvg from "../../media/contactSvg.svg";
import Navbar from "../Navbar/Navbar";

import { useMediaQuery } from "react-responsive";

init("user_uXmYlg6dwilxaZxDehBkO");

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const isPhone = useMediaQuery({
    query: "(max-device-width: 812px)",
  });

  const onSubmit = (data) => {
    console.log(data);

    sendForm("service_pevt6cb", "template_xyf016h", "#contact-form").then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      {!isPhone && <Navbar inContact={true} />}
      <div className="contact-container">
        <div className="inner">
          <div className="left">
            <div className="text">
              <h1>Let's build something</h1>
              <h1 className="bottom-h1">great together</h1>
              <h3>
                Believe me, <span>I'm your guy</span>
              </h3>
            </div>
            <img src={contactSvg} alt="arms up" />
          </div>
          {isPhone && (
            <div className="hr-container">
              <div className="horizontal-line" />
            </div>
          )}
          <div className="right">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-input-container name-container">
                <h2>
                  Name <span>*</span>
                </h2>
                <input
                  name="name"
                  placeholder="Type name"
                  ref={register({ required: true, maxLength: 20 })}
                />
              </div>
              <div className="form-input-container company-container">
                <h2>
                  Company <span>*</span>
                </h2>
                <input
                  name="company"
                  placeholder="Type company name"
                  ref={register({ required: true, maxLength: 20 })}
                />
              </div>
              <div className="form-input-container phone-container">
                <h2>Phone</h2>
                <input
                  name="phone"
                  placeholder="Type phone number"
                  ref={register}
                />
              </div>
              <div className="form-input-container email-container">
                <h2>
                  Email <span>*</span>
                </h2>
                <input
                  name="email"
                  placeholder="Type email address"
                  type="email"
                  ref={register({ required: true })}
                />
              </div>
              <div className="form-input-container name-container">
                <h2>
                  How can I help? <span>*</span>
                </h2>
                <input
                  name="query"
                  placeholder="A brief description here"
                  ref={register}
                />
              </div>
              <div className="time-slot-container">
                <div className="text-container">
                  <h2>
                    Time <span>*</span>
                  </h2>{" "}
                  <h3>When is a good time to reach you?</h3>
                </div>
                <div className="checkbox-container">
                  <div className="left">
                    <div className="upper"></div>
                    <div className="lower">
                      <h3>AM</h3>
                      <h3>PM</h3>
                    </div>
                  </div>
                  <div className="right">
                    <div className="day monday">
                      <h3>Mon</h3>
                      <input type="checkbox" name="monAM" ref={register} />
                      <input type="checkbox" name="monPM" ref={register} />
                    </div>
                    <div className="day tuesday">
                      <h3>Tues</h3>
                      <input type="checkbox" name="tuesAM" ref={register} />
                      <input type="checkbox" name="tuesPM" ref={register} />
                    </div>
                    <div className="day wednesday">
                      <h3>Wed</h3>
                      <input type="checkbox" name="wedAM" ref={register} />
                      <input type="checkbox" name="wedPM" ref={register} />
                    </div>
                    <div className="day thursday">
                      <h3>Thurs</h3>
                      <input type="checkbox" name="thursAM" ref={register} />
                      <input type="checkbox" name="thursPM" ref={register} />
                    </div>
                    <div className="day friday">
                      <h3>Fri</h3>
                      <input type="checkbox" name="friAM" ref={register} />
                      <input type="checkbox" name="friPM" ref={register} />
                    </div>
                    <div className="day saturday">
                      <h3>Sat</h3>
                      <input type="checkbox" name="satAM" ref={register} />
                      <input type="checkbox" name="satPM" ref={register} />
                    </div>
                  </div>
                </div>
              </div>

              <input
                className="submit-button"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
