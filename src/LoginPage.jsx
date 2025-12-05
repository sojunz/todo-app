export default function LoginPage({ onLogin }) {
    const handleLogin = (e) => {
      e.preventDefault();
      // 여기서는 간단히 버튼 누르면 로그인 성공 처리
      onLogin();
    };
  
    return (
      <main style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </main>
    );
  }
  