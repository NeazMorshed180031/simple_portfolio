import {React,lazy} from "react";


const Nav = lazy(() => import("./components/nav/Nav"));
const About = lazy(() => import("./components/about/About"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Services = lazy(() => import("./components/services/Services"));
const Projects = lazy(() => import("./components/project/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));



const App = () => {
  return (
    <>
      <About />
      <Projects />
      <Nav />
      <Experience />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
