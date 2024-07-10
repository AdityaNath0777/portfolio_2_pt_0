import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Bio, navLinks } from "../../constants";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (navID) => {
    setActiveLink(navID);
  };
  return (
    <div id="navbar" className="navbar py-4">
      <Router>
        <nav className="flex justify-between items-center">
          <div className="my-name-nav-container text-2xl font-bold">
            {`${Bio.firstName} ${Bio.lastName}`}
          </div>
          <ul className="nav-links-container ml-auto flex w-3/6 justify-end items-center gap-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`nav-link text-xl text-gray-400 font-semibold ${
                  activeLink === nav.id ? "activeLink" : ""
                }`}
                onClick={() => handleNavClick(nav.id)}
              >
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
