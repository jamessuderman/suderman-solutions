import { useState, useEffect } from "react";
import { FaS } from "react-icons/fa6";

export default function Navbar() {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
    let newScrollYPosition = window.scrollY;
    setScrollYPosition(newScrollYPosition);

    if (scrollYPosition <= 1 || newScrollYPosition <= 1) {
      let navbar = document.getElementById("navbar");
      navbar.classList.toggle("navbar-scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="navbar" className="navbar-container">
      <div className="navbar-item">
        <FaS className="navbar-icon" />
        <span className="navbar-brand-main">Suderman</span>
        <span className="navbar-brand-sub">:Solutions</span>
      </div>

      <div className="navbar-item">
        <span className="nav-item">Home</span>
        <span className="nav-item">About</span>
        <span className="nav-item">Technologies</span>
        <span className="nav-item">Services</span>
        <span className="nav-item">Contact</span>
      </div>
    </div>
  );
}
