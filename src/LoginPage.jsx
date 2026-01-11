import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    // 로그인 성공 → token 저장
    localStorage.setItem("token", "dummy-token");

    // 원래 가려던 페이지로 이동
    window.location.href = from;
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
