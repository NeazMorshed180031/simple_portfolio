import React from "react";
import "./project.css";
import IMG1 from "../../assets/Capture1.JPG";
import IMG2 from "../../assets/Capture2.JPG";
import IMG3 from "../../assets/Capture3.JPG";
import IMG4 from "../../assets/Capture4.JPG";
import IMG5 from "../../assets/Capture5.JPG";
import IMG6 from "../../assets/Capture7.JPG";
import IMG7 from "../../assets/Capture8.jpg";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce Website By MERN Stack",
    github: "https://github.com/NeazMorshed180031/MERN_E_Commerce",
    demo: "https://laptopify.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Burger Builder and Order By React",
    github: "https://github.com/NeazMorshed180031/Burger-Builder",
    demo: "https://deliciousburgerapp.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Airbnb Clone By React        ",
    github: "https://github.com/NeazMorshed180031/Airbnb-Clone-React",
    demo: "https://airbnb-clone-react-app.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "My Memory App By MERN Stack",
    github: "https://github.com/NeazMorshed180031/memory_app",
    demo: "https://ownmemoriesapp.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Frontend Of Admin Dashboard",
    github: "https://github.com/NeazMorshed180031/admin_dashboard",
    demo: "https://admindashboardbyreact.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Scientific Calculator By Java",
    github: "https://github.com/NeazMorshed180031/Scientific-Calculator",
  },
  {
    id: 7,
    image: IMG7,
    title: "Personal Information Management Tool or Java Dictionary",
    github: "https://github.com/NeazMorshed180031/Java-Dictionary",
  },
];
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
