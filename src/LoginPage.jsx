export default function LoginPage({ onLogin }) {
  return (
    <section className="login-page">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="••••••••" required />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </section>
  );
}
