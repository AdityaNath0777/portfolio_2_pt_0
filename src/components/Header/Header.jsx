import React from "react";
import { Navbar, About } from "../index";

const Header = ({setRenderResume}) => {
  return (
    <header>
      {/* <Navbar /> */}
      <About setRenderResume = {setRenderResume} />
    </header>
  );
};

export default Header;
