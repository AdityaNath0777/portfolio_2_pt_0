import React from "react";
import {
  Contact,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
  Work,
} from "./components/index";
const Portfolio = ({ setRenderResume }) => {
  return (
    <div className="w-full">
      <div className="w-1/5 mr-auto left-app">
        <Navbar />
      </div>
      <div className="w-4/5 ml-auto right-app">
        <Header setRenderResume={setRenderResume} />
        <main>
          <Work />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
