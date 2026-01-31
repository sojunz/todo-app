import "./App.css";

import Footer from "./Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import NavigationGuest from "./NavigationGuest";
import NavigationAuth from "./NavigationAuth";

import HomePage from "./HomePage";
import AuthHomePage from "./AuthHomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import TodoPage from "./TodoPage";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import ContactSentPage from "./ContactSentPage";
import SavePage from "./SavePage";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ⭐ 앱이 처음 로드될 때 token 읽기
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // ⭐ LoginPage에서 호출할 함수
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="layout-container">
      <header>
        {isLoggedIn ? (
          <NavigationAuth onLogout={handleLogout} />
        ) : (
          <NavigationGuest />
        )}
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <AuthHomePage /> : <HomePage />}
          />

          <Route path="/todo" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/sent" element={<ContactSentPage />} />

          <Route
            path="/save"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />

          <Route path="/signUp" element={<SignUp />} />

          <Route
            path="/profile"
            element={
              isLoggedIn ? <ProfilePage /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/settings"
            element={
              isLoggedIn ? <SettingsPage /> : <Navigate to="/login" replace />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
