import "./App.css";

import Footer from "./Footer";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationGuest from "./NavigationGuest";
import NavigationAuth from "./NavigationAuth";

import HomePage from "./HomePage";          // Guest Home
import AuthHomePage from "./AuthHomePage";  // ⭐ 로그인 후 홈 (새로 추가 필요)
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import TodoPage from "./TodoPage";
import LoginPage from "./LoginPage";
import SigninPage from "./SigninPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import ContactSentPage from "./ContactSentPage";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

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
          {/* ⭐ 홈 라우트: 로그인 여부에 따라 다르게 */}
          <Route
            path="/"
            element={isLoggedIn ? <AuthHomePage /> : <HomePage />}
          />

          {/* 공통 라우트 */}
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/sent" element={<ContactSentPage />} />


          {/* 게스트 전용 라우트 */}
          {!isLoggedIn && (
            <>
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/signin" element={<SigninPage onLogin={handleLogin} />} />
            </>
          )}

          {/* 로그인 전용 라우트 */}
          {isLoggedIn && (
            <>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </>
          )}
        </Routes>
      </main>

      <Footer />
    </>
  );
}
