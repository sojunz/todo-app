import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("token", "dummy-token");

    onLogin();

    navigate("/", { replace: true });
  };

  return (
    <section className="auth-page">
      <h2>Sign Up</h2>

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
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </section>
  );
}

