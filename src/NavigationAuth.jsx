import { Link } from "react-router-dom";

export default function NavigationAuth({ onLogout }) {
  return (
    <nav className="nav-auth">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
