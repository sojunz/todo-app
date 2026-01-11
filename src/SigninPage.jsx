import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 회원가입 성공 → token 저장
    localStorage.setItem("token", "dummy-token");

    // 로그인 페이지로 이동
    navigate("/login");
  };

  return (
    <section className="auth-page">
      <h2>Sign In</h2>

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
          <button type="submit">Join</button>
        </div>
      </form>
    </section>
  );
}
