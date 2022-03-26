import logo from "../pictures/logo1.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { FiChevronDown } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="overlay" onClick={() => setOpen(false)}>
        <div className="img-wrapper">
          <img src={logo} className="logo" alt="Logo" />
        </div>
      </Link>

      <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link
            to="/"
            className={active === 1 ? "nav-link active" : "nav-link"}
            onClick={() => {
              setOpen(false);
              setActive(1);
            }}
          >
            Home
          </Link>
        </li>

        <li
          className="nav-item"
          onClick={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/resources"
            className={active === 2 ? "nav-link active" : "nav-link"}
            onClick={() => {
              setOpen(false);
              setActive(2);
            }}
          >
            Resources
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/events"
            className={active === 3 ? "nav-link active" : "nav-link"}
            onClick={() => {
              setOpen(false);
              setActive(3);
            }}
          >
            Events
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/aboutus"
            className={active === 4 ? "nav-link active" : "nav-link"}
            onClick={() => {
              setOpen(false);
              setActive(4);
            }}
          >
            AboutUs
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/contactus"
            className={active === 5 ? "nav-link active" : "nav-link"}
            onClick={() => {
              setOpen(false);
              setActive(5);
            }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
