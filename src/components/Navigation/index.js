import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  const handleClick = (e) => {
    setCurrentPage(e.target.pathname.split("/")[1]);
  };
  const [currentPage, setCurrentPage] = useState("about");

  return (
    <div>
      <div className="navbar-fixed">
        <nav className="bg-primary">
          <div className="nav-wrapper container">
            <Link to="/about" className="brand-logo">
              Jake Pasternak
            </Link>
            <a href="#" data-target="mobile-menu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li
                className={currentPage === "about" ? "active" : ""}
                id="aboutMeNav"
              >
                <Link to="/about" onClick={handleClick}>
                  About Me
                </Link>
              </li>
              <li
                className={currentPage === "projects" ? "active" : ""}
                id="projectsNav"
              >
                <Link to="/projects" onClick={handleClick}>
                  Projects
                </Link>
              </li>
              <li
                className={currentPage === "resume" ? "active" : ""}
                id="resumeNav"
              >
                <Link to="/resume" onClick={handleClick}>
                  Résumé
                </Link>
              </li>
              <li
                className={currentPage === "contact" ? "active" : ""}
                id="contactNav"
              >
                <Link to="/contact" onClick={handleClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-menu">
        <li
          className={currentPage === "about" ? "active" : ""}
          id="aboutNavMobile"
        >
          <Link to="/about" onClick={handleClick}>
            About Me
          </Link>
        </li>
        <li
          className={currentPage === "projects" ? "active" : ""}
          id="projectsNavMobile"
        >
          <Link to="/projects" onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li
          className={currentPage === "resume" ? "active" : ""}
          id="resumeNavMobile"
        >
          <Link to="/resume" onClick={handleClick}>
            Résumé
          </Link>
        </li>
        <li
          className={currentPage === "contact" ? "active" : ""}
          id="contactNavMobile"
        >
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
