import "./App.css"; // 또는 Navigation.css

import Footer from "./Footer"; // Footer 컴포넌트 불러오기

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationGuest from "./NavigationGuest";
import NavigationAuth from "./NavigationAuth";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import TodoPage from "./TodoPage";
import LoginPage from "./LoginPage";
import SigninPage from "./SigninPage";


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
          {/* 공통 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} /> {/* ✅ Todo 라우트 */}
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

      <Footer /> {/* ✅ 모든 페이지에 공통 Footer */}
    </>
  );
}
