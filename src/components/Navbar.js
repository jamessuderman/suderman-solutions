import { FaS } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="navbar-container">
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
