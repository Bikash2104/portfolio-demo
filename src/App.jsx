import React from "react";
import { Icon } from "@iconify/react";
import Navbar from "./Navbar/Navbar";
import "./App.scss";
import profileImg from "./assets/Bikash-image.jpeg";
import resume from "./assets/Bikash-Baliarsingh-Resume(React Developer).pdf";
import video from "./assets/Video.mp4";
import Html from "./assets/Html.jpg";
import Css from "./assets/css.png";
import Javascript from "./assets/javascript.png";
import { FaDownload, FaPlay, FaDatabase } from "react-icons/fa";
import { TextField, Button } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

import {
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaGooglePlusG,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
const App = () => {
  return (
    <div className="portfolio">
      <Navbar />
      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              HI, I'M{" "}
              <span className="highlight">
                <Typewriter
                  words={["Bikash Baliarsingh"]}
                  loop={1}
                  // cursor
                  // cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h2 className="subtitle">
              <Typewriter
                words={["MERN Stack Developer"]}
                loop={1}
                // cursor
                // cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p>
              I am a <strong>MERN Stack Developer</strong> with{" "}
              <strong>7 months of professional experience</strong>, currently
              working at <strong>Acintyo Tech Pvt. Ltd.</strong>. My primary
              focus is on
              <strong>frontend development using React.js</strong>, where I
              build <strong>clean, scalable, and responsive</strong> web
              applications. I have worked on{" "}
              <strong>multiple real-time projects</strong>, contributing to both
              <strong>new feature development</strong> and{" "}
              <strong>enhancements in existing applications</strong>.
            </p>

            <div className="hero-buttons">
              <a href={resume} target="_blank" className="btn primary" download>
                <FaDownload /> Download CV
              </a>
              <a href={video} target="_blank" className="btn outline">
                <FaPlay /> Watch The Video
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hex-frame">
              <img src={profileImg} alt="Profile" />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h2>About Me</h2>
            <p>
              I’m a frontend developer with 7 months of professional experience
              at <strong>Acintyo Tech Pvt. Ltd.</strong>, working primarily with{" "}
              <strong>React.js</strong> and modern UI libraries. I specialize in
              building scalable, maintainable, and performance-optimized web
              interfaces.
            </p>
            <p>
              I’ve worked end-to-end on two major projects —{" "}
              <strong>DocMatrix</strong> (a healthcare management platform) and
              a <strong>Fintech loan application</strong>. Additionally, I
              contributed to an existing{" "}
              <strong>B2B medicine supply chain platform</strong>, where I was
              responsible for migrating the Super Admin module from Angular to
              React.
            </p>
            <p>
              My daily tech stack includes{" "}
              <strong>
                React.js, Redux, React Hook Form, Yup, Material-UI (MUI), Axios,
              </strong>{" "}
              and integration with <strong>REST APIs</strong>. I focus on
              creating dynamic forms, reusable components, and seamless user
              experiences.
            </p>
            <p>
              I’m passionate about clean code, component reusability, and
              continuously improving frontend workflows. Outside of work, I
              enjoy exploring animation libraries, custom hooks, and staying up
              to date with the React ecosystem.
            </p>
          </div>
          <div className="about-image">
            <Icon
              icon="vscode-icons:file-type-reactjs"
              width="380"
              height="400"
            />
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-outer-container">
          <div className="skills-container">
            <div className="skill-card">
              <h3>Front End Skills</h3>
              <div className="icons">
                <div className="icon-block">
                  <Icon icon="logos:html-5" width="36" height="41" />
                  <p>HTML5</p>
                </div>
                <div className="icon-block">
                  <Icon icon="logos:css-3" width="36" height="41" />
                  <p>CSS3</p>
                </div>
                <div className="icon-block">
                  <Icon icon="devicon:bootstrap" width="41" height="41" />{" "}
                  <p>Bootstrap</p>
                </div>
                <div className="icon-block">
                  <Icon icon="logos:sass" width="41" height="41" /> <p>SASS</p>
                </div>
                <div className="icon-block">
                  <Icon icon="logos:less" width="41" height="41" /> <p>LESS</p>
                </div>
                <div className="icon-block">
                  <Icon icon="skill-icons:typescript" width="41" height="41" />
                  <p>TypeScript</p>
                </div>
                <div className="icon-block">
                  <Icon icon="devicon:jquery" width="41" height="41" />
                  <p>JQuery</p>
                </div>

                <div className="icon-block">
                  <Icon icon="skill-icons:javascript" width="36" height="41" />{" "}
                  <p>Javascript</p>
                </div>
                <div className="icon-block">
                  <Icon
                    icon="vscode-icons:file-type-reactjs"
                    width="36"
                    height="41"
                  />{" "}
                  <p>React js</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <div className="skill-card">
              <h3>Back End Skills</h3>
              <div className="icons">
                <div className="icon-block">
                  <Icon icon="devicon:nodejs-wordmark" width="45" height="45" />{" "}
                  <p>Node Js</p>
                </div>
                <div className="icon-block">
                  <Icon
                    icon="skill-icons:expressjs-dark"
                    width="41"
                    height="41"
                  />{" "}
                  <p>Express Js</p>
                </div>
                <div className="icon-block">
                  <Icon icon="logos:mongodb-icon" width="41" height="41" />{" "}
                  <p>Mongo DB</p>
                </div>
                <div className="icon-block">
                  <FaDatabase size={50} color="#f29111" />
                  <p>My SQL</p>
                </div>
                <div className="icon-block">
                  <Icon icon="devicon:postman" width="41" height="41" />{" "}
                  <p>PostMan</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="skills-container">
            <div className="skill-card">
              <h3>Programming Languages</h3>
              <div className="icons">
                <div className="icon-block">
                  <Icon icon="devicon:postman" width="41" height="41" />{" "}
                  <p>PostMan</p>
                </div>
                <div className="icon-block">
                  <Icon icon="logos:css-3" width="36" height="41" />
                  <p>CSS3</p>
                </div>
                <div className="icon-block">
                  <Icon icon="skill-icons:javascript" width="36" height="41" />{" "}
                  <p>Javascript</p>
                </div>
                <div className="icon-block">
                  <Icon
                    icon="vscode-icons:file-type-reactjs"
                    width="36"
                    height="41"
                  />{" "}
                  <p>React js</p>
                </div>
                <div className="icon-block">
                  <Icon
                    icon="vscode-icons:file-type-reactjs"
                    width="36"
                    height="41"
                  />{" "}
                  <p>React js</p>
                </div>
                <div className="icon-block">
                  <Icon
                    icon="vscode-icons:file-type-reactjs"
                    width="36"
                    height="41"
                  />{" "}
                  <p>React js</p>
                </div>
                <div className="icon-block">
                  <Icon
                    icon="vscode-icons:file-type-reactjs"
                    width="36"
                    height="41"
                  />{" "}
                  <p>React js</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* PROJECTS SECTION */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>B2B Medicine Supply Chain Management Platform</h3>
            <p>
              A robust, multi-role web platform designed for seamless medicine
              distribution across suppliers, retailers, and local medical shops
              via a rider network. The system streamlines procurement, delivery,
              and operational management through three key modules:
            </p>
            <p>
              <strong>Supplier Admin Panel:</strong>
            </p>
            <p>
              Manages medicine inventory, pricing, order tracking, and rider
              dispatches. Handles batch management, expiry monitoring, and
              real-time availability updates to retailers.
            </p>
            <p>
              <strong>Retailer Admin Panel:</strong>
            </p>
            <p>
              Oversees procurement from suppliers and delivery to local
              pharmacies. Tracks order history, stock levels, returns, and
              coordinates with riders for smooth last-mile delivery.
            </p>
            <p>
              <strong>Super Admin Panel:</strong>
            </p>
            <p>
              Maintains end-to-end business oversight including account
              management, finance tracking, operations monitoring, and sales
              support. Controls access across supplier and retailer networks and
              configures master settings and operational workflows.
            </p>
          </div>

          <div className="project-card">
            <h3>DocMatrix – Hospital & Healthcare Management Platform</h3>
            <p>
              DocMatrix is a scalable, multi-tenant healthcare management
              platform built to bridge the operational gap between hospitals,
              doctors, and patients. The system enables digital onboarding,
              content publishing, patient engagement, and financial oversight.
              It is divided into two major modules:
            </p>
            <p>
              <strong>Super Admin Panel:</strong>
            </p>
            <p>
              Manages onboarding and lifecycle of hospitals across the
              platform.Maintains master configurations like specializations,
              departments, and roles.Controls subscription management, marketing
              tool setup, and hospital access rights.
            </p>
            <p>
              <strong>Hospital Admin Panel:</strong>
            </p>
            <p>
              Facilitates doctor onboarding, profile setup, and availability
              management.Enables publishing of health articles and videos for
              patient education.Manages complete patient appointment lifecycle
              including booking, rescheduling, and status tracking.
            </p>
          </div>
          <div className="project-card">
            <h3>Fintech Loan Management Platform</h3>
            <p>
              A secure, scalable loan management system designed for financial
              institutions to manage company-level partnerships and
              employee-based loan applications. The platform supports digital
              onboarding, subscription-based access, and loan lifecycle
              tracking. It is divided into two main modules:
            </p>
            <p>
              <strong>Super Admin Panel:</strong>
            </p>
            <p>
              Manages onboarding and approval of companies eligible for loan
              services. Handles the master configuration section including loan
              types, interest rates, document requirements, and eligibility
              rules. Controls subscription plans and provides access to
              platform-wide analytics, audit logs, and usage tracking.
            </p>
            <p>
              <strong>Company Admin Panel:</strong>
            </p>
            <p>
              Enables partner companies to onboard employees and manage their
              loan applications submitted through the mobile app. Tracks loan
              status including verification, approval, and disbursement stages.
              Offers dashboards for monitoring application volume, approval
              ratios, EMI schedules, and repayment tracking.
            </p>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION */}

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="left">
            <h2>Getting in touch is easy!</h2>
            {/* <p>
              {" "}
              <FaMapMarkerAlt />
              Hyderabad, India
            </p> */}
            <p>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.google.com/maps?q=Ameerpet,+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaMapMarkerAlt /> Ameerpet, Hyderabad
              </a>
            </p>
            <p>
              <FaPhoneAlt />{" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="tel:+917894555416"
              >
                +91 7894555416
              </a>
            </p>
            <p>
              <FaEnvelope />{" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="mailto:bikashsingh2104@gmail.com"
              >
                bikashsingh2104@gmail.com
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/bikashbaliarsingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/bikash2104"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              {/* <FaFacebookF />
              <FaTwitter />
              <FaGooglePlusG /> */}
            </div>
          </div>
          <div className="right">
            <p className="subtitle">A simple title prefix:</p>
            <h1>SEND ME A MESSAGE</h1>

            <form className="mui-contact-form">
              <TextField
                className="form-field"
                variant="outlined"
                label="Your Name"
                fullWidth
              />
              <TextField
                className="form-field"
                variant="outlined"
                label="Your Email"
                type="email"
                fullWidth
              />
              <TextField
                className="form-field"
                variant="outlined"
                label="Write us about any project. We’d love to work with you!"
                multiline
                rows={4}
                fullWidth
              />
              <Button variant="contained" color="primary" type="submit">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
