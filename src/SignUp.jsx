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
    <section style={{ maxWidth: "400px", margin: "0 auto", padding: "3rem 1rem" }}>
      <p style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Get started</p>
      <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#111", marginBottom: "2rem" }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.85rem", color: "#555" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ borderRadius: "8px" }}
          />
        </div>
        <button type="submit" className="add-btn" style={{ marginTop: "0.5rem" }}>
          Sign Up
        </button>
        <p style={{ textAlign: "center", fontSize: "0.85rem", color: "#aaa" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#111", fontWeight: "600" }}>Login</a>
        </p>
      </form>
    </section>
  );
}