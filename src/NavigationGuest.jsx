import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function NavigationGuest() {
  return (
    <nav className="nav-bar nav-guest">
      <ul className="nav-bar">
      <img src="/Logo.png" alt="Logo" className="logo" />
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" className={({ isActive }) => (isActive ? "active" : "")}>
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signUp" className={({ isActive }) => (isActive ? "active" : "")}>
            Signin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}