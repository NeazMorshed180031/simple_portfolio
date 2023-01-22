import React from "react";
import "./about.css";
import Me from "../../assets/me-2.jpg";
import { FaAward, FaCertificate, FaFolder } from "react-icons/fa";
import Certificate from '../../assets/Certificates.zip';
import CV from "../../assets/Resume.pdf";
const About = () => {
  return (
    <section id="about">
      <h5>Hello I'm</h5>
      <h2>Md. Neaz Morshed</h2>
      <div className="cta">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Contact Me
        </a>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6 Month Academic Internship</small>
            </article>
            
            <article className="about_card">
            <a href={Certificate} download >
              <FaCertificate className="about_icon" />
              <h5>Download</h5>
              <h5>Certificates</h5>
              <h5>6+</h5>
              </a>
            </article>
           
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>15+ projects completed</small>
            </article>
          </div>
          <p>
            I’m a Front-end developer, who enjoys building
            interactive interfaces with React-Redux,Material-UI and React-Bootsrap.
            <br />
            <br />
            I have also Created few Projects By Using MERN stack.
            <br />
            <br />
            I'm open to Full-stack(remote/onsite) opportunities with a passion
            of Front-end development. If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
          <a href="#project" className="btn btn-primary">
            {" "}
            See my projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
