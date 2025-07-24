import React, { useEffect } from "react";
import {
  Contact,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
  WorkExperience,
  Volunteer,
} from "./components/index";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = ({ setRenderResume }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full main-app">
      <div className="left-app">
        <Navbar />
      </div>
      <div className="right-app">
        <Header setRenderResume={setRenderResume} />
        <main>
          <WorkExperience />
          <Projects />
          <Skills />
          <Volunteer />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
