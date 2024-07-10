import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Bio, navLinks } from "../../constants";
import "./navbar.css";

const Navbar = () => {
  const handleNavClick = (e) => {
    const navList = Array.from(document.getElementsByClassName("nav-link"));

    navList.forEach((nav) => {
      nav.classList.remove("activeLink");
    });

    e.target.parentElement.classList.add("activeLink");
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
              <li className="nav-link text-xl text-gray-400 font-semibold">
                <NavLink to={nav.id} onClick={(e) => handleNavClick(e)}>
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Router>
    </div>
  );
};

export default Navbar;
