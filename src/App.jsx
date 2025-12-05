import { Link, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import TodoPage from "./TodoPage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <header className="header">
        <nav className="nav">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/todo" className="nav-link">Todo</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <a className="nav-link right" href="https://github.com/sojunz/todo-app" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} SoHyung — Simple, real, and yours.</small>
      </footer>
    </div>
  );
}

