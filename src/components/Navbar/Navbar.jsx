import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Bio, navLinks } from "../../constants";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (navID) => {
    setActiveLink(navID);
  };
  return (
    <div
      id="navbar"
      className="navbar w-1/5 top-0 bottom-0 min-h-screen fixed p-4"
    >
        <nav className="w-full h-full flex flex-col justify-between items-center py-2">
          <div className="my-name-nav-container text-slate-100 text-2xl font-bold pt-7">
          <NavLink 
          to='#about' 
          scroll={(el) => el.scrollIntoView({behavior: "smooth", block: "start"})}
           >
            {`${Bio.firstName} ${Bio.lastName}`}
          </NavLink>
          </div>
          <ul className="nav-links-container flex flex-col justify-center items-center gap-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`nav-link text-xl p-4 m-4 text-gray-400 font-semibold ${
                  activeLink === nav.id ? "activeLink" : ""
                }`}
                onClick={() => handleNavClick(nav.id)}
              >
                <NavLink
                  to={`#${nav.id}`}
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;
