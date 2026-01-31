import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⭐ 실제 서버 로그인 대신 dummy token 저장
    localStorage.setItem("token", "dummy-token");

    // ⭐ App.jsx에게 로그인 성공 알림
    onLogin();

    // ⭐ 로그인 후 이동
    navigate(from, { replace: true });
  };

  return (
    <section className="auth-page">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group half">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group half">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

