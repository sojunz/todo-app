import { Link } from "react-router-dom";

export default function NavigationGuest() {
  return (
    <nav className="nav-guest">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">Signin</Link></li>
      </ul>
    </nav>
  );
}
