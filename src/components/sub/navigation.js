import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/portfolio'); 

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen ? (
        <button className="hamburger" onClick={toggleNavigation}>
          &#9776;
        </button>
      ) : null}
      <nav className={`menu ${isOpen ? "show" : ""}`}>
        {isOpen ? (
          <button className="close" onClick={toggleNavigation}>
            X
          </button>
        ) : null}
        <ul>
          <li>
            <Link to="/portfolio" className={activeLink === '/portfolio' ? 'active' : ''} onClick={() => setActiveLink('/portfolio')}>Portfolio</Link>
          </li>
          <li>
            <Link to="/resume" className={activeLink === '/resume' ? 'active' : ''} onClick={() => setActiveLink('/resume')}>Resume</Link>
          </li>
          <li>
            <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''} onClick={() => setActiveLink('/contact')}>Contacts</Link>
          </li>
          <li>
            <Link to="/about" className={activeLink === '/about' ? 'active' : ''} onClick={() => setActiveLink('/about')}>About me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;