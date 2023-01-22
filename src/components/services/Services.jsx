import React from "react";
import "./services.css";
import { FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Front-end Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I build front-end websites </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I optimize applications for maximum speed.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I collaborate with back-end developers and web designers to improve User Interface. </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I have created Websites By Using MERN Stack</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I like to blend Technologies for Inovation </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Like to Create Software with Professional Touch</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p> I improve user interaction  and customer satisfaction</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I help to boost business growth by improving User Interaction With Software
                
              </p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
