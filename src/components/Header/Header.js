import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState("");

  const discoverActive = active === "discover" ? "discAct" : "";
  const serviceActive = active === "services" ? "sercAct" : "";
  const aboutActive = active === "about" ? "aboutAct" : "";

  return (
    <header>
      <ul className="header-brand--container">
        <li>
          <Link to="/" onClick={() => setActive("")}>Brisphere</Link>
        </li>
      </ul>
      <ul className="header-nav-links--container">
        <li className={`${discoverActive}`} onClick={() => setActive("discover")}>
          <Link to="/discover">Discover</Link>
        </li>
        <li className={`${serviceActive}`} onClick={() => setActive("services")}>
          <Link to="/services">Services</Link>
        </li>
        <li className={`${aboutActive}`} onClick={() => setActive("about")}>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
