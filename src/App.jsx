import "./App.css";

import Footer from "./Footer";

import { Routes, Route, Navigate } from "react-router-dom";

import NavigationGuest from "./NavigationGuest";
import NavigationAuth from "./NavigationAuth";

import HomePage from "./HomePage";
import AuthHomePage from "./AuthHomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import TodoPage from "./TodoPage";
import LoginPage from "./LoginPage";
import SigninPage from "./SigninPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import ContactSentPage from "./ContactSentPage";
import SavePage from "./SavePage";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  // ⭐ 로그인 여부는 token 하나로만 판단
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  // ⭐ 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <header>
        {isLoggedIn ? (
          <NavigationAuth onLogout={handleLogout} />
        ) : (
          <NavigationGuest />
        )}
      </header>

      <main>
        <Routes>
          {/* 홈 */}
          <Route
            path="/"
            element={isLoggedIn ? <AuthHomePage /> : <HomePage />}
          />

          {/* 공통 라우트 */}
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/sent" element={<ContactSentPage />} />

          {/* ⭐ SavePage 보호 */}
          <Route
            path="/save"
            element={
              <ProtectedRoute>
                <SavePage />
              </ProtectedRoute>
            }
          />

          {/* 로그인 */}
      {/* 로그인 */} <Route path="/login" element={<LoginPage />} />

          {/* 회원가입 */} <Route path="/signin" element={<SigninPage />} />

          {/* 로그인 전용 페이지 */}
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

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

