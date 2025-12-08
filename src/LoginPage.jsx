
export default function LoginPage({ onLogin }) {
  return (
    <section className="auth-page"> {/* 여기 수정! */}
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div>
          <label>Email</label>
          <input type="email"  required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button> {/* 버튼 클래스는 없어도 스타일 적용됨 */}
      </form>
    </section>
  );
}
