import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function NavigationAuth({ onLogout }) {
  return (
    <nav className="nav-bar nav-auth">
      <ul className="nav-bar">
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
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
            Settings
          </NavLink>
        </li>
        <li>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
}
