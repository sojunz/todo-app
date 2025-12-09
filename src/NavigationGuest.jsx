import { Link } from "react-router-dom";
import "./Navigation.css";

export default function NavigationGuest() {
  return (
    <nav className="nav-bar nav-guest">
      <div>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link> {/* ✅ Todo 링크 추가 */}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signin">Signin</Link>
      </div>
    </nav>
  );
}
