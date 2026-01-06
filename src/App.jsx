import "./App.css";

import Footer from "./Footer";

import { useState } from "react";
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

export default function App() {
  // ⭐ 로그인 상태를 localStorage에서 불러오기
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
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
          {/* ⭐ 홈: 로그인 여부에 따라 다르게 */}
          <Route
            path="/"
            element={isLoggedIn ? <AuthHomePage /> : <HomePage />}
          />

          {/* 공통 라우트 */}
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/sent" element={<ContactSentPage />} />
          <Route path="/save" element={<SavePage />} />

          {/* ⭐ 로그인/회원가입 라우트: 로그인 상태에서도 접근 가능하지만 자동 리다이렉트 */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/signin"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <SigninPage onLogin={handleLogin} />
              )
            }
          />

          {/* 로그인 전용 라우트 */}
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

          {/* 존재하지 않는 경로 처리 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
