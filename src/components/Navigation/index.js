import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="bg-primary">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              Jake Pasternak
            </a>
            <a href="#" data-target="mobile-menu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li id="aboutMeNav">
                <Link to="/about">About Me</Link>
              </li>
              <li id="projectsNav">
                <Link to="/projects">Projects</Link>
              </li>
              <li id="resumeNav">
                <Link to="/resume">Résumé</Link>
              </li>
              <li id="contactNav">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-menu">
        <li id="projectsNavMobile">
          <Link to="/projects">Projects</Link>
        </li>
        <li id="resumeNavMobile">
          <Link to="/resume">Résumé</Link>
        </li>
        <li id="contactNavMobile">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
