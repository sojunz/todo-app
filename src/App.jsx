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

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* ⭐ header는 layout-container 밖 */}
      <header>
        {isLoggedIn ? (
          <NavigationAuth onLogout={handleLogout} />
        ) : (
          <NavigationGuest />
        )}
      </header>

      {/* ⭐ 가운데 콘텐츠만 감싸는 컨테이너 */}
      <div className="layout-container">
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
      </div>

      {/* ⭐ footer도 layout-container 밖 */}
      <Footer />
    </>
  );
}
