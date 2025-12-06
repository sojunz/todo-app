import "./App.css"; // 꼭 있어야 함
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import TodoPage from "./TodoPage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import LoginPage from "./LoginPage.jsx";
import SigninPage from "./SigninPage.jsx";

export default function App() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signin">Signup</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  );
}
