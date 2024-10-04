import React from "react";
import "./Header.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="name">
        Mukh1ddinov's site
      </a>
      <ul>
        <li>
          <a href="/">About</a>
        </li>

        <li>
          <a href="/">Services</a>
        </li>

        <li>
          <a href="/">Projects</a>
        </li>

        <li>
          <a href="/">Blog</a>
        </li>

        <li className="icon">
          <a href="/">Book a call</a>
          <FaLongArrowAltRight className="right-icon"/>
        </li>
      </ul>
    </header>
  );
};

export default Header;
