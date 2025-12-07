import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationGuest from "./NavigationGuest";
import NavigationAuth from "./NavigationAuth";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import TodoPage from "./TodoPage";
import LoginPage from "./LoginPage";
import SigninPage from "./SigninPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <header>
        {isLoggedIn ? (
          <NavigationAuth onLogout={handleLogout} />
        ) : (
          <NavigationGuest />
        )}
      </header>

      <main>
        <Routes>
          {/* 공통 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 게스트 전용 */}
          {!isLoggedIn && (
            <>
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/signin" element={<SigninPage onLogin={handleLogin} />} />
            </>
          )}

          {/* 로그인 전용 */}
          {isLoggedIn && (
            <>
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </>
          )}
        </Routes>
      </main>
    </Router>
  );
}
