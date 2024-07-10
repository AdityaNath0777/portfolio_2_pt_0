import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <Router>
        <nav>
          <ul className="nav-links-container ml-auto flex w-3/6 justify-end items-center gap-2">
            {navLinks.map((nav) => (
              <li className="nav-link">
                <NavLink to={nav.id}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Router>
    </div>
  );
};

export default Navbar;
