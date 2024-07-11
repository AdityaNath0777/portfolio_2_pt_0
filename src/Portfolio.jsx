import React from "react";
import {
  Contact,
  Footer,
  Header,
  Projects,
  Skills,
  Work,
} from "./components/index";
const Portfolio = ({setRenderResume}) => {
  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <Header setRenderResume = {setRenderResume} />
      <main>
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
